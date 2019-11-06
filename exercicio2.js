// defina um login e senha
// peça ao usuario para inserior login e senha
// use condiçoes para verificar se o login e a senha inseridos pelo usuario sao iguais aos que declarou


var y = 3;
var x = 0;
while(x < 4){
    var login = prompt("Digite seu email: ");
    var senha = prompt("Digite sua senha: ");
    if (login == "fe-santos00@hotmail.com" && senha == "19942311") {
        alert("Login aceito");
    } else {
        alert("restam "+ y + " tentativas");
        x += 1;
        y -= 1;
    }
}