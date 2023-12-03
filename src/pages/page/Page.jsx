import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import VideoList from '../../components/video-list/videoList'
import Video from '../../components/video-player/video'
import Description from '../../components/video-description/description'
import Comment from '../../components/comment/comment'
import CommentSection from '../../components/commentSection/commentSection'
import VideoStats from '../../components/video-stats/stats'
import './Page.scss'

const URL_REQUEST = "?api_key=6f9a4b62-b1e4-452c-a341-a5c386ba05d2";
// const REQUEST_HOME_VIDEO = "https://project-2-api.herokuapp.com" + "/videos/" + homeID + "/" + URL_REQUEST;


export default function Page({ videoArray }) {
  
  let pageVideoID = " ";

  let { videoId } = useParams();

  if (videoId == videoArray[0].id || videoId == "/" || videoId == undefined) {
    pageVideoID = videoArray[0].id;
  } else { pageVideoID = videoId};

  console.log("page video id: ", pageVideoID);
  console.log("videoId is: ", videoId);


  const [selectedVideo, getSelectedVideo] = useState();

  useEffect(() => {
    const fetchVideo = async () => {
      try {const response = await axios.get("https://project-2-api.herokuapp.com" + "/videos/" + pageVideoID + "/" + URL_REQUEST);
      console.log("video is:", response.data);
      getSelectedVideo(response.data);} catch(error) {console.log(error)};
    }; fetchVideo();
  },[pageVideoID])

  
  return (
    <>
    {selectedVideo && (
      <>
    <h1>I am a home page</h1>
       <Video image={selectedVideo.image} video={selectedVideo.video}/>
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


 {/* // const [selectedVideo, setSelectedVideo] = useState(VideoDetails[0])

//   function changeVideo(videoID) {
//     const newSelectedVideo = VideoDetails.find((video) => {
//       return video.id === videoID;
//     })
//     setSelectedVideo(newSelectedVideo);
//   }

//   const inactiveVideos = videos.filter((video) => {
//     return video.id !== selectedVideo.id;
//   })

//   function dateConvertor(date) {
//     let newDate = new Date(date);
//     return newDate.toDateString();
// } 

  {/* <Header />
      <Video image={selectedVideo.image} video={selectedVideo.video}/>
       <div className="video-section">
        <div className="video-section__details">
          <VideoStats author={selectedVideo.channel} date={selectedVideo.timestamp} title={selectedVideo.title}  viewCount={selectedVideo.views} likes={selectedVideo.likes}/>
          <Description text={selectedVideo.description}/>
          <Comment commentArray={selectedVideo.comments}/>
          <CommentSection commentArray={selectedVideo.comments} />
        </div>  
        <div className='video-section-list'>
          <VideoList newVideoArray={inactiveVideos} />
        </div>
      </div>
</> */}