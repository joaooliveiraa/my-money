import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F5;
        --shape: #DCDCDC;
    }

    * {
        margin:0;   /*Reset Padrão*/ 
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) { /*quando o tamanho da tela for 1080 seta os parametros entre chaves*/
            font-size: 93.75%; //15px
        }
        @media(max-width: 720px) { /*Outro tamanho para tela 720px*/
            font-size: 87.5%;
        }
    }
 
    body {
        background: (--background); /*Utilizando a variavel declarada no :root*/
        --webkit-font-smoothing: antialiased; /*Fontes mais detalhadas*/ 
    }

    body, input, textarea, button {  /*para o input, textarea, button sobreescrever a fonte e existente e usar a definida*/ 
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600
    }

    button {
        cursor: pointer; /*Para o botão ser clicado*/ 
    }

    [disabled] {        /*Exibir icone quue de proibido quando disabled*/ 
        opacity: 0.6;
        cursor: not-allowed;
    }
`   
