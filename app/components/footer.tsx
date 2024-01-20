import React, { FC } from 'react';
import whatsappIcon from "../assets/whatsapp-icon.png"
import { Link } from '@remix-run/react';

export const WebsiteFooter: FC = () => {
  return (
    <>
      <footer>
        <Link target='_blank' to={`https://abhishekbhaskar.in`}>
          <div className='cursor-pointer fixed bottom-6 right-5 text-white text-xs py-2 px-4 bg-[rgba(255,255,255,0.04)] rounded-lg border-2 border-[rgba(255,255,255,0.03)]'>
            Design and code - <a className='undeline cursor-pointer'><strong>Abhishek Bhaskar</strong></a>
          </div>
        </Link>
      </footer>
    </>
  )
}