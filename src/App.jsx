import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Page, Upload} from './pages/page/Page';
import Header from './components/header/header';
import './App.scss'


function App() {
  console.clear();

  const homeID = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const URL_REQUEST = "?api_key=6f9a4b62-b1e4-452c-a341-a5c386ba05d2";
  const REQUEST_HOME_VIDEO = "https://project-2-api.herokuapp.com" + "/videos/" + homeID + "/" + URL_REQUEST;

  const [state, setState] = useState();

  useEffect(() => {
    const fetchVideo = async () => {
      try {const response = await axios.get(REQUEST_HOME_VIDEO);
      setState(response.data);} catch(error) {console.log(error)};
    }; fetchVideo();
  }, [])
  
  return (

    <>
      <BrowserRouter>
        <Header>
          <Routes> 
            <Route path="/" element={<Page selectedVideo={state}/>} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/video/:videoID" element={<Page />}/>
          </Routes>
        </Header>
      </BrowserRouter>
    
    </>
  )
}

export default App

