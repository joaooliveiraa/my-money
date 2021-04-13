import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /*Repetir 3 vezes 1fr | e deixar em colunas*/
    gap: 2rem; /*Espaço entre eles*/
    margin-top: -10rem; /*Sobrepor o container de cima*/

    div { /* Estizar todas as divs que estão dentro do Container*/
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
    
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        strong {
            display: block; /*Para remover a estilização padrão do strong e fazer se comportar igual a div*/
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }


`;