import React from 'react'
import style from './style.less';
import Swiper from '../Swiper/index';
const Content = () => {
    const imgArr = [
        {
            key: 'article1',
            tags: ['成长'],
            title: '人类以外最聪明的动物',
            imgUrl: 'https://www.zbboke.com/uploads/allimg/200804/1-200P4093443O9.jpg',
        },
    ]
    return (
        <div className={style['content_wrap']}>
            <div className={style['content']}>
                <div className={style['left_wrap']}>
                    <Swiper imgArr={imgArr} />
                </div>
                <div className={style['right_wrap']}></div>
            </div>
        </div>
    )
}

export default Content;