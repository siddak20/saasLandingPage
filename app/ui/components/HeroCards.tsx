'use client'
import Link from "next/link"
import { CardBody, CardContainer, CardItem } from "../@core/3d-card"
import Image from "next/image"
import { useEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NumberTicker from "../@core/NumberTicker"
export default function HeroCards(){
    const height=[39,50,60,80,100,50];
useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl=gsap.timeline({
        scrollTrigger:{
            trigger:".cards-parent",
            start:"top 50%"
        }
    });

    tl.fromTo('.cards',{
       opacity:0,
        stagger:{
            each:0.6,
            from:"start",
        },
        scale:0.95

    },{opacity:1,
        stagger:0.5,
        ease:'power1.inOut',
        scale:1
    }).fromTo(
        ".chart-block",
        { height: 0 }, // Starting height
        { height: (i) => height[i], duration: 1,ease:'back' } // Final height using array values
      );
   return ()=>{
    tl.kill();
   }
},[]);
  return (
    <div className="cards-parent  dark:text-white w-11/12 max-w-[1536px] flex lg:flex-row flex-col  justify-between items-center ">
        <Card1/>
        <Card2/>
        <Card3/>
    </div>
  )
}

const Card1=()=>{
    return(
        <div className="w-full flex justify-center cards">   
        <CardContainer containerClassName="w-full max-w-[365px][ p-4 h-max min-h-[400px] flex flex-col justify-end">
            <CardBody className="w-full  ">
                <CardItem translateZ={10}>
                    <Card1Svg/>
                </CardItem>
                <CardItem translateZ={10}>
                    <p className="font-semibold text-white  text-xl">Transform Finances, <br /> Make Easy Life</p>
                    <Link href="/herosection3" className="text-xs italic underline text-gray-400 font-light">Get started now</Link>
                </CardItem>
                <CardItem translateZ={10} className="w-full relative h-max min-h-40  bg-white rounded-2xl mt-4" >
                    <div className="text-black bg-white w-full rounded-2xl h-full p-5 flex flex-col gap-2 ">
                        <p className="text-lg font-semibold">Active users</p>
                        <p className="text-3xl font-bold text-[#151242]">20M+</p>
                        <p className="text-xs">Our platform is trusted by more than 1,200,000 sactive users, reflecting our commitment.</p>
                    </div>
                    <div className="w-12 h-12 absolute right-5 top-10 rounded-full bg-[#F9C436]">
                        {/* <Image style={{ mixBlendMode: 'multiply'}} src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80" alt="img" width={30} height={0} className="rounded-full w-full h-full " /> */}
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
        </div>
    )
}



const Card1Svg=()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" className="mb-4" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="16" fill="#FC5A41" stroke="#FFFAFA" stroke-width="2"/>
        <path d="M11.4862 24.1133C10.4604 23.3181 9.61863 22.3104 9.01877 21.1593C8.41891 20.0083 8.07512 18.7411 8.01099 17.4447C7.94686 16.1483 8.16391 14.8533 8.64724 13.6487C9.13057 12.444 9.86875 11.3582 10.8111 10.4656L12.0362 11.759C11.2803 12.4749 10.6882 13.3458 10.3006 14.312C9.91292 15.2782 9.73884 16.3168 9.79027 17.3566C9.84171 18.3964 10.1174 19.4128 10.5986 20.336C11.0797 21.2592 11.7548 22.0675 12.5776 22.7053L11.4862 24.1133Z" fill="#FFFAFA"/>
        <path d="M23.1306 10.411C24.0809 11.2951 24.8287 12.3744 25.3227 13.5747C25.8167 14.775 26.0452 16.0679 25.9926 17.3649C25.94 18.6618 25.6075 19.932 25.0178 21.0883C24.4282 22.2447 23.5954 23.2598 22.5767 24.0641L21.4728 22.6658C22.2899 22.0207 22.9579 21.2065 23.4308 20.2791C23.9037 19.3516 24.1704 18.3329 24.2126 17.2926C24.2548 16.2524 24.0715 15.2154 23.6753 14.2527C23.2791 13.29 22.6793 12.4243 21.9171 11.7152L23.1306 10.411Z" fill="#FFFAFA"/>
        <path d="M13.4645 20.5355C12.5268 19.5979 12 18.3261 12 17C12 15.6739 12.5268 14.4021 13.4645 13.4645L14.3731 14.3731C13.6764 15.0698 13.285 16.0147 13.285 17C13.285 17.9853 13.6764 18.9302 14.3731 19.6269L13.4645 20.5355Z" fill="#FFFAFA"/>
        <path d="M20.5355 13.4645C20.9998 13.9288 21.3681 14.48 21.6194 15.0866C21.8707 15.6932 22 16.3434 22 17C22 17.6566 21.8707 18.3068 21.6194 18.9134C21.3681 19.52 20.9998 20.0712 20.5355 20.5355L19.6269 19.6269C19.9719 19.2819 20.2455 18.8724 20.4322 18.4217C20.6189 17.9709 20.715 17.4879 20.715 17C20.715 16.5121 20.6189 16.0291 20.4322 15.5783C20.2455 15.1276 19.9719 14.7181 19.6269 14.3731L20.5355 13.4645Z" fill="#FFFAFA"/>
        <circle cx="17" cy="17" r="2" fill="#FFFAFA"/>
        </svg>
    )
}


