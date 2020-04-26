import React, { Component } from 'react';
import ContentHeader from './../../common/template/contentHeader';
import Content from './../../common/template/content';
import List from './list';
import Form from './form';

export default class Alunos extends Component {
    render(){
        return (
            <div>
                <ContentHeader title="Alunos" subtitle="Versão 1.0" />
                <div className="row">
                    <Content>
                        <Form />
                        <List />
                    </Content>
                </div>
            </div>
        );
    }
}
