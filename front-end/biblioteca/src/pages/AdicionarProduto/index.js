import './styles.css'

import React from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'


import { message, Form, Input, Button, InputNumber } from 'antd';


export default function Produtos(){


    const history = useHistory()


    async function handleSubmit(produto){
        api.post('/item', produto)
            .then((response) => {
                if(response.status === 201){
                    message.success('Livro adicionado com sucesso!', 5, true);
                    history.push('/produtos')
                }
            })
            .catch((err) => {
                message.warning('Aconteceu um erro ao adicionar o Livro ' + err)
            })
    }

    return(
        <div className='produto_container'>
            <h1>Adicionar novo Livro</h1>
            <br/>

            <div className="produto_card_container">
                <Form 
                name='basic'
                labelCol={{span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{remember: true }}
                onFinish={handleSubmit}
                autoComplete="off">

                    <Form.Item
                    label='Título'
                    name="name"
                    rules={[{ required: true, message: "Insira o título do livro" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Autor'
                    name="description"
                    rules={[{ required: true, message: "Insira o Autor do livro" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Ano'
                    name="quantity"
                    rules={[{ required: true, message: "Insira o ano de Edição do livro" }]}
                    >
                        <InputNumber />
                    </Form.Item>
                
                <Form.Item wrapperCole={{offset: 8, span:16}}>
                    <div className="botao">
                    <Button type='primary' htmlType='submit'>
                        Adicionar
                    </Button>
                    </div>
                </Form.Item>

                </Form>

            </div>


        </div>
    )

}



