import React from 'react';
import PropTypes from 'prop-types'
//import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='white'?'#000033':'#fff'}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="#">Home</a>
               {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                </li>
                <li className="nav-item">
                {/* <a className="nav-link" href="/">About</a> */}
                {/*<Link className="nav-link active" aria-current="page" to="/about">About</Link> */}
                </li>
            </ul>
            <div className="d-flex mx-2 bg-success rounded" style={{height:'30px',width:'30px'}} onClick={()=>{props.toggleTheme('success')}}></div>
            <div className="d-flex mx-2 bg-primary rounded" style={{height:'30px',width:'30px'}} onClick={()=>{props.toggleTheme('primary')}}></div>
            <div className="d-flex mx-2 bg-danger rounded" style={{height:'30px',width:'30px'}} onClick={()=>{props.toggleTheme('danger')}}></div>
            <div className="d-flex mx-2 bg-warning rounded" style={{height:'30px',width:'30px'}} onClick={()=>{props.toggleTheme('warning')}}></div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>
            </div>
        </div>
    </nav>
  )
}
Navbar.propTypes = {
    title : PropTypes.string,
    // title : PropTypes.string,isRequired,  => used to make the prop required
}
// if we don't pass the props from the parent component then default props values will be shown
Navbar.defaultProps = {
    title : "Your Logo here",
}
export default Navbar;

