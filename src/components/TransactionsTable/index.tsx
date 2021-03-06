import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(()=> {
        api.get('transactions')
            .then(response => response.data);
    }, []);

    return (
       <Container>
           <table> 
               <thead>  
                   <tr>
                       <th>Título</th>
                       <th>Valor</th>
                       <th>Categoria</th>
                       <th>Data</th>
                   </tr>
               </thead>

               <tbody>
                   <tr>
                       <td>Desenvolvimento Site</td>
                       <td className="deposit">RS 10.000</td>
                       <td>Desenvolvimento</td>
                       <td>20/02/2021</td>
                   </tr>
                   <tr>
                       <td>Desenvolvimento Site</td>
                       <td className="withdraw">RS 10.000</td>
                       <td>Desenvolvimento</td>
                       <td>20/02/2021</td>
                   </tr>
               </tbody>

           </table>
       </Container>
    )
}