        import React, { useState, useEffect } from 'react';
        import { useNavigate } from "react-router-dom";
        import './index.css';

        const CnpjSearch=() => {
            const [cnpj, setCnpj] = useState('');
            const navigate = useNavigate();
                function test(value){
                    if (value === "") {
                        alert('preencha algo')
                    }
                    const validcnpj = cnpjValidation(value)
                    if (validcnpj) {
                        navigate("/contracts");
                    }
                }
                
                function cnpjValidation(value) {
                   return true 
                    
                
                    
                }
                
                return (
                    <section className='w-full max-w-lg justify-center m-auto'>
                    <form className='margin fundo-branco shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <img src="./src/assets/img/logo.png" alt="Logo VFLOWS" className= 'logo mb-10' />
                    <div className='mb-4 justify-center'>
                        <h1 className='text-3xl font-bold text-gray-900 md:text-1xl lg:text-2xl mb-10'><p className='text-center'>Pagamentos de Fornecedores</p></h1>
                        <label className='text-gray-700 text-lg font-bold mb-2'>
                        CNPJ</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text"
                        value= {cnpj}
                        onChange= {(event)=>setCnpj(event.target.value)}
                        placeholder="Digite aqui o seu CNPJ" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button onClick={()=>test(cnpj)} className='botao text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Avançar</button>
                    </div>
                </form>   
            <p className='text-center text-gray-500 text-xs'>
            &copy;2023 Acme Corp. All rights reserved.
            </p>
        </section>
        )
            
        }
        export default CnpjSearch