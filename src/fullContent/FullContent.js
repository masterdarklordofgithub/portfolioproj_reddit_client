import React from 'react';

export default function FullContent({ content }) {
  if (content.title) {
    return (
      <>
        <div className='fullContent'>
          <img src={content.image} alt='contentpicture' />
        </div>
        <div key={content.id} className=''>
          <h1 className=''>{content.title}</h1>
          <div className=''>{content.preview}</div>
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