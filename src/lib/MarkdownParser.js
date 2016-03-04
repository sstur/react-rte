/**
 * Ported from:
 *   https://github.com/chjj/marked/blob/49b7eaca/lib/marked.js
 * TODO:
 *   Use ES6 classes
 *   Add flow annotations
 */
/* eslint-disable no-spaced-func */

import {
  TextNode,
  ElementNode,
  FragmentNode,
  SELF_CLOSING,
} from './SyntheticDOM';

const hasOwnProperty = Object.prototype.hasOwnProperty;

const assign = Object.assign || function(obj) {
  var i = 1;
  for (; i < arguments.length; i++) {
    var target = arguments[i];
    for (var key in target) {
      if (hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
};

const noop = function() {};
noop.exec = noop;

var defaults = {
  gfm: true,
  breaks: false,
  pedantic: false,
  smartLists: false,
  silent: false,
  langPrefix: 'lang-',
  renderer: new Renderer(),
  xhtml: false,
};


/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|def))+)\n*/,
  text: /^[^\n]+/,
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = assign({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = assign({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = assign({}, options || defaults);
  this.rules = block.normal;

  if (this.options.gfm) {
    this.rules = block.gfm;
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.parse = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.parse(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.parse = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var next;
  var loose;
  var cap;
  var bull;
  var b;
  var item;
  var space;
  var i;
  var l;

  src = src.replace(/^ +$/gm, '');

  while (src) {
    // newline
    if ((cap = this.rules.newline.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space',
        });
      }
    }

    // code
    if ((cap = this.rules.code.exec(src))) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap,
      });
      continue;
    }

    // fences (gfm)
    if ((cap = this.rules.fences.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3],
      });
      continue;
    }

    // heading
    if ((cap = this.rules.heading.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2],
      });
      continue;
    }

    // lheading
    if ((cap = this.rules.lheading.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1],
      });
      continue;
    }

    // hr
    if ((cap = this.rules.hr.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr',
      });
      continue;
    }

    // blockquote
    if ((cap = this.rules.blockquote.exec(src))) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start',
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end',
      });

      continue;
    }

    // list
    if ((cap = this.rules.list.exec(src))) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1,
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) {
            loose = next;
          }
        }

        this.tokens.push({
          type: loose ? 'loose_item_start' : 'list_item_start',
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end',
        });
      }

      this.tokens.push({
        type: 'list_end',
      });

      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3],
      };
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
      });
      continue;
    }

    // text
    if ((cap = this.rules.text.exec(src))) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0],
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  ins: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = assign({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = assign({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
});

/**
 * GFM Inline Grammar
 */

inline.gfm = assign({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  ins: /^\+\+(?=\S)([\s\S]*?\S)\+\+/,
  text: replace(inline.text)(']|', '~+]|')(),
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = assign({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')(),
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = assign({}, options || defaults);
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.parse = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.parse(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.parse = function(src) {
  var out = new FragmentNode();
  var link;
  var cap;

  while (src) {
    // escape
    if ((cap = this.rules.escape.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(new TextNode(cap[1]));
      continue;
    }

    // link
    if ((cap = this.rules.link.exec(src))) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out.appendChild(this.outputLink(cap, {href: cap[2], title: cap[3]}));
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out.appendChild(new TextNode(cap[0].charAt(0)));
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out.appendChild(this.outputLink(cap, link));
      this.inLink = false;
      continue;
    }

    // strong
    if ((cap = this.rules.strong.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(this.renderer.strong(this.parse(cap[2] || cap[1])));
      continue;
    }

    // em
    if ((cap = this.rules.em.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(this.renderer.em(this.parse(cap[2] || cap[1])));
      continue;
    }

    // code
    if ((cap = this.rules.code.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(this.renderer.codespan(cap[2]));
      continue;
    }

    // br
    if ((cap = this.rules.br.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(this.renderer.br());
      continue;
    }

    // del (gfm)
    if ((cap = this.rules.del.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(this.renderer.del(this.parse(cap[1])));
      continue;
    }

    // ins (gfm extended)
    if ((cap = this.rules.ins.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(this.renderer.ins(this.parse(cap[1])));
      continue;
    }

    // text
    if ((cap = this.rules.text.exec(src))) {
      src = src.substring(cap[0].length);
      out.appendChild(this.renderer.text(new TextNode(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = link.href;
  var title = link.title;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.parse(cap[1]))
    : this.renderer.image(href, title, cap[1]);
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(childNode, lang) {
  var attributes = [];
  if (lang) {
    attributes.push(['class', this.options.langPrefix + lang]);
  }
  var codeNode = new ElementNode('code', attributes, [childNode]);
  return new ElementNode('pre', [], [codeNode]);
};

Renderer.prototype.blockquote = function(childNode) {
  return new ElementNode('blockquote', [], [childNode]);
};

Renderer.prototype.heading = function(childNode, level) {
  return new ElementNode('h' + level, [], [childNode]);
};

Renderer.prototype.hr = function() {
  return new ElementNode('hr', [], SELF_CLOSING);
};

Renderer.prototype.list = function(childNode, isOrdered) {
  return new ElementNode(isOrdered ? 'ol' : 'ul', [], [childNode]);
};

Renderer.prototype.listitem = function(childNode) {
  return new ElementNode('li', [], [childNode]);
};

Renderer.prototype.paragraph = function(childNode) {
  return new ElementNode('p', [], [childNode]);
};

// span level renderer
Renderer.prototype.strong = function(childNode) {
  return new ElementNode('strong', [], [childNode]);
};

Renderer.prototype.em = function(childNode) {
  return new ElementNode('em', [], [childNode]);
};

Renderer.prototype.codespan = function(text) {
  return new ElementNode('code', [], [new TextNode(text)]);
};

Renderer.prototype.br = function() {
  return new ElementNode('br', [], SELF_CLOSING);
};

Renderer.prototype.del = function(childNode) {
  return new ElementNode('del', [], [childNode]);
};

Renderer.prototype.ins = function(childNode) {
  return new ElementNode('ins', [], [childNode]);
};

Renderer.prototype.link = function(href, title, childNode) {
  var attributes = [
    ['href', href],
  ];
  if (title) {
    attributes.push(['title', title]);
  }
  return new ElementNode('a', attributes, [childNode]);
};

Renderer.prototype.image = function(href, title, alt) {
  var attributes = [
    ['src', href],
  ];
  if (title) {
    attributes.push(['title', title]);
  }
  if (alt) {
    attributes.push(['alt', alt]);
  }
  return new ElementNode('img', attributes, SELF_CLOSING);
};

Renderer.prototype.text = function(childNode) {
  return childNode;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = assign({}, options || defaults);
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.slice().reverse();

  var out = new FragmentNode();
  while (this.next()) {
    out.appendChild(this.tok());
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return (this.token = this.tokens.pop());
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.parse(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return new TextNode('');
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.parse(this.token.text),
        this.token.depth
      );
    }
    case 'code': {
      return this.renderer.code(
        this.token.text,
        this.token.lang
      );
    }
    case 'blockquote_start': {
      let body = new FragmentNode();

      while (this.next().type !== 'blockquote_end') {
        body.appendChild(this.tok());
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      let body = new FragmentNode();
      var ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body.appendChild(this.tok());
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      let body = new FragmentNode();

      while (this.next().type !== 'list_item_end') {
        body.appendChild(this.token.type === 'text'
          ? this.parseText()
          : this.tok());
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      let body = new FragmentNode();

      while (this.next().type !== 'list_item_end') {
        body.appendChild(this.tok());
      }

      return this.renderer.listitem(body);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.parse(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function replace(regex, options) {
  regex = regex.source;
  options = options || '';
  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, options);
    }
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

const MarkdownParser = {
  parse(src, options) {
    options = assign({}, defaults, options);
    try {
      var fragment = Parser.parse(Lexer.parse(src, options), options);
    } catch (e) {
      if (options.silent) {
        fragment = new FragmentNode([
          new ElementNode('p', [], [new TextNode('An error occured:')]),
          new ElementNode('pre', [], [new TextNode(e.message)]),
        ]);
      } else {
        throw e;
      }
    }
    if (options.getAST) {
      return new ElementNode('body', [], [fragment]);
    } else {
      return fragment.toString(this.options.xhtml);
    }
  },
};

export default MarkdownParser;
