const array = [
  {
    pergunta: "O que tabela periódica?",
    resposta:
      "Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades.",
  },
  {
    pergunta: "Quantos elementos tem a tabela periódica?",
    resposta: "118",
  },
  {
    pergunta: "Historia do criador da Tabela Periodica:",
    resposta: `<div id="historia">
    <h1>Tabela periódica</h1>
    <h2><span id="one">Perso</span><span id="two">nali</span><span id="three">zada</span></h2>  
      <p>
        A criação da tabela periódica é um trabalho que envolveu diversos cientistas e pesquisadores ao longo da história, mas o principal criador da tabela periódica moderna é o químico russo Dimitri Mendeleev.
      <br>  Em 1869, Mendeleev organizou os elementos químicos conhecidos até então em uma tabela que apresentava uma estrutura em que os elementos eram colocados em ordem crescente de massa atômica e organizados em linhas horizontais (períodos) e colunas verticais (grupos) com base em suas propriedades químicas.
      </p> 
      <p style="margin-top: 5px;">Mendeleev deixou espaços vazios na tabela para elementos que ainda não haviam sido descobertos, e ele foi capaz de prever as propriedades desses elementos com base em sua posição na tabela. Com o tempo, os elementos descobertos preencheram os espaços vazios e Mendeleev recebeu reconhecimento por suas contribuições para a química.</p>
      <button onclick="mostrarTabela()" class="proximo proximo1 mostrar-tabela" style="margin-top: 5px;"> Proximo</button>
      </div>`,
    
  },
];



let perguntaAtual = 0;
function handle(e) {
    const atual = e.target.parentNode
    // console.log(atual)
    const root = document.querySelector(".home")
    const template = document.querySelector(".sub-capa")
  const pergunta = atual.querySelector("#pergunta");
  const resposta = atual.querySelector("#resposta");

  pergunta.classList.remove("animate__backInLeft")
  resposta.classList.remove("animate__backInLeft")

  if(resposta.innerHTML != ""){
    const element = template.cloneNode(true)
    root.appendChild(element)
    element.scrollIntoView()
    
    element.querySelector("#pergunta").innerHTML= ""
    element.querySelector(".proximo1").addEventListener("click", handle);

    element.querySelector("#resposta").innerHTML= ""
    
  }else if (pergunta.innerHTML == "") {
    pergunta.innerHTML = array[perguntaAtual].pergunta;
    pergunta.classList.add('animate__animated', 'animate__backInLeft'); 

  } else {
    resposta.innerHTML = array[perguntaAtual].resposta;
    resposta.classList.add('animate__animated', 'animate__backInLeft');
    perguntaAtual= ++perguntaAtual % (array.length )
  }
}

function mostrarTabela(){
  const tabela = document.querySelector(".tabela")
  tabela.scrollIntoView()
}

const home = document.querySelector(".capa");
const btnProximo = document.querySelector(".proximo");
const btnProximo1 = document.querySelector(".proximo1");
const subCapa = document.querySelector(".sub-capa");
const perguntas = document.querySelector("#perguntas");

btnProximo.addEventListener("click", () => {
  home.classList.add("animate__animated", "animate__bounceOutLeft");
  jumpToSecond();
});

function jumpToSecond() {
  setTimeout(() => {
    subCapa.classList.add("animate__animated", "animate__bounce");
    window.scroll(0, 400);
  }, 3000);
}
const verd = false;

btnProximo1.addEventListener("click", handle);

//elementos mais detalhado da tabela

import { infoPeriodos } from './info-periodos.js'

infoPeriodos()

// const infoh2= document.querySelector(".caixa h2")
// const infoP= document.querySelector(".caixa p")


// for (let i = 1; i <= 4; i++) {
//     const periodos = document.getElementById(`periodo${i}`);
//     periodos.addEventListener('mouseover', () => {
//       if (i === 1) {
//         infoh2.innerHTML= `<span>H</span>idrogênio`
//         infoP.innerHTML= `
//           <div class="box-info">
//             <div class="simbolo ametais">
//               <h1>H</h1>
//               <p>Hidrogênio</p>
//               <p>
//                 <span>1</span> &nbsp; 1.008
//               </p>
//             </div>
            
//             <div class="box-info2">
//               <table>
//                 <tr>
//                   <td>Símbolo</td>
//                   <td>H</td>
//                 </tr>
  
//                 <tr>
//                   <td>Número atômico</td>
//                   <td>1</td>
//                 </tr>
  
//                 <tr>
//                   <td>Massa atômica</td>
//                   <td>1.008</td>
//                 </tr>
  
//                 <tr>
//                   <td>Configuração eletrônica</td>
//                   <td>1s<sup>1</sup></td>
//                 </tr>
//               </table>
//             </div>
//           </div>
//         `
    
//       } else if (i === 2) {
//         infoh2.innerHTML= `<span>H</span>élio`
//         infoP.innerHTML= `
//           <div class="box-info">
//             <div class="simbolo">
//               <h1>He</h1>
//               <p>Hélio</p>
//               <p>
//                 <span>2</span> &nbsp; 4.003
//               </p>
//             </div>
            
//             <div class="box-info2">
//               <table>
//                 <tr>
//                   <td>Símbolo</td>
//                   <td>He</td>
//                 </tr>
  
//                 <tr>
//                   <td>Número atômico</td>
//                   <td>2</td>
//                 </tr>
  
//                 <tr>
//                   <td>Massa atômica</td>
//                   <td>4.003</td>
//                 </tr>
  
//                 <tr>
//                   <td>Configuração eletrônica</td>
//                   <td>1s<sup>2</sup></td>
//                 </tr>
//               </table>
//             </div>
//           </div>
//         `
//       } else if (i === 3) {
//         infoh2.innerHTML= `<span>L</span>ítio`
//         infoP.innerHTML= `
//           <div class="box-info">
//             <div class="simbolo metais">
//               <h1>Li</h1>
//               <p>Lítio</p>
//               <p>
//                 <span>3</span> &nbsp; 6.941
//               </p>
//             </div>
            
//             <div class="box-info2">
//               <table>
//                 <tr>
//                   <td>Símbolo</td>
//                   <td>Li</td>
//                 </tr>
  
//                 <tr>
//                   <td>Número atômico</td>
//                   <td>3</td>
//                 </tr>
  
//                 <tr>
//                   <td>Massa atômica</td>
//                   <td>6.941</td>
//                 </tr>
  
//                 <tr>
//                   <td>Configuração eletrônica</td>
//                   <td>1s<sup>2</sup>2s<sup>1</sup></td>
//                 </tr>
//               </table>
//             </div>
//           </div>
//           `
//         } else if (i === 4) {
//              console.log("oi")
//          } 

//     })
//   }