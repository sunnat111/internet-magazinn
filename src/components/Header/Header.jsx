import { useState, useEffect } from 'react'
import s from '../Header/Header.module.scss'
import Sort from '../Sort/Sort'
import { searchIcon } from '../../utils/imgExport'


const Header = ({ search, setSearch }) => {


    return (
        <header className={s.header}>
                <div className={s.header__main}>
                    <div className={s.header__main_right}>
                        <h1 className={s.header__main_name}>Меню</h1>
                        <Sort />

                    </div>
                    <div className={s.header__main_left}>
                        <img src={searchIcon} alt="" className={s.header__main_left_icon}  />
                        <input
                            className={s.header__main_left_input}
                            type="text"
                            value={search}
                            placeholder='Введите блюдо или состав'
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                </div>
        </header>
    )
}

export default Header