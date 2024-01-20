import React, { useEffect, useState } from 'react';
import ProfileImage from '../assets/profile.png'
import { ArrowRight, GitHub, Globe, Instagram, Linkedin, Mail, X } from 'react-feather';
import { Link, useLocation } from '@remix-run/react';

export const MenuBar = () => {
  const location = useLocation();
  const [menuExpanded, setMenuExpanded] = useState(false);


  useEffect(() => {
    setMenuExpanded(false);
  }, [location]);

  const images = [
    "https://i.ibb.co/sK8Qwnw/elevatr-inventory-shot.png",
    "https://i.ibb.co/ctxnMYM/dashboard-design-shot.png",
    "https://i.ibb.co/NxsdCRJ/elevatr-online-store-shot.png",
    "https://i.ibb.co/g6cyCVL/store-editor-shot.png",
    "https://i.ibb.co/9N4VJ5w/protofolio-trades-shot.png"
  ]

  return (
    <>
      {menuExpanded && <div className='fixed inset-0 bg-transparent z-40' onClick={() => setMenuExpanded(false)} />}
      <div
        className='fixed bottom-0 inset-x-0 py-4 px-2 z-50'
        style={{
          background: 'linear-gradient(0deg, var(--background) 0%, var(--background-transparent) 100%)'
        }}
      >
        {menuExpanded && <div className='absolute inset-0 bg-transparent z-0' onClick={() => setMenuExpanded(false)} />}
        <div className={`z-10 relative rounded-[30px] mx-auto overflow-hidden bg-[var(--accent)] transition-all duration-500 flex flex-col ${menuExpanded ? 'max-w-lg h-[500px] p-2' : 'max-w-[320px] lg:hover:max-w-[380px] h-14 lg:h-12'}`}>
          <div
            onClick={() => setMenuExpanded(prev => !prev)}
            className={`h-14 lg:h-12 cursor-pointer flex items-center p-2.5 lg:p-1.5 transition-all duration-500 ${menuExpanded ? '' : 'group'}`}
          >
            <div className='h-9 w-9 rounded-full overflow-hidden bg-white'>
              <img src={ProfileImage} className='h-full w-full object-cover' />
            </div>
            <div className={`px-2 h-6 overflow-hidden flex flex-1`}>
              <div className='h-12 lg:group-hover:-translate-y-6 transition-transform duration-500'>
                <p className='h-6 text-lg flex items-center text-black font-semibold'>Abhishek Bhaskar</p>
                <p className='h-6 text-lg flex items-center text-black font-semibold'>Menu</p>
              </div>
            </div>
            <div className='h-9 w-11 bg-black rounded-full group-hover:w-14 transition-all duration-500 flex items-center justify-center'>
              {menuExpanded ?
                <X color='#fff' />
                : <div className='w-4 h-[16px] relative'>
                  <div className='h-[2px] bg-white rounded-full absolute top-[7px] w-4 -translate-y-[3px] lg:group-hover:rotate-90 lg:group-hover:translate-y-0 transition-transform duration-500'></div>
                  <div className='h-[2px] bg-white rounded-full absolute top-[7px] w-4 translate-y-[3px] lg:group-hover:translate-y-0 transition-transform duration-500'></div>
                </div>}
            </div>
          </div>
          <div className={`flex flex-1 flex-col transition-opacity duration-500 ${menuExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <p className='px-4 lg:px-5 text-xs font-medium mt-2 flex items-center'>
              <span className='pr-4'>Random shots of my work</span>
              <span className='border-t border-t-[rgba(0,0,0,0.3)] flex flex-1' />
            </p>
            <div className='flex flex-row px-2 pb-4 pt-1'>
              <div className='px-1 lg:px-2 flex flex-1 flex-col'>
                <div className='aspect-[1.4] lg:aspect-[1.6] bg-white rounded-xl overflow-hidden'>
                  <img className='w-full h-full object-cover' src={images[2]} />
                </div>
              </div>
              <div className='px-1 lg:px-2 flex flex-1 flex-col'>
                <div className='aspect-[1.4] lg:aspect-[1.6] bg-white rounded-xl overflow-hidden'>
                  <img className='w-full h-full object-cover' src={images[4]} />
                </div>
              </div>
              {/* <div className='px-1 lg:px-2 flex flex-1 flex-col'>
                <div className='aspect-square lg:aspect-[1.4] bg-white rounded-lg'></div>
              </div> */}
            </div>
            <div className='flex flex-row px-4 lg:px-4 rounded-xl text-black text-lg mt-2'>
              <div className='px-2 flex flex-1 flex-col items-start'>
                <Link to={"/"} className='py-0.5 font-bold hover:underline cursor-pointer flex items-center group/nav'>
                  <span className='mr-1'>Home</span>
                  <span className='group-hover/nav:translate-x-2 transition-transform'>
                    <ArrowRight size={16} strokeWidth={3} />
                  </span>
                </Link>
                <Link to={"about"} className='py-0.5 font-bold hover:underline cursor-pointer flex items-center group/nav'>
                  <span className='mr-1'>About</span>
                  <span className='group-hover/nav:translate-x-2 transition-transform'>
                    <ArrowRight size={16} strokeWidth={3} />
                  </span>
                </Link>
                <Link to="contact-me" className='py-0.5 font-bold hover:underline cursor-pointer flex items-center group/nav'>
                  <span className='mr-1'>Contact</span>
                  <span className='group-hover/nav:translate-x-2 transition-transform'>
                    <ArrowRight size={16} strokeWidth={3} />
                  </span>
                </Link>
              </div>
              <div className='px-2 flex flex-1 flex-col items-start'>
                {/* <Link to={"projects"} className='py-0.5 font-bold hover:underline cursor-pointer flex items-center group/nav'>
                  <span className='mr-1'>Projects</span>
                  <span className='group-hover/nav:translate-x-2 transition-transform'>
                    <ArrowRight size={16} strokeWidth={3} />
                  </span>
                </Link> */}
                <Link to={"experience"} className='py-0.5 font-bold hover:underline cursor-pointer flex items-center group/nav'>
                  <span className='mr-1'>Past Work</span>
                  <span className='group-hover/nav:translate-x-2 transition-transform'>
                    <ArrowRight size={16} strokeWidth={3} />
                  </span>
                </Link>
                <Link to={"about-this-website"} className='py-0.5 font-bold hover:underline cursor-pointer flex items-center group/nav'>
                  <span className='mr-1'>This Website</span>
                  <span className='group-hover/nav:translate-x-2 transition-transform'>
                    <ArrowRight size={16} strokeWidth={3} />
                  </span>
                </Link>
              </div>
            </div>
            <div className='flex flex-1' />
            <div className='flex flex-row justify-center px-2 py-4'>
              <Link to={"https://abhishekbhaskar.in"} target='_blank' className='flex flex-row items-center bg-black rounded-full h-10 p-1 cursor-pointer'>
                <div className='h-8 w-8 flex items-center justify-center rounded-full bg-black'>
                  <Globe size={18} color='#fff' />
                </div>
              </Link>
              <span className='mx-1' />
              <Link to={"https://www.linkedin.com/in/abhishk-me/"} target='_blank' className='flex flex-row items-center bg-black rounded-full h-10 p-1 cursor-pointer'>
                <div className='h-8 w-8 flex items-center justify-center rounded-full bg-black'>
                  <Linkedin size={18} color='#fff' />
                </div>
              </Link>
              <span className='mx-1' />
              <Link to={"https://www.instagram.com/_abhishek_bhaskar/"} target='_blank' className='flex flex-row items-center bg-black rounded-full h-10 p-1 cursor-pointer'>
                <div className='h-8 w-8 flex items-center justify-center rounded-full bg-black'>
                  <Instagram size={18} color='#fff' />
                </div>
              </Link>
              <span className='mx-1' />
              <Link to={"mailto:abhishk.me@gmail.com"} className='flex flex-row items-center bg-black rounded-full h-10 p-1 group/mail cursor-pointer'>
                <div className='h-8 w-8 flex items-center justify-center rounded-full overflow-hidden bg-white'>
                  <Mail size={18} color='#000' />
                </div>
                <div className={`pl-2 pr-4 h-6 overflow-hidden flex flex-1`}>
                  <div className='h-12 lg:group-hover/mail:-translate-y-6 transition-transform duration-500'>
                    <p className='h-6 flex items-center text-white font-semibold'>Say Hello!</p>
                    <p className='h-6 flex items-center text-white font-semibold'>Say Hello!</p>
                  </div>
                </div>
              </Link>
            </div>
            <p className='pb-4 text-center text-sm font-semibold px-6'>This site is designed and developed from scratch by me</p>
          </div>
        </div>
      </div>
    </>
  );
}