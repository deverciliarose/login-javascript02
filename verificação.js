

function logar(){

    var  login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        console.log=('sucesso');
        location.href="página02.html"
    }else{
        alert("Usuário ou senha incorretos");
    }
}