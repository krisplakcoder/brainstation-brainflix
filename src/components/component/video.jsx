// import videoArray from '../../data/video-details.json'

export default function Video( {image, title} ) {

    return (
        <>
            <section className="video">
                <img className='video__player' src={image} alt='video placeholder'></img>
                <h1 className="video__title">{title}</h1>
            </section>
        </>
    )

}

// {videoURL, videoTitle}