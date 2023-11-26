// import videoList from '../../data/videos.json'

// const vidImage = videoList[1].image;

export default function VideoList(videoImage, videoName, videoAuthor) {

    return (

        <section className="video-list">
            <h1 className="video-list__title">Next Videos</h1>
            <div className="video-list__container">
                <div className="video-list__image">
                    <img src={videoImage} alt="next video" className="next-video__image" />
                </div>
                <div className="next-video__details">
                    <div className="next-video__details-title">{videoName}</div>
                    <div className="next-video__details-author">{videoAuthor}</div>
                </div>
            </div>
        </section>
    )
}