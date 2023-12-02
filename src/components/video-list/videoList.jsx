

export default function VideoList({newVideoArray }) {

    function videoClick(event, id) {
        event.preventDefault();
        changeOnClick(id);
    }

    return (

        <section className="video-list">
            <h1 className="video-list__title">Next Videos</h1>
            
            {
                newVideoArray.map((video) => {
                    return (
                        <a key={video.id} onClick={(event) => {videoClick(event, video.id);}}>
                            <div  className="video-list__container">                                
                                <div className="video-list__image">
                                    <img src={video.image} alt="next video" className="next-video__image" />
                                </div>
                                <div className="next-video__details">
                                    <div className="next-video__details-title">{video.title}</div>
                                    <div className="next-video__details-author">{video.channel}</div>
                                </div>
                        </div></a>
                    )})
                    }                    
        </section>
    )    
}