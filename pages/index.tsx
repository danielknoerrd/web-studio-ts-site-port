import React from 'react'
import type { NextPage } from 'next'
import {useState, useEffect} from 'react'
import Head from 'next/head'
import MagneticButton from '../components/MagneticButton'
import CursorFollower from '../components/CursorFollower'
import FollowCursor from '../components/FollowCursor'
import Script from 'next/script'
import Header from '../components/Header'
import ParallaxItem from '../components/ParallaxItem'
import DotText from '../components/DotText'
import HorizontalText from '../components/HorizontalText'
import SplitTextAnimation from '../components/SplitTextAnimation'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

const color1 = '#000'
const color2 = '#eee'
const allow =
              <svg width="30" height="15" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:'10px'}}>
                <rect x="1" y="1" width="28" height="13" rx="6.5" fill="#FF5C00" stroke="#FF5C00" strokeWidth="2"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.32812 7.96875V7.03125L23.2031 7.03125V7.96875L6.32812 7.96875Z" fill="black"/>
                <rect width="5.625" height="0.9375" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 20.1172 11.4844)" fill="black"/>
                <rect width="5.625" height="0.9375" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.0938 7.49316)" fill="black"/>
              </svg>

const Home: NextPage = () => {
  const [isDark, setDark] = useState(true)
  const [pos, setPos] = useState({x:0, y:0})
  const [rendered, setRendered] = useState(false)
    


  return (
    <>
      <Head>
        <title>Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/splitting.css"/>
      </Head>

      <main className="main uppercase " style={{backgroundColor:isDark?color1:color2, color:isDark?color2:color1}}>        
                
        <div data-scroll >
          <Header/>
          <div className="content mx-16">
            
            <section className="fluid__item fluid__item--home fluid__item--current text-[97px] leading-[90px] my-40">              
              <DotText leftalign={false} text=""/>
              <p className="content__paragraph text-justify" data-splitting="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Independent</p>
              <p className="content__paragraph text-justify" data-splitting="">design&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;studio</p>
              <p className="content__paragraph text-justify flex items-center" data-splitting="">based in
                <button className="button-next button--telesto button--letstalk mx-4" onClick={ () => alert('clicked')}>
                  <span><span className="-mt-3 relative">
                    LET’S TALK
                    {allow}                   
                  </span></span>
                </button>
                los angeles
              </p>
              <div className="h-[35px]"></div>
              <DotText leftalign={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
            </section>

            <ParallaxItem no="01" title="title 1" imgURL='url(img/product01.jpg)'
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />

            <ParallaxItem no="02" title="title 2" imgURL='url(img/product02.jpg)'
              description="We don't have to be committed. We are just playing here."
            />
            
            <section className="fluid__item fluid__item--home fluid__item--current mt-[100px] mb-[250px]">
              <DotText leftalign={false} text="about" />
              <div className="h-[30px]"></div>

              <SplitTextAnimation fontSize={76}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              />
              
              <div className="flex justify-between items-center">
                <DotText leftalign={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
                <div className="mr-40">
                  <button className="button-next button--telesto button--service mx-8" onClick={ () => alert('clicked')}>
                    <span><span className="relative">
                      OUR SERVICES
                      {allow}                   
                    </span></span>
                  </button>
                </div>
              </div>
            </section>

            <section className="mb-[250px] ">
              <DotText leftalign={false} text="SELECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS" />
              <div className="h-[30px] "></div>
              <div className="overflow-hidden">
                <div className="grid -my-40 -mx-32" style={{transform:'rotate(-10deg)'}}>
                  <HorizontalText step={3} text="Project5" url='img/img05.jpg' direction={1}  setPos={setPos}/>
                  <HorizontalText step={3} text="Project6" url='img/img06.jpg' direction={-1} setPos={setPos}/>
                  <HorizontalText step={3} text="Project1" url='img/img01.jpg' direction={1}  setPos={setPos}/>
                  <HorizontalText step={3} text="Project2" url='img/img02.jpg' direction={-1} setPos={setPos}/>
                  <HorizontalText step={3} text="Project3" url='img/img03.jpg' direction={1}  setPos={setPos}/>
                  <HorizontalText step={3} text="Project4" url='img/img04.jpg' direction={-1} setPos={setPos}/>
                  <HorizontalText step={3} text="Project5" url='img/img05.jpg' direction={1}  setPos={setPos}/>
                  <HorizontalText step={3} text="Project6" url='img/img06.jpg' direction={-1} setPos={setPos}/>
                </div>
              </div>
            </section>

            <section className="mb-[110px]">
              <div className="flex items-center justify-center  text-[170px] font-normal" data-splitting="">Let’s
                <button className="button-next button--telesto mx-4" onClick={ () => alert('clicked')}>
                  <span><span className="relative">                    
                    <svg width="112" height="46" viewBox="0 0 112 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.65625 25.6875L0.65625 20.3125L106.406 20.3125V25.6875L0.65625 25.6875Z" fill="#FF5C00"/>
                      <rect width="33.7833" height="5.63055" transform="matrix(0.737805 -0.675013 -0.737805 -0.675013 87.0625 45.8438)" fill="#FF5C00"/>
                      <rect width="33.7835" height="5.63058" transform="matrix(-0.737843 -0.674972 -0.737843 0.674972 111.988 22.9611)" fill="#FF5C00"/>
                    </svg>               
                  </span></span>
                </button>
                work
              </div>
              <div className="w-full flex justify-end">
                <p className="text-14 w-[320px] mr-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </section>

            <section className="flex justify-between items-center">
              <div className="flex items-center">
                <button className="button-next button--telesto mx-4" 
                  style={{height:'53px !important'}} onClick={ () => setDark(!isDark)}
                >
                  <span><span className="relative">
                    Dark/Light                    
                  </span></span>
                </button>
                {/* <MagneticButton isDark={isDark} changeSetDark={setDark}/> */}
                <p className="text-14 ml-12 ">DESIGN STUDIO<br/>LOS ANGELES</p>  
              </div>
              <p className="text-14 ml-6">2022© STUDIO LLC. All Rights Reserved.</p>  
            </section>

            <section className="flex justify-center items-center">
              <p className="text-[240px] font-bold text-center">STUDIO©</p>  
            </section>
          </div>
        </div>
        <canvas id='hover-image-canvas' className="pointer-events-none" 
          style={{width:'100%', height:'100%', position:'fixed', left:0, top:0, opacity:1.0, zIndex:1}}/>
        
      </main>
      
      <FollowCursor/>
      {/* <div className="opacity-0"><CursorFollower/></div>
      <Script src="./script/demo4.js"></Script> */}
      <Script src="./script/imagesloaded.pkgd.min.js"></Script>
      <Script src="./script/scrolling.js"></Script>
      
    </>
  )
}

export default Home