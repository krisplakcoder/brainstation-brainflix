function dateConvertor(date) {
    let newDate = new Date(date).toLocaleDateString();
    return newDate;
}

export default function CommentSection( {commentArray} ) {
    return (
          
        commentArray.map((videoComments) => {
            return (
                <section key={videoComments.id} className="comment-section">
                    <div className="comment-section__image-container">
                    <div className="comment-section__image"></div>
                    </div>
                    <div className="comments-container">
                        <div className="comments__details">
                        <div className="comments__details-username">{videoComments.name}</div>
                    <div className="comments__details-date">{dateConvertor(videoComments.timestamp)}</div>
                    </div>
                    <div className="comments__blurb">{videoComments.comment}</div>
                    </div>
                </section>
            )
        }
        )
          
    )
}