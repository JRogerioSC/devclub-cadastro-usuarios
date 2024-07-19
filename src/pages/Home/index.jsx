import { useRef } from 'react'
import api from '../../services/api'

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

  async function registerNewUser() {
    const email = inputEmail.current.value;
    const age = parseInt(inputAge.current.value, 10)
    const name = inputName.current.value

    if (isNaN(age)) {
      alert("Por favor, insira um valor numérico válido para a idade.")
      return
    }

    try {
      const { data } = await api.post('/usuarios', {
        email,
        age,
        name
      })

      console.log(data);
    } catch (error) {
      console.error("Erro ao registrar novo usuário:", error)
    }
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
            <input type="text" placeholder='Nome do Usuário' ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <input type="number" placeholder='Idade do Usuário' ref={inputAge} />
          </div>
        </ContainerInputs>
      </form>
      
      <div>
        <InputLabel>
          E-Mail<span> *</span>
        </InputLabel>
        <input type="email" placeholder='Email do Usuário' ref={inputEmail} />
      </div>

      <button type="button" onClick={registerNewUser}>Cadastrar Usuários</button>
    </Container>
  )
}

export default Home
