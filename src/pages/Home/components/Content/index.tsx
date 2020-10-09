import React from 'react'
import style from './style.less';
const Content = (props) => {
    return (
        <div className={style['content_wrap']}>
            <div className={style['content']}>
                {props.children}
                {/* <div className={style['left_wrap']}>
                    {props.children}
                </div> */}
            </div>
        </div>
    )
}

export default Content;