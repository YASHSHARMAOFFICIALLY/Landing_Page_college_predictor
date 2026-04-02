import {ModeToggle } from "@/components/mode-toggle"
import { Hero } from "@/components/hero"
import {Feature} from "@/components/feature"
import { FAQ } from "@/components/Faq"
import { Photo } from "@/components/photo"
import { Marquee } from "@/components/marque"
import { ContactSection } from "@/components/contact"
import { Card } from "@/components/Card"

export default function Home(){
    return (
        <div className="min-h-screen font-display">
                <ModeToggle/>
                <Hero/>
                <Feature/>
                <Marquee/>
                <Card/>
                <FAQ/>
                <Photo/>
                <ContactSection/>
                
               
        </div>
    )
}