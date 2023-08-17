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
                <a href="#home" className="link-menu">INICIO</a>
              </li>
              <li className="item-menu">
                <a href="#sobre" className="link-menu">SOBRE</a>
              </li>
              <li className="item-menu">
                <a href="#servicos" className="link-menu">SERVIÇOS</a>
              </li>
              <li className="item-menu">
                <a href="#contato"  className="link-menu">CONTATO</a>
              </li>
              <li className="item-menu">
                <a href="#endereço"  className="link-menu">ENDEREÇO</a>
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
   {/* MAPA */}
   <section id="endereço">
        <div className="container2">
          <h2 className="D"id="D" >ENDEREÇO</h2>
          
          <iframe    className="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.370670453591!2d-43.05230452558537!3d-22.825771834978937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999ae547056747%3A0xa1a900ebfa2f27d!2sR.%20Dr.%20Fel%C3%ADciano%20Sodr%C3%A9%2C%2078%20-%20sala%201710%20-%20Centro%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024440-440!5e0!3m2!1spt-BR!2sbr!4v1690235194642!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: "1px solid #ccc" }} 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
           
          </iframe>
          <p>Endereço: R. Dr. Felíciano Sodré, 78 - sala 1710 - Centro, São Gonçalo<br/> - RJ, 24440-000</p>
          <p>Telefone: (21) 97159-6965 </p>
        </div>
      </section>

   {/* inicio rodape */}
   <selection id="rodape" className="rodape">

   <footer className="footer">
  <div className="rodape">
    <p> &copy; 2023 Aniceto </p>
          
  </div>
</footer>

   </selection>
    {/* lembrando essa é a estrutura HTML da pagina adaptada para jsx */}
   </div>
   );
}
// Converting the jQuery/CoffeeScript code to JavaScript
//alteração menu js


export default App;
