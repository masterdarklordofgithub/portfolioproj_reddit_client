import React from 'react';
import styles from './ContentItem.module.css';

function ContentItem({ id, title, preview, fullText, image }) {
    return (
        <button key={id} className={styles.contentButton}>
            <div className={styles.contentItem}>
                <h2>{title}</h2>
                <img src={image} alt="" className={styles.imageContainer} />
                <p>{preview}</p>
            </div>
        </button>
    );
}

export default ContentItem;