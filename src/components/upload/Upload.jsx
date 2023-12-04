import PublishIcon from '../../assets/images/publish.svg';
import ThumbnailImage from '../../assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom';

export default function Upload() {

    function submitHandler(event) {
        event.preventDefault();
    }

    return (

        <section className="upload">
            <h1 className="upload-title">Upload Video</h1>
            <section className="upload__form">
                <div className="upload__form-thumbnail">
                    <label className="upload__form-thumbnail-label form-label">Video Thumbnail</label>
                    <img src={ThumbnailImage} alt='thumbnail' className='upload__form-thumbnail-image'/>
                </div>
                <form className="upload__form-container" onSubmit={submitHandler}>
                    <div className="upload__form-title-container">
                        <label className="form-title-label form-label">Title Your Video</label>
                        <div className="form__title-input-box"><input className="form__title-input" type="text" placeholder="Add a title to  your video" /></div>
                    </div>
                    <div className="upload__form-vid-description-container">
                        <label value={"videoDescription"} className="form-vid-description-label form-label">Add a video description</label>
                        <div className="form-vid-description-input-box"><textarea className="form-vid-description-input" name="Video Description" placeholder="Add a description to your video" /></div>
                    </div>
                    <div className="upload__form-buttons">
                        <Link to="/" className='upload__form-cancel--styling'><div className="upload__form-cancel">Cancel</div></Link>
                        <button className="upload__form-publish">
                            <img src={PublishIcon} className='publish-icon' alt='publish icon' />
                            <span className="publish-cta">Publish</span>
                        </button>
                    </div>
                </form>
            </section>
        </section>
    )
}