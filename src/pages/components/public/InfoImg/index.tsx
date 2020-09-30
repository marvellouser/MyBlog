import React, { useState } from 'react'
import styles from './style.less';
import TextEllipsis from '@/pages/components/public/TextEllipsis'
// import TextEllipsis from 'Public/components'
// import Tag from 'Public/Tag';
const InfoImg = (props) => {
    const { tags, imgUrl, title, mask = false, className, style } = props;
    const [isShowState, setIsShowState] = useState(true);
    const handleMouseEnter = () => {
        setIsShowState(false)
    }

    const handleMouseLeave = () => {
        setIsShowState(true)
    }
    return (
        <div
            className={`${styles['img_wrap']} ${className || ''}`}
            style={{
                cursor: mask ? 'pointer' : 'default',
                ...style
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles['img_con']}>
                {tags && tags.map((ele: string, index: number) => (
                    <div className={styles['tags']} key={index}>
                        <span className={styles['tag_item']}>{ele}</span>
                    </div>
                ))}
                <div className={styles['title']}>
                    <TextEllipsis text={title} maxLen={30} />
                </div>
            </div>
            <img src={imgUrl} />
            {
                mask && (
                    <div className={`${styles['mask']} ${!isShowState ? styles['mask_hide'] : ''}`}></div>
                )
            }
        </div>
    )
}

export default InfoImg;
