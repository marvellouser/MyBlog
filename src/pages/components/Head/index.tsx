import React from 'react'
import style from './style.less';
const Header = () => {
    return (
        <div className={style['head_wrap']}>
            <div className={style['head_con']}>
                <em className={style['head_title']}>Sam</em> | 个人博客
            </div>
        </div>
    )
}

export default Header;