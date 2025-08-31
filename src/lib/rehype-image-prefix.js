import { visit } from 'unist-util-visit';

/**
 * @param {string} base
 * @returns {import('unified').Plugin<[], import('hast').Root>}
 */
export function rehypeImagePrefix(base) {
  return (tree) => {
    if (!base) return;

    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        const src = node.properties?.src;
        if (typeof src === 'string' && src.startsWith('/')) {
          node.properties.src = `${base}${src}`;
        }
      }
    });
  };
}
