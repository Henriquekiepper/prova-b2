//exer 1 prova imcomp
function verificarprimo(num) {
    if (num < 2) {
        conseole.log('o numero ' + num + 'não é primo')
        return false;
    }
for (let i = 2; i < num; i++) {
    if (num % i === 0){
        console.log('o numero ' + num + 'não é primo')
    return false;
    }
}
}




//exer 2 prova imcomp
function verificarsenha(senha) {
    if (senha.lenght < 8) {
        consele.log('senha deve conter 8 caracteres.');
        return false;
    }
    var mai = false
    var min = false
    var num = false
    for (var i = 0; i < senha.lenght; i++) {
        var caracteres = senha[i];
        if (caracteres >= 'A' && caracteres <= 'Z') {
            mai = true;
        }
    }
else if (caracteres >= 'a' && caracteres <= 'z') {
        min = true;
    }
    else if (!isNaN(caracteres)) {
        num = true
    }
    if (!mai) {
        consele.log('senha deve ter pelo menos 8 caracteres');
    }
    else if (!min) {
        consele.log('a senha deve conter pelo menos 1 letra minsculo');
    }
    else if (!num) {
        consele.log('a senha deve conter pelo menos 1 numero');
    }
    else {
        consele.log('a senha é valida');
    }
}

//exer 3 prova
function calcularfatorial() {
    var numero = document.getElementById('numero').value;
    var resultado = 1;
    if (numero < 0) {
        document.getElementById('resultado').innerHTML = 'o fatorial de um numero negativo não é definido.';
    return;
    }
for (var i = 2; i <= numero; i++) {
    resultado *= i 
}
document.getElementById('resultado').innerHTML = 'o fatorial de ' + numero + 'é:' + resultado;
}

//exer 4 prova
// JS

function calcularQuadradoPerfeito(num) {
    //retira a raiz quadrada, valor inteiro
    const raizQ = parseInt(Math.sqrt(num));
    //verifica se a raiz quadrada elevado ao quadrado é um valor exato
    return raizQ * raizQ == num;
  }
  
  function validaEntrada(num) {
    if (num == '' || num <= 0) {
      return false;
    }
    return true;
  }
  
  const botao = document.getElementById('button');
  
  const form = document.getElementById('form');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = document.getElementById('num').value;
  
    if (!validaEntrada(value)) {
      alert('Insirar algum número maior que zero');
    } else if (calcularQuadradoPerfeito(value)) {
      alert('É Quadrado perfeito');
    } else {
      alert('Não é quadrado perfeito');
    }
  });

