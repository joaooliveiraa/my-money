import styled from "styled-components";

export const Container  = styled.div`
    margin-top: 4rem;

    table {
        width: 100%; /*Fazer a tabela ocupar todo o espaço*/
        border-spacing: 0 0.5rem; /*Bem comun para dar espaçamento entre os elementos da tabela */

        th {
           color: var(--text-body);
           font-weight: 400;
           padding: 1rem 2rem;
           text-align: left;
           line-height: 1.5rem;     
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);

            &:first-child {
                color: var(--text-title);
            }

            &:deposit {
                color: var(--blue)
            }
        }
    }

`;