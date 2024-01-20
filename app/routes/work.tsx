import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import EchoLogo1 from '../assets/echo-logo-1.png'
import EchoLogo2 from '../assets/echo-logo-2.jpg'
import StoriesPage from '../assets/stories-page@2x.png'
import StoriesPageDark from '../assets/stories-page--dark@2x.png'
import EventsPage from '../assets/events@2x.png';
import HCLogo from '../assets/hc-logo.png';
import HCAppScreen from '../assets/hc-app-screen.png'
import { Link } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Work experience - Abhishek Bhaskar" },
    { name: "description", content: "Hey, This is Abhishek Bhaskar! Welcome to my page" },
    {
      property: "og:title",
      content: "Hey, This is Abhishek Bhaskar! Welcome to my page",
    },
    {
      property: "og:image",
      content: "https://i.ibb.co/8N8pzjH/Screenshot-2023-10-19-at-12-24-29-AM.png",
    },
    {
      property: "og:description",
      content: "Hey, This is Abhishek Bhaskar! Welcome to my page",
    },
    {
      property: "og:url",
      content: "https://abhishekbhaskar.in",
    },
    {
      property: "keywords",
      content: "Abhishek Bhaskar, Abhishek kumar bhaskar, abhikbhasker, abhishk.me, full-stack developer, designer, UI/UX designer, React developer, front-end developer, back-end developer, Abhishek Bhaskar instagram, Abhishek Bhaskar linkedin",
    },
    {
      property: "og:site_name",
      content: "Abhishek Bhaskar",
    },
    {
      property: "og:image:width",
      content: "800",
    },
    {
      property: "og:image:height",
      content: "627",
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "https://i.ibb.co/zV8bbst/ab-logo.png",
      type: "image/png"
    }
  ];
};


export default function Index() {
  return (
    <>
      <div className="">
        <div className="header">
          <div className="headline">
            <span>My work</span>
          </div>
          <div className="filter-wrap">
            <div className="filter active" >
              All
            </div>
            <div className="filter " >
              Web
            </div>
            <div className="filter" >
              Mobile
            </div>
            <div className="filter">
              Logo
            </div>
          </div>
        </div>
        <div className=' bg-[#61171745] p-6 border border-red-900 mt-10 border-dashed rounded-2xl w-[796px] mx-auto flex flex-col items-center text-red-400'>
          <p>This is a very old website. I have not updated it since 2019!</p>
          <p className='text-white mt-1 opacity-70 text-sm'>Please visit my new portfolio website!</p>
          <Link target='_blank' to={`https://abhishekbhaskar.in`}>
            <button className='px-4 py-1.5 bg-white rounded-full text-black font-medium mt-4 flex flex-row items-center'>
              <span>Take me there</span>
              <span className='pl-1.5 -mr-0.5'>
                <svg viewBox="0 0 448 512" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path fill='#000' d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>
              </span>
            </button>
          </Link>
        </div>
        <div className="project-container type-logo" style={{ marginTop: 60 }}>
          <div className="project">
            <div className="project-header">
              <p className="serial">#1</p>
              <p className="work-type">Logo design</p>
            </div>
            <div className="project-body pt-[50px]">
              <div className="project-board h-[300px]"></div>
              <div className="project-screenshot w-[340px] h-[340px] -top-5 left-20">
                <img src={EchoLogo2} />
              </div>
              <div className="project-screenshot h-[260px] w-[260px] top-[180px] right-[80px] border" style={{ border: "5px solid rgb(71, 71, 71)" }}>
                <img src={EchoLogo1} />
              </div>
            </div>
            <div className="project-footer">
              <p className="project-name">Echo app logo</p>

            </div>
          </div>
        </div>
        <div className="project-container type-mobile">
          <div className="project">
            <div className="project-header">
              <p className="serial">#2</p>
              <p className="work-type">UX design + Mobile app</p>
            </div>
            <div className="project-body">
              <div className="project-board"></div>
              <div className="project-screenshot w-[200px] top-16 left-20" >
                <img src={StoriesPage} />
              </div>
              <div className="project-screenshot w-[200px] -top-5 left-72 ml-3" >
                <img src={StoriesPageDark} />
              </div>
              <div className="project-screenshot w-[200px] top-40 right-20">
                <img src={EventsPage} />
              </div>
            </div>
            <div className="project-footer">
              <p className="project-name">Echo mobile app</p>
            </div>
          </div>
        </div>
        <div className="project-container type-logo">
          <div className="project">
            <div className="project-header">
              <p className="serial">#3</p>
              <p className="work-type">Logo design + branding</p>
            </div>
            <div className="project-body pt-[50px]">
              <div className="project-board h-[300px]"></div>
              <div className="project-screenshot w-[340px] h-[340px] top-5 left-10">
                <img src={HCLogo} />
              </div>
              <div className="project-screenshot w-[260px] h-[260px] top-[180px] right-[140px]" style={{ border: '5px solid rgb(71, 71, 71)' }}>
                <img src={HCAppScreen} />
              </div>
            </div>
            <div className="project-footer">
              <p className="project-name">hashCampus logo</p>

            </div>
          </div>
        </div>
        {/* <div className="project-container type-logo">
          <div className="project">
            <div className="project-header">
              <p className="serial">#4</p>
              <p className="work-type">Logo design</p>
            </div>
            <div className="project-body" style="padding-top:50px">
              <div className="project-board" style="height: 300px"></div>
              <div className="project-screenshot" style="width:300px;top:20px;left:40px">
                <img src="../images/logo-rekrishi-1.png" />
              </div>
              <div className="project-screenshot" style="width:340px;top:110px;right:80px">
                <img src="../images/logo-rekrishi-2.png" />
              </div>
            </div>
            <div className="project-footer">
              <p className="project-name">ReKrishi logo</p>

            </div>
          </div>
        </div> */}
        {/* <div className="project-container type-web">
          <div className="project">
            <div className="project-header">
              <p className="serial">#5</p>
              <p className="work-type">UI + Illustrations + Code</p>
            </div>
            <div className="project-body" style="padding-top:50px">
              <div className="project-board" style="height: 380px"></div>
              <div className="project-screenshot" style="width:400px;top:20px;left:100px;border:6px solid #fff">
                <img src="../images/apiria-placeholder.png" />
              </div>
              <div className="project-screenshot" style="width:400px;top:240px;left:300px">
                <img src="../images/apiria-ph2.png" />
              </div>
            </div>
            <div className="project-footer">
              <p className="project-name">Apiria landing page</p>

            </div>
          </div>
        </div> */}
      </div>
      <div className="scroll-prompt">
        <div className="scroll-prompt-container">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="scroll-text">Scroll down</div>
        </div>
      </div>
    </>
  );
}
