import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { CornerRightDown, ExternalLink, Feather, Plus } from "react-feather"
import { useState } from 'react';
import { Link } from '@remix-run/react';

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
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-[#fffae0] rounded-3xl rounded-bl-lg'>
          <div className='h-16 w-16 '>
            <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/website-6031843-4991252.png"} className='h-full w-full' />
          </div>
          <div className='flex flex-col pl-4 flex-1 w-auto pt-0'>
            <p className='text-lg lg:text-xl text-black font-semibold leading-snug'>
              About This Website
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg leading-snug'>
              This website is designed and developed completely from scratch by me.
            </p>
          </div>
        </div>
        <div className='inline-flex self-start flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col pr-1'>
            <p className='text-[var(--accent)] font-medium text-sm leading-snug'>
              Technologies used
            </p>
          </div>
          <CornerRightDown size={16} />
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 pt-6 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='h-14 w-14 bg-white rounded-xl p-1'>
            <svg id="Layer_2" version="1.1" viewBox="0 0 600 600" ><circle className="st0" cx="299.5" cy="299.6" r="50.2" fill='#00D8FF' /><g><path className="st0" d="M299.5,414.6c-70.5,0-132.1-8.3-178.2-24.1c-29.9-10.2-55.3-23.8-73.4-39.3c-19.2-16.4-29.4-34.3-29.4-51.6   c0-33.2,36.4-65.7,97.5-86.9c50-17.4,115.2-27.1,183.4-27.1c67,0,131.3,9.4,181,26.6c29.1,10,53.6,23,71,37.4   c18.9,15.8,28.9,33.1,28.9,50c0,34.5-40.7,69.4-106.3,91.1C427.6,406.1,365.6,414.6,299.5,414.6z M299.5,209.6   c-64.7,0-128.7,9.4-175.5,25.7c-56.2,19.6-81.4,46.4-81.4,64.3c0,18.6,27.1,47.9,86.5,68.2c43.6,14.9,102.6,22.8,170.4,22.8   c63.6,0,122.9-8,167-22.7c61.7-20.5,89.9-49.8,89.9-68.3c0-9.5-7.2-20.7-20.3-31.6c-15.1-12.6-37.1-24.1-63.4-33.2   C425.4,218.6,363.9,209.6,299.5,209.6z" fill='#00D8FF' /></g><g><path className="st0" d="M185.6,549.8c-10.2,0-19.2-2.2-26.8-6.6c-28.7-16.6-38.7-64.4-26.6-127.9c9.9-52.1,34.1-113.3,68.2-172.4   c33.5-58,73.7-109,113.4-143.5c23.2-20.2,46.7-35,67.9-42.8c23.1-8.5,43.1-8.5,57.7-0.1c29.9,17.2,39.8,70,25.8,137.6   c-9.9,48-33.5,105.9-66.5,163.2c-35.2,61-73.2,110.2-109.9,142.3c-23.8,20.8-48.3,36-70.7,43.9   C206.4,547.7,195.4,549.8,185.6,549.8z M210.7,248.9l10.4,6c-32.3,56-56.2,116.1-65.4,164.9c-11.1,58.5-0.4,93.7,15,102.6   c3.8,2.2,8.8,3.4,14.9,3.4c19.9,0,51.2-12.6,87.4-44.2c34.7-30.3,71-77.5,104.9-136.2c31.8-55.1,54.4-110.5,63.8-156   c13.1-63.7,1.8-102.7-14.3-112c-8.2-4.7-21.5-4.1-37.5,1.8c-18.5,6.8-39.4,20.1-60.4,38.4c-37.7,32.8-76.2,81.6-108.4,137.4   L210.7,248.9z" fill='#00D8FF' /></g><g><path className="st0" d="M413.4,550.1c-27.2,0-61.7-16.4-97.7-47.4c-40.2-34.6-81.1-86.1-115.3-145.2v0c-33.6-58-57.6-118.3-67.7-170   c-5.9-30.2-7-57.9-3.2-80.2c4.2-24.3,14.1-41.6,28.8-50.1c29.8-17.3,80.5,0.5,132.1,46.4c36.6,32.5,75,81.9,108.1,139.1   c35.3,61,59,118.5,68.4,166.3c6.1,31,7.1,59.8,2.8,83.2c-4.6,24.9-15,42.6-30,51.3C432.2,547.9,423.3,550.1,413.4,550.1z    M221.2,345.5c32.4,56,72.6,106.7,110.2,139c45.1,38.8,80.9,47.2,96.4,38.2c16.1-9.3,27.9-47.4,15.7-109   c-9-45.2-31.7-100.2-65.7-158.9c-31.9-55.1-68.6-102.4-103.3-133.2C225.9,78.4,186.5,68.7,170.4,78c-8.2,4.7-14.3,16.6-17.2,33.4   c-3.3,19.4-2.3,44.2,3.1,71.5C165.9,232,188.9,289.7,221.2,345.5L221.2,345.5z" fill='#00D8FF' /></g></svg>
          </div>
          <span className='px-1'>
            <Plus />
          </span>
          <div className='h-14 bg-white rounded-xl px-4 flex items-center justify-center'>
            <svg x-comp="Wordmark" height="20" viewBox="0 0 659 165" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><title>Remix Logo</title><path fill-rule="evenodd" clip-rule="evenodd" d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" fill="#000"></path><path d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z" fill="#000"></path><path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" fill="url(#paint0_linear)"></path><path d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" fill="#000"></path><path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" fill="url(#paint1_linear)"></path><path d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" fill="#000"></path><path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="url(#paint2_linear)"></path><path d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" fill="#000"></path><path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" fill="url(#paint3_linear)"></path><path d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" fill="#000"></path><defs><linearGradient id="paint0_linear" x1="591.052" y1="47.1035" x2="591.052" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="#000"></stop><stop offset="1" stop-color="#000" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="203.19" y1="44.0317" x2="203.19" y2="164.352" gradientUnits="userSpaceOnUse"><stop stop-color="#000"></stop><stop offset="1" stop-color="#000" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear" x1="368.744" y1="44.0317" x2="368.744" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="#000"></stop><stop offset="1" stop-color="#000" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear" x1="499.172" y1="0" x2="499.172" y2="161.28" gradientUnits="userSpaceOnUse"><stop stop-color="#000"></stop><stop offset="1" stop-color="#000" stop-opacity="0"></stop></linearGradient></defs></svg>
          </div>
          <div className='flex flex-col w-full pt-3'>
            <p className=' lg:text-lg leading-snug'>
              Remix on react with typescript for front-end with SSR.
            </p>
          </div>
          <div className='flex flex-row w-full pt-3 -ml-0.5'>
            <Link to={'https://react.dev/'} target='_blank' className='text-sm px-4 py-1.5 rounded-full flex flex-row items-center bg-[var(--accent)] font-medium'>
              <span className='mr-1' style={{ color: "#000" }}>React</span>
              <ExternalLink color='#000' size={12} />
            </Link>
            <Link to={'https://remix.run/'} target='_blank' className='text-sm ml-2 px-4 py-1.5 rounded-full flex flex-row items-center bg-[var(--accent)] font-medium'>
              <span className='mr-1' style={{ color: "#000" }}>Remix</span>
              <ExternalLink color='#000' size={12} />
            </Link>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 pt-6 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='h-10 bg-white rounded-lg px-3 flex items-center justify-center'>
            <svg viewBox="0 0 248 31" className="text-slate-900 dark:text-white w-auto h-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="#000"></path></svg>
          </div>
          <span className='px-1'>
          </span>
          <div className='h-10 flex items-center bg-white rounded-xl px-3'>
            <Feather color='#000' />
            <span style={{ color: "#000" }} className='text-base ml-2'>Feather</span>
          </div>
          <div className='flex flex-col w-full pt-3'>
            <p className=' lg:text-lg leading-snug'>
              Tailwind CSS for styling and feather icon pack for icons
            </p>
          </div>
          <div className='flex flex-row w-full pt-3 -ml-0.5'>
            <Link to={'https://tailwindcss.com/'} target='_blank' className='text-sm px-4 py-1.5 rounded-full flex flex-row items-center bg-[var(--accent)] font-medium'>
              <span className='mr-1' style={{ color: "#000" }}>Tailwind CSS</span>
              <ExternalLink color='#000' size={12} />
            </Link>
            <Link to={'https://feathericons.com/'} target='_blank' className='text-sm ml-2 px-4 py-1.5 rounded-full flex flex-row items-center bg-[var(--accent)] font-medium'>
              <span className='mr-1' style={{ color: "#000" }}>Feather</span>
              <ExternalLink color='#000' size={12} />
            </Link>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 pt-6 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='h-12 bg-white rounded-xl px-4 flex items-center'>
            <svg aria-label="Vercel logotype" height="22" role="img" viewBox="0 0 283 64"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="var(--geist-foreground)"></path></svg>
          </div>
          <div className='flex flex-col w-full pt-3'>
            <p className=' lg:text-lg leading-snug'>
              Vercel for Remix app deployement.
            </p>
          </div>
          <div className='flex flex-row w-full pt-3 -ml-0.5'>
            <Link to={'https://vercel.com/'} target='_blank' className='text-sm px-4 py-1.5 rounded-full flex flex-row items-center bg-[var(--accent)] font-medium'>
              <span className='mr-1' style={{ color: "#000" }}>Vercel</span>
              <ExternalLink color='#000' size={12} />
            </Link>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg leading-snug'>
              <a className='underline' target='_blank' href='https://www.typeform.com/'>Typeform</a> for contact form.
            </p>
          </div>
        </div>
      </div>
      <div className='py-20'></div>
    </>
  );
}
