import React from 'react';
import style from './Header.module.css';


export const Header = () => {
    return (
        <div className={style.header}>
            <h1 className={style.title} >Web Challenges</h1>
            <input className={style.search} type="search" name="search" id="search" placeholder="Search" />
            <label className={style.text_search} htmlFor="search"><i class="gg-search-loading"></i></label>
        </div>
    )
}
