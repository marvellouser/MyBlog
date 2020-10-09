import React from 'react'
import styles from './style.less';
import InfoImg from '../public/InfoImg/index';
interface ImgItem {
    key: string
    imgUrl: string
    tags: Array<string>
    title: string,
}

/**
 * 轮播图组件
 * @param imgArr 图片数组数据
 * @param className 外层容器类名
 * @param style 外层容器样式
 * 
 */
const Swiper = ({ imgArr, className, style, }: any) => {
    return (
        <div className={`${styles['swiper_wrap']} ${className || ''}`} style={style}>
            {imgArr && imgArr.map((ele: ImgItem) => (
                <InfoImg {...ele} mask={false} className={styles['img_wrap']} />
            ))}
            <div className={styles['nav']}>
                1234
            </div>
        </div>
    )
}

export default Swiper;