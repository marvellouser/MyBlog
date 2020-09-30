import React from 'react'
import style from './style.less';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className={style['head_wrap']}>
            <div className={style['head_con']}>
                <div className={style['head_title']}>
                    <em>Sam</em>
                </div>
                <div className={style['nav_wrap']}>
                    <NavLink
                        to="/"
                        exact={true}
                        className={style['nav_item']}
                        activeClassName='nav_item_selected'
                    >HOME</NavLink>
                    <NavLink
                        to="/categories"
                        className={style['nav_item']}
                        activeClassName='nav_item_selected'
                    >categories</NavLink>
                    <NavLink
                        to="/book"
                        className={style['nav_item']}
                        activeClassName='nav_item_selected'
                    >book</NavLink>
                    <NavLink
                        to="/learn"
                        className={style['nav_item']}
                        activeClassName='nav_item_selected'
                    >learn</NavLink>
                    <NavLink
                        to="/about"
                        className={style['nav_item']}
                        activeClassName='nav_item_selected'
                    >about</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;