import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { ArrowRight, ArrowUpRight, Bell, Book, GitHub, Globe, Instagram, Mail, MapPin, Music, Play, Star, X } from "react-feather"
import ProfilePicture from '../assets/profile.jpg';
import StoreEditorDemo from '../assets/store-editor-demo.mov';
import EdifloDemo from '../assets/ediflo-demo.gif';
import ElevatrDemo from '../assets/entstaack-demo.gif';
import { useState } from 'react';
import { Link } from '@remix-run/react';
import { Spotify } from 'react-spotify-embed';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "About me - Abhishek Bhaskar" },
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
  const [menuExpanded, setMenuExpanded] = useState(false)

  return (
    <>
      <div className="">
        <div className="header">
          <div className="headline">
            <span>About Me</span>
          </div>
        </div>
        <div className=' bg-[#61171745] p-6 border border-red-900 mt-20 border-dashed rounded-2xl max-w-[796px] mx-auto flex flex-col items-center text-red-400 text-center'>
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
      </div>
    </>
  );
}
