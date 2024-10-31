
function masquer1() {
  document.getElementById("per").style.display = "none";
  document.getElementById("pro").style.display = "block";
}
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
    
    document.querySelectorAll(".bto").forEach(s=>{s.style.display="none"
    })
    document.getElementById("envoyer").style.display = "block";
  }
   
  let  firstName = document.querySelector("name='firstName'")
  let  lastName= document.querySelector("name='lastName'")
  let  Address = document.querySelector("name='Address'")
  let  City = document.querySelector("name='City'")
  let  Check = document.querySelector("name='Check'")
  

  document.forms[0].onsubmit = fonction (e) {
    let firstVali = false;
    let lastVali = false;
    let Addressvali = false
    let  Cityvali = false
    let  Checkvali = false
    


    if (firstVali === false || lastVali === false ||Addressvali === false || Cityvali === false || Checkvali === false ){
      e.preventDefault();
    }

  }



