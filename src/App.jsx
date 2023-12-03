import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Page, Upload} from './pages/page/Page';
import Header from './components/header/header';
import './App.scss'


function App() {
  console.clear();

  const URL_REQUEST = "?api_key=6f9a4b62-b1e4-452c-a341-a5c386ba05d2";
  const REQUEST_VIDEOS = "https://project-2-api.herokuapp.com" + "/videos/" + URL_REQUEST;


  const [videoList, setVideoList] = useState();

   useEffect(() => {
    const fetchList = async () => {
      try {const response = await axios.get(REQUEST_VIDEOS);
        setVideoList(response.data);
        console.log(response.data[0]);} catch(error) {console.log(error)}
      }; fetchList();
  }, [])

  
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            { videoList && ( <>
            <Route exact path="/" element={<Page videoArray={videoList}/>} />
            <Route path="/upload" element={<Upload />}/> 
            <Route path="/video/:videoId" element={<Page videoArray={videoList}/>}/> </>)}
          </Routes>
        </Header>
      </BrowserRouter>
    
    </>
  )
}

export default App

