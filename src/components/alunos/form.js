import React from 'react';
import Grid from './../../common/layouts/Grid';
import './style.css';

export default props => {

    return (
        <div role="form" className="Form">
            <Grid cols="12 9 10">
                <label>Série do aluno</label>
                <input 
                    id="serie"
                    className="form-control"
                    placeholder="Serie do aluno"
                />  
            </Grid>
    
            <Grid cols="12 3 2">
                <button className="btn btn-success" >
                    <i className="fa fa-search"></i>
                </button>
            </Grid>
        </div>
    )
}