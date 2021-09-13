import React from 'react';
import { Challenges } from '../Challenges/Challenges';
import style from './BoxProjects.module.css'

export const BoxProjects = () => {
    return (
        <div className={style.box}>
            <Challenges />
            <Challenges />
            <Challenges />
            <Challenges />
            <Challenges />
            <Challenges />
        </div>
    )
}
