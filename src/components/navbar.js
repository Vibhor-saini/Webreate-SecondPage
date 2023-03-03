import './navbar.css';
import Logo from './img/webreate-logo.jpg';


function navbar(){
    return <div>

<div class="navbar">
      <div className="left">
        <img src={Logo} /> <span>EBREATE</span>
      </div>
      <div className="right">
        <p>ADMIN</p>
        <hr />
        <div className="button">
          <button id="one"><p>NEWSLETTER</p></button> <br />
          <button id="two"><p>APPOINTMENT</p></button>
        </div>
      </div>
    </div>

    </div>
}

export default navbar;