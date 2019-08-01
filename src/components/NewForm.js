import React, {Component} from 'react';

export default class NewForm extends Component {
    state = {
        valor: '',
        descripcion: ''
    }

    refresh = (e) => {
        console.log(this.state)
        e.preventDefault();
    }

    chars_changes = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render () {
        return (
            <form onSubmit={this.refresh}>
                <br/>
                <input 
                    type="text"
                    placeholder="Introducir valor"
                    onChange={this.chars_changes}
                    value={this.state.valor}
                    name='valor'/>
                <br/><br/>
                <textarea
                    placeholder="Descripcion"
                    onChange={this.chars_changes}
                    value={this.state.descripcion}
                    name='descripcion'>
                </textarea>
                <br/><br/>
                <input type="submit"></input>
                <br/>
            </form>
        )
    }
}