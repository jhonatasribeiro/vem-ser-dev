import { useHistory } from 'react-router-dom'
import './styles.css'

import Logo from '../assets/logo.jpg'
import { Button } from 'antd'

export default function Inicio(){

    const history = useHistory()

    async function listarProdutos(event){
        event.preventDefault();
        history.push('/produtos')
    }

    return(
        <div className='inicio_container'>
            <section>
                <img src={Logo} alt='logo' className='center' />
                <br/>
                <Button type="primary" className='center' onClick={listarProdutos}>Ver Livros</Button>
                </section>
        </div>
    )
}