
export default function Video( {image, video} ) {

    return (
        <>
            <section className="video">
                <video className='video__player' controls poster={image}>
                    <source src={video} />
                </video>
            </section>
        </>
    )

}

