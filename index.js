let covidAnnouncement = document.getElementsByClassName("warning-message")[0];
let dismissAnnouncement = document.getElementsByClassName("dismiss")[0];
let hero = document.getElementsByClassName("hero")[0];
let dynamicText = document.getElementById("dynamic-text");

let listOfNeeds = [
  "camera equipment?",
  "OUT your camera equipment?",
  "a fog machine?",
  "OUT your fog machine?",
  "lighting equipment?",
  "OUT your lighting equipment?",
];

dismissAnnouncement.addEventListener("click", () => {
  covidAnnouncement.style.display = "none";
  hero.style.marginTop = "3.9rem";
  if (window.scrollY === 0) {
    window.scrollTo(0, 0);
  } else {
  }
});

console.log(dynamicText);

let i = 0;
let j = 0;
let currentPhrase = [];
isDeleting = false;
isEnd = false;

function loop() {
  isEnd = false;
  dynamicText.innerHTML = currentPhrase.join("");

  if (i < listOfNeeds.length) {
    if (!isDeleting && j <= listOfNeeds[i].length) {
      currentPhrase.push(listOfNeeds[i][j]);
      j++;
      dynamicText.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= listOfNeeds[i].length) {
      currentPhrase.pop(listOfNeeds[i][j]);
      j--;
      dynamicText.innerHTML = currentPhrase.join("");
    }

    if (j == listOfNeeds[i].length) {
      isDeleting = true;
      isEnd = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === listOfNeeds.length) {
        i = 0;
      }
    }
  }

  const speedUp = Math.random() * (60 - 30) + 30;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time = isEnd ? 1500 : isDeleting ? speedUp : normalSpeed;

  setTimeout(loop, time);
}

loop();
