import logo from '../../assets/images/BrainFlix-logo.svg';
import avatar from '../../assets/images/Mohan-muruge.jpg';


export default function Header() {

    return (
    
    <header className = "navbar">
        <img className = "navbar__img" src={logo} alt='brainflix logo' />
        <div className = "navbar__search">
            <input type='search' placeholder='Search..' className='navbar__searchbar'></input>
            <img className='user-avatar' src={avatar} alt='avatar'></img>
        </div>
        <button className='upload-button'>Upload</button>
    </header>
    
    );
}