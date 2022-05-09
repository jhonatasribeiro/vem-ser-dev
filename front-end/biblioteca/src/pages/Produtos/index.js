import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { useHistory } from "react-router-dom";


import './styles.css'

import { Button, Card, Row, Col } from 'antd';

export default function Produtos(){
    const [ produtos, setProdutos] = useState([])
    const history = useHistory()


    useEffect(() => {
        api.get('/item')
        .then((response) =>{
        setProdutos(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro inesperado", + err)
        })
    }, []) 

    
    return(

        <div className="produto_container_prod">
            <h1>Relação de todos os livros da Biblioteca Vem.Ser=DEV</h1>

            <div className="produto_card_container_prod">
                {produtos.map(produto => (
                    <Card key={produto.id} title={produto.name} bordered={false} style={{width: 300}}>
                        <p>Autor: <b>{produto.description}</b></p>
                        <p>Ano: <b>{produto.quantity}</b></p>
                        <Button type="primary" onClick={() => history.push(`/detalhes/${produto.id}`)}>Detalhes</Button>
                    </Card>
                    ))}
            </div>
        </div>
        
    )
}

