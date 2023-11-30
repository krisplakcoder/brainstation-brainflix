

export default function VideoList({newVideoArray, changeOnClick}) {

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
                        <a onClick={(event) => {videoClick(event, video.id);}}>
                            <div key={video.id} className="video-list__container">                                
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