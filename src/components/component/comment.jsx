import avatar from '../../assets/images/Mohan-muruge.jpg'
export default function Comment() {

    return (
        <>
            <div className="comment-numbers">3 Comments</div>
            <section className="comment">
                <div className="comment__image-container">
                    <img className="comment__image" src={avatar} alt="avatar image"></img>
                </div>
                <div className="comment__container">
                    <form className="comment__form">
                        <label className="comment__form-label" for = "comment-box">Join The Conversation</label>
                        <textarea className="comment__form-box" typeof="text" id="comment-box" name="comment-box">Add a new comment</textarea>
                        <button className="comment__form-button" type="submit" value="submit">Comment</button>
                    </form>
                </div>
            </section>
        </>
    )
}