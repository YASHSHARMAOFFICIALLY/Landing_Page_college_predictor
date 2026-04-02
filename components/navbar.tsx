"use client"
import React from "react"
import Link from "next/link";
import { Container } from "./Container"
import { Button } from "./ui/button";
import {AnimatePresence, motion} from "framer-motion"
import { IconLayoutSidebar,IconX } from "@tabler/icons-react"
import { useState } from "react";




const navlink = [
    {
        title: <span className="font-bold">100<span className="text-red-600 font-bold tracking-tight ">x</span>Devs</span>,
        href:"/"
    },
        {
            title:'Home',
            href:'/features'
        },
        {
            title:'Course',
            href:'/product'
        },
        {
            title:'Store',
            href:'/social'
        }
    ]


export const Navbar = () =>{
    return(
        <div className="w-full border-b border-neutral-200 dark:border-neutral-600">
            <DesktopNavbar>

            </DesktopNavbar>
            <MobileNavbar/>
            
        </div>
    )
}

export const MobileNavbar = () =>{
    const[open,setopen] = useState(false)
    return(
        <div className="flex md:hidden px-4 py-2 justify-between m"> 
            <button onClick = {()=>setopen(!open)}>
                <IconLayoutSidebar className = "size-4" />
            </button>     
        <AnimatePresence>
        {open && (
             <motion.div 
             initial = {{opacity:0}}
             animate = {{
                opacity:1,
                backdropFilter:"blur(15px)",
                background:'transparent'
             }}
             exit = {{
                opacity:0,
                backdropFilter:"blur(0px)",
                background:'rgba(255,255,255,0.5)'
             }}
             transition={{
                duration:0.2
             }}
             className="fixed inset-0 h-full w-full bg-white/10 z-50 px-4 py-2  ">
              <div className="flex justify-between">
               
               <button 
                className="p-2 text-neutral-800  absolute right-2 top-2 "
                onClick={() => setopen(false)}
            >
                <IconX className="size-6 " />
            </button>
            </div>
            <div className="flex flex-col gap-6 text-2xl my-10">
                {navlink.map((items,index)=>{
                    return (
                    <motion.div
                    initial = {{
                        opacity:0,
                        x: -4,
                    }}
                    animate = {{
                        opacity:1,
                        x:0,
                    }}
                    transition={{
                        duration:0.5,
                        delay:index * 0.5,
                    }}
                   
                    >
                         <Link
                        key = {index} 
                        href={items.href}
                        className="text-sm block  text-red-800 dark:text-neutral-400 font-bold">
                            {items.title}
                        </Link>
                    </motion.div>
                    )
                         
                    
                })}
                <div className="flex items-center justify-end gap-4">
                    <Link 
                    href = "/login"
                    className="text-sm px-4 inline-block py02 rounded-md text-neutral-600 dark:text-neutral-400 font-medium">
                        Login 
                    </Link>
                    <Button>SignUp </Button>
                </div>
            </div>
        </motion.div>
        )}
        </AnimatePresence>
        </div>
    )
}

export const DesktopNavbar = () => {
    return(
        <Container className="py-1  items-center justify-between hidden md:flex">
        
                <div className="flex items-center gap-4">
                    {navlink.map((item,index)=>{
                        return(
                            <Link key = {index} href = {item.href}
                            className="text-l text-neutral-900 dark:text-neutral-200 font-medium cursor-pointer transition-all duration-200">
                                {item.title}
                                </Link>
                        )
                    })}
                </div>
                <div className="flex items-center gap-4">
                      <Button className="bg-white-600  text-neutral-600 dark:text-white font-bold cursor-pointer rounded-xl px-6 py-2 h-9 border border-neutral-200 dark:border-neutral-50 " >
                      Signup
                    </Button>
                    
                    <Button className="bg-[#001c52] dark:text-white  font-bold dark:bg-bg-[#001c52] cursor-pointer rounded-xl px-6 py-2 h-9" >
                      Login
                    </Button>

                </div>
            </Container>

    )
}

