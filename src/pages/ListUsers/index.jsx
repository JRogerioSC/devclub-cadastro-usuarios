import Button from "../../components/Button"
import { TopBackground } from "../Home/styles"
import usersImage from "../../assets/users.png"

function ListUsers() {

    return (
        <div>

            <TopBackground>
                <StyledImage src={usersImage} alt="Users" />
            </TopBackground>





            <h1>Listagem de usuarios</h1>
            <Button>Voltar</Button>
        </div >
    )
}

export default ListUsers