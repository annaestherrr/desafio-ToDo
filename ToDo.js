import React, {Component} from 'react'
import './App.css'

class ToDo extends Component {

  state = {
    tarefa: '',
    lista: []
  }

  
  handleChange = (e) => {    
    this.setState({
      tarefa: e.target.value
    })
  }

  
  add = (e) => {
    let {lista, tarefa} = this.state
    if(tarefa.length !== 0 || null){
     
    this.setState({
      lista: lista.concat({
        tarefa: tarefa,
        id: Date.now()
       }),
       tarefa:""
     })
   }
   e.preventDefault()
  }

  remove = (id) => {
    let {lista} = this.state
    this.setState({
     
      lista: lista.filter((item) => (item.id !== id))
    })
  }

  render(){
    let {handleChange, add, remove} = this
    let {tarefa, lista} = this.state
    return(
      <div className='container'>
        <div className='box'>
          <h1>ToDo List</h1>          
          <input className='input' value={tarefa} onChange={handleChange}/> 
          <button className='add' onClick={add}>+</button>
          {lista.map((item) =>(
            <ul className='list-item'>
              <li>{item.tarefa}</li>         
                <button className='limpar' onClick={() => remove(item.id)}>LIMPAR</button>  
            </ul>
          ))}            
          </div>
          </div>
    )
  }
}

export default ToDo;