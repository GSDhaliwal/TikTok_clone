import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

function VideoSidebar({ likes, shares, messages }) {

  const [liked, setLiked] = useState(false);
  const [messaged, setMessaged] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon 
            fontSize="large"
            onClick={() => setLiked(false)} 
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={() => setLiked(true)} 
          />
        )}
        <p>{liked ? likes + 1 : likes }</p> 
      </div>
      
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messaged ? messages + 1 : messages }</p>
      </div>
      
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shared ? shares + 1 : shares }</p>
      </div>
    </div>
  )
}

export default VideoSidebar
