
function masquer2() {
  document.getElementById("pro").style.display = "none";
  document.getElementById("per").style.display = "block";
}
function masquer3() {
  document.getElementById("pro").style.display = "none";
  document.getElementById("com").style.display = "block";
}
function masquer4() {
  document.getElementById("com").style.display = "none";
  document.getElementById("pro").style.display = "block";
}
function continu() {
  document.getElementById("per").style.display = "block";
  document.getElementById("pro").style.display = "block";
  document.getElementById("com").style.display = "block";

  document.querySelectorAll(".bto").forEach((s) => {
    s.style.display = "none";
  });
  document.getElementById("envoyer").style.display = "block";
}

let first_Name = document.querySelector("[name='firstName']");

let last_Name = document.querySelector("[name='lastName']");

let Add_ress = document.querySelector("[name='Address']");

let Ci_ty = document.querySelector("[name='City']");

let Ch_eck = document.querySelector("[name='Check']");

document.querySelector("[name='btn']").onclick = function (e) {
  let firstVali = false;
  let lastVali = false;
  let Addressvali = false;
  let Cityvali = false;
  // let  Checkvali = false

  if (first_Name.value !== "" && first_Name.value.length <= 10) {
     firstVali = true;
  }
  if (last_Name.value !== "" && last_Name.value.length <= 10) {
    lastVali = true;
  }
  if (Add_ress.value !== "" && Add_ress.value.length > 10) {
    Addressvali = true;
  }

  if (Ci_ty.value !== "" && Ci_ty.value.length <= 10) {
    Cityvali = true;
    console.log("valid");
   }

  if (
    firstVali === false || lastVali === false || Addressvali === false || Cityvali === false ) {
    e.preventDefault();
   }
  if (
    firstVali === true && lastVali === true && Addressvali === true && Cityvali === true) {
    document.getElementById("per").style.display = "none";
  document.getElementById("pro").style.display = "block";
  }

};


