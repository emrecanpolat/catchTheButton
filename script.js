const button = document.getElementById('login-btn');
const container = document.getElementById('login-container');

document.addEventListener('mousemove', moveButton);

function moveButton(event) {
  const containerRect = container.getBoundingClientRect();

  // Butonun rastgele konumlandırılması
  const randomX = Math.random() * (containerRect.width - button.clientWidth);
  const randomY = Math.random() * (containerRect.height - button.clientHeight);

  // Butonu rastgele konuma yerleştirme
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
