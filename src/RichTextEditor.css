.root {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-family: 'Georgia', serif;
  font-size: 14px;
}

.editor {
  cursor: text;
  font-size: 16px;
}

:global(.text-align--center .public-DraftStyleDefault-ltr) {
  text-align: center;
}

:global(.text-align--right .public-DraftStyleDefault-ltr) {
  text-align: right;
}

:global(.text-align--justify .public-DraftStyleDefault-ltr) {
  text-align: justify;
}

.editor :global(.public-DraftEditorPlaceholder-root),
.editor :global(.public-DraftEditor-content) {
  margin: 0;
  /* 1px is added as transparent border on .DraftEditor-editorContainer */
  padding: 9px;
}

.editor :global(.public-DraftEditor-content) {
  overflow: auto;
}

.hidePlaceholder :global(.public-DraftEditorPlaceholder-root) {
  display: none;
}

.editor .paragraph {
  margin: 14px 0;
}

/* Consecutive code blocks are nested inside a single parent <pre> (like <li>
  inside <ul>). Unstyle the parent and style the children. */
.editor pre {
  margin: 14px 0;
}

.editor .codeBlock {
  background-color: #f3f3f3;
  font-family: "Inconsolata", "Menlo", "Consolas", monospace;
  font-size: 16px;
  /* This should collapse with the margin around the parent <pre>. */
  margin: 14px 0;
  padding: 20px;
}

/* Hacky: Remove padding from inline <code> within code block. */
.editor .codeBlock span[style] {
  padding: 0 !important;
}

.editor .blockquote {
  border-left: 5px solid #eee;
  color: #666;
  font-family: 'Hoefler Text', 'Georgia', serif;
  font-style: italic;
  margin: 16px 0;
  padding: 10px 20px;
}

/* There shouldn't be margin outside the first/last blocks */
.editor .block:first-child,
.editor pre:first-child,
.editor ul:first-child,
.editor ol:first-child {
  margin-top: 0;
}
.editor .block:last-child,
.editor pre:last-child,
.editor ul:last-child,
.editor ol:last-child {
  margin-bottom: 0;
}
