import { useState } from 'react'
import videos from './data/videos.json'
import VideoDetails from './data/video-details.json'
import Header from './components/header/header'
import VideoList from './components/video-list/videoList'
import Video from './components/video-player/video'
import Description from './components/video-description/description'
import Comment from './components/comment/comment'
import CommentSection from './components/commentSection/commentSection'
import VideoStats from './components/video-stats/stats'
import './App.scss'

const API_KEY = {"api_key" :"6f9a4b62-b1e4-452c-a341-a5c386ba05d2"};
const URL_REQUEST = "?api_key=6f9a4b62-b1e4-452c-a341-a5c386ba05d2";

function App() {


  const [selectedVideo, setSelectedVideo] = useState(VideoDetails[0])

  

  function changeVideo(videoID) {
    const newSelectedVideo = VideoDetails.find((video) => {
      return video.id === videoID;
    })
    setSelectedVideo(newSelectedVideo);
  }

  const inactiveVideos = videos.filter((video) => {
    return video.id !== selectedVideo.id;
  })

  function dateConvertor(date) {
    let newDate = new Date(date);
    return newDate.toDateString();
}


  return (
    <>
      <Header />
      <Video image={selectedVideo.image} video={selectedVideo.video}/>
      <div className="video-section">
        <div className="video-section__details">
          <VideoStats author={selectedVideo.channel} date={selectedVideo.timestamp} title={selectedVideo.title}  viewCount={selectedVideo.views} likes={selectedVideo.likes}/>
          <Description text={selectedVideo.description}/>
          <Comment commentArray={selectedVideo.comments}/>
          <CommentSection commentArray={selectedVideo.comments} />
        </div>
        <div className='video-section-list'>
          <VideoList newVideoArray={inactiveVideos} changeOnClick={changeVideo} />
        </div>
      </div>

    </>
  )
}

export default App