const Card2=()=>{
    return(
    <div className="w-full cards flex justify-center">
    <CardContainer containerClassName="w-full max-w-[365px][ p-4 h-max flex flex-col justify-end min-h-[400px]">
            <CardBody className="w-full relative">
               <CardItem translateZ={10} className="w-full"> 
                <div className='w-full border-t-[#6F6F6F] border-t-2 border-l-[#6F6F6F] border-l-2 h-[270px] rounded-2xl bg-[#3D3D3F]'>
                    <Card2Icon/>
                </div>
                </CardItem>
            </CardBody>
        </CardContainer>
        </div>
)};


const Card2Icon=()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" className=" absolute top-10 -right-6" height="60" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22.5" fill="#9AEA49" stroke="#FBFBFB" stroke-width="3"/>
        <path d="M25.1989 22.3374C26.25 22.0468 27.1599 21.3844 27.7593 20.4734C28.3587 19.5623 28.6069 18.4645 28.4577 17.3842C28.3084 16.3039 27.772 15.3145 26.948 14.6001C26.124 13.8856 25.0686 13.4947 23.9781 13.5001C22.8875 13.5054 21.836 13.9065 21.019 14.629C20.2021 15.3514 19.6752 16.346 19.5365 17.4277C19.3978 18.5094 19.6567 19.6047 20.265 20.5099C20.8732 21.4151 21.7895 22.0686 22.8435 22.3488" stroke="black"/>
        <path d="M23 17.913V28L19 26L18 27.5L22.5 32H30.5V25.5L27.5 24L25 23V16.4783L24.3333 16H24L23.3333 16.4783C23 16.9565 23 17.913 23 17.913Z" stroke="black"/>
        </svg>
    )
}

const Card3=()=>{
    const height=[39,50,60,80,100,50];
    return(
        <div className="w-full cards flex justify-center" >
        <CardContainer  containerClassName="w-full max-w-[365px]  p-4 h-max min-h-[400px] flex flex-col  justify-end">
            <CardBody className="w-full  flex flex-col gap-10">
                <CardItem className="w-full" translateZ={10}>
                    <div className="w-full h-60 flex flex-col items-center  justify-around pt-4 text-black bg-white rounded-2xl">
                        <div className="w-11/12 flex justify-between items-center">
                            <p className="">Global Reach</p>
                            <p className="bg-[#9AEA49] px-2 py-1 rounded-xl text-xs flex items-center justify-center">Last 6 years</p>
                        </div>
                        <div className="w-11/12 flex justify-between items-center">
                            <p className="font-bold text-3xl text-[#151242]"><NumberTicker className="w-max" value={175} delay={1.5}/>+</p>
                            <p className="text-sm">total range</p>
                        </div>
                        <div  className="h-36 w-11/12  flex justify-center items-end pb-5">
                        <div className="flex w-11/12 justify-between items-end ">
                            {
                                height.map((item,index)=>{
                                    return(
                                        <div
                                        key={index}
                                        style={{ height: `${item}px ` }} // Assuming `item` is a numeric value
                                        className="w-8 chart-block bg-[#FC5A41] rounded-lg"
                                      ></div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </CardItem>
                <CardItem translateZ={10} className="flex justify-between items-center w-full">
                    <div className="flex w-full justify-between ">
                        <Image src="/meet.jpg" width={200}   className="border-2 scale-75 -translate-x-4 border-white rounded-3xl" alt="image" height={100}/>
                    </div>
                    <div className="flex gap-1 flex-col">
                        <p className="text-[#9AEA49] font-bold text-3xl"><NumberTicker className="w-max text-[#9AEA49] font-bold text-3xl" value={320} delay={1.5}/>+</p>
                        <p className="text-xs text-white">Some big companies that we work with and trust very much</p>
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
        </div>
    )
}


const StatsSvg=({height}:{height:number})=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height={height} viewBox="0 0 12 36" fill="none" className="">
         <rect width={50} height={height} fill="#FC5A41"/>
         </svg>
    )
};