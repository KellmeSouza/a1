//importando as imagens
import img1 from './img/slide1.jpeg';
import mob1 from './img/mob1.jpeg';
import img2 from './img/slide2.png';
import mob2 from './img/mob2.png';
import img3 from './img/slide3.jpg';
import mob3 from './img/mob3.jpg';
//importado as imagens
import './App.css';

function App() {
  return (

  <div id="corpo" className="corpo">
      {  /* começo do corpo do codigo */}
    { /* lembrando essa é a estrutura HTML da pagina adaptada para jsx,
     a app.css é estilo e o index.js estenções de js e o index.css estilo das estenções js */}
    
   <section id="menu" className="menu">
       {/* lembrando essa é a estrutura HTML da pagina adaptada para jsx */}
      {/* barra de menu do codigo respansivo ao maximo */}
      <div>
      <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/af562a2a63.js" crossOrigin="anonymous"></script>
      <div className="container">
        <div className="menu-content">
          <label className="open-menu-all" htmlFor="open-menu-all">
            <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open" />
            <div className="navegacao-mobile">
              <span className="linha-menu"></span>
              <span className="linha-menu"></span>
              <span className="linha-menu"></span>
            </div>
            <ul className="list-menu">
              <li className="item-menu">
                <a href="#home" target="_blank" className="link-menu">INICIO</a>
              </li>
              <li className="item-menu">
                <a href="#sobre" target="_blank" className="link-menu">SOBRE</a>
              </li>
              <li className="item-menu">
                <a href="#servicos" target="_blank" className="link-menu">SERVIÇOS</a>
              </li>
              <li className="item-menu">
                <a href="#contato" target="_blank" className="link-menu">CONTATO</a>
              </li>
              <li className="item-menu">
                <a href="#endereço" target="_blank" className="link-menu">ENDEREÇO</a>
              </li>
            </ul>
          </label>
        </div>
      </div>

      <div style={{ display: 'block', margin: '0 auto', textAlign: 'center', marginTop: '50px' }}>
        <script src="https://apis.google.com/js/platform.js"></script>
        <div className="g-ytsubscribe" data-channelid="UCpXTlrDWlpN46PKieJ-FcPw" data-layout="full" data-count="hidden"></div>
      </div>
    </div>
  

{/*final do menu respansivo*/}
   </section>
    {/* lembrando essa é a estrutura HTML da pagina adaptada para jsx */}
   {/* carrocel para que mostre as imagens iniciais deixando interativo */}
   <div id="carrocel" classname="carrocel">
   <section className="slider" id="slider">
        <div className="slider-content">
          <input type="radio" name="btn-radio" id="radio1" />
          <input type="radio" name="btn-radio" id="radio2" />
          <input type="radio" name="btn-radio" id="radio3" />

          <div className="slide-box primeiro">
            <img className="img-desktop" src={img1} alt="slide 1" />
            <img className="img-mobile" src={mob1} alt="slide 1" />
          </div>

          <div className="slide-box">
            <img className="img-desktop" src={img2} alt="slide 2" />
            <img className="img-mobile" src={mob2} alt="slide 2" />
          </div>

          <div className="slide-box">
            <img className="img-desktop" src={img3} alt="slide 3" />
            <img className="img-mobile" src={mob3} alt="slide 3" />
          </div>

          <div className="nav-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>

          <div className="nav-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
          </div>
        </div>
      </section>
   </div>
 
   <div id="conteudo" classname="conteudo">
         {/* lembrando essa é a estrutura HTML da pagina adaptada para jsx */}
   {/* conteudo da pagina */}
   <section id="home">
        <div className="container1">
          <h2 className="D"id="D">INICIO</h2>
          <p>Bem-vindo à nossa página inicial de consultoria! Aqui, oferecemos soluções personalizadas e inovadoras para atender às suas necessidades de negócio. Somos uma equipe de consultores altamente capacitados e experientes, prontos para auxiliá-lo a alcançar seus objetivos com sucesso.</p>
          
        </div>
      </section>

      <section id="sobre">
        <div className="container1">
          <h2 className="D"id="D">SOBRE</h2>
          <p>Somos uma empresa familiar especializada em legalização de imóveis. Atendemos principalmente clientes em regiões mais periféricas, como São Gonçalo e Baixada, que construíram suas casas sem dar entrada na prefeitura e agora precisam regularizar a situação. Oferecemos serviços completos, desde medição do terreno, elaboração de plantas, até o acompanhamento do processo de legalização junto à prefeitura.</p>
</div>
</section>
{/* final do conteudo da pagina */}
   </div>
    {/* lembrando essa é a estrutura HTML da pagina adaptada para jsx */}
   {/* rodape da pagina */}
   <selection id="rodape" className="rodape"></selection>
    {/* lembrando essa é a estrutura HTML da pagina adaptada para jsx */}
   </div>
   );
}
// Converting the jQuery/CoffeeScript code to JavaScript
//alteração menu js


export default App;
