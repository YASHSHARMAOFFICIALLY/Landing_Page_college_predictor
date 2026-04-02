import { Container } from "./Container"
export const Marquee =()=>{
    return(
        <Container className="bg-neutral-200">
            <div className="w-full py-20">
                <div className="mx-auto w-full max-w-8xl px-4 lg:px-6">
                    <div className="flex flex-col items-center mb-12 justify-center gap-y-4 text-center">
                       <h2 className="text-4xl text-center sm:text-start font-bold text-[#001c52] md:text-5xl">Why 100xDevs?
                        </h2> 
                        <p className="text-lg md:text-xl text-gray-600">
                            Our most comprehensive and impactful learning experience
                        </p>
                    </div>

                </div>

            </div>
        </Container>
    )
}