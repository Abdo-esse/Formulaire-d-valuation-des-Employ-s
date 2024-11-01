
function masquer2() {
  document.getElementById("pro").style.display = "none";
  document.getElementById("per").style.display = "block";
}


function masquer4() {
  document.getElementById("com").style.display = "none";
  document.getElementById("pro").style.display = "block";
}


let first_Name = document.querySelector("[name='firstName']");

let last_Name = document.querySelector("[name='lastName']");

let Add_ress = document.querySelector("[name='Address']");

let Ci_ty = document.querySelector("[name='City']");

let Ch_eck = document.querySelector("[name='Check']");
let button = document.querySelector("[name='btn']");




document.querySelector("[name='btn']").onclick = function (e) {
  let firstVali = false;
  let lastVali = false;
  let Addressvali = false;
  let Cityvali = false;
  let  Checkvali = false;

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
    
   }
   if (Ch_eck.checked) {
    Checkvali = true;
    
   }
  if (
    firstVali === true && lastVali === true && Addressvali === true && Cityvali === true && Checkvali === true ) {
    

    document.getElementById("per").style.display = "none";
  document.getElementById("pro").style.display = "block";
  }

};

let em_ail = document.querySelector("[name='email']");

let te_l = document.querySelector("[name='tel']");
let Ch_eck2 = document.querySelector("[name='Check2']");

document.querySelector("[name='btn2']").onclick = function (ev){
  let emailvali = false;
  let telvali = false ;
  let  Checkvali = false;
  
  if (em_ail.value !== "" && em_ail.value.length >= 10) {
     emailvali = true;
  }
  if (te_l.value !== ""  && te_l.value.length == 10) {
     telvali =true;
  }
  if (Ch_eck2.checked) {
    Checkvali = true;
    
   }
  
  if( emailvali === true && telvali === true && Checkvali === true) {
  document.getElementById("pro").style.display = "none";
  document.getElementById("com").style.display = "block";
 }
};

let text = document.querySelector("[name='textarea']");
let Ch_eck3 = document.querySelector("[name='Check3']");
document.querySelector("[name='btn3']").onclick = function(event){
  let comment = false;
  let  Checkvali = false;
  if (text.value !== "" ) {
    comment=true;
  }
  if (Ch_eck3.checked) {
    Checkvali = true;
  }
  if (comment===true && Checkvali === true) {
    document.getElementById("per").style.display = "block";
  document.getElementById("pro").style.display = "block";
  document.getElementById("com").style.display = "block";

  document.querySelectorAll(".bto").forEach((s) => {
    s.style.display = "none";
  });
  document.getElementById("envoyer").style.display = "block";
    
  }
}
 
const inputs = document.querySelectorAll('.inpu');
const resultats = document.querySelectorAll('.span');

inputs.forEach((input, index) => {
  input.oninput = function() {
    const resultat = resultats[index]; // Récupère le résultat correspondant
    if (input.value !== "" && input.value.length <= 10) {
      resultat.textContent = "valid";
      resultat.style.color = "green";
      input.style.border = "2px solid green";
    } else {
      resultat.textContent = "Incorrect";
      resultat.style.color = "red";
      input.style.border = "2px solid red";
    }
  };
});