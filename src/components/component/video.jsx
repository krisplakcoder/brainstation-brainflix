import videoArray from '../../data/video-details.json'

export default function Video() {

    return (
        <>
            <section className="video">
                <img className='video__player' src={videoArray[0].image} alt='video placeholder'></img>
                <h1 className="video__title">{videoArray[0].title}</h1>
            </section>
        </>
    )

}

// {videoURL, videoTitle}