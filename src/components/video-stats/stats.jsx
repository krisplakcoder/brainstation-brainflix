import LikesIcon from "../../assets/Icons/likes.svg"
import ViewsIcon from "../../assets/Icons/views.svg"

export default function VideoStats({author, date, viewCount, likes}) {

    return (
        <><section className="vid-stats__container"><div className="vid-stats">
            <p className="vid-stats--bold">By {author}</p>
            <p>{new Date(date).toLocaleDateString()}</p>
        </div><div className="vid-stats">
                <p><img className="vid-stats__icon" src={ViewsIcon} alt="views" />{viewCount}</p>
                <p><img className="vid-stats__icon" src={LikesIcon} alt="likes"/>{likes}</p>
            </div></section></>
    );
}