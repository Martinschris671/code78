document.addEventListener("DOMContentLoaded", () => {
  const cube = document.querySelector(".rotating-cube");
  let start = null;

  function smoothRotate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    cube.style.transform = `rotateX(${progress / 20}deg) rotateY(${
      progress / 20
    }deg)`;
    requestAnimationFrame(smoothRotate);
  }

  requestAnimationFrame(smoothRotate);
});
