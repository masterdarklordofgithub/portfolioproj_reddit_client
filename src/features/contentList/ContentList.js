import React from 'react';
import ContentItem from '../contentItem/ContentItem';
import styles from './ContentList.module.css';

function ContentList({ items }) {

    const listOfItems = items.map((item, i) => {
        // Destructure the name property from the contact object and assign the remaining properties to the rest variable
        const { id, title, preview, fullText, image } = item;

        // Render a Tile component with props for the content: id, title, preview (text), fullText, and image
        return (
            <ContentItem key={i} id={item.id} title={item.title} preview={item.preview} fullText={item.fullText} image={item.image}>
            </ContentItem>
        );
    })
    return (
        <div id="contentList" name="contentList" className={styles.ContentList}>
            {/* <h2>Topic 1</h2>
            <p>Topic 1 content</p> */}
            {listOfItems}
        </div>
    );
}
export default ContentList;