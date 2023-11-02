import React from 'react';
import styles from './FullContent.module.css';

export default function FullContent({ content }) {
  const { id, title, preview, fullText, image } = content;
  if (content.title) {
    return (
      <>
        <div className={styles.fullContent}>
          <h1 className=''>{title}</h1>
          <img src={image} alt='contentpicture' />

          <div key={content.id} className=''>
            <div className={styles.contentFullText}>{fullText}</div>
          </div>
        </div>
      </>
    );
  }
  else {
    return (
      <>
      </>
    )
  }

}