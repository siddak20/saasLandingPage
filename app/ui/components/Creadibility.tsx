import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../@core/Bento-grid";
import TextGradient from "../@core/TextGradient";

export default function Creadibility(){
  
    const people = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
          id: 2,
          name: "Robert Johnson",
          designation: "Product Manager",
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }
      ];
  return (
  <section className="w-full  flex flex-col items-center py-10 h-max">
       <BentoGrid className="w-11/12 ">
        <BentoGridItem className=' col-span-6 md:col-span-3 flex flex-col justify-center'>
          <TextGradient className=" group-hover/bento:translate-x-2 duration-200 transition md:text-4xl text-2xl font-bold" textValue="Our Comprehensive Financial Management Method"/>
        </BentoGridItem>
        <BentoGridItem className='col-span-6 md:col-span-3 flex flex-col justify-center md:pl-10 text-[rgba(73,72,70,1)] '>
          <p className="group-hover/bento:translate-x-2 duration-200 transition">Unlock the full potential of your finances with our innovative management solution. Our platform offers a range of features to help you budget effectively, track your spending, and gain valuable insignhts. </p>
        </BentoGridItem>
        <BentoGridItem className=' flex flex-col bg-black justify-between  rounded-2xl min-h-max p-4 md:p-8 col-span-6 md:col-span-2'>
          <p className="font-bold text-4xl text-[#9AEA49] group-hover/bento:translate-x-2 duration-200 transition">320+</p>
          <p className="text-sm text-[rgb(73,72,70,1)] mt-4 group-hover/bento:translate-x-2 duration-200 transition">Our step by step process to Simplify your Financial Management</p>
          <div className=" align-baseline mt-10 flex group-hover/bento:translate-x-2 duration-200 transition">
            {
              people.map((item,idx)=>{
                return (
                  <div className="-mr-5" key={idx}><Image key={item.id} src={item.image} alt="img" width={100} className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500" height={100} /></div>
                )
              })
            }
            <PlusIcon/>
          </div>
        </BentoGridItem>
        <BentoGridItem className =' flex flex-col items-end h-[16rem] col-span-6 md:col-span-4'>
          <div className="w-full h-full relative rounded-2xl flex justify-center items-center">
            <div className="absolute z-10 w-full h-full opacity-30 bg-black "></div>
            <p className=" text-lg lg:text-5xl text-white tracking-[10px] z-20 font-bold  w-max group-hover/bento:translate-x-2 duration-200 transition">How we work</p>
            <Image alt="img" width={100} height={100} className="rounded-2xl  object-cover w-full h-full absolute " src="/imageback.jpg"/>
          </div>
        </BentoGridItem>
       </BentoGrid>
  </section>
  )};



const PlusIcon=()=>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 34 34" className="z-10" fill="none">
<circle cx="17" cy="17" r="16" fill="#FC5A41" stroke="#FFFAFA" stroke-width="2"/>
<path d="M16 11H18V23H16V11Z" fill="#FFFAFA"/>
<path d="M22.9998 16L23.0118 18L11.012 18.0721L11 16.0721L22.9998 16Z" fill="#FFFAFA"/>
   </svg>
  )
}