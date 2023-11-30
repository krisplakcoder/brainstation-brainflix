import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import UploadImage from '../../assets/images/upload.svg'

export default function Header() {

    return (
    
    <header className = "navbar">
        <img className = "navbar__img navbar__img--mobile" src={logo} alt='brainflix logo' />
        <div className = "navbar__search">
            <img className = "navbar__img navbar__img--desktop" src={logo} alt='brainflix logo' />
            <div className="navbar__search--space"><input type='search' placeholder='Search..' className='navbar__searchbar'></input>
            <button className='upload-button upload-button--desktop'><img className="upload-icon" src={UploadImage} alt="upload image"/>Upload</button>
            <img className='user-avatar' src={avatar} alt='avatar'></img></div>
        </div>
        <button disabled={true} className='upload-button upload-button--mobile'><img className="upload-icon" src={UploadImage} alt="upload image"/>Upload</button>
    </header>
    
    );
}