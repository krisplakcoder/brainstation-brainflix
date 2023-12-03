export default function Upload() {

    return (

        <section className="upload">
            <h1 className="upload-title">Upload Page</h1>
            <section className="upload__form">
                <div className="upload__form-thumbnail"></div>
                <form className="upload__form-container">
                    <div className="upload__form-title-container">
                        <label className="form-title-label">Title Your Video</label>
                        <input type="text" ref={videoTitle} placeholder="Add a title to  your video" />
                    </div>
                </form>
            </section>
        </section>
    )
}