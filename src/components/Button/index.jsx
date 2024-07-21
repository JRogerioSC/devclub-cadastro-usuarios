import { MyButton } from './styles'
function DefaultButton({ children, ...props }) {

    return (
        <MyButton {...props}>{children}</MyButton>
    )
}

export default DefaultButton