import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentList from '../contentList/ContentList';
import {
    isLoading,
    loadAllContents,
    selectAllContents
} from './MainContentPreviewsSlice';

function MainContentPreviews() {
    const dispatch = useDispatch();

    const contentPreviews = useSelector(selectAllContents);

    const isLoadingPreviews = useSelector(isLoading);

    useEffect(() => {
        dispatch(loadAllContents());
    }, [dispatch]);

    if (isLoadingPreviews) {
        return <div>loading state</div>;
    }
    return (
        <>
            <ContentList items={contentPreviews} />
        </>


    );


}
export default MainContentPreviews;