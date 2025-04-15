alert ("Cadastro Plano");

let totalCadastro = 2;
let cadastroAtual = 0;

let nomeTitular = []; 
let cpfTitular = []; 
let numeroTelefoneTitular = []; 
let numeroTelefoneRecado = []; 
let endereco = []; 
let tipoPlano = []; 



while (cadastroAtual <= totalCadastro) {
    let nome = (prompt('Digite o Nome Completo do Titular: '));
    nomeTitular[cadastroAtual] = nome;

    let cpf = (prompt('Digite o CPF do Titular: '));
    cpfTitular[cadastroAtual] = cpf;

    let telefoneTitular = (prompt('Digite o Numero de Telefone do Titular: '));
    numeroTelefoneTitular[cadastroAtual] = telefoneTitular;

    let telefoneRecado = (prompt('Digite o Numero de Telefone para Recado: '));
    numeroTelefoneRecado[cadastroAtual] = telefoneRecado;

    let enderecoTitular = (prompt('Digite o Endereço do Titular: '));
    endereco[cadastroAtual] = enderecoTitular;

    let tipoPlanoTitular = (prompt('Digite o Tipo de Plano: '));
    tipoPlano[cadastroAtual] = tipoPlanoTitular;

    cadastroAtual++;
}

for (let contador = 0; contador <= cadastroAtual; contador++) {
    console.log ("=========================================");
    console.log (nomeTitular[contador]);

    console.log (cpfTitular[contador]);

    console.log (numeroTelefoneTitular[contador]);

    console.log (numeroTelefoneRecado[contador]);

    console.log (endereco[contador]);

    console.log (tipoPlano[contador]);
    console.log ("=========================================");
}