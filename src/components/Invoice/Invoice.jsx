import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './index.css';

const Invoice = () => {
    const location = useLocation();
    const cnpjData = location.state.cnpjData;
    const contrato = location.state.contrato;

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
                <div className='border_color text-center font-semibold py-2 m-3 border-2 rounded-lg '>Dados da Nota Fiscal</div>
            <section>
                <div className='border_color border-2 m-3'>
                    Código do Contrato: {contrato.codigoContrato}
                </div>

                <div className='border_color border-2 m-3'>
                    Título: {contrato.titulo}
                </div>

                <div className='flex items-center'>
                    <input id="checkbox-table-search-3"
                    checked={contrato.retencaoImposto}
                    type="checkbox" className= 'w-4 h-4text-blue-600bg-gray-100 border-gray-300 rounded focus:ring-blue-500dark:focus:ring-blue-600dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800focus:ring-2dark:bg-gray-700 dark:border-gray-600'/>
                    <label htmlFor="checkbox-table-search-3" className='sr-only'>
                        checkbox
                    </label>
                </div>
            </section>

           <p className='text-center mt-8 py-8 text-gray-500 text-xs'>
            &copy;2022-2022. Construindo Patrimônios.</p>
        </section>
    )
}

export default Invoice