import React from 'react'

export default function TextEllipsis({ text = '', maxLen = 16 }) {
    return (
        <span>{text.length > maxLen ? text.substring(0, maxLen) + '...' : text}</span>
    )
}
