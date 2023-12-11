import PublishIcon from '../../assets/images/publish.svg';
import ThumbnailImage from '../../assets/images/Upload-video-preview.jpg';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HOME_URL = "http://localhost:8080";

const uploadVideoDetails = {
    title: "",
    description: "",
  };

export default function Upload() {
    const navigate = useNavigate();
    const [values, setValues] = useState(uploadVideoDetails);

    const uploadFormChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (values.title == "" || values.description == "") {
            alert("please enter text in both fields");
        } else { 
            axios.post((HOME_URL+"/videos"), values);
            alert("Your video has been uploaded");
            return navigate("/");

        }
    };

    return (

        <section className="upload">
            <h1 className="upload-title">Upload Video</h1>
            <section className="upload__form">
                <div className="upload__form-thumbnail">
                    <label className="upload__form-thumbnail-label form-label">Video Thumbnail</label>
                    <img src={ThumbnailImage} alt='thumbnail' className='upload__form-thumbnail-image'/>
                </div>
                <form onSubmit={submitHandler} className="upload__form-container" id="upload form">
                    <div className="upload__form-title-container">
                        <label className="form-title-label form-label">Title Your Video</label>
                        <div className="form__title-input-box"><input value={values.title} onChange={uploadFormChange} name="title" className="form__title-input" type="text" placeholder="Add a title to  your video" /></div>
                    </div>
                    <div className="upload__form-vid-description-container">
                        <label value={"videoDescription"} className="form-vid-description-label form-label">Add a video description</label>
                        <div className="form-vid-description-input-box"><textarea onChange={uploadFormChange} className="form-vid-description-input" name="description" placeholder="Add a description to your video" /></div>
                    </div>
                    <div className="upload__form-buttons buttons--mobile-tablet-display">
                        <Link to="/" className='upload__form-cancel--styling'><div className="upload__form-cancel">Cancel</div></Link>
                        <button className="upload__form-publish" type='submit'>
                            <img src={PublishIcon} className='publish-icon' alt='publish icon' />
                            <span className="publish-cta">Publish</span>
                        </button>
                    </div>
                </form>
            </section>
            <div className="upload__form-buttons buttons--desktop-display">
                <Link to="/" className='upload__form-cancel--styling'><div className="upload__form-cancel">Cancel</div></Link>
                <button className="upload__form-publish" type='submit' form="upload form">
                    <img src={PublishIcon} className='publish-icon' alt='publish icon' />
                    <span className="publish-cta">Publish</span>
                </button>
            </div>
        </section>
    )
}