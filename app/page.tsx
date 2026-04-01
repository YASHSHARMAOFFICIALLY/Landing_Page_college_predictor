import {ModeToggle } from "@/components/mode-toggle"
import { Hero } from "@/components/hero"
import {Feature} from "@/components/feature"
import { FAQ } from "@/components/Faq"

export default function Home(){
    return (
        <div className="min-h-screen font-display">
                <ModeToggle/>
                <Hero/>
                <Feature/>
                {/* <FAQ/> */}
                
               
        </div>
    )
}