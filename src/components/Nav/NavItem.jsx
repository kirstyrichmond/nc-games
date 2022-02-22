import React, { useState } from 'react'
import '../../styles/nav.css'

const NavItem = (props) => {
    const [open, setOpen] = useState(false)
    console.log(open, "<< open");

    return (
        <li className='nav-item'>
            <div onClick={() => setOpen(!open)}>
                { props.icon }
            </div>
            { open && props.children }
        </li>

    )
}

export default NavItem
