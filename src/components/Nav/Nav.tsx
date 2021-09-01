import React, {MouseEvent} from 'react';
import styles from './Nav.module.scss'
import {Link, useLocation} from 'react-router-dom';


const LINKS = [
    {link: '/',text: 'Home'},
    {link: '/movie',text: 'Movie'},
    {link: '/login',text: 'Login'},
]


const Nav = () => {

    const links = LINKS.map((e,i) =>
        <LinkItem key={i} onClickHandler={() => console.log('click')}  link={e.link} text={e.text}/>)
    return (
        <nav>
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
    onClickHandler: (e: MouseEvent<HTMLElement>) => void
}
const LinkItem = ({link, text, onClickHandler}: LinkItemType) => {
    const location = useLocation()
    const result = location.pathname === link
    const active = result ? styles['active'] : null

    return (
        <ul onClick={onClickHandler} className={`${styles.item}`}>
            <Link to={link} className={`${active}`}>{text}</Link>
        </ul>
    );
}
