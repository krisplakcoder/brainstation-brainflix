import { Link } from "react-router-dom";

export default function VideoList({videoID, array}) {

    

    let videoList = array.filter((video) => {
        return video.id !== videoID;
    });
   

    return (
        <>
        <section className="video-list">
            <h1 className="video-list__title">Next Videos</h1>
            
            {
                videoList.map((video) => {
                    return (
                        <Link to={"/video/" + video.id} className="video-list--link-style">
                        
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
        </section>
        </>
    )    
}

