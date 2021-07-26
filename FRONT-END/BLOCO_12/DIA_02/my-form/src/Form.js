import React, { Component }from "react";
import './App.css'
class Form extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)

        this.state = { 
            nome: '',
            email: '',
            motivoParaCantar: '',
            idade: 0,
            voceJaCanta: false,
            ondeVocêCanta: ''
        }
    }

    handleChange({target}) {
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
          [name]:value}) ;
    }
    render() {
        return(
        <div>
            <h1 className='title'>Entre para a Lista de espera</h1>
                <form className = 'form'>
                    <label>
                        Nome: 
                        <input type='text' name='nome' value={this.state.nome} onChange={this.handleChange}></input>
                    </label>

                    <label>
                        Email: 
                        <input type='text' name='email' value={this.state.email} onChange={this.handleChange}></input>
                    </label>


                    <label>
                    Porque você quer cantar?
                    <textarea name='motivoParaCantar'value={this.state.motivoParaCantar} onChange={this.handleChange}></textarea>
                    </label>
                    idade:
                    <input className = 'age'type='number' name='idade' value={this.state.idade} onChange={this.handleChange}>
                    </input>
                    <label>Você Já Canta?</label>
                    <label>
                          Sim
                         <input type='checkbox' name='vaiComparecer' value={this.state.vaiComparecer} onChange={this.handleChange}></input>
                    </label>   

                    <label>
                        Onde você costumar cantar?
                        <select name='ondeVocêCanta' value={this.state.ondeVocêCanta} onChange={this.handleChange}>
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