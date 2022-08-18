// variables
var billValue = 0;
var tipValue = 0;
var nbOfPeople = 0;
var tipAmount = 0;
var total = 0;

// functions
function saveBill() {
  billValue = parseFloat(document.getElementsByClassName("billValue")[0].value);
}

function saveTip(tip) {
  tipValue = parseFloat(tip.getAttribute("data-value"));
}

function saveCustomTip() {
  tipValue = parseFloat(
    document.getElementsByClassName("nbCustom")[0].value / 100
  );
}

function savePeopleNum() {
  const nbOfPeopleElement = document.getElementsByClassName("people")[0];
  nbOfPeople = parseFloat(
    document.getElementsByClassName("nbOfPeople")[0].value
  );
  if (nbOfPeople === 0) {
    nbOfPeopleElement.classList.remove("peopleBg");
    nbOfPeopleElement.classList.add("peopleBgError");
    document.getElementsByClassName("errorMessage")[0].style.display = "inline";
  } else {
    document
      .getElementsByClassName("people")[0]
      .classList.remove("peopleBgError");
    nbOfPeopleElement.classList.add("peopleBg");
    document.getElementsByClassName("errorMessage")[0].style.display = "none";
  }
}

function calculate() {
  tipAmount = (billValue * tipValue) / nbOfPeople;
  total = billValue / nbOfPeople + tipAmount;
  if (
    tipAmount > 0 &&
    total > 0 &&
    total !== Infinity &&
    tipAmount !== Infinity &&
    !isNaN(tipAmount) &&
    !isNaN(total)
  ) {
    document.getElementById("tipAmount").innerText =
      "$" + Math.round((tipAmount + Number.EPSILON) * 100) / 100;
    document.getElementById("total").innerText =
      "$" + Math.round((total + Number.EPSILON) * 100) / 100;
  }
}

function Reset() {
  document.getElementsByClassName("billValue")[0].value = null;
  document.getElementsByClassName("nbCustom")[0].value = null;
  document.getElementsByClassName("nbOfPeople")[0].value = null;
  document.getElementById("tipAmount").innerText = "$0.00";
  document.getElementById("total").innerText = "$0.00";
  removeClickedId(tips);
}

// style buttons
tips = Array.from(document.querySelectorAll(".nbPercent"));

function clickButton(button) {
  removeClickedId(button);
  button.id = "clickedBg";
}

function removeClickedId(button) {
  tips.forEach((button) => button.removeAttribute("id"));
}
