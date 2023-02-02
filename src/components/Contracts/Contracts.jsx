import React, { useState, useEffect } from 'react';
import {cnpjDetails} from '../../uteis/cnpjDatails'
import { useLocation, useNavigate } from "react-router-dom";
import './index.css';

    const Contracts = () => {
        const location = useLocation();
        const cnpjValue = location.state.cnpj;
        const [cnpjData, setCnpjData] = useState(
            { 
                razaoSocial: "Não existe razão social cadastrada", 
                nomeFantasia: "Não existe nome fantasia cadastrada",
                cnpj: cnpjValue,
                contratos: [
                    {
                        retencaoImposto: false,
                        retencaoTecnica: "",
                        nomeDoContrato: "",
                        codigoContrato: "",
                        dadosRetencaoImposto: {
                            issqn: "",
                            irrf: "",
                            csll: "",
                            cofins: "",
                            inss: "",
                            pis: ""
                        },
                        dadosRetencaoTecnica: {
                            valor: "",
                            Percentual: ""
                        },
                        valor: "339.30",
                        numeroNota: "851",
                        dtEmicao: "26/02/2013",
                        dtVencimento: "15/03/2013",
                        titulo: "Exemplo de titulo"
                    }
                ]
            }
        )

        useEffect(() => { 
            const cnpjArray = cnpjDetails()
            // map => retorna algo
            // forEach => retorna nada
            
            cnpjArray.forEach ((cnpj) => { 
                if (cnpj.cnpj === cnpjValue){
                    const object = {
                        razaoSocial: cnpj.razaoSocial,
                        nomeFantasia: cnpj.nomeFantasia,
                        cnpj: cnpj.cnpj,
                        contratos: cnpj.contratos
                    }

                    setCnpjData(object)
                }
            }) 

         }, [])

        const navigate = useNavigate();
        // const [countCheck, setCountCheck] = useState(0)

        const [contrato, setContrato] = useState({});

        function goBack() {
            navigate("/");
        }

        function next(
            cnpjData,
            contrato
        ) {
            if (Object.keys(contrato).length === 0) {
                alert("Selecione um contrato");
                return
            }

            navigate(
                "/invoice", 
                {
                    state: { cnpjData, contrato }
                }
            )
        }
        
        return (
                <section className='fundo-branco m-6 justify-center m-auto px-5'>
                    <div className='flex justify-center'>
                    <img src="./src/assets/img/logo.png" alt="Logo VFlows" className='logo_contracts m-5 w-32 pt-6'/>
                        <div>
                            <h1 className='font-medium uppercase text-5xl pt-6 m-5 pl-40'><p className=''>Pagamento de fornecedor</p></h1> 
                        </div>
                    </div>
                    <section className='m-3'>
                        <div className='border_color sm:columns-2 py-2 px-2 border-2 rounded-lg'>
                            <p className='font-medium'>Razão social: {cnpjData.razaoSocial}</p>
                            <p className='font-medium'>Nome Fantasia: {cnpjData.nomeFantasia}</p> 
                            <p className='font-medium pl-44'>CNPJ: {cnpjData.cnpj}</p>
                        </div> 
                    </section>
                        <div className='border_color text-center font-semibold py-2 m-3 border-2 rounded-lg '>Contratos Vinculados</div>
                    <section>   
                        <div className='border_color-background relative overflow-x-auto shadow-md sm:rounded-lg'>
                            <table className=' w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400'>
                            <tr className='color border-2 pt-8 text'>
                                <th scope="col" className='p-4'>
                                </th>
                                    <th scope="col" className='px-6 py-3'>
                                    Nome do Contrato
                                    </th>
                                    <th scope="col" className= 'px-6 py-3'>
                                    Código do Contrato
                                    </th>
                                    <th scope="col" className='px-6 py-3'>
                                    Retençao Técnica
                                    </th>
                                    <th scope="col" className='px-6 py-3'>
                                    Detalhes
                                    </th>
                            </tr>
                    </thead>
            <tbody>
                {
                    cnpjData.contratos.map((item) => {
                        return (
                            <div>
                                {
                                    item.codigoContrato === ""
                                    ?

                                    <h1>CNPJ não cadastrada</h1>

                                    :

                                    <tr key = {item.codigoContrato}
                                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                       <td className= 'w-4 p-4'>
                                           <div className='flex items-center'>
                                               <input id="checkbox-table-search-3" type="checkbox" className= 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                                               onChange={(event) => event.target.checked ? setContrato(item) : setContrato({})}
                                               />
       
                                               <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
                                           </div>
                                       </td>
                                           <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                           {item.nomeDoContrato}
                                           </th>
                                           <td className='px-6 py-4'>
                                           {item.codigoContrato}
                                           </td>
                                           <td className='px-6 py-4'>
                                           {item.retencaoTecnica}
                                           </td>
                                           <td className='px-6 py-4'>
                                           Yes
                                       </td>
                                   </tr>
                                }
                            </div>
                        )
                    })
                }
            </tbody>
        </table>
    </div>

    <div className='flex justify-end m-6'>
                    <button  onClick={()=>goBack()} className='button_previous font-bold text' type='button'>Anterior </button>
                    <button onClick={()=>next({
                            razaoSocial: cnpjData.razaoSocial,
                            nomeFantasia: cnpjData.nomeFantasia,
                            cnpj: cnpjData.cnpj,
                        }, 
                        contrato
                    )}
                     className='button_next text font-bold py-2' type='button'>Próximo</button>
                    <img src="./src/assets/img/logo.png" alt="Logo VFlows" className='logo_contracts m-8 w-32 '/>
                </div>
                
        </section>
            <p className='text-center mt-8 py-8 text-gray-500 text-xs'>
                &copy;2022-2022. Construindo Patrimônios.</p>
                </section>
    )  
    }

    export default Contracts