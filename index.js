let covidAnnouncement = document.getElementsByClassName("warning-message")[0];
let dismissAnnouncement = document.getElementsByClassName("dismiss")[0];
let hero = document.getElementsByClassName("hero")[0];
let dynamicText = document.getElementById("dynamic-text");

let listOfNeeds = [
  "rent camera equipment?",
  "rent out your camera equipment?",
  "rent a fog machine?",
  "rent out your fog machine?",
  "rent lighting equipment?",
  "rent out your lighting equipment?",
];

dismissAnnouncement.addEventListener("click", () => {
  covidAnnouncement.style.display = "none";
  hero.style.marginTop = "4rem";
  if (window.scrollY === 0) {
    window.scrollTo(0, 0);
  } else {
  }
});

console.log(dynamicText);

for (let i = 0; i < listOfNeeds.length; i++) {
  dynamicText.innerText = listOfNeeds[i];
}
