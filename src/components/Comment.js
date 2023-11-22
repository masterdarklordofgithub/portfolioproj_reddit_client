import React from 'react';

export default function Comment({ comment }) {
    const { id, text } = comment
    return (
        <li key={id} className='comment-container'>
            <span>Comment: {text}</span>
        </li>
    );
}