import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentList from '../../components/CommentList';
import { selectCurrentContent } from '../currentContent/CurrentContentSlice';
import {
    isLoadingComments,
    loadComments,
    loadCommentsForContentId
} from './CommentsSlice';

const Comments = () => {
    const dispatch = useDispatch();
    const content = useSelector(selectCurrentContent);
    const commentsAreLoading = useSelector(isLoadingComments);

    const comments = useSelector(loadCommentsForContentId(content.id));


    useEffect(() => {
        if (content) {
            dispatch(loadComments(content.id))
        }
        else {
            console.log('No comments loaded yet.')
        }
    }, [content, dispatch]);

    //get the comments for an article id, if article is undefined, we set this constant to an empty array. 
    //const commentsForContentId = content ? comments[content.id] : [];
    //console.log(commentsForContentId)
    if (!content) return null;
    if (!content.id) return null;
    if (commentsAreLoading) return <div>Loading Comments</div>;

    const commentsForContentId = content ? comments : [];
    console.log(`comments var in Comments.js: ${JSON.stringify(commentsForContentId)}`)


    return (

        <CommentList comments={commentsForContentId} />

    );
}
export default Comments;