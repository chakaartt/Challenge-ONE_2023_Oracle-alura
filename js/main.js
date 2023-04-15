// as constantes

const entradaText = document.querySelector(".text__digit");
const caixaMensagem = document.querySelector(".local-mensagem")

// funções 

// função pra esconde a imagem e o texto.
  function btnEncriptar (){
    document.getElementById("myHidden").style.display = "none";
  }


// funções de Criptografar 

  function btnEncriptar(){
    const textoEncriptar = encriptar(entradaText.value)
    caixaMensagem.value = textoEncriptar;
  }

  function encriptar (stringEncripitada) {
    let matrizCodigo = [["a","ai"], ["e","enter"], ["i" ,"imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncripitada = stringEncripitada.toLowerCase();

    // laço de repetição -> for dentro de um função.

    for(let i = 0; i < matrizCodigo.length; i++) {
      
      // uma condição -> if dentro do for.

        if(stringEncripitada.includes(matrizCodigo[i][0])) {
            stringEncripitada = stringEncripitada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    // return fora do (for)

      return stringEncripitada;
  }