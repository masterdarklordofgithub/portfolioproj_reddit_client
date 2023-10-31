import React from 'react';
import styles from './LeftBar.module.css';

function LeftBar() {
    return (
        <div className={styles.leftBar}>
            <h2>Topics</h2>
            <div className={""}>
                <ul className={styles.noBullets}>
                    <li>Topic 1</li>
                    <li>Topic 2</li>
                    <li>Topic 3</li>
                    <li>Topic 4</li>
                    <li>Topic 5</li>
                </ul>
            </div>
        </div>
    );
}

export default LeftBar;