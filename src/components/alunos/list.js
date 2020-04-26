import React from 'react';
import './style.css';

export default props => {

    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Serie</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>01</th>
                    <td>Francisco</td>
                    <td>chico@sdfhsduf</td>
                    <td>85 998789645</td>
                    <td>6º ano</td>
                    <td className="table-actions">Ações</td>
                </tr>
                <tr>
                    <th>01</th>
                    <td>Francisco</td>
                    <td>chico@sdfhsduf</td>
                    <td>85 998789645</td>
                    <td>6º ano</td>
                    <td className="table-actions">Ações</td>
                </tr>
                <tr>
                    <th>01</th>
                    <td>Francisco</td>
                    <td>chico@sdfhsduf</td>
                    <td>85 998789645</td>
                    <td>6º ano</td>
                    <td className="table-actions">Ações</td>
                </tr>
                <tr>
                    <th>01</th>
                    <td>Francisco</td>
                    <td>chico@sdfhsduf</td>
                    <td>85 998789645</td>
                    <td>6º ano</td>
                    <td className="table-actions">Ações</td>
                </tr>
            </tbody>
        </table>
    );
}