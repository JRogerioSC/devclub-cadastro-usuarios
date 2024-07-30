import { MyButton } from './styles'
function DefaultButton({ children, ...props }) {

console.log(props)

    return (
        <MyButton {...props}>{children}</MyButton>
    )
}

export default DefaultButton