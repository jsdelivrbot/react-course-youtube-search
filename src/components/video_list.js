import React from 'react';

const VideoList = (props) => {
  const { videos } = props;
  return (
   <ul className='col-md-4 list-group'>
    {videos.length}
   </ul>
  )
}

export default VideoList;