import React from 'react';
import styles from './LeftBar.module.css';

function LeftBar() {
    return (
        <div className={styles.leftBar}>
            <h2>Topics</h2>
            <div className={""}>
                <ul className={styles.noBullets}>
                    <li><span>Topic 1</span></li>
                    <li><span>Topic 2</span></li>
                    <li><span>Topic 3</span></li>
                    <li><span>Topic 4</span></li>
                    <li><span>Topic 5</span></li>
                </ul>
            </div>
        </div>
    );
}

export default LeftBar;