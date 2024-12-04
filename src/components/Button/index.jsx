import PropTypes from 'prop-types';

import { MyButton } from './styles'

function DefaultButton({ children, theme, ...props }) {

 console.log()

    return (
        <MyButton {...props} theme={theme}>{children}</MyButton>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton