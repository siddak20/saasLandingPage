'use client'
import gsap from "gsap";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Navbar1() {
    const [activeIdx,setActiveIdx]=useState(0);
    const navItems=[
        {
            title:"Home",
            link:"#"
        },
        {
            title:"Features",
            link:"#"
        },
        {
            title:"Solutions",
            link:"#"
        },
        {
            title:"Rankings",
            link:"#"
        },
        {
            title:"Pricing",
            link:"#"
        },
        {
            title:"Blogs",
            link:"#"
        }
    ]
    const [mobileActive, setMobileActive] = useState(false);
    useEffect(() => {
        const tl1 = gsap.timeline();
        const tl2=gsap.timeline();
        if (mobileActive) {
            
            tl1.fromTo('#mobile_nav_list', 
                { 
                    duration: 2 ,
                    height:'100vh',
                    ease:'bounce.inOut',
                    left:0,
                    
                }, 
                { 
                    height:'100vh',
                    width:'100vw',
                    left:0
                }).fromTo('.nav_item',{
                    translateY:10,
                    translateX:-10,
                    opacity:0,
                    stagger:0.1
                },{
                    translateY:0,
                    translateX:0,
                    opacity:1,
                    stagger:0.2
                });
        } else {
            tl2.to('.nav_item',{
                duration:0.5,
                opacity:0
            }).to('#mobile_nav_list', {
                duration:0.5,
                width:0,
                left:0,
            });
        }
        return ()=>{
         tl1.kill();
         tl2.kill();
        }
    }, [mobileActive]);

    return (
        <section className="fixed flex justify-center w-full  bg-black/[0.96]  text-white  border-b-[1px] border-b-[#242321]  z-50">
        <header className={`w-full max-w-[1500px] flex flex-col items-center py-6 relative `}>
            <nav className="w-11/12 flex justify-between items-center">
                <Logo />
                <HamburgerMenu mobileActive={mobileActive} setMobileActive={setMobileActive} />
                <ul className="lg:flex hidden gap-4 justify-center items-center bg-[#2B2B2B] rounded-3xl px-2 py-1">
                  {
                    navItems.map((item,idx)=>{
                        return(
                            <li style={{perspective:740,perspectiveOrigin:"50% 50%"}} onClick={()=>setActiveIdx(idx)} key={idx} className={`${idx===activeIdx?'bg-[#404038]  border-[#424242]':'border-transparent'} border-4  py-1    outline-none w-full  px-3 rounded-3xl`}>
                              <Link href={item.link}>{item.title}</Link>
                            </li>
                        )
                    })
                  }
                </ul>
                <div className="hidden lg:flex  px-3 gap-4 ">
                   <button className="border-2  border-[#404038] px-3 py-1 rounded-3xl">Sign in</button>
                   <button className=" flex gap-3  items-center justify-center bg-[#31343b] py-2 rounded-3xl px-6">
                    <p>Get started</p>
                    <LogoIcon/>
                    </button>
                   </div>
            </nav>
            <MenuItemsMobile mobileActive={mobileActive} navItems={navItems}  />

        </header>
        </section>
    );
}

const Logo = () => {
    return (
        <div className="flex gap-2 items-center">
            <LogoIcon/>
            <p className="text-2xl font-bold">Fundflo</p>
        </div>
    );
};

const HamburgerMenu = ({ mobileActive, setMobileActive }: { mobileActive: boolean; setMobileActive: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className="lg:hidden">
            
                <MenuIcon mobileActive={mobileActive} setMobileActive={setMobileActive} />
                
        </div>
    );
};



const MenuIcon = ({ mobileActive, setMobileActive }: { mobileActive: boolean; setMobileActive: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <svg className=" transition-all duration-500" onClick={() => setMobileActive(!mobileActive)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
           {
            !mobileActive?(
                <path
                    fill="white"
                    strokeWidth="1"
                    d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
                ></path>
            ):(
<path fill="white" strokeWidth="2" d="M 7 7 L 23 23 M 7 23 L 23 7" stroke="white" />
            )
           }
        </svg>
    );
};

const MenuItemsMobile = ({mobileActive,navItems}:{mobileActive:boolean,navItems:{title:string,link:string}[]}) => {
   const [activeIdx,setActiveIdx]=useState(0);
    return (
        <div id="mobile_nav_list"  className={`absolute flex flex-col items-center border-t-[1px] border-t-[#404038]  text-white   z-10 top-full lg:hidden  bg-[#1D1D1F] `}>
            <ul id="nav_list" style={{perspective:740}} className={` flex flex-col gap-4 w-11/12 mt-4  ${mobileActive?'':'hidden'}`}>
                   {
                    navItems.map((item,idx)=>{
                        return (
                            <li style={{transformStyle:'preserve-3d'}} onClick={()=>setActiveIdx(idx)} key={idx} className={`${idx===activeIdx?'bg-[#404038]  border-[#424242]':'border-transparent'} border-4  t  nav_item  outline-none w-full py-2 px-3 rounded-2xl`}>
                              <Link href={item.link}>{item.title}</Link>
                            </li>
                        )
                    })
                   }
                   <div className="flex w-11/12 px-3 gap-8 mt-3">
                   <button className="border-2 nav_item border-[#404038] px-4 py-3 rounded-3xl">Sign in</button>
                   <button className=" flex gap-3 nav_item items-center justify-center bg-[#31343b] py-2 rounded-3xl px-4">
                    <p>Get started</p>
                    <LogoIcon/>
                    </button>
                   </div>
            </ul>
        </div>
    );
};




const LogoIcon=()=>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
<circle cx="25" cy="25" r="25" fill="#AFFF49"/>
<circle cx="25" cy="8" r="3" fill="#000031"/>
<circle cx="25" cy="42" r="3" fill="#000031"/>
<path d="M23.5503 35.0239C22.1714 35.0271 20.8054 34.7457 19.5302 34.1958C18.255 33.6459 17.0957 32.8383 16.1183 31.8191C15.141 30.7999 14.3648 29.589 13.8341 28.2556C13.3033 26.9222 13.0285 25.4925 13.0252 24.0479C13.0219 22.6034 13.2902 21.1724 13.8148 19.8366C14.3395 18.5008 15.1101 17.2864 16.0828 16.2628C17.0555 15.2391 18.2111 14.4262 19.4838 13.8705C20.7564 13.3148 22.1212 13.0271 23.5 13.024L23.5091 17.0095C22.6299 17.0115 21.7596 17.1949 20.9481 17.5493C20.1365 17.9037 19.3996 18.422 18.7793 19.0748C18.1591 19.7276 17.6676 20.502 17.3331 21.3538C16.9985 22.2056 16.8274 23.1181 16.8295 24.0392C16.8316 24.9604 17.0069 25.8721 17.3453 26.7224C17.6838 27.5727 18.1787 28.3448 18.802 28.9947C19.4252 29.6447 20.1645 30.1597 20.9777 30.5103C21.7908 30.861 22.6619 31.0404 23.5412 31.0384L23.5503 35.0239Z" fill="#0B0D22"/>
<path d="M26.5 13C27.8789 13 29.2443 13.2845 30.5182 13.8373C31.7921 14.3901 32.9496 15.2004 33.9246 16.2218C34.8996 17.2433 35.6731 18.4559 36.2007 19.7905C36.7284 21.1251 37 22.5555 37 24C37 25.4445 36.7284 26.8749 36.2007 28.2095C35.6731 29.5441 34.8996 30.7567 33.9246 31.7782C32.9496 32.7996 31.7921 33.6099 30.5182 34.1627C29.2443 34.7155 27.8789 35 26.5 35L26.5 31.0145C27.3793 31.0145 28.25 30.833 29.0623 30.4805C29.8747 30.128 30.6128 29.6113 31.2345 28.96C31.8563 28.3086 32.3495 27.5354 32.686 26.6843C33.0224 25.8333 33.1956 24.9212 33.1956 24C33.1956 23.0788 33.0224 22.1667 32.686 21.3157C32.3495 20.4646 31.8563 19.6914 31.2345 19.04C30.6128 18.3887 29.8747 17.872 29.0623 17.5195C28.25 17.167 27.3793 16.9855 26.5 16.9855V13Z" fill="#0B0D22"/>
</svg>
    )
}