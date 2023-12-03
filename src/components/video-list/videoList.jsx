import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL_REQUEST = "?api_key=6f9a4b62-b1e4-452c-a341-a5c386ba05d2";
const REQUEST_VIDEOS = "https://project-2-api.herokuapp.com" + "/videos/" + URL_REQUEST;

export default function VideoList({videoID}) {

   const [videoList, setVideoList] = useState();

   useEffect(() => {
    const getVideoList = async () => {
        try {const response = await axios.get(REQUEST_VIDEOS);
            console.log("video list: ", response.data);
        setVideoList(response.data.filter((video) => {
            return video.id !== videoID;
        }))} catch(error) {console.log(error)}
    }; getVideoList();
   },[])

    return (
        <>
        {videoList && (
        <section className="video-list">
            <h1 className="video-list__title">Next Videos</h1>
            
            {
                videoList.map((video) => {
                    return (
                        <Link to={`/video/${video.id}`} key={video.id} className="video-list--link-style">
                            <div  className="video-list__container">                                
                                <div className="video-list__image">
                                    <img src={video.image} alt="next video" className="next-video__image" />
                                </div>
                                <div className="next-video__details">
                                    <div className="next-video__details-title">{video.title}</div>
                                    <div className="next-video__details-author">{video.channel}</div>
                                </div>
                        </div></Link>
                    )})
                    }                    
        </section> ) }
        </>
    )    
}