import React from 'react';
import './style.css';

export default props => {

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th className='table-actions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>Francisco Alfredo Costa</td>
                        <td>98596248</td>
                        <td>diiegopaiivam@gmail.com</td>
                        <th className='table-actions'>Ações</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Francisco Alfredo Costa</td>
                        <td>98596248</td>
                        <td>diiegopaiivam@gmail.com</td>
                        <th className='table-actions'>Ações</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Francisco Alfredo Costa</td>
                        <td>98596248</td>
                        <td>diiegopaiivam@gmail.com</td>
                        <th className='table-actions'>Ações</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Francisco Alfredo Costa</td>
                        <td>98596248</td>
                        <td>diiegopaiivam@gmail.com</td>
                        <th className='table-actions'>Ações</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Francisco Alfredo Costa</td>
                        <td>98596248</td>
                        <td>diiegopaiivam@gmail.com</td>
                        <th className='table-actions'>Ações</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}