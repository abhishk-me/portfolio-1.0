import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import CursorOuter from '../assets/cursor-outer.png';
import CursorInner from '../assets/cursor-inner.png';
import DeskOutlined from '../assets/designer-desk-outlined3.png';
import DeskColored from '../assets/designer-desk-color.png';
import { useEffect, useRef, useState } from 'react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Abhishek Bhaskar" },
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
  const animationFrameRequest = useRef<number>(0);
  const v = useRef({
    viewportWidth: 0,
    currentmouseX: 0,
    currentcursorX: 0,
    currentcursorY: 0,
    cursorPosX: 0,
    cursorPosY: 0,
    bckPosX: 0,
    leftBckWidthChange: 0,
  })
  const [output, setOutput] = useState({
    sectionLeftWidth: '50vw',
    sectionRightWidth: '50vw',
    containerTransform: 'none',
    designerTextTransform: 'none',
    designerTextOpacity: 1,
    developerTextTransform: 'none',
    developerTextOpacity: 1,
    cursorFollowerTransform: 'none'
  });

  function mousePoint(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    v.current.viewportWidth = window.innerWidth;
    v.current.currentmouseX = event.clientX - v.current.viewportWidth / 2 + 10;  //10 to justify custom cursor
    v.current.currentcursorX = event.clientX;
    v.current.currentcursorY = event.clientY;
  }

  const moveToPoint = () => {
    var diffX = v.current.currentmouseX - v.current.leftBckWidthChange;
    var diffPosX = v.current.currentmouseX - v.current.bckPosX;
    var diffCursorX = v.current.currentcursorX - v.current.cursorPosX;
    var diffCursorY = v.current.currentcursorY - v.current.cursorPosY;
    v.current.cursorPosX += diffCursorX / 8;
    v.current.cursorPosY += diffCursorY / 8;
    v.current.bckPosX += diffPosX / 10;
    v.current.leftBckWidthChange += diffX / 20;
    const _output = {
      sectionLeftWidth: 50 - v.current.leftBckWidthChange / 15 + 'vw',
      sectionRightWidth: 50 + v.current.leftBckWidthChange / 15 + 'vw',
      containerTransform: 'translateX(' + -v.current.bckPosX / 10 + 'px)',
      designerTextTransform: 'translateX(' + v.current.bckPosX / 50 + 'px)',
      designerTextOpacity: 1 - v.current.leftBckWidthChange / 200,
      developerTextTransform: 'translateX(' + v.current.bckPosX / 50 + 'px)',
      developerTextOpacity: 1 + v.current.leftBckWidthChange / 200,
      cursorFollowerTransform: 'translate(' + v.current.cursorPosX + 'px,' + v.current.cursorPosY + 'px)'
    }
    setOutput(_output)
    requestAnimationFrame(moveToPoint);
  }

  useEffect(() => {
    console.log('lol--');
    animationFrameRequest.current = requestAnimationFrame(moveToPoint);
    return () => {
      console.log('cancelled');
      cancelAnimationFrame(animationFrameRequest.current)
    }
  }, [])

  return (
    <>
      <div id="cursor_follower" style={{ transform: output.cursorFollowerTransform }}>
        <div className="cursor-outer">
          <img className="img-fit" src={CursorOuter} alt="" />
        </div>
        <div className="cursor-inner">
          <img className="img-fit" src={CursorInner} alt="" />
        </div>
      </div>
      <div className='bg-black'>
        <div
          id="container"
          style={{ transform: output.containerTransform }}
          onMouseMove={mousePoint}
        >
          <div id="section_left" style={{ width: output.sectionLeftWidth }}>
            <div className="bck-container">
              <img src={DeskOutlined} alt="outlined background" />
            </div>

          </div>
          <div id="section_right" style={{ width: output.sectionRightWidth }}>
            <div className="bck-container right-0">
              <img className='-mt-0.5' src={DeskColored} alt="outlined background" />
            </div>

          </div>
        </div>
        <div
          id="designer_text_wrap"
          style={{ transform: output.designerTextTransform, opacity: output.designerTextOpacity }}
          onMouseMove={mousePoint}
        >
          <div className="i-am-heading">
            <span className='bg-white text-black'>Design</span><span>er</span>
          </div>
          <h4 className='text-[#A2A2A2] mt-6' style={{ fontWeight: 'initial' }}>I am a designer based in India, focused
            mainly on <b>UI</b> and <b>UX design, web UI development</b> and <b>Illustrations</b> </h4>
        </div>
        <div
          id="developer_text_wrap"
          style={{ transform: output.developerTextTransform, opacity: output.developerTextOpacity }}
          onMouseMove={mousePoint}
        >
          <div className="i-am-heading">
            <span>
              <span className='text-[1.3vw] mr-3 align-middle'>{'{'}</span>Developer<span
                className="text-[1.3vw] ml-3 align-middle">{"}"}</span>
            </span>
          </div>
          <h4 className='text-[#A2A2A2] mt-6' style={{ fontWeight: 'initial' }}>I also develop <b>Web apps</b> and <b>Mobile apps</b> using
            technologies like <b>ReactJS, AngularJS</b> and <b>React Native</b></h4>
        </div>
      </div>
    </>
  );
}
