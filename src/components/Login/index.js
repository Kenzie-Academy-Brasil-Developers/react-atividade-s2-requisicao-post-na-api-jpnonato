import axios from 'axios'
import { useState } from 'react'
import Display from '../Display'
import './style.css'


export default function Login () {

    const [value, setValue] = useState('')
    const[senha, setSenha] = useState('')
    const[er, setEr] = useState(false)
    const [data, setData] = useState('')
    
    const handleChange = (e) => setValue(e.target.value)
    const handleChange2 = (e) => setSenha(e.target.value)
    
    const handleClick = () => {
        const formData = {
            username: value,
            password: senha
        }
        axios.post('https://kenzieshop.herokuapp.com/sessions/', formData)
        .then((response) =>  setData(response)).catch((err)=> setEr(err.message))
  
    }

    return(
        <>
        <div className="form">
            <input value={value} type='text'onChange={handleChange} placeholder='Seu Login' ></input>
            <input value={senha} type='password'onChange={handleChange2} placeholder='Senha' ></input>
            <button onClick={handleClick}>Fazer Login</button>
             <Display msg={er} data={data}></Display>
        </div>
        </>
    )
}