document.addEventListener("DOMContentLoaded", () => {
  // Select all elements you want to apply sparkles to
  const sparkleTargets = document.querySelectorAll('.flame, .mini-flame');

  // Function to create sparkles on a given element
  const createSparkles = (element) => {
    for (let i = 0; i < 10; i++) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');

      const size = Math.random() * 4 + 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.position = 'absolute';
      sparkle.style.left = '50%';
      sparkle.style.top = '50%';
      sparkle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * -100}px)`;
      sparkle.style.background = 'rgba(255, 255, 0, 0.8)';
      sparkle.style.borderRadius = '50%';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.transition = 'opacity 0.5s ease-out';
      
      element.appendChild(sparkle);

      setTimeout(() => {
        sparkle.style.opacity = 0;
      }, 50);

      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    }
  };

  // Start generating sparkles after 6 seconds
  setTimeout(() => {
    setInterval(() => {
      sparkleTargets.forEach(el => createSparkles(el));
    }, 1000); // every 1 second
  }, 6000); // delay of 6 seconds
});


function random(num) {
  return Math.floor(Math.random() * num)
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite;
  `
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container")
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

window.onload = function () {
  createBalloons(40);
}


setTimeout(() => {
  const music = document.getElementById('birthday-audio');
  if (music) {
    music.play().catch((err) => {
      console.log("Music playback prevented by browser (e.g. autoplay restriction).", err);
    });
  }
}, 8000);
