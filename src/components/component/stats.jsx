export default function VideoStats({author, date, viewCount, likes}) {

    return (
        <><section className="vid-stats__container"><div className="vid-stats">
            <p className="vid-stats--bold">{author}</p>
            <p>{date}</p>
        </div><div className="vid-stats">
                <p>{viewCount}</p>
                <p>{likes}</p>
            </div></section></>
    );
}