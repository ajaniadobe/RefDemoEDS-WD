export default function decorate(block) {
  const cols = block.dataset.columns || '3';
  block.classList.add(`columns-${cols}`);

  [...block.children].forEach((row) => {
    row.classList.add('figma-card-block-card');

    const children = [...row.children];

    if (children.length === 2) {
      children[0].classList.add('figma-card-block-image');
      children[1].classList.add('figma-card-block-body');
    } else if (children.length === 1) {
      children[0].classList.add('figma-card-block-body');
    }

    const body = row.querySelector('.figma-card-block-body');
    if (!body) return;

    // Promote first short paragraph to eyebrow if it has no link
    const firstP = body.querySelector('p:first-child');
    if (firstP && !firstP.querySelector('a') && firstP.textContent.trim().length < 50) {
      firstP.classList.add('figma-card-block-eyebrow');
    }

    // Wrap button-container links with correct CTA style
    body.querySelectorAll('.button-container a').forEach((a) => {
      a.classList.add('button');
    });
  });
}
