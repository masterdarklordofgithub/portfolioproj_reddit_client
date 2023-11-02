import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullContent from '../../fullContent/FullContent';
import {
    isLoadingCurrentContent,
    selectCurrentContent,
} from './CurrentContentSlice';


const CurrentContent = ({ id, title, preview, fullText, image }) => {
    const dispatch = useDispatch();
    const content = useSelector(selectCurrentContent);
    const currentContentIsLoading = useSelector(isLoadingCurrentContent);

    if (currentContentIsLoading) {
        return (
            <div>
                <h1>Loading content...</h1>
            </div>
        );
    } else if (!content) {
        return null;
    }

    return (
        <div>
            <FullContent content={content} />
        </div>
    );
};

export default CurrentContent;