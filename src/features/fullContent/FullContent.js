import React from 'react';
// import { isLoadingComments, selectCommentsByContentId } from '../comments/CommentsSlice';
import styles from './FullContent.module.css';

export default function FullContent({ content }) {
  var { id = 0, title, preview, fullText, image } = content;

  // const comments = useSelector(selectCommentsByContentId(id));
  // const currentCommentsIsLoading = useSelector(isLoadingComments);

  if (!content.title) {
    return null;
  }
  // if (currentCommentsIsLoading) {
  //   return (
  //     <div>
  //       <h1>Loading content...</h1>
  //     </div>
  //   );
  // }



  //get all comments for this content
  // const commentList = comments.map((comment) => {
  //   return (
  //     <div key={comment.id}>
  //       <Comments> rara</Comments>
  //       <p>{comment.text}</p>
  //     </div>
  //   );
  // });

  return (
    <>
      <div className={styles.fullContent}>
        <h1 className=''>{title}</h1>
        <img src={image} alt='contentpicture' />

        <div key={content.id} className=''>
          <div className={styles.contentFullText}>{fullText}</div>
          {/* <Comments id={content.id} /> */}

        </div>
        {/* {commentList} */}
      </div>
    </>
  );


}