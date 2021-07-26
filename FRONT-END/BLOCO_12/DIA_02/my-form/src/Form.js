import React, { Component }from "react";
import './App.css'
class Form extends Component {
    constructor() {
        super()

        this.handleTextAreaChange = this.handleTextAreaChange.bind(this)

        this.state = { 
            nome: '',
            email: '',
            motivoParaCantar: '',
            idade: 0,
            vaiComparecer: false,
            ondeVocêCanta: ''
        }
    }

    handleTextAreaChange(event) {   
      this.setState({motivoParaCantar: event.target.value}) ;
    }
    render() {
        return(
        <div>
            <h1 className='title'>Entre para a Lista de espera</h1>
                <form className = 'form'>
                    <label>
                        Nome: 
                        <input type='text' name='nome'></input>
                    </label>

                    <label>
                        Email: 
                        <input type='text' name='email'></input>
                    </label>


                    <label>
                    Porque você quer cantar?
                    <textarea name='motivoParaCantar'value={this.state.motivoParaCantar} onChange={this.handleTextAreaChange}></textarea>
                    </label>
                    idade:
                    <input className = 'age'type='number' name='idade'>
                    </input>
                    <label>Você Já Canta?</label>
                    <label>
                          Sim
                         <input type='checkbox' name='vaiComparecer'></input>
                    </label>
                    <label>
                          Não
                         <input type='checkbox' name='vaiComparecer'></input>
                    </label>

                    <label>
                        Onde você costumar cantar?
                        <select name='ondeVocêCanta'>
                            <option value='igreja'>Igreja</option>
                            <option value='barzinho'>Barzinho</option>
                            <option value='chuveiro'>Chuveiro</option>
                        </select>
                    </label>
                </form>
        </div>
        )
    }
}

export default Form