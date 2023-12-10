import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Page from './pages/page/Page';
import Upload from './pages/page/Upload';
import Header from './components/header/header';
import './App.scss'

const HOME_URL = "http://localhost:8080";

function App() {
  console.clear();

  const REQUEST_VIDEOS = HOME_URL + "/videos";


  const [videoList, setVideoList] = useState();

   useEffect(() => {
    const fetchList = async () => {
      try {const response = await axios.get(REQUEST_VIDEOS);
        setVideoList(response.data);
        } catch(error) {console.log(error)}
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

