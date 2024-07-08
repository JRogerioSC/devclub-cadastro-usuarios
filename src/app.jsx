import { Title, Container } from './styles'

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

          <dir>

            <InputLabel>

              E-Mail<span>*</span>

            </InputLabel>

            <input type="Email" placeholder='Email do Usuário' />

          </dir>

        </ContainerInputs>

        <button>Cadastrar Usuários</button>

      </form>

    </Container >

  )

}

export default Home