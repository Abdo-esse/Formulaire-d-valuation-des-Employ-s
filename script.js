
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



//   const valid = document.querySelector("#gridCheck")
//   const valibtn =()=>{
    
//     if (valid) {
//         console.log('valid');
        
        
//     }
//   }
