

export default function Video( {image, title, video} ) {

    return (
        <>
            <section className="video">
                <video className='video__player' controls poster={image}>
                    <source src={video} />
                </video>
                <h1 className="video__title">{title}</h1>
            </section>
        </>
    )

}

