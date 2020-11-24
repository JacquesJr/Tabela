
var dados = [
  {
    "nome": "Pessoa 0",
    "cpf": "000.000.000-00",
    "endereco": {
      "numero": 0,
      "bairro": "Bairro 0",
      "cidade": "Cidade 0",
      "estado": "Estado 0"
    }
  },
  {
    "nome": "Pessoa 1",
    "cpf": "111111111",
    "endereco": {
      "numero": 1,
      "bairro": "Bairro 1",
      "cidade": "Cidade 1",
      "estado": "Estado 1"
    }
  },
  {
    "nome": "Pessoa 2",
    "cpf": "22222222",
    "endereco": {
      "numero": 2,
      "bairro": "Bairro 2",
      "cidade": "Cidade 2",
      "estado": "Estado 2"
    }
  },
  {
    "nome": "Pessoa 3",
    "cpf": "33333333",
    "endereco": {
      "numero": 3,
      "bairro": "Bairro 3",
      "cidade": "Cidade 3",
      "estado": "Estado 3"
    }
  },
  {
    "nome": "Pessoa 4",
    "cpf": "44444444",
    "endereco": {
      "numero": 4,
      "bairro": "Bairro 4",
      "cidade": "Cidade 4",
      "estado": "Estado 4"
    }
  },
  {
    "nome": "Pessoa 5",
    "cpf": "555555",
    "endereco": {
      "numero": 5,
      "bairro": "Bairro 5",
      "cidade": "Cidade 5",
      "estado": "Estado 5"
    }
  },
  {
    "nome": "Pessoa 6",
    "cpf": "666666",
    "endereco": {
      "numero": 6,
      "bairro": "Bairro 6",
      "cidade": "Cidade 6",
      "estado": "Estado 6"
    }
  },
  {
    "nome": "Pessoa 7",
    "cpf": "7777777",
    "endereco": {
      "numero": 7,
      "bairro": "Bairro 7",
      "cidade": "Cidade 7",
      "estado": "Estado 7"
    }
  },
  {
    "nome": "Pessoa 8",
    "cpf": "888888",
    "endereco": {
      "numero": 8,
      "bairro": "Bairro 8",
      "cidade": "Cidade 8",
      "estado": "Estado 8"
    }
  },
  {
    "nome": "Pessoa 9",
    "cpf": "9999999",
    "endereco": {
      "numero": 9,
      "bairro": "Bairro 9",
      "cidade": "Cidade 9",
      "estado": "Estado 9"
    }
  }
]

window.onload = function buildTable(){
  var table = document.getElementById("pessoa");
  console.log(dados)
  for (var i = 0; i < dados.length; i++){
    console.log(dados[i].nome);
    var row = `<tr>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].cpf}</td>
                    <td>${dados[i].endereco.numero}</td>
                    <td>${dados[i].endereco.bairro}</td>
                    <td>${dados[i].endereco.cidade}</td>
                    <td>${dados[i].endereco.estado}</td>
                </tr>
                </br>`
    table.innerHTML += row
  }
}
