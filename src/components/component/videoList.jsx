import videoList from '../../data/videos.json'

const vidImage = videoList[1].image;

export default function VideoList() {

    return (

        <section className="video-list">
            <h1 className="video-list__title">Next Videos</h1>
            <div className="video-list__container">
                <div className="video-list__image">
                    <img src={vidImage} alt="next video" className="next-video__image" />
                </div>
                <div className="next-video__details">
                    <div className="next-video__details-title">Become A Travel Pro In One Easy Lesson</div>
                    <div className="next-video__details-author">Todd Welch</div>
                </div>
            </div>
        </section>
    )
}