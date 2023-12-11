import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import VideoList from '../../components/video-list/videoList'
import Video from '../../components/video-player/video'
import Description from '../../components/video-description/description'
import Comment from '../../components/comment/comment'
import CommentSection from '../../components/commentSection/commentSection'
import VideoStats from '../../components/video-stats/stats'
import './Page.scss'

const HOME_URL = "http://localhost:8080";

export default function Page({ videoArray }) {
  
  let pageVideoID = " ";

  let { videoId } = useParams();

  if (videoId == videoArray[0].id || videoId == "/" || videoId == undefined) {
    pageVideoID = videoArray[0].id;
  } else { pageVideoID = videoId};



  const [selectedVideo, getSelectedVideo] = useState();

  useEffect(() => {
    const fetchVideo = async () => {
      try {const response = await axios.get(HOME_URL + "/videos/" + pageVideoID);
      getSelectedVideo(response.data);} catch(error) {alert(error)}
    }; fetchVideo();
  },[pageVideoID])

  
  return (
    <>
    {selectedVideo && (
      <>
       <Video image={HOME_URL+selectedVideo.image} video={selectedVideo.video}/>
       <div className="video-section">
        <div className="video-section__details">
          <VideoStats author={selectedVideo.channel} date={selectedVideo.timestamp} title={selectedVideo.title}  viewCount={selectedVideo.views} likes={selectedVideo.likes}/>
          <Description text={selectedVideo.description}/> 
          <Comment commentArray={selectedVideo.comments}/>       
          <CommentSection commentArray={selectedVideo.comments}/>      
        </div>  
         <div className='video-section-list'>
          <VideoList videoID={selectedVideo.id} array={videoArray} />
        </div>  
      </div>    
      </> )}
    </>
  )

}

