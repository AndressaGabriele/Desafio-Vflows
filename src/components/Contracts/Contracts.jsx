import React, { useState, useEffect } from 'react';
import './index.css';

    const Contracts = () => {
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
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className= 'w-4 p-4'>
                        <div className='flex items-center'>
                            <input id="checkbox-table-search-3" type="checkbox" className= 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
            
                        </div>
                    </td>
                        <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Apple MacBook Pro 17"
                        </th>
                        <td className='px-6 py-4'>
                        Sliver
                        </td>
                        <td className='px-6 py-4'>
                        Laptop
                        </td>
                        <td className='px-6 py-4'>
                        Yes
                        </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className= 'w-4 p-4'>
                        <div className='flex items-center'>
                            <input id="checkbox-table-search-2" type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                            <label htmlFor="checkbox-table-search-2" className='sr-only'>checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Microsoft Surface Pro
                    </th>
                    <td className='px-6 py-4'>
                        White
                    </td>
                    <td className='px-6 py-4'>
                        Laptop PC
                    </td>
                    <td className='px-6 py-4'>
                        No
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className='w-4 p-4'>
                        <div className='flex items-center'>
                            <input id="checkbox-table-search-3" type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                            <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Magic Mouse 2
                    </th>
                    <td className='px-6 py-4'>
                        Black
                    </td>
                    <td className='px-6 py-4'>
                        Accessories
                    </td>
                    <td className='px-6 py-4'>
                        Yes
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className='w-4 p-4'>
                        <div className= 'flex items-center'>
                            <input id="checkbox-table-search-3" type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                            <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Apple Watch
                    </th>
                    <td className='px-6 py-4'>
                        Black
                    </td>
                    <td className='px-6 py-4'>
                        Watches
                    </td>
                    <td className='px-6 py-4'>
                        Yes
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className='w-4 p-4'>
                        <div className='flex items-center'>
                            <input id="checkbox-table-search-3" type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                            <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Apple iMac
                    </th>
                    <td className= 'px-6 py-4'>
                        Silver
                    </td>
                    <td className= 'px-6 py-4'>
                        PC
                    </td>
                    <td className= 'px-6 py-4'>
                        Yes
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className='w-4 p-4'>
                        <div className='flex items-center'>
                            <input id="checkbox-table-search-3" type="checkbox" className= 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Apple AirPods
                    </th>
                    <td className='px-6 py-4'>
                        White
                    </td>
                    <td className='px-6 py-4'>
                        Accessories
                    </td>
                    <td className='px-6 py-4'>
                        No
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 '>
                <td className='w-4 p-4'>
                        <div className='flex items-center'>
                            <input id="checkbox-table-search-3" type="checkbox" className= 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                            <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
                        </div>
                    </td>
                    
                    
                    <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        iPad Pro
                    </th>
                    <td className='px-6 py-4'>
                        Gold
                    </td>
                    <td className='px-6 py-4'>
                        Tablet
                    </td>
                    <td className='px-6 py-4'>
                        No
                    </td>
                </tr>
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <td className='w-4 p-4'>
                        <div className='flex items-center'>
                            <input id="checkbox-table-search-3" type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                            <label htmlFor="checkbox-table-search-3" className='sr-only'>checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Magic Keyboard
                    </th>
                    <td className='px-6 py-4'>
                        Black
                    </td>
                    <td className='px-6 py-4'>
                        Accessories
                    </td>
                    <td className='px-6 py-4'>
                        Yes
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div className='flex justify-end m-6'>
                    <button  onClick={()=>test()} className='button_previous font-bold text' type='button'>Anterior </button>
                    <button onClick={()=>test()} className='button_next text font-bold py-2' type='button'>Próximo</button>
                    <img src="./src/assets/img/logo.png" alt="Logo VFlows" className='logo_contracts m-8 w-32 '/>
                </div>
                
        </section>
            <p className='text-center mt-8 py-8 text-gray-500 text-xs'>
                &copy;2022-2022. Construindo Patrimônios.</p>
                </section>
    )  
    }

    export default Contracts