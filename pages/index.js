import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
	  <Head>
      {/*Metadados*/}
      <meta charSet="UTF-8" />
      <meta name="author" content="Desenvolvido por Gustavo Ferreira" />
      <meta
        name="description"
        content="Venham e conheçam um pouco sobre minha carreira e experiência. Currículo Vitae de Gustavo Ferreira, apresentando seus projetos e aplicações na area de informatica."
      />
      <meta
        name="keywords"
        content="cv, currículo, vitae, informatica, web designer, desenvolvedor, gustavo"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/*Links*/}
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
	  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
	  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
	  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
	  <link rel="manifest" href="/site.webmanifest"/>
	  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#603cba"/>
	  <meta name="msapplication-TileColor" content="#603cba"/>
	  <meta name="theme-color" content="#ffffff"/>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        html, body, h1, h2, h3, h4, h5, h6{\n\tfont-family: "Roboto", sans-serif;\n}\n        ',
        }}
      />
      {/*Titulo da Página*/}
      <title>Currículo Vitae | Gustavo Ferreira</title>
	  </Head>
      {/*Conteiner da Pagina*/}
      <div className="w3-content w3-margin-top larg-pagina">
        {/*Grid da Pagina*/}
        <div className="w3-row-padding">
          {/*Coluna da Esquerda*/}
          <div className="w3-third">
            {/*Bloco da Esquerda*/}
            <div className="w3-content w3-card w3-white w3-margin-bottom">
              {/*Bloco da Esquerda*/}
              <div className="w3-container w3-white text-grey w3-grid-4">
                {/*Display da Imagem*/}
                <div className="w3-display-container">
                  {/*Imagem do Perfil*/}
                  <img
                    src="/perfil.jpg"
                    alt="Gustavo Ferreira"
                    style={{width:'75%'}}
                  />
                  {/*Nome do perfil*/}
                  <div className="w3-display-bottomleft w3-container w3-text-white">
                    <h2>Gustavo Ferreira</h2>
                  </div>
                </div>
                {/*Conteúdo da Esquerda*/}
                <div className="w3-container">
                  {/*Profissão ou Estado de Formação*/}
                  <p>
                    <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
                    Engenheiro da Computação
                  </p>
                  {/*Residência*/}
                  <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />
                    Salto-SP, Brasil
                  </p>
                  {/*Endereço de Email*/}
                  <p>
                    <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
                    gfmb94@gmail.com
                  </p>
                  {/*Telefone*/}
                  <p>
                    <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
                    (11)99722-3714
                  </p>
                  <hr />
                  {/*Subtítulo de Habilidades*/}
                  <p className="w3-large"></p>
                  <h3 className="w3-text-grey">
                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-large w3-text-teal" />
                    Habilidades
                  </h3>
                  <p />
                  {/*1º Habilidade*/}
                  <p>Adobe Photoshop</p>
                  {/*Barrinha Cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: '70%' }}
                    >
                      70%
                    </div>
                  </div>
                  {/*2º Habilidade*/}
                  <p>Adobe Illustrator</p>
                  {/*Barrinha Cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: '80%' }}
                    >
                      80%
                    </div>
                  </div>
                  {/*3º Habilidade*/}
                  <p>Adobe Premiere</p>
                  {/*Barrinha Cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: '90%' }}
                    >
                      90%
                    </div>
                  </div>
                  {/*4º Habilidade*/}
                  <p>HTML e CSS</p>
                  {/*Barrinha Cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: '100%' }}
                    >
                      100%
                    </div>
                  </div>
                  {/*Subtítulo de Habilidades*/}
                  <p className="w3-large"></p>
                  <h3 className="w3-text-grey ">
                    <i className="fa fa-asterisk fa-fw w3-margin-right w3-large w3-text-teal" />
                    Idiomas
                  </h3>
                  <p />
                  {/*1º Idioma*/}
                  <p>Inglês</p>
                  {/*Barrinha Cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: '40%' }}
                    >
                      40%
                    </div>
                  </div>
                  {/*2º Idioma*/}
                  <p>Espanhol</p>
                  {/*Barrinha Cinza*/}
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    {/*Barrinha verde*/}
                    <div
                      className="w3-container w3-center w3-round-xlarge w3-teal"
                      style={{ width: '70%' }}
                    >
                      70%
                    </div>
                  </div>
                  <br />
                </div>
                <br />
              </div>
            </div>
          </div>
          <div className="w3-twothird">
            {/*Bloco da experiência*/}
            <div className="w3-content w3-card w3-white w3-margin-bottom">
              {/*Experiências*/}
              <h2 className="w3-container w3-text-grey w3-padding-16">
                {/*Icone Experiência*/}
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Experiências
              </h2>
              {/*Container das experiências*/}
              <div className="w3-container">
                <h5 className="w3-text-grey">
                  <b>Professor de Informatica | Microcamp</b>
                </h5>
                <h6>
                  <i className="fa fa-calendar fa-fw w3-text-teal" />
                  Out-2017
                  {/*Box verde*/}
                  <span className="w3-round w3-tag w3-teal">Atualmente</span>
                </h6>
                {/*Descrição da Experiência*/}
                <p>
                  Monitoramento e desenvolvimento de aulas didáticas em
                  programação web, desenvolvimento mobile, designer gráfico e
                  informática. Linguagens: Java (EE, SE, SF e SP) e Python. SGBD
                  MySQL. Desenvolvimento web: HTML CSS3 JavaScript.
                  Desenvolvimento Mobile: Cordova, React Native e Phonegap.
                  Design Grafico: Illustrator, Photoshop, Corel Draw, Premiere,
                  DreamWeaver, Animation, Muse.
                </p>
              </div>
              {/*Container das expderiências*/}
              <div className="w3-container">
                <h5 className="w3-text-grey">
                  <b>Professor de Informatica para Internet | Proz</b>
                </h5>
                <h6>
                  <i className="fa fa-calendar fa-fw w3-text-teal" />
                  Out-2022
                  {/*Box verde*/}
                  <span className="w3-round w3-tag w3-teal">Atualmente</span>
                </h6>
                {/*Descrição da Experiência*/}
                <p>
                  Monitoramento e desenvolvimento de aulas didáticas em
                  programação web, desenvolvimento mobile, designer gráfico e
                  informática. Linguagens: Java (EE, SE, SF e SP) e Python. SGBD
                  MySQL. Desenvolvimento web: HTML CSS3 JavaScript.
                  Desenvolvimento Mobile: Cordova, React Native e Phonegap.
                  Design Grafico: Illustrator, Photoshop, Corel Draw, Premiere,
                  DreamWeaver, Animation, Muse.
                </p>
              </div>
              {/*Container das expderiências*/}
              <div className="w3-container">
                <h5 className="w3-text-grey">
                  <b>Auxiliar de Produção | Autonomo</b>
                </h5>
                <h6>
                  <i className="fa fa-calendar fa-fw w3-text-teal" />
                  Out-2019 até Out-2020
                </h6>
                {/*Descrição da Experiência*/}
                <p>
                  Montando peçinhas de brinquedo para empresa de pequeno porte.
                  Tipo de trabalho freelance, para ajudar nos custos do meu
                  estudo e na situação financeira de casa.
                </p>
              </div>
            </div>
            {/*Bloco Educação*/}
            <div className="w3-content w3-card w3-white w3-margin-bottom">
              {/*Educação*/}
              <h2 className="w3-container w3-text-grey w3-padding-16">
                {/*Icone Educação*/}
                <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Educação
              </h2>
              {/*Container de Educação*/}
              <div className="w3-container">
                {/*Descrição da Formação*/}
                <h5 className="w3-opacity">
                  <b>Engenharia de Software | Faculdade Anhanguera</b>
                </h5>
                {/*Data da Formação*/}
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-text-teal" />
                  2021 - 2022
                </h6>
                {/*Resulmo da Formação*/}
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Maecenas porttitor congue massa. Fusce posuere, magna sed
                  pulvinar ultricies, purus lectus malesuada libero, sit amet
                  commodo magna eros quis urna. Nunc viverra imperdiet enim.
                  Fusce est. Vivamus a tellus.
                </p>
              </div>
              {/*Container de Educação*/}
              <div className="w3-container">
                {/*Descrição da Formação*/}
                <h5 className="w3-opacity">
                  <b>Engenharia da Computação | FACTS</b>
                </h5>
                {/*Data da Formação*/}
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-text-teal" />
                  2014 - 2019
                </h6>
                {/*Resulmo da Formação*/}
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Proin pharetra nonummy
                  pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec
                  laoreet nonummy augue.
                </p>
              </div>
              {/*Container de Educação*/}
              <div className="w3-container">
                {/*Descrição da Formação*/}
                <h5 className="w3-opacity">
                  <b>Teécnico em Logistica | ETEC</b>
                </h5>
                {/*Data da Formação*/}
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-text-teal" />
                  2011 - 2012
                </h6>
                {/*Resulmo da Formação*/}
                <p>
                  Suspendisse dui purus, scelerisque at, vulputate vitae,
                  pretium mattis, nunc. Mauris eget neque at sem venenatis
                  eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse
                  dapibus lorem pellentesque magna. Integer nulla.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
