import { useEffect, useState } from 'react';
import api from "../../services/api";
import Button from "../../components/Button";
import usersImage from '../../assets/users.png';
import { StyledImage, Title as HomeTitle, TopBackground } from "../Home/styles";
import Trash from '../../assets/trash.svg';
import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUser, Title } from './styles';
import { useNavigate } from 'react-router-dom';

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [usersImg, setUsersImg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await api.get('/usuarios');
        setUsers(data);
        if (data.length > 0) {
          setUsersImg(data[0].usersImage);
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    try {
      await api.delete(/usuarios/${id});
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  }

  return (
    <Container>
      <TopBackground>
        <StyledImage src={usersImg} alt="Users" />
      </TopBackground>

      <Title>Lista de usuários</Title>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={https://avatar.iran.liara.run/public?username=${user.id}} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>
      <button type="button" onClick={() => navigate('/')}>Voltar</button>
    </Container>
  );
}

export default ListUsers;

