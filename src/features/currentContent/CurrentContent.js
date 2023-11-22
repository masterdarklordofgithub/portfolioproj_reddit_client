import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FullContent from '../fullContent/FullContent';
import {
    // loadComments,
    // selectCommentsByContentId,
    isLoadingCurrentContent,
    selectCurrentContent
} from './CurrentContentSlice';



const CurrentContent = ({ id, title, preview, fullText, image }) => {
    const dispatch = useDispatch();
    const content = useSelector(selectCurrentContent);
    // const comments = useSelector(state => selectCommentsByContentId(content.id)(state));
    const currentContentIsLoading = useSelector(isLoadingCurrentContent);
    // const currentCommentsIsLoading = useSelector(isLoadingComments);

    // useEffect(() => {
    //     if (content.id) {
    //         console.log('Dispatching loadComments action');
    //         dispatch(loadComments({ id: content.id }));
    //     }
    // }, [dispatch, content.id]);

    if (currentContentIsLoading) {
        return (
            <div>
                <h1>Loading content...</h1>
            </div>
        );
    } else if (!content) {
        return null;
    }
    // if (currentCommentsIsLoading) {
    //     return (
    //         <div>
    //             <h1>Loading comments...</h1>
    //         </div>
    //     );
    // }
    else {
        return (
            <div>
                <FullContent content={content} />
            </div>
        );
    }

};

export default CurrentContent;