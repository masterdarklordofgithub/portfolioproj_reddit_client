import React from 'react';
import Comment from './Comment';
import './commentStyling.css';

export default function CommentList({ comments }) {
    if (comments) {
        return (
            <div className='comments-list'>
                <h3>Comments:</h3>
                <ul >
                    {
                        comments.map((comment) => (
                            <Comment comment={comment} />
                        ))
                    }
                </ul>
            </div>
        );
    }
    return null;
}