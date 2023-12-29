import React from 'react';
import { useDispatch } from 'react-redux';
import { loadCurrentContent } from '../currentContent/CurrentContentSlice';
import styles from './ContentItem.module.css';

function ContentItem({ id, title, preview, fullText, mediaUrl, isVideo }) {
    const dispatch = useDispatch();
    return (
        <button key={id} className={styles.contentButton}>
            <div
                className={styles.contentItem}
                onClick={
                    () => dispatch(loadCurrentContent({ id }))
                }
            >
                <h2>{title}</h2>
                {isVideo ? (

                    <video src={mediaUrl} alt={title} className={styles.mediaContainer} controls />
                ) : (
                    <img src={mediaUrl} alt={title} className={styles.mediaContainer} />
                )}
                {/* <p>{preview}</p> */}
            </div>
        </button>
    );
}

export default ContentItem;