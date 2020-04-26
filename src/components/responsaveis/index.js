import React, { Component } from 'react';
import ContentHeader from './../../common/template/contentHeader';
import Content from './../../common/template/content';

export default class Responsaveis extends Component {
    render(){
        return (
            <div>
                <ContentHeader title="Responsaveis" subtitle="Versão 1.0" />
                <Content>
                    Lista de Responsáveis
                </Content>
            </div>
        );
    }
}
