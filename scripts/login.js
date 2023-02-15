
localStorage.setItem("name", "Andrei");

const name = localStorage.getItem("name");

console.log(name);





/* function enviar (){ 

 let email = document.querySelector("#email")
 let emailLabel = document.querySelector("#email")

 let senhaa = document.querySelector("#senhaa")
 let senhaaLabel = document.querySelector("#senhaLabel")

 let Error = document.querySelector("#Error") 
 let name = []


 let userValid = {
    nome: "",
    email:"",
    senha:""
 }

 name = JSON.parse(localStorage.getItem("name"))

 console.log(name)


} */

function enviar(){
   document.getElementById("aa").classList.add("sumir");
   document.getElementById("concluido").classList.remove("sumir");
   console.log("testando");
}

$("#enviar12").click(function(){
   $("form").addClass("sumir"); 
 });


function goBack() {
    window.history.back()
}


