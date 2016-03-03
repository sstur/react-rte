/* @flow */

export const NODE_TYPE_ELEMENT = 1;
export const NODE_TYPE_TEXT = 3;
export const NODE_TYPE_FRAGMENT = 11;
export const SELF_CLOSING: Array<Attr> = [];

type Attr = [string, string];

export class Node {
  nodeType: number;
  nodeName: string;
  nodeValue: string;
}

export class TextNode extends Node {
  constructor(value: string) {
    super(...arguments);
    this.nodeType = NODE_TYPE_TEXT;
    this.nodeName = '#text';
    this.nodeValue = value;
  }

  toString(): string {
    return escape(this.nodeValue);
  }
}

export class ElementNode extends Node {
  childNodes: Array<Node>;
  attributes: Array<Attr>;
  attributesMap: Map<string, string>;
  isSelfClosing: boolean;

  constructor(name: string, attributes: Array<Attr>, childNodes: Array<Node>) {
    super(...arguments);
    let isSelfClosing = (childNodes === SELF_CLOSING);
    this.nodeType = NODE_TYPE_ELEMENT;
    this.nodeName = name;
    this.attributes = attributes || [];
    this.attributesMap = new Map(attributes);
    this.childNodes = [];
    this.isSelfClosing = isSelfClosing;
    if (!isSelfClosing && childNodes) {
      childNodes.forEach(this.appendChild, this);
    }
  }

  appendChild(node: Node) {
    if (node.nodeType === NODE_TYPE_FRAGMENT) {
      if (node.childNodes != null) {
        this.childNodes.push(...node.childNodes);
      }
    } else {
      this.childNodes.push(node);
    }
  }

  getAttribute(name: string): ?string {
    return this.attributesMap.get(name);
  }

  toString(isXHTML: boolean): string {
    let attributes = this.attributes.map(
      (attr) => attr[0] + (attr[1] ? '=' + escapeAttr(attr[1]) : '')
    ).join(' ');
    if (attributes.length) {
      attributes = ' ' + attributes;
    }
    if (this.isSelfClosing) {
      return '<' + this.nodeName + attributes + (isXHTML ? '/>' : '>');
    }
    if (this.childNodes != null) {

    }
    let childNodes = this.childNodes.map((node) => node.toString(isXHTML)).join('');
    return '<' + this.nodeName + attributes + '>' + childNodes + '</' + this.nodeName + '>';
  }
}

export class FragmentNode extends Node {
  childNodes: Array<Node>;

  constructor(childNodes: Array<Node>) {
    super(...arguments);
    this.nodeType = NODE_TYPE_FRAGMENT;
    this.childNodes = [];
    if (childNodes) {
      childNodes.forEach(this.appendChild, this);
    }
  }

  appendChild(node: Node) {
    if (node.nodeType === NODE_TYPE_FRAGMENT) {
      if (node.childNodes != null) {
        this.childNodes.push(...node.childNodes);
      }
    } else {
      this.childNodes.push(node);
    }
  }

  toString(isXHTML: boolean): string {
    return this.childNodes.map((node) => node.toString(isXHTML)).join('');
  }
}

function escape(html: string): string {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(html: string): string {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
