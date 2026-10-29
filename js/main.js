// 画像をクリックすると拡大表示します
const box = document.getElementById('lightbox');
const big = box.querySelector('img');
const cap = box.querySelector('p');
document.querySelectorAll('.gallery figure').forEach(fig => {
  const img = fig.querySelector('img');
  img.tabIndex = 0;
  const open = () => {
    big.src = img.src;
    big.alt = img.alt;
    cap.textContent = fig.querySelector('figcaption').textContent;
    box.showModal();
  };
  img.addEventListener('click', open);
  img.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
});
box.addEventListener('click', e => { if (e.target === box || e.target.classList.contains('close')) box.close(); });
