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
import  {infoPeriodos}  from './info-periodos.js'

infoPeriodos()

const interruptor = document.querySelector("#switch-shadow")

// const 

function mudarCor(){
  if(interruptor.checked ){
    console.log("checado")      
  } else {
    console.log("não checado")
  }
}

interruptor.addEventListener("change", mudarCor)

