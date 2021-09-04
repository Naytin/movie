import React, {useCallback, useEffect, useState} from 'react';
import {MenuAlt1Icon, UserCircleIcon} from "@heroicons/react/outline";
import styles from "./HeadPanel.module.scss";
import Nav from "../Nav/Nav";

const HeadPanel = () => {
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        let width = document.body.clientWidth
        if (width > 768) {
            setOpen(true)
        }
    }, [])

    const handleMenu = useCallback(() => {
        if(document.body.clientWidth <= 768) {
            setOpen(!open)
        }
    },[open])

    return (
        <div className={styles.head__panel}>
            <button onClick={handleMenu}>
                <MenuAlt1Icon className={`${styles.menu} ${open && styles.open}`}/>
            </button>
            <div className={styles.logo}>HOME<span className=''>cinema</span></div>
            <Nav handler={handleMenu} open={open}/>
            <div className={styles.wrapper}>
                <button>
                    <UserCircleIcon className={styles.user}/>
                </button>
            </div>
        </div>
    );
};

export default HeadPanel;
