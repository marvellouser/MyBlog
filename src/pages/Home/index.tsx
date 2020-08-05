import React, { useState, useEffect } from 'react'
import style from './style.less';
import Head from '@/pages/components/Head/index';
import Content from '@/pages/components/Content/index';
// import { } from 
export default function index() {
    return (
        <div className={style['wrapper']}>
            <Head />
            <Content />
        </div>
    )
}
