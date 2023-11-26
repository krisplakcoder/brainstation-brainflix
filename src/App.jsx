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

const setCommentSection = VideoDetails[0].comments;
const updateCommentSection = setCommentSection.map((element) => CommentSection(element.name, element.comment, element.timestamp));
const setVideoList = videos.map(newArray => ({title: newArray.title, channel: newArray.channel, image: newArray.image}));
const updateVideoList = setVideoList.map((element) => VideoList(element.image, element.title, element.channel));

console.log(updateVideoList);

function App() {
  const [count, setCount] = useState(0)
  const coffeeIpsum = "Robusta bar  grinder, white that single shot steamed seasonal shop qui grinder ristretto. Instant bar  skinny sugar, milk latte robust extraction Percolator roast, cinnamon variety extraction ut beans wings. Body, percolator fair trade, galão, carajillo skinny spoon flavour beans iced. Filter beans, caramelization skinny brewed, et macchiato dark mug aroma barista.";
  
  return (
    <>
      <Header />
      <Video />
      <VideoStats author={"Lorum Ipsum"} date={Date.now()} viewCount={434434343} likes={"hello"}/>
      <Description text={coffeeIpsum}/>
      <Comment />
      {updateCommentSection}
      {updateVideoList}
      {/* <VideoList /> */}

    </>
  )
}

export default App
