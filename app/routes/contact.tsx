import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { useState } from 'react';
import { Widget } from '@typeform/embed-react'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Abhishek Bhaskar - About this website" },
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
      <div className='max-w-xl mx-auto px-4 flex flex-col flex-wrap'>
        <div className='flex flex-row flex-wrap items-center bg-[#fff] pb-6 overflow-hidden rounded-3xl mt-3 h-80 lg:h-[450px]'>
          <Widget id="OYQHiQPl" style={{ width: '100%', height: "100%", backgroundColor: "#fff" }} className="my-form" />
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-white text-black rounded-3xl mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=''>
              Or, email me: abhishk.me@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className='py-20'></div>
    </>
  );
}
