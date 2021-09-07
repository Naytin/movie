import React from 'react';
import styles from './Nav.module.scss'
import {Link, useLocation} from 'react-router-dom';


const LINKS = [
    {link: '/',text: 'Home'},
    {link: '/movie',text: 'Movie'},
    {link: '/actors',text: 'Actors'},
]

type PropsType = {
    handler: () => void
    open: boolean
}

const Nav: React.FC<PropsType> = ({handler, open}) => {

    const links = LINKS.map((e,i) =>
        <LinkItem key={i} onClickHandler={handler}  link={e.link} text={e.text}/>)

    return (
        <nav className={`${styles.list} ${open ? styles.open : ''}`}>
            <ul>
                {links}
            </ul>
        </nav>
    );
};

export default Nav;




type LinkItemType = {
    link: string
    text: string
    onClickHandler: () => void
}
const LinkItem = ({link, text, onClickHandler}: LinkItemType) => {
    const location = useLocation()
    const result = location.pathname === link
    const active = result ? styles['active'] : null

    return (
        <li onClick={onClickHandler} className={`${styles.item}`}>
            <Link to={link} className={`${active}`}>{text}</Link>
        </li>
    );
}
