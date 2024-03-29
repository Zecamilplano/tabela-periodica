const infoh2 = document.querySelector(".caixa h2");
const infoP = document.querySelector(".caixa p");

export function infoPeriodos() {
  for (let i = 1; i <= 118; i++) {
    const periodos = document.getElementById(`periodo${i}`);
    periodos.addEventListener("mouseover", () => {
      if (i === 1) {
        infoh2.innerHTML = `<span>H</span>idrogênio`;
        infoP.innerHTML = `
          <div class="box-info">
            <div class="simbolo nao-metais-diatomicos ametais">
              <h1>H</h1>
              <p>Hidrogênio</p>
              <p>
                <span>1</span> &nbsp; 1.008
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>H</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>1</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>1.008</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
        `;
      } else if (i === 2) {
        infoh2.innerHTML = `<span>H</span>élio`;
        infoP.innerHTML = `
          <div class="box-info">
            <div class="simbolo gas-nobre1">
              <h1>He</h1>
              <p>Hélio</p>
              <p>
                <span>2</span> &nbsp; 4.003
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>He</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>2</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>4.003</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
        `;
      } else if (i === 3) {
        infoh2.innerHTML = `<span>Lí</span>ítio`;
        infoP.innerHTML = `
          <div class="box-info">
            <div class="simbolo metal-alcalino metais">
              <h1>Li</h1>
              <p>Lítio</p>
              <p>
                <span>3</span> &nbsp; 6.941
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Li</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>3</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>6.941</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 4) {
        infoh2.innerHTML = `<span>Be</span>rílio`;
        infoP.innerHTML = `
          <div class="box-info">
            <div class="simbolo metal-alcalino-terroso metais">
              <h1>Be</h1>
              <p>Berílio</p>
              <p>
                <span>4</span> &nbsp; 9.012
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Be</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>4</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>9.012</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 5) {
        infoh2.innerHTML = `<span>B</span>oro`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo semi-metal metais">
              <h1>B</h1>
              <p>Boro</p>
              <p class="diminui-fonte">
                <span>5</span> &nbsp; 10.811
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>B</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>5</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>10.811</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>2</sup>2p</td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 6) {
        infoh2.innerHTML = `<span>C</span>arbono`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-poliatomicos ametais metais">
              <h1>C</h1>
              <p>Carbono</p>
              <p class="diminui-fonte">
                <span>6</span> &nbsp; 12.011
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>C</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>6</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>12.011</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 7) {
        infoh2.innerHTML = `<span>N</span>itrogênio`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-poliatomicos ametais metais">
              <h1>N</h1>
              <p>Nitrogênio</p>
              <p class="diminui-fonte">
                <span>7</span> &nbsp; 14.007
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>N</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>7</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>14.007</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 8) {
        infoh2.innerHTML = `<span>O</span>xigênio`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-diatomicos ametais ">
              <h1>O</h1>
              <p>Oxigênio</p>
              <p class="diminui-fonte">
                <span>8</span> &nbsp; 15.999
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>O</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>8</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>15.999</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 9) {
        infoh2.innerHTML = `<span>F</span>úor`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-diatomicos ametais">
              <h1>F</h1>
              <p>Fúor</p>
              <p class="diminui-fonte">
                <span>9</span> &nbsp; 18.998
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>F</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>9</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>18.998</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 10) {
        infoh2.innerHTML = `<span>Ne</span>ônio`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo gas-nobre1">
              <h1>Ne</h1>
              <p>Neônio</p>
              <p class="diminui-fonte">
                <span>10</span> &nbsp; 20.18
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ne</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>10</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>20.18</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 11) {
        infoh2.innerHTML = `Sódio`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino metais">
              <h1>Na</h1>
              <p>Sódio</p>
              <p class="diminui-fonte1">
                <span>Na</span> &nbsp; 22.99
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Na</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>11</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>22.99</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 12) {
        infoh2.innerHTML = "Magnésio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-acalino-terrosso metais">
              <h1>Mg</h1>
              <p>Magnésio</p>
              <p class="diminui-fonte1">
                <span>12</span> &nbsp; 24.305
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Mg</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>12</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>24.305</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 13) {
        infoh2.innerHTML = `<span>Al</span>umínio`;
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-pos-transicao metais">
              <h1>Al</h1>
              <p>Alumínio</p>
              <p class="diminui-fonte1">
                <span>13</span> &nbsp; 26.982
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ai</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>13</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>26.982</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>2</sup>3p<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 14) {
        infoh2.innerHTML = "<span>Si</span>lício";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo semi-metal metais">
              <h1>Si</h1>
              <p>Silício</p>
              <p class="diminui-fonte1">
                <span>14</span> &nbsp; 28.086
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Si</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>14</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>28.086</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>2</sup>3p<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 15) {
        infoh2.innerHTML = "Fósforo";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-acalino-terrosso metais">
              <h1>P</h1>
              <p>Fósforo</p>
              <p class="diminui-fonte1">
                <span>15</span> &nbsp; 30.974
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>P</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>15</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>30.974</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>2</sup> 3p<sup>3</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 16) {
        infoh2.innerHTML = "Enxofre";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-poliatomicos metais">
              <h1>S</h1>
              <p>Enxofre</p>
              <p class="diminui-fonte1">
                <span>16</span> &nbsp; 32.065
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>S</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>16</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>32.065</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>2</sup> 3p<sup>4</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 17) {
        infoh2.innerHTML = "<span>Cl</span>oro";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-diatomicos ametais">
              <h1>Cl</h1>
              <p>Cloro</p>
              <p class="diminui-fonte1">
                <span>17</span> &nbsp; 35.453
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Cl</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>17</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>35.453</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>2</sup> 3p<sup>5</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 18) {
        infoh2.innerHTML = "<span>Ar</span>gônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo gas-nobre">
              <h1>Ar</h1>
              <p>Argônio</p>
              <p class="diminui-fonte1">
                <span>18</span> &nbsp; 39.948
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ar</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>18</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>39.948</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ne] 3s<sup>2</sup> 3p<sup>6</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 19) {
        infoh2.innerHTML = "K";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino metais">
              <h1>K</h1>
              <p>Potássio</p>
              <p class="diminui-fonte1">
                <span>19</span> &nbsp; 39.098
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>K</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>19</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>39.098</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 4s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 20) {
        infoh2.innerHTML = "Cálcio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino-terroso metais">
              <h1>Ca</h1>
              <p>cálcio</p>
              <p class="diminui-fonte1">
                <span>2</span> &nbsp; 40.078
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ca</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>20</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>40.078</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 21) {
        infoh2.innerHTML = "Escândio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Sc</h1>
              <p>Escândio</p>
              <p class="diminui-fonte1">
                <span>21</span> &nbsp; 44.956
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Sc</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>21</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>44.956</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>1</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 22) {
        infoh2.innerHTML = "<span>Ti</span>tânio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Ti</h1>
              <p>Titânio</p>
              <p class="diminui-fonte1">
                <span>22</span> &nbsp; 47.867
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ti</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>22</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>47.867</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>2</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 23) {
        infoh2.innerHTML = "Vanádio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>V</h1>
              <p>Vanádio</p>
              <p class="diminui-fonte1">
                <span>23</span> &nbsp; 50.942
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>V</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>23</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>50.942</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>3</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 24) {
        infoh2.innerHTML = "<span>Cr</span>omo";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Cr</h1>
              <p>Cromo</p>
              <p class="diminui-fonte1">
                <span>24</span> &nbsp; 51.996
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Cr</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>24</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>51.996</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>5</sup> 4s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 25) {
        infoh2.innerHTML = "Manganês";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Mn</h1>
              <p>Manganês</p>
              <p class="diminui-fonte1">
                <span>25</span> &nbsp; 54.938
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Mn</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>25</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>54.938</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>5</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 26) {
        infoh2.innerHTML = "<span>Fe</span>rro";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Fe</h1>
              <p>Ferro</p>
              <p class="diminui-fonte1">
                <span>26</span> &nbsp; 55.845
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Fe</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>26</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>55.845</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>5</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 27) {
        infoh2.innerHTML = "<span>Co</span>balto";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Co</h1>
              <p>Cobalto</p>
              <p class="diminui-fonte1">
                <span>27</span> &nbsp; 58.933
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Co</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>27</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>58.933</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>7</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 28) {
        infoh2.innerHTML = "Niquel";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Ni</h1>
              <p>Niquel</p>
              <p class="diminui-fonte1">
                <span>28</span> &nbsp; 58.693
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ni</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>28</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>58.693</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>8</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 29) {
        infoh2.innerHTML = "Cobre";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Cu</h1>
              <p>Cobre</p>
              <p class="diminui-fonte1">
                <span>29</span> &nbsp; 63.546
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Cu</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>29</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>63.546</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 30) {
        infoh2.innerHTML = "Zinco";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Zn</h1>
              <p>Zinco</p>
              <p class="diminui-fonte1">
                <span>30</span> &nbsp; 65.409
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Zn</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>30</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>65.409</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 31) {
        infoh2.innerHTML = "Galio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-pos-transicao metais">
              <h1>Ga</h1>
              <p>Gálio</p>
              <p class="diminui-fonte1">
                <span>31</span> &nbsp; 69.723
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ga</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>31</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>69.723</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 32) {
        infoh2.innerHTML = "<span>Ge</span>rmânio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo semi-metal metais">
              <h1>Ge</h1>
              <p>Germânio</p>
              <p class="diminui-fonte1">
                <span>32</span> &nbsp; 72.64
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ge</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>32</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>72.64</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 33) {
        infoh2.innerHTML = "Arsênio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo semi-metal metais">
              <h1>As</h1>
              <p>Arsênio</p>
              <p class="diminui-fonte1">
                <span>33</span> &nbsp; 74.922
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>As</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>33</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>74.922</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>3</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 34) {
        infoh2.innerHTML = "<span>Se</span>lênio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-poliatomicos ametais">
              <h1>Se</h1>
              <p>Selênio</p>
              <p class="diminui-fonte1">
                <span>34</span> &nbsp; 78.96
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Se</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>34</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>78.96</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>4</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 35) {
        infoh2.innerHTML = "<span>Br</span>omo";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-diatomicos ametais">
              <h1>Br</h1>
              <p>Bromo</p>
              <p class="diminui-fonte1">
                <span>35</span> &nbsp; 79.904
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Br</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>35</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>79.904</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>5</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 36) {
        infoh2.innerHTML = "Criptônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo gas-nobre1">
              <h1>Kr</h1>
              <p>Criptônio</p>
              <p class="diminui-fonte1">
                <span>36</span> &nbsp; 83.798
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Kr</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>36</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>83.798</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Ar] 3d<sup>10</sup> 4s<sup>2</sup> 4p<sup>6</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 37) {
        infoh2.innerHTML = "Rubídio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino metais">
              <h1>Rb</h1>
              <p>Rubídio</p>
              <p class="diminui-fonte1">
                <span>37</span> &nbsp; 85.468
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Rb</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>37</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>85.468</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 5s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 38) {
        infoh2.innerHTML = "Estrôncio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino-terrosso metais">
              <h1>Sr</h1>
              <p>Estrôncio</p>
              <p class="diminui-fonte1">
                <span>38</span> &nbsp; 87.62
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Sr</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>38</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>87.62</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 5s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 39) {
        infoh2.innerHTML = "Ítrio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Y</h1>
              <p>Ítrio</p>
              <p class="diminui-fonte1">
                <span>39</span> &nbsp; 88.906
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Y</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>39</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>88.906</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>1</sup> 5s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 40) {
        infoh2.innerHTML = "Zircônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Zr</h1>
              <p>Zircônio</p>
              <p class="diminui-fonte1">
                <span>40</span> &nbsp; 91.224
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Zr</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>40</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>91.224</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>2</sup> 5s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 41) {
        infoh2.innerHTML = "Nióbio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Nb</h1>
              <p>Nióbio</p>
              <p class="diminui-fonte1">
                <span>41</span> &nbsp; 92.906 
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Nb</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>41</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>92.906 38</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>4</sup> 5s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 42) {
        infoh2.innerHTML = "Molibdênio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Mo</h1>
              <p>Molibdênio</p>
              <p class="diminui-fonte1">
                <span>42</span> &nbsp; 95.94
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Mo</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>42</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>95.94</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>1</sup> 5s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 43) {
        infoh2.innerHTML = "Tecnécio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Tc</h1>
              <p>Tecnécio</p>
              <p class="diminui-fonte1">
                <span>43</span> &nbsp; [98]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Tc</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>43</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[98]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>5</sup> 5s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 44) {
        infoh2.innerHTML = "<span>Ru</span>tênio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Ru</h1>
              <p>Ítrio</p>
              <p class="diminui-fonte1">
                <span>44</span> &nbsp; 101.07
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ru</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>44</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>101.07</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>7</sup> 5s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 45) {
        infoh2.innerHTML = "Ródio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Rh</h1>
              <p>Ródio</p>
              <p class="diminui-fonte1">
                <span>45</span> 102.905.50
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Rh</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>45</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>102.905 50</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>8</sup> 5s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 46) {
        infoh2.innerHTML = "Paládio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Pd</h1>
              <p>Paládio</p>
              <p class="diminui-fonte1">
                <span>46</span> &nbsp; 106.42
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Pd</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>46</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>106.42</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>0</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 47) {
        infoh2.innerHTML = "Prata";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Ag</h1>
              <p>Prata</p>
              <p class="diminui-fonte1">
                <span>47</span> &nbsp; 107.868
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ag</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>47</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>107.868</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 48) {
        infoh2.innerHTML = "Cádmio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Cd</h1>
              <p>Cádmio</p>
              <p class="diminui-fonte1">
                <span>48</span> &nbsp; 112.411
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Cd</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>48</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>112.411</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 49) {
        infoh2.innerHTML = "Índio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-pos-transicao metais">
              <h1>In</h1>
              <p>Índio</p>
              <p class="diminui-fonte1">
                <span>49</span> &nbsp; 114.818
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>In</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>49</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>114.818</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 50) {
        infoh2.innerHTML = "Estanho";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-pos-transicao metais">
              <h1>Sn</h1>
              <p>Estanho</p>
              <p class="diminui-fonte1">
                <span>50</span> &nbsp; 118.71
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Sn</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>50</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>118.71</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 51) {
        infoh2.innerHTML = "Antimônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo semi-metal metais">
              <h1>Sb</h1>
              <p>Antimônio</p>
              <p class="diminui-fonte1">
                <span>51</span> &nbsp; 121.76
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Sb</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>51</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>121.76</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>3</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 52) {
        infoh2.innerHTML = "<span>Te</span>lúrio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo semi-metal metais">
              <h1>Te</h1>
              <p>Telúrio</p>
              <p class="diminui-fonte1">
                <span>52</span> &nbsp; 127.6
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Te</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>52</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>127.6</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>4</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 53) {
        infoh2.innerHTML = "Iodo";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metais-diatomicos ametais">
              <h1>I</h1>
              <p>Iodo</p>
              <p class="diminui-fonte1">
                <span>53</span> &nbsp; 126.904.47
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>I</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>53</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>126.904</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>5</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 54) {
        infoh2.innerHTML = "<span>Xe</span>nônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo gas-nobre1">
              <h1>Xe</h1>
              <p>Xenônio</p>
              <p class="diminui-fonte1">
                <span>54</span> &nbsp; 131.293
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Xe</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>54</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>131.293</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Kr] 4d<sup>10</sup> 5s<sup>2</sup> 5p<sup>6</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 55) {
        infoh2.innerHTML = "Césio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino  metais">
              <h1>Cs</h1>
              <p>Césio</p>
              <p class="diminui-fonte1">
                <span>55</span> &nbsp; 132.905
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Cs</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>55</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>132.905</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 6s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 56) {
        infoh2.innerHTML = "Bário";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino-terroso metais">
              <h1>Ba</h1>
              <p>Bario</p>
              <p class="diminui-fonte1">
                <span>56</span> &nbsp; 137.327
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>137.327</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>56</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>137.327</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 57) {
        infoh2.innerHTML = "<span>La</span>ntânio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>La</h1>
              <p>Lantânio</p>
              <p class="diminui-fonte1">
                <span>57</span> &nbsp; [138.905]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>La</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>57</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>138.905</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[xe] 5d<sup>1</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 58) {
        infoh2.innerHTML = "Cério";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Ce</h1>
              <p>Cério</p>
              <p class="diminui-fonte1">
                <span>58</span> &nbsp; 140.116
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ce</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>58</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>140.116</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[xe] 5d<sup>1</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 59) {
        infoh2.innerHTML = "<span>Pr</span>aseodímio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Pr</h1>
              <p>Praseodímio</p>
              <p class="diminui-fonte1">
                <span>59</span> &nbsp; 140.908
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Pr</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>57</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>140.908</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[xe] 5d<sup>2</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 60) {
        infoh2.innerHTML = "Neodímio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Nd</h1>
              <p>Neodímio</p>
              <p class="diminui-fonte1">
                <span>60</span> &nbsp; 144.242
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Nd</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>60</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>144.242</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[xe] 5f<sup>4</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 61) {
        infoh2.innerHTML = "Promécio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Pm</h1>
              <p>Promécio</p>
              <p class="diminui-fonte1">
                <span>61</span> &nbsp; [145]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Pm</td>
                </td>
                <tr>
                  <td>Número atômico</td>
                  <td>61</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[145]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>5</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 62) {
        infoh2.innerHTML = "Samário";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Sm</h1>
              <p>Samário</p>
              <p class="diminui-fonte1">
                <span>62</span> &nbsp; 150.36
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Sm</td>
                  </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>62</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>152.36</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>6</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 63) {
        infoh2.innerHTML = "<span>Eu</span>rópio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Eu</h1>
              <p>Európio</p>
              <p class="diminui-fonte1">
                <span>63</span> &nbsp; 151.964
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Eu</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>63</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>151.964</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>7</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 64) {
        infoh2.innerHTML = "Gadolílinio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Gd</h1>
              <p>Gadolínio</p>
              <p class="diminui-fonte1">
                <span>64</span> &nbsp; 157.25
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Gd</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>64</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>157.25</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>7</sup> 5d<sup>2</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 65) {
        infoh2.innerHTML = "Térbio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Tb</h1>
              <p>Térbio</p>
              <p class="diminui-fonte1">
                <span>65</span> &nbsp; 158.925
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Tb</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>65</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>158.925</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>9</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 66) {
        infoh2.innerHTML = "Disprósio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Dy</h1>
              <p>Disprósio</p>
              <p class="diminui-fonte1">
                <span>66</span> &nbsp; 162.5
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Dy</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>66</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>162.5</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>10</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 67) {
        infoh2.innerHTML = "Hólmio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Ho</h1>
              <p>Hólmio</p>
              <p class="diminui-fonte1">
                <span>67</span> &nbsp; 164.930.32
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ho</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>67</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>164.930.32</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>11</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 68) {
        infoh2.innerHTML = "<span>Ér</span>rnio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Er</h1>
              <p>Erbio</p>
              <p class="diminui-fonte1">
                <span>68</span> &nbsp; 167.259
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Er</td>
                </tr>
                <tr>
                  <td>Número atômico</td>
                  <td>68</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>151.964</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>7</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 69) {
        infoh2.innerHTML = "Túlio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Tm</h1>
              <p>Túlio</p>
              <p class="diminui-fonte1">
                <span>69</span> &nbsp; 168.934
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Tm</td>
                <tr>
                  <td>Número atômico</td>
                  <td>69</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>168.934</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>13</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 70) {
        infoh2.innerHTML = "Itérbio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Yb</h1>
              <p>Itérbio</p>
              <p class="diminui-fonte1">
                <span>70</span> &nbsp; 173.94
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Yb</td>
                <tr>
                  <td>Número atômico</td>
                  <td>70</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>173.04</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 71) {
        infoh2.innerHTML = "<span>Lu</span>técio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Lu</h1>
              <p>Lutécio</p>
              <p class="diminui-fonte1">
                <span>71</span> &nbsp; 174.967
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Lu</td>
                <tr>
                  <td>Número atômico</td>
                  <td>71</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>173.967</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>1</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 72) {
        infoh2.innerHTML = "Háfnio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Hf</h1>
              <p>Háfnio</p>
              <p class="diminui-fonte1">
                <span>72</span> &nbsp; 178.49
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>178.49</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>72</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>178.39</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4r<sup>14</sup> 5d<sup>2</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 73) {
        infoh2.innerHTML = "Tântalo";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Ta</h1>
              <p>Tâbtalo</p>
              <p class="diminui-fonte1">
                <span>73</span> &nbsp; 180.948
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>178.49</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>73</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>178.39</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4r<sup>14</sup> 5d<sup>2</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>`;
      } else if (i === 74) {
        infoh2.innerHTML = "Tungstênio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>W</h1>
              <p>Tungstênio</p>
              <p class="diminui-fonte1">
                <span>74</span> &nbsp; 183.84
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>178.49</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>74</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>183.84</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>4</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 75) {
        infoh2.innerHTML = "Rênio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Re</h1>
              <p>Rênoio</p>
              <p class="diminui-fonte1">
                <span>75</span> &nbsp; 186.207
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Re</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>75</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>186.207</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>5</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 76) {
        infoh2.innerHTML = "Ósmio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Os</h1>
              <p>Ósmio</p>
              <p class="diminui-fonte1">
                <span>76</span> &nbsp; 190.23
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Os</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>76</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>190.23</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>5</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 77) {
        infoh2.innerHTML = "<span>Ir</span>ídio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Ir</h1>
              <p>Irídio</p>
              <p class="diminui-fonte1">
                <span>77</span> &nbsp; 192.217
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ir</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>77</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>192.217</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>7</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 78) {
        infoh2.innerHTML = "Platina";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Pt</h1>
              <p>Platina</p>
              <p class="diminui-fonte1">
                <span>78</span> &nbsp; 195.084
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Pt</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>78</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>77</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>9</sup> 6s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 79) {
        infoh2.innerHTML = "Ouro";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Au</h1>
              <p>Ouro</p>
              <p class="diminui-fonte1">
                <span>79</span> &nbsp; 196.967
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ir</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>78</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>196.967</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 80) {
        infoh2.innerHTML = "Mercurio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-transicao metais">
              <h1>Hg</h1>
              <p>Mecúcurio</p>
              <p class="diminui-fonte1">
                <span>80</span> &nbsp; 200.59
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Hg</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>80</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>200</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 81) {
        infoh2.innerHTML = "Tálio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-pos-transicao metais">
              <h1>Ti</h1>
              <p>Tálio</p>
              <p class="diminui-fonte1">
                <span>81</span> &nbsp; 204.383
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ti</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>81</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>203.383</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 82) {
        infoh2.innerHTML = "Chumbo";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-pos-transicao metais">
              <h1>Pb</h1>
              <p>Chumbo</p>
              <p class="diminui-fonte1">
                <span>82</span> &nbsp; 207.2
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Pb</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>82</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>207.2</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 83) {
        infoh2.innerHTML = "Bismuto";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-pos-transicao metais">
              <h1>Bi</h1>
              <p>Bismuto</p>
              <p class="diminui-fonte1">
                <span>83</span> &nbsp; 208.98
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Bi</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>83</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>208.98</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>3</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 84) {
        infoh2.innerHTML = "<span>Po</span>lônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-pos-transicao metais">
              <h1>Po</h1>
              <p>Polônio</p>
              <p class="diminui-fonte1">
                <span>84</span> &nbsp; [210]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Po</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>84</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[210]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>4</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 85) {
        infoh2.innerHTML = "Ástato";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo nao-metal ametais">
              <h1>At</h1>
              <p>Ástato</p>
              <p class="diminui-fonte1">
                <span>85</span> &nbsp; [210]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>At</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>85</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[219]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>2</sup> 6p<sup>5</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 86) {
        infoh2.innerHTML = "Radônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo gas-nobre">
              <h1>Rn</h1>
              <p>Radônio</p>
              <p class="diminui-fonte1">
                <span>86</span> &nbsp; [220]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Rn</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>86</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[220]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Xe] 4f<sup>14</sup> 5d<sup>10</sup> 6s<sup>6</sup> 6p<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 87) {
        infoh2.innerHTML = "<span>Fr</span>âncio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino metais">
              <h1>Fr</h1>
              <p>Frâncio</p>
              <p class="diminui-fonte1">
                <span>87</span> &nbsp; [223]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Fr</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>87</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[223]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 7s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 88) {
        infoh2.innerHTML = "Rádio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metal-alcalino-terroso metais">
              <h1>Ra</h1>
              <p>Rádio</p>
              <p class="diminui-fonte1">
                <span>88</span> &nbsp; [226]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ra</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>88</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[226]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 7s<sup>2/sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 89) {
        infoh2.innerHTML = "<span>Ac</span>tínio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  actinideo gas-nobre1">
              <h1>Ac</h1>
              <p>Actínio</p>
              <p class="diminui-fonte1">
                <span>89</span> &nbsp; [277]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ac</td>
                <tr>
                  <td>Número atômico</td>
                  <td>89</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[227]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 6d<<sup>1</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 90) {
        infoh2.innerHTML = "Tório";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  actinideo gas-nobre1">
              <h1>Th</h1>
              <p>Tório</p>
              <p class="diminui-fonte1">
                <span>90</span> &nbsp; 232.03806
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Th</td>
                <tr>
                  <td>Número atômico</td>
                  <td>90</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>232.03806</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 6d<<sup>2</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 91) {
        infoh2.innerHTML = "Protactínio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo   actinideo gas-nobre1">
              <h1>Pa</h1>
              <p>Protactínio</p>
              <p class="diminui-fonte1">
                <span>91</span> &nbsp; 231.03588
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Pa</td>
                <tr>
                  <td>Número atômico</td>
                  <td>91</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>231.03588</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>2</sup> 6d<<sup>2</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 92) {
        infoh2.innerHTML = "<span>U</span>rânio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>U</h1>
              <p>Urânio</p>
              <p class="diminui-fonte1">
                <span>92</span> &nbsp; 238.02891
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>U</td>
                <tr>
                  <td>Número atômico</td>
                  <td>92</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>238.02891</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>3</sup> 6d<<sup>1</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 93) {
        infoh2.innerHTML = "Netúnio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Np</h1>
              <p>Netúnio</p>
              <p class="diminui-fonte1">
                <span>93</span> &nbsp; [237]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Np</td>
                <tr>
                  <td>Número atômico</td>
                  <td>93</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[237]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>4</sup> 6d<sup>1</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 94) {
        infoh2.innerHTML = "Plutônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Pu</h1>
              <p>Plutônio</p>
              <p class="diminui-fonte1">
                <span>94</span> &nbsp; [244]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Pu</td>
                <tr>
                  <td>Número atômico</td>
                  <td>94</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[244]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>2</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 95) {
        infoh2.innerHTML = "Amerício";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Am</h1>
              <p>Américio</p>
              <p class="diminui-fonte1">
                <span>95</span> &nbsp; [243]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Am</td>
                <tr>
                  <td>Número atômico</td>
                  <td>95</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[243]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>7</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 96) {
        infoh2.innerHTML = "<span>Am</span>erício";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Am</h1>
              <p>Amerício</p>
              <p class="diminui-fonte1">
                <span>95</span> &nbsp; [243]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>A</td>
                <tr>
                  <td>Número atômico</td>
                  <td>94</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[244]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>2</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 97) {
        infoh2.innerHTML = "Berquélio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Bk</h1>
              <p>Berquélio</p>
              <p class="diminui-fonte1">
                <span>97</span> &nbsp; [247]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Bk</td>
                <tr>
                  <td>Número atômico</td>
                  <td>97</td>
                </tr>
  
                    <tr>
                      <td>Massa atômica</td>
                      <td>[247]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>9</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
            `;
      } else if (i === 98) {
        infoh2.innerHTML = "Californio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Cf</h1>
              <p>Californio</p>
              <p class="diminui-fonte1">
                <span>98</span> &nbsp; [251]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Cf</td>
                <tr>
                  <td>Número atômico</td>
                  <td>98</td>
                </tr>
  
                    <tr>
                      <td>Massa atômica</td>
                      <td>[251]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>10</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
            `;
      } else if (i === 99) {
        infoh2.innerHTML = "Eisténio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Es</h1>
              <p>Eisténio</p>
              <p class="diminui-fonte1">
                <span>99</span> &nbsp; [252]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Es</td>
                <tr>
                  <td>Número atômico</td>
                  <td>99</td>
                </tr>
  
                    <tr>
                      <td>Massa atômica</td>
                      <td>[252]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>11</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
            `;
      } else if (i === 100) {
        infoh2.innerHTML = "Férmio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Fm</h1>
              <p>Férmio</p>
              <p class="diminui-fonte1">
                <span>100</span> &nbsp; [257]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Fm</td>
                <tr>
                  <td>Número atômico</td>
                  <td>100</td>
                </tr>
  
                    <tr>
                      <td>Massa atômica</td>
                      <td>[257]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>12</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
            `;
      } else if (i === 101) {
        infoh2.innerHTML = "Mendelévio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Md</h1>
              <p>Mendelévio</p>
              <p class="diminui-fonte1">
                <span>101</span> &nbsp; [258]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Md</td>
                <tr>
                  <td>Número atômico</td>
                  <td>101</td>
                </tr>
  
                    <tr>
                      <td>Massa atômica</td>
                      <td>[258]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>13</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
            `;
      } else if (i === 102) {
        infoh2.innerHTML = "<span>No</span>bélio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>No</h1>
              <p>Nobélio</p>
              <p class="diminui-fonte1">
                <span>102</span> &nbsp; [259]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>No</td>
                <tr>
                  <td>Número atômico</td>
                  <td>102</td>
                </tr>
  
                    <tr>
                      <td>Massa atômica</td>
                      <td>[259]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>14</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
            `;
      } else if (i === 103) {
        infoh2.innerHTML = "Laurêncio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo  lantanideo gas-nobre1">
              <h1>Lr</h1>
              <p>Laurêncio</p>
              <p class="diminui-fonte1">
                <span>103</span> &nbsp; [262]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Lr</td>
                <tr>
                  <td>Número atômico</td>
                  <td>103</td>
                </tr>
  
                    <tr>
                      <td>Massa atômica</td>
                      <td>[262]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>14</sup> 7s<sup>1</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
            `;
      } else if (i === 104) {
        infoh2.innerHTML = "Rutherfórdio";
        infoP.innerHTML = `
              <div class="box-info ">
                <div class="simbolo metal-transicao metais">
                  <h1>Rf</h1>
                  <p>Rutherfórdio</p>
                  <p class="diminui-fonte1">
                    <span>87</span> &nbsp; 261
                  </p>
                </div>
                
                <div class="box-info2">
                  <table>
                    <tr>
                      <td>Símbolo</td>
                      <td>Rf</td>
                    </tr>
      
                    <tr>
                      <td>Número atômico</td>
                      <td>104</td>
                    </tr>
      
                    <tr>
                      <td>Massa atômica</td>
                      <td>[261]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>14</sup> 6d 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
              `;
      } else if (i === 105) {
        infoh2.innerHTML = "Dúbnio";
        infoP.innerHTML = `
              <div class="box-info ">
                <div class="simbolo metal-transicao metais">
                  <h1>Db</h1>
                  <p>Dúbnio</p>
                  <p class="diminui-fonte1">
                    <span>105</span> &nbsp; [262]
                  </p>
                </div>
                
                <div class="box-info2">
                  <table>
                    <tr>
                      <td>Símbolo</td>
                      <td>Db</td>
                    </tr>
      
                    <tr>
                      <td>Número atômico</td>
                      <td>105</td>
                    </tr>
      
                    <tr>
                      <td>Massa atômica</td>
                      <td>[262]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>14</sup> 6d<sup>3</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
              `;
      } else if (i === 106) {
        infoh2.innerHTML = "Seabórgio";
        infoP.innerHTML = `
              <div class="box-info ">
                <div class="simbolo metal-transicao metais">
                  <h1>Sg</h1>
                  <p>Seabórgio</p>
                  <p class="diminui-fonte1">
                    <span>106</span> &nbsp; [266]
                  </p>
                </div>
                
                <div class="box-info2">
                  <table>
                    <tr>
                      <td>Símbolo</td>
                      <td>Sg</td>
                    </tr>
      
                    <tr>
                      <td>Número atômico</td>
                      <td>106</td>
                    </tr>
      
                    <tr>
                      <td>Massa atômica</td>
                      <td>[266]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>14</sup> 6d<sup>14</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
              `;
      } else if (i === 107) {
        infoh2.innerHTML = "Bóhrio";
        infoP.innerHTML = `
              <div class="box-info ">
                <div class="simbolo metal-transicao metais">
                  <h1>Bh</h1>
                  <p>Bóhrio</p>
                  <p class="diminui-fonte1">
                    <span>107</span> &nbsp; [264]
                  </p>
                </div>
                
                <div class="box-info2">
                  <table>
                    <tr>
                      <td>Símbolo</td>
                      <td>Bh</td>
                    </tr>
      
                    <tr>
                      <td>Número atômico</td>
                      <td>107</td>
                    </tr>
      
                    <tr>
                      <td>Massa atômica</td>
                      <td>[264]</td>
                    </tr>
      
                    <tr>
                      <td>Configuração eletrônica</td>
                      <td>[Rn] 5f<sup>14</sup> 6d<sup>5</sup> 7s<sup>2</sup></td>
                    </tr>
                  </table>
                </div>
              </div>
              `;
      } else if (i === 108) {
        infoh2.innerHTML = "Hássio";
        infoP.innerHTML = `
              <div class="box-info ">
                <div class="simbolo propriedades-quimicas-desconhecidas metais">
                  <h1>Hs</h1>
                  <p>Hássio</p>
                  <p class="diminui-fonte1">
                    <span>108</span> &nbsp; [277]
                  </p>
                </div>
                
                <div class="box-info2">
                  <table>
                    <tr>
                      <td>Símbolo</td>
                      <td>Hs</td>
                    </tr>
      
                    <tr>
                      <td>Número atômico</td>
                      <td>108</td>
                    </tr>
      
                <tr>
                  <td>Massa atômica</td>
                  <td>[277]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>6</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 109) {
        infoh2.innerHTML = "Meitnério";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Mt</h1>
              <p>Meitnério</p>
              <p class="diminui-fonte1">
                <span>109</span> &nbsp; [268]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Mt</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>109</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[268]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>7</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 110) {
        infoh2.innerHTML = "Darmstádio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Ds</h1>
              <p>Darmstádio</p>
              <p class="diminui-fonte1">
                <span>110</span> &nbsp; [271]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ds</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>110</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[271]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>9</sup> 7s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 111) {
        infoh2.innerHTML = "Roentgênio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-transicao metais">
              <h1>Rg</h1>
              <p>Roentgênio</p>
              <p class="diminui-fonte1">
                <span>111</span> &nbsp; [272]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Rg</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>111</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[272]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 112) {
        infoh2.innerHTML = "Copernício";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo metais-transicao metais">
              <h1>Cn</h1>
              <p>Copernício</p>
              <p class="diminui-fonte1">
                <span>112</span> &nbsp; [277]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Cn</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>112</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[277]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 113) {
        infoh2.innerHTML = "Nihônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Nh</h1>
              <p>Nihônio</p>
              <p class="diminui-fonte1">
                <span>113</span> &nbsp; [286]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Nh</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>113</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[286]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>1</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 114) {
        infoh2.innerHTML = "<span>Fl</span>eróvio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Fl</h1>
              <p>Fleróvio</p>
              <p class="diminui-fonte1">
                <span>114</span> &nbsp; [289]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Fl</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>114</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[289]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>2</sup></td>
                </tr>
              </table>
            </div>
          </div>
          `;
      } else if (i === 115) {
        infoh2.innerHTML = "Moscóvio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Mc</h1>
              <p>Moscóvio</p>
              <p class="diminui-fonte1">
                <span>115</span> &nbsp; [288]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Mc</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>115</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[288]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>3</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 116) {
        infoh2.innerHTML = "Livermório";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Lv</h1>
              <p>Livermório</p>
              <p class="diminui-fonte1">
                <span>115</span> &nbsp; [293]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Lv</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>116</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[293]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>4</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 117) {
        infoh2.innerHTML = "Tenessino";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Ts</h1>
              <p>Tenessino</p>
              <p class="diminui-fonte1">
                <span>117</span> &nbsp; [294]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Ts</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>117</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[294]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>5</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      } else if (i === 118) {
        infoh2.innerHTML = "<span>Og</span>anessônio";
        infoP.innerHTML = `
          <div class="box-info ">
            <div class="simbolo propriedades-quimicas-desconhecidas metais">
              <h1>Og</h1>
              <p>Oganessônio</p>
              <p class="diminui-fonte1">
                <span>118</span> &nbsp; [294]
              </p>
            </div>
            
            <div class="box-info2">
              <table>
                <tr>
                  <td>Símbolo</td>
                  <td>Og</td>
                </tr>
  
                <tr>
                  <td>Número atômico</td>
                  <td>118</td>
                </tr>
  
                <tr>
                  <td>Massa atômica</td>
                  <td>[294]</td>
                </tr>
  
                <tr>
                  <td>Configuração eletrônica</td>
                  <td>[Rn] 5f<sup>14</sup> 6d<sup>10</sup> 7s<sup>2</sup> 7p<sup>6</sup></td>
                </tr>
              </table>
            </div>
          </div>
         `;
      }
    });

    const caixaInfo = document.querySelector(".caixa");
    periodos.addEventListener("mouseout", () => {
      infoh2.innerHTML = "Tabela Periódica";
      infoP.innerHTML =
        "A Tabela Periódica é um modelo que agrupa todos os elementos químicos conhecidos e suas propriedades. Eles estão organizados em ordem crescente correspondente aos números atômicos (número de prótons).";
    });
  }
}
