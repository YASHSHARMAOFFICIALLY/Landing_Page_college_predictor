// "use client"
// import React from "react"
// import Link from "next/link";
// import { Container } from "./Container"
// import { Button } from "./ui/button";
// export const Hero = () =>{
//     return(
//       <div className="min-h-[80vh]">
//        <Container className="w-full max-w-7xl mx-auto flex flex-col gap-20  py-20 px-4 lg:px-6">
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full ">
//           <div className="flex flex-col gap-y-4">
//             <div className=" w-fit border border-dashed border-neutral-400 rounded-full  flex items-center justify-between gap-x-2 px-4 py-1.5">
//               <div className="w-3 h-3 bg-[#10B0A7] rounded-full "></div>
//               <span className="text-neutral-900 text-sm dark:text-neutral-200">Join 10,000+ enrolled student today</span>

//             </div>
//             <h1 className="text-center sm:text-start sm:text-6xl md:text-7xl font-semibold text-neutral-900 tracking-tighter dark:text-neutral-200">
//               Master Full Stack Development
//             </h1>
//             <p className="text-center tracking-wide sm:text-start text-gray-400 dark:text-gray-300">Master Full Stack Development through hands-on open source projects. Join a community of developers transforming their careers with practical, real-world programming skills.</p>
//             <div className="flex items-center gap-4 sm:justify-start justify-center">
//               <Button className="bg-white-600  text-neutral-600 dark:text-neutral-200 cursor-pointer rounded-xl px-6 py-2 h-9 border border-neutral-200 dark:border-neutral-50 " >
//                                     Signup
//                                   </Button>
                                  
//                                   <Button className="bg-blue-600  dark:bg-red-400 cursor-pointer rounded-xl px-6 py-2 h-9" >
//                                     Login
//                                   </Button>
//             </div>
//           </div>
//           <div className="relative  w-full flex justify-center md:justify-end">
//             <img alt= "hero"
//             loading="lazy"
//             height={540}
//             width={480}
//             src="harkirat.webp"/>
//           </div>

//         </section>
//        </Container>

//       </div>  
//     )
// }
"use client"
import React from "react"
import { Container } from "./Container"
import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <div className="h-auto">
      <Container className="w-full max-w-7xl mx-auto flex flex-col gap-12 py-16 px-4 lg:px-6">
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          
          <div className="flex flex-col gap-y-4">
            
            <div className="w-fit border border-dashed border-border rounded-full flex items-center gap-x-2 px-4 py-1.5">
              <div className="w-3 h-3 bg-[#10B0A7] rounded-full"></div>
              <span className="text-sm text-muted-foreground">
                Join 10,000+ enrolled students today
              </span>
            </div>

            <h1 className="text-center sm:text-start sm:text-6xl md:text-7xl font-semibold tracking-tighter text-foreground">
              Master Full Stack Development
            </h1>

            <p className="text-center sm:text-start text-muted-foreground">
              Master Full Stack Development through hands-on open source projects.
              Join a community of developers transforming their careers.
            </p>

            <div className="flex items-center gap-4 sm:justify-start justify-center">
              
              <Button className="bg-white text-neutral-900 dark:text-neutral-800 rounded-xl px-6 py-2 h-9 border border-border">
                Signup
              </Button>

              <Button className="bg-blue-600 dark:bg-blue-500 rounded-xl px-6 py-2 h-9">
                Login
              </Button>

            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end">
            <img
              alt="hero"
              height={540}
              width={480}
              src="harkirat.webp"
            />
          </div>

        </section>

      </Container>
    </div>
  )
}