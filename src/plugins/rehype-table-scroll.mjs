import { visit, SKIP } from 'unist-util-visit';

// Wraps tables in a focusable scroll region so wide tables scroll on narrow screens
// without `display: block` on the table, which strips table semantics in some screen readers.
export default function rehypeTableScroll() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent || index === undefined) return;
      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-scroll'], role: 'region', tabIndex: 0, ariaLabel: 'Table' },
        children: [node],
      };
      return [SKIP, index + 1];
    });
  };
}
