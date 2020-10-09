import React, { useState, useEffect } from 'react'
import style from './style.less';
import Head from './components/Head/index';
import Content from './components/Content/index';
export default function index(props) {
    console.log(props.children);
    return (
        <div className={style['wrapper']}>
            <Head />
            <Content {...props} />
        </div>
    )
}
