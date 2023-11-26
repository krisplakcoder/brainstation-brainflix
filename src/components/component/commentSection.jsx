
const coffeeblurb = ("Aromatic shop breve milk ristretto crema in, siphon acerbic\
                     ristretto skinny espresso. Aromatic, americano organic dark \
                     seasonal to go saucer crema cultivar. And single origin iced, \
                     single shot extra  bar\
                    , turkish, skinny a steamed cinnamon froth.");

export default function CommentSection(name, comment, timestamp) {
    return (

        <section className="comment-section">
            <div className="comment-section__image-container">
                <div className="comment-section__image"></div>
            </div>
            <div className="comments-container">
                <div className="comments__details">
                    <div className="comments__details-username">{name}</div>
                    <div className="comments__details-date">{timestamp}</div>
                </div>
                <div className="comments__blurb">{comment}</div>
            </div>
        </section>
    )
}