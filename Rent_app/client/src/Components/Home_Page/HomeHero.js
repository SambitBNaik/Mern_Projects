import React, { useEffect, useState } from 'react';
import "./HomeHero.css"

const HomeHero = () => {
    const items=['PGs','Hostels','Co-Living','Flats','Renatal Space','Rks & Studio'];
    const [currentIndex,setCurrentIndex]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentIndex((previndex)=>(previndex+1)% items.length);
        },2000);
        return()=>clearInterval(interval);
    },[items.length]);
  return (
    <div className='HomeHero'>
        <div className='hero-component'>
            <div className='hero-sub-component-1'>
                <div spacing="2" className='hero-sub-componenet-2'>
                    <h1 className='font-heading-responsive'>
                        <div 
                        style={{
                            overflow: 'hidden',
                            display: 'flex',
                            opacity: 1,
                            alignItems:'center',
                            whiteSpace:'nowrap',
                        }}>
                            <h1 style={{color:'#000',}}>
                                The easiest way to rent your 
                                <span
                              style={{
                                marginRight:'0px',
                                color:'rgb(48,181,2)',
                                opacity:1,
                                transition:'transform 0.5s ease',
                                transform:'transalteY(0)',
                              }}
                            >{items[currentIndex]}</span>
                            </h1>
                        </div>
                    </h1>
                    <h2 className='text-1'>Join India's largest network of Smart properties</h2>
                    <h2 className='text-2'>Save time. Work less Earn more.</h2>
                    <div className='container-1'>
                        <div className='sub-container-1-1'>
                            <p className='para-manage'>I manage a</p>
                            <div>
                                <div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHero