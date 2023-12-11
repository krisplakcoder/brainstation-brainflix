import avatar from '../../assets/images/Mohan-muruge.jpg'
import CommentIcon from '../../assets/images/add_comment.svg'
import axios from 'axios';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const HOME_URL = "http://localhost:8080";
const commentHolder = {comment: ""};

export default function Comment( {commentArray} ) {
    let { videoId } = useParams();

    const navigate = useNavigate();

    const [values, setValues] = useState(commentHolder);

    const uploadFormChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (values.comment == "") {
            alert("please enter a comment");
        } else { 
            axios.post((HOME_URL+"/videos/"+videoId+"/comments"), values);
            alert("Your comment has been uploaded");
            window.location.reload();
            
        }
    };


    return (
        <>
            <div className="comment-section--flex">
            <div className="comment-numbers">{commentArray.length} Comments</div>
            <section className="comment">
                <div className="comment__image-container">
                    <img className="comment__image" src={avatar} alt="avatar image"></img>
                </div>
                <div className="comment__container">
                    <form onSubmit={submitHandler} className="comment__form">
                        <div className="comment__form--position"><label className="comment__form-label" htmlFor ="commentBox">Join The Conversation</label>
                        <textarea value={values.comment} onChange={uploadFormChange} className="comment__form-box" typeof="text" id="comment-box" name="comment" placeholder="Add a new comment" /></div>
                        <button className="comment__form-button" type="submit" ><img className="commentIcon" src={CommentIcon}/>Comment</button>
                    </form>
                </div>
            </section>
            </div>
        </>
    )
    count = 0;
}