import { cn } from "../@lib/utils";

 export const BentoGrid=({className,children}:{className?:string; children:React.ReactNode})=>{
    return (
      <div className={
        cn(
            'grid dark:text-white md:auto-rows-[14rem] grid-cols-1 md:grid-cols-6 gap-4 max-w-[1536px] mx-auto'
            ,className
        )
      }>
   {children}
      </div>
    )
 };


 export const BentoGridItem=({className,children}:{className?:string;children?:React.ReactNode})=>{
    return (
        <div className={cn(
            'row-span-1 group/bento',
            className
        )}>
            {children}
        </div>
    )
 }