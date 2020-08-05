import React, { useState, useEffect } from 'react'
import style from './style.less';
// import { } from 
export default function index() {
    const [showClass, setShowClass] = useState('hide');
    useEffect(() => {
        showTitle()
    }, [])
    const showTitle = () => {
        setTimeout(() => {
            setShowClass('show');
        }, 50)
    }
    return (
        <>
            <div className={style['home']}>
                <div className={`${style['title']} ${style[showClass]}`}>
                    Welcome to <em>Villa</em> resort
                </div>
            </div>
            {/* <div className={style['home']}>
            </div> */}
        </>
    )
}
