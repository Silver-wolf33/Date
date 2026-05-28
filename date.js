const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");

noBtn.addEventListener("mouseenter", () => {
  const areaWidth = buttonArea.clientWidth;
  const areaHeight = buttonArea.clientHeight;

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const randomX = Math.random() * (areaWidth - btnWidth);
  const randomY = Math.random() * (areaHeight - btnHeight);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

function goNext() {
  window.location.href = "page2.html";
}
