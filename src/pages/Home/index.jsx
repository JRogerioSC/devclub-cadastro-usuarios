import { useRef } from 'react'
import api from './services/api'

import React from 'react'
import {
  Title,
  Container,
  TopBackground,
  ContainerInputs,
  InputLabel
} from './styles'

import UsersImage from '../../pages/Home/assets/users.png'

export function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
    const data = await api.post('/usuarios',{
      Email: inputEmail.current.value,
      Age: parseInt(inputAge.current.value),
      Name: inputName.current.value
    })

    console.log(data)
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='imagem-usuarios' />
      </TopBackground>

      <form>
        <Title>Cadastrar usuários</Title>

        <ContainerInputs>

          <div style={{ width: '100%' }}>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <input type="text" placeholder='Nome do Usuário' ref={inputName}/>
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <input type="number" placeholder='Idade do Usuário' ref={inputAge}/>
          </div>




        </ContainerInputs>



      </form>
      <div>
        <InputLabel>
          E-Mail<span> *</span>
        </InputLabel>
        <input type="email" placeholder='Email do Usuário' ref={inputEmail}/>
      </div>
      <button type="button"onClick={registerNewUser}>Cadastrar Usuários</button>

    </Container>
  );
}

export default Home;
