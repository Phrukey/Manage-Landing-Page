let button = document.querySelector("button");
let email = document.querySelector(".input").value;
let errrMsg = document.querySelector(".error");
let form = document.querySelector('form');

button.addEventListener("click", (e) => {
  e.preventDefault();
  if(email === ""){
     setErrorMsg("Please insert a valid email");

    //  setTimeout(setErrorMsg().remove, 3000)
  } else if(isEmail(email)){
    setErrorMsg(" ");
   
  }  
})

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorMsg(msg) {
  errrMsg.textContent = msg;
}