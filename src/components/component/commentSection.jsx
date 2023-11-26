
const coffeeblurb = ("Aromatic shop breve milk ristretto crema in, siphon acerbic\
                     ristretto skinny espresso. Aromatic, americano organic dark \
                     seasonal to go saucer crema cultivar. And single origin iced, \
                     single shot extra  bar\
                    , turkish, skinny a steamed cinnamon froth.");

export default function CommentSection() {
    return (

        <section className="comment-section">
            <div className="comment-section__image-container">
                <div className="comment-section__image"></div>
            </div>
            <div className="comments-container">
                <div className="comments__details">
                    <div className="comments__details-username">Dave Accounting</div>
                    <div className="comments__details-date">10 Jan 2011</div>
                </div>
                <div className="comments__blurb">{coffeeblurb}</div>
            </div>
        </section>
    )
}