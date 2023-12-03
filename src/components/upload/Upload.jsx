import PublishIcon from '../../assets/images/publish.svg';
import { Link } from 'react-router-dom';

export default function Upload() {

    function submitHandler(event) {
        event.preventDefault();
    }

    return (

        <section className="upload">
            <h1 className="upload-title">Upload Page</h1>
            <section className="upload__form">
                <div className="upload__form-thumbnail"></div>
                <form className="upload__form-container" onSubmit={submitHandler}>
                    <div className="upload__form-title-container">
                        <label className="form-title-label">Title Your Video</label>
                        <input type="text" placeholder="Add a title to  your video" />
                    </div>
                    <div className="upload__form-vid-description-container">
                        <label value={"videoDescription"} className="form-vid-description-label">Add a video description</label>
                        <textarea name="Video Description" placeholder="Add a description to your video" />
                    </div>
                    <div className="upload__form-buttons">
                        <Link to="/"><div className="upload__form-cancel">Cancel</div></Link>
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