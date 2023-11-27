import avatar from '../../assets/images/Mohan-muruge.jpg'
export default function Comment( {commentArray}) {

    let count = 0;

    for(let i = 0; i < commentArray.length; i++) {
        count += 1;
    }

    return (
        <>
            <div className="comment-numbers">{count} Comments</div>
            <section className="comment">
                <div className="comment__image-container">
                    <img className="comment__image" src={avatar} alt="avatar image"></img>
                </div>
                <div className="comment__container">
                    <form className="comment__form">
                        <div className="comment__form--position"><label className="comment__form-label" for = "comment-box">Join The Conversation</label>
                        <textarea className="comment__form-box" typeof="text" id="comment-box" name="comment-box">Add a new comment</textarea></div>
                        <button className="comment__form-button" type="submit" value="submit">Comment</button>
                    </form>
                </div>
            </section>
        </>
    )
    count = 0;
}