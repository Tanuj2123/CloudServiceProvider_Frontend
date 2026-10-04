import React from 'react'

const Post = ({imgUrl,caption}) => {
  return (
    <div>
        <img alt="post-img" src={imgUrl} className="w-96" ></img>
        <p>{caption}</p>
    </div>
  )
}

export default Post