import React, { useRef } from 'react';
import api from '../../services/api';
import { Title, Container, Form, ContainerInputs, InputLabel, TopBackground, StyledImage } from './styles';
import Button from '../../components/Button';
import usersImage from '../../assets/users.png';

export function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    const email = inputEmail.current.value;
    const age = parseInt(inputAge.current.value, 10);
    const name = inputName.current.value;

    if (isNaN(age)) {
      alert("Por favor, insira um valor numérico válido para a idade.");
      return;
    }

    try {
      const { data } = await api.post('/usuarios', {
        email,
        age,
        name,
      });

      console.log(data);
    } catch (error) {
      console.error("Erro ao registrar novo usuário:", error);
    }
  }

  return (
    <Container>
      <TopBackground>
        <StyledImage src={usersImage} alt="Users" />
      </TopBackground>

      <Form>
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

        <div>
          <InputLabel>
            E-Mail<span> *</span>
          </InputLabel>
          <input type="email" placeholder='Email do Usuário' ref={inputEmail} />
        </div>

        <button type="button" onClick={registerNewUser}>
          Cadastrar Usuários
        </button>
      </Form>
    </Container>
  );
}

export default Home;
