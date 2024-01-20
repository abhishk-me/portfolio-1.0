import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from '@remix-run/react';
import Logo from '../assets/logo.png';
import Cross from '../assets/cross-white.png';
import MenuIcon from '../assets/menu-icon-white.png';
import LinedPattern from '../assets/lined-bck2.png'

export const WebsiteHeader: FC = () => {
  const location = useLocation();
  const [menuExpanded, setMenuExpanded] = useState(false);
  console.log(menuExpanded);

  useEffect(() => {
    setMenuExpanded(false);
  }, [location]);

  console.log(location.pathname);

  return (
    <>
      <div className="top-bar">
        <Link to={`/`}>
          <div className="logo">
            <img className="img-fit" src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="name--top-bar">Hi, I'm Abhishek Bhaskar</div>
        <div
          role="button"
          className="menu-icon"
          onClick={() => setMenuExpanded(prev => !prev)}
        >
          <img className="img-fit" src={MenuIcon} alt="logo" />
        </div>
      </div>
      {menuExpanded && <div id="menu_container">
        <div
          role="button"
          className="close-icon--menu"
          onClick={() => setMenuExpanded(prev => !prev)}
        >
          <img className="img-fit" src={Cross} alt="close" />
        </div>
        <div className="content--menu">
          <div className="content-left--menu">
            <div className="hu--menu">
              <div className="logo--menu">
                <img className="img-fit" src={Logo} alt="logo" />
              </div>
              <span className="name-text--menu">Abhishek Bhaskar</span>
            </div>
            <div className="section-head--menu">
              <div style={{ height: 2, width: 10, backgroundColor: 'background-color:rgb(255, 255, 255)' }}></div>
              <h4 style={{ color: 'rgb(97, 97, 97)', fontWeight: 600, margin: '4px -2px 0 0' }}>Navigation</h4>
            </div>
            <div className="menu">
              <Link to={`/`}>
                <div className={`menu-item ${location.pathname === '/' ? 'selected' : ''}`}>Home</div>
              </Link>
              <Link to={`/about`}>
                <div className={`menu-item ${location.pathname === '/about' ? 'selected' : ''}`}>About</div>
              </Link>
              <a href="work">
                <div className={`menu-item ${location.pathname === '/work' ? 'selected' : ''}`}>Work</div>
              </a>
              <a href="contact">
                <div className={`menu-item ${location.pathname === '/contact' ? 'selected' : ''}`}>Contact</div>
              </a>
            </div>
          </div>
          <div className="content-right--menu">
            <div className="hu--menu opacity-0">
              <span className="name-text--menu">A</span>
            </div>
            <div className="section-head--menu pt-[162px] items-end">
              <h4 style={{ color: 'rgb(97, 97, 97)', fontWeight: 600, margin: '4px -2px 0 0' }}>social</h4>
            </div>
            <div className="social--menu">
              <div className="social-item">
                <div className="pr-3">
                  <svg fill="none" height="25" viewBox="0 0 25 25" width="25" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M15.7481 24.9471C24.0901 24.7061 24.9111 22.9501 24.9111 12.9811C24.9111 1.98108 23.9111 0.981079 12.9111 0.981079C1.91113 0.981079 0.911133 1.98108 0.911133 12.9811C0.911133 22.9761 1.73713 24.7151 10.1391 24.9491C10.2121 24.8581 10.2391 24.7441 10.2391 24.6281C10.2391 24.3781 10.2291 21.8121 10.2241 20.9291C7.18713 21.5681 6.54613 19.5101 6.54613 19.5101C6.04913 18.2881 5.33313 17.9621 5.33313 17.9621C4.34213 17.3061 5.40813 17.3191 5.40813 17.3191C6.50413 17.3941 7.08113 18.4101 7.08113 18.4101C8.05513 20.0271 9.63713 19.5601 10.2591 19.2891C10.3581 18.6061 10.6401 18.1391 10.9521 17.8751C8.52713 17.6081 5.97813 16.7001 5.97813 12.6451C5.97813 11.4901 6.40413 10.5461 7.10213 9.80608C6.98913 9.53808 6.61513 8.46208 7.20913 7.00608C7.20913 7.00608 8.12613 6.72108 10.2121 8.09008C11.0831 7.85508 12.0171 7.73808 12.9461 7.73408C13.8731 7.73808 14.8071 7.85508 15.6801 8.09008C17.7651 6.72108 18.6801 7.00608 18.6801 7.00608C19.2761 8.46208 18.9011 9.53808 18.7881 9.80608C19.4881 10.5461 19.9111 11.4901 19.9111 12.6451C19.9111 16.7101 17.3581 17.6051 14.9251 17.8661C15.3171 18.1931 15.6661 18.8391 15.6661 19.8261C15.6661 20.7721 15.6601 22.4451 15.6561 23.5541C15.6541 24.1031 15.6531 24.5131 15.6531 24.6281C15.6531 24.7371 15.6821 24.8521 15.7481 24.9471V24.9471Z" fill="#fff" fill-rule="evenodd" /></svg>
                </div>
                Github
              </div>
              <div className="social-item ">
                <div className="pr-3">
                  <svg enable-background="new 0 0 56.693 56.693" fill='#fff' height="25" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="25"><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" /><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" /></g></svg></div>LinkedIn
              </div>
              <div className="social-item ">
                <div className="pr-3">
                  <svg fill='#fff' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" height={25} width={25} x="0px" y="0px"
                    viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7">
                    <g>
                      <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
                      <circle cx="41.5" cy="16.4" r="2.9" />
                      <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
                    </g>
                  </svg>

                </div>Instagram
              </div>
            </div>
          </div>

        </div>
        <div className='h-[150px] relative overflow-hidden mb-[50px]'>
          <img src={LinedPattern} alt="bck" className='w-full h-auto' />
        </div>

      </div>}
    </>
  )
}