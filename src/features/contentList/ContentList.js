import React from 'react';
import { useDispatch } from 'react-redux';
import ContentItem from '../contentItem/ContentItem';
// import { loadCurrentContent } from '../currentContent/CurrentContentSlice';
import styles from './ContentList.module.css';

function ContentList({ items }) {
    const dispatch = useDispatch();
    const listOfItems = items.map((item, i) => {
        const { id, title, selftext } = item;
        let mediaUrl = null;

        if (!item.is_video) {
            mediaUrl = decodeURIComponent(item.url_overridden_by_dest);

        } else if (item.is_video) {
            mediaUrl = item.secure_media.reddit_video.fallback_url;
        }

        return (
            <ContentItem
                key={i}
                id={id}
                title={title}
                preview={selftext}
                fullText={selftext}
                mediaUrl={mediaUrl}
                isVideo={item.is_video}
            />
        );
    });

    return (
        <div id="contentList" name="contentList"
            className={styles.ContentList}
        >
            {listOfItems}
        </div>
    );
}

export default ContentList;