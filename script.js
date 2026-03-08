const matches = {
  op1: {
    title: "Real Madrid vs Estrella Roja",
    competition: "Euroliga · Jornada 38",
    date: "Jueves, 16 abr · 20:45 h",
    venue: "Movistar Arena",
    price: "VIP desde 200 €",
    general: "Entradas aforo general disponibles próximamente",
    image: "assets/mama_op1.png"
  },
  op2: {
    title: "Real Madrid vs Valencia Basket",
    competition: "Euroliga · Jornada 31",
    date: "Jueves, 12 mar · 20:45 h",
    venue: "Movistar Arena",
    price: "VIP desde 220 €",
    general: "Aforo general desde 19 €",
    image: "assets/mama_op2.png"
  },
  op3: {
    title: "Real Madrid vs Anadolu Efes",
    competition: "Euroliga · Jornada 34",
    date: "Jueves, 26 mar · 20:45 h",
    venue: "Movistar Arena",
    price: "VIP desde 200 €",
    general: "Aforo general desde 18 €",
    image: "assets/mama_op3.png"
  }
};

const homeScreen = document.getElementById("homeScreen");
const resultScreen = document.getElementById("resultScreen");
const matchForm = document.getElementById("matchForm");
const selectButton = document.getElementById("selectButton");
const backButton = document.getElementById("backButton");

// Preview
const previewImage = document.getElementById("previewImage");
const matchTitle = document.getElementById("matchTitle");
const matchCompetition = document.getElementById("matchCompetition");
const matchDate = document.getElementById("matchDate");
const matchVenue = document.getElementById("matchVenue");
const matchPrice = document.getElementById("matchPrice");
const matchGeneral = document.getElementById("matchGeneral");

// Result
const resultImage = document.getElementById("resultImage");
const resultTitle = document.getElementById("resultTitle");
const resultCompetition = document.getElementById("resultCompetition");
const resultDate = document.getElementById("resultDate");
const resultVenue = document.getElementById("resultVenue");
const resultPrice = document.getElementById("resultPrice");
const resultGeneral = document.getElementById("resultGeneral");

function getSelectedMatchKey() {
  const selected = document.querySelector('input[name="match"]:checked');
  return selected ? selected.value : "op1";
}

function updatePreview(matchKey) {
  const selectedMatch = matches[matchKey];

  previewImage.src = selectedMatch.image;
  previewImage.alt = `Vista previa de ${selectedMatch.title}`;

  matchTitle.textContent = selectedMatch.title;
  matchCompetition.textContent = selectedMatch.competition;
  matchDate.textContent = selectedMatch.date;
  matchVenue.textContent = selectedMatch.venue;
  matchPrice.textContent = selectedMatch.price;
  matchGeneral.textContent = selectedMatch.general;
}

function updateResult(matchKey) {
  const selectedMatch = matches[matchKey];

  resultImage.src = selectedMatch.image;
  resultImage.alt = `Imagen elegida para ${selectedMatch.title}`;

  resultTitle.textContent = selectedMatch.title;
  resultCompetition.textContent = selectedMatch.competition;
  resultDate.textContent = selectedMatch.date;
  resultVenue.textContent = selectedMatch.venue;
  resultPrice.textContent = selectedMatch.price;
  resultGeneral.textContent = selectedMatch.general;
}

matchForm.addEventListener("change", () => {
  const matchKey = getSelectedMatchKey();
  updatePreview(matchKey);
});

selectButton.addEventListener("click", () => {
  const matchKey = getSelectedMatchKey();
  updateResult(matchKey);

  homeScreen.classList.remove("active");
  resultScreen.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

backButton.addEventListener("click", () => {
  resultScreen.classList.remove("active");
  homeScreen.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Estado inicial
updatePreview(getSelectedMatchKey());