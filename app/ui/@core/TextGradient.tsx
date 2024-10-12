'use client'
import gsap from 'gsap';
import { useEffect } from 'react';
export default function TextGradient({textValue,className}:{textValue:string;className?:string}){
    const words=textValue.split(" ");
    useEffect(()=>{
      const tl=gsap.timeline();
      tl.fromTo('.textgradient .words',{
        opacity:0,
    
      },{ 
        opacity:1,
        stagger:0.2,
        ease:'back.inOut',
        duration:1,
      })
      return ()=>{
        tl.kill()
      }
    },[]);
    return (
        <p  className={`textgradient ${className}`}>
            {
                words.map((item,idx)=>{
                    return(
                        <span key={item+idx} className='words '>
                            {item+" "} 
                        </span>
                    )
                })
            }  
        </p>
    )
}