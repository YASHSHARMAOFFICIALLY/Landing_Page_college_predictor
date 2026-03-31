"use client"
import React from "react"
import Link from "next/link";
import { Container } from "./ntainer"Co;




const navlink = [
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
        <div>
            
        </div>
    )
}

export const DesktopNavbar = () => {
    return(
        <Container className="py-4  items-center justify-between hidden lg:flex">
            
                <div className="flex items-center gap-4">
                    {navlink.map((item,index)=>{
                        return(
                            <Link key = {index} href = {item.href}
                            className="text-sm text-red-600 dark:text-red-900 font-medium">
                                {item.title}
                                </Link>
                        )
                    })}
                </div>
                <div className="flex items-center gap-4">
                    <Link href = "/login" className="text-sm px-4 py-2 rounded-md  
                    text-neutral-900 font-medium">
                    Login
                    </Link>
                    <Button >
                       Signup 
                    </Button>

                </div>
            </Container>

    )
}

