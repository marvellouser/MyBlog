import React from 'react'
import style from './index.less';
import Home from './Home/index';
export default function App(props) {
    return (
        <div className={style['page_wrap']}>
            <Home {...props} />
        </div>
    )
}
