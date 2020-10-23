
/* 
case sensitive = reconehce letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querrySelector()

*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let comentario = document.querySelector("#comentario")
let nomeOk = false
let emailOk = false
let senhaOk = false
let comentarioOk = false

nome.style.width = "100%"
email.style.width = "100%"
senha.style.width = "100%"

function validaNome(){
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML = "Nome Invalido"
        txt.style.color = "red"
    }else{
        txt.innerHTML = "Nome Valido"
        txt.style.color = "green"
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "E-mail Valido"
        txtEmail.style.color = "Green"
        emailOk = true
    }
}
function validaSenha(){
    let txtSenha = document.querySelector("#txtSenha")
    if(senha.value.length <=7 ){
        txtSenha.innerHTML = "Senha Invalida"
        txtSenha.style.color = "red"
    }else{
        txtSenha.innerHTML = "Senha Valida"
        txtSenha.style.color = "green"
        senhaOk = true
    }
}
function validaComentario(){
    let txtComentario = document.querySelector("#txtComentario")
    if(comentario.value.length >= 100 ){
        txtComentario.innerHTML = " Digite no maximo 100 caracteres"
        txtComentario.style.color = "red"
        txtComentario.style.display = "block"
    }else{
        txtComentario.style.display = "none"
        comentarioOk = true
}
}



