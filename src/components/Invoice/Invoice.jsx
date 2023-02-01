import React, { useState, useEffect } from 'react';
import './index.css';

const Invoice = () => {
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
                        <p className='font-medium'>Razão social</p>
                        <p className='font-medium'>Nome Fantasia</p> 
                        <p className='font-medium pl-44'>CNPJ</p>
                    </div> 
                </section>
                    <div className='border_color text-center font-semibold py-2 m-3 border-2 rounded-lg '>Dados da Nota Fiscal</div>
                <section>
                    <div className='border_color border-2 m-3'>
                        Código do Contrato
                    </div>
                    </section>    
                
           <p className='text-center mt-8 py-8 text-gray-500 text-xs'>
            &copy;2022-2022. Construindo Patrimônios.</p>
            </section>
)  
}

export default Invoice