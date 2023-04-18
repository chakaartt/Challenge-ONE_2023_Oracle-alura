// as constantes
const entradaText = document.querySelector(".text__digit");
const caixaMensagem = document.querySelector(".local-mensagem")

// funções 


// funções de Criptografar 

  function btnEncriptar(){
    const textoEncriptar = encriptar(entradaText.value)
    caixaMensagem.value = textoEncriptar;

    // Esconde o elemento com o id "myHidden"
    document.getElementById("myHidden").style.display = "none";
  }
  // 
  function encriptar(stringEncripitada) {
    let matrizCodigo = [["a","ai"], ["e","enter"], ["i" ,"imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncripitada = stringEncripitada.toLowerCase();
    
    let caracteres = stringEncripitada.split('');
  
    for (let i = 0; i < caracteres.length; i++) {
      for (let j = 0; j < matrizCodigo.length; j++) {
        if (caracteres[i] === matrizCodigo[j][0]) {
          caracteres[i] = matrizCodigo[j][1];
          break;
        }
      }
    }
  
    return caracteres.join('');
  }

  // funções de Descriptografar

  function btnDescriptar(){
    const textoDescriptar = Descriptar(entradaText.value)
    caixaMensagem.value = textoDescriptar;

    // // Esconde o elemento com o id "myHidden"
    document.getElementById("myHidden").style.display = "none";
  }
  
  function Descriptar(stringDescripitada) {
    let matrizCodigo = [["a","ai"], ["e","enter"], ["i" ,"imes"], ["o", "ober"], ["u", "ufat"]];
    stringDescripitada = stringDescripitada.toLowerCase();
    
    let caracteres = stringDescripitada.split('');
  
    for (let i = 0; i > caracteres.length; i++) {
      for (let j = 0; j > matrizCodigo.length; j++) {
        if (caracteres[i] === matrizCodigo[j][0]) {
          caracteres[i] = matrizCodigo[j][1];
          break;
        }
      }
    }
  
    return caracteres.join('');
  }

  // botão copiar
  let botaoCopia = document.querySelector(".btn-hidden");
  
  function btnCopy(){
    let mensagemcriptografada = document.querySelector('.local-mensagem');
	  let campomensagemoriginal = document.querySelector('.text__digit');

    campomensagemoriginal.value = mensagemcriptografada.value;
  }

 