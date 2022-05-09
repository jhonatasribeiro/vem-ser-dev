import './App.css';
import { Menu, Layout } from 'antd';
import Routes from './routes';
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons'

import { useHistory } from 'react-router-dom'
const {Header, Footer, Sider, Content } = Layout;


function App() {

  let history = useHistory();

  function handlClick(){
    history.push("/adicionar");
  }

  return (
    <div className="main">
       <Layout className='main_content'>
        <Menu mode="horizontal" defaultSelectedKeys={['2']} className='header'>
        <a href="/">Home</a>
        </Menu>
      <Layout>
        <Sider className='menu'>
          <Menu className='menu_section'>
            <Menu.Item key={1} icon={<PlusOutlined/>} onClick={handlClick}>
              Adicionar Livro
              </Menu.Item>
              <Menu.Item key={2} icon={<UnorderedListOutlined />} onClick={() => history.push('/produtos')}>
              Listar Livros
              </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <Routes />
        </Content>
      </Layout>
      <Footer className='footer'>
        <p>Todos os direitos reservados. ® 2022.</p>
        <p>Projeto desenvolvido pelo aluno <b><a href="https://linkedin.com/jhonatasrribeiro">Jhônatas Ribeiro</a></b></p>
 
        </Footer>
    </Layout>
    </div>
  );
}

export default App;
