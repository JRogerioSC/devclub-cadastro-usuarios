import React from 'react';
import { Title, Container, TopBackground, ContainerInputs, InputLabel } from './styles';

export function Home() {
  return (
    <Container>
      <TopBackground>
        <img src="" alt="" />
      </TopBackground>

      <form>
        <Title>Cadastrar usuários</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <input type="text" placeholder='Nome do Usuário' />
            </div>
            <InputLabel>
              Idade<span>*</span>
            </InputLabel>
            <input type="number" placeholder='Idade do Usuário' />
          </div>

          <div>
            <InputLabel>
              E-Mail<span>*</span>
            </InputLabel>
            <input type="email" placeholder='Email do Usuário' />
          </div>
        </ContainerInputs>

        <button type="submit">Cadastrar Usuários</button>
      </form>
    </Container>
  );
}

export default Home;
