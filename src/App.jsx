import { useState } from 'react'
import videos from './data/videos.json'
import VideoDetails from './data/video-details.json'
import Header from './components/component/header'
import Video from './components/component/video'
import Description from './components/component/description'
import VideoStats from './components/component/stats'
import Comment from './components/component/comment'
import CommentSection from './components/component/commentSection'
import VideoList from './components/component/videoList'
import './App.css'

// const setCommentSection = VideoDetails[0].comments;
// const updateCommentSection = setCommentSection.map((element) => CommentSection(element.name, element.comment, element.timestamp));
// const setVideoList = videos.map(newArray => ({title: newArray.title, channel: newArray.channel, image: newArray.image}));
// const updateVideoList = setVideoList.map((element) => VideoList(element.image, element.title, element.channel));
// let setCommentSection = selectedVideo.comments;
// let updateCommentSection = setCommentSection.map((element) => CommentSection(element.name, element.comment, element.timestamp));
// console.log(updateVideoList);

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

  
  // const UpdateVideoList = inactiveVideos.map((element) => (VideoList(element.image, element.title, element.channel)));

  return (
    <>
      <Header />
      <Video image={selectedVideo.image} title={selectedVideo.title} />
      <VideoStats author={selectedVideo.channel} date={selectedVideo.timestamp} viewCount={selectedVideo.views} likes={selectedVideo.likes}/>
      <Description text={selectedVideo.description}/>
      <Comment commentArray={selectedVideo.comments}/>
      <CommentSection commentArray={selectedVideo.comments} />
      <VideoList newVideoArray={inactiveVideos} changeOnClick={changeVideo} />
      {/* <VideoList /> */}

    </>
  )
}

export default App
