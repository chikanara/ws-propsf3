import React from 'react'

const Footer = ({children,total}) => {
    return (
        <div>
            <h4>{total}</h4>
            {children}
        </div>
    )
}
Footer.defaultProps = {
    total:"45000£"
}

export default Footer
