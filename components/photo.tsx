import { Container } from "./Container"

export const Photo = ()=>{
    return (
        <Container className="flex flex-col gap-8 py-1- lg:py-20">
            <section className="max-w-7xl mx-auto flex flex-col gap-4 lg:gap-6">
                <section className="relative overflow-hidden rounded-3xl  bg-gradient-to-r from-[#202230] via-[#293C69] to-[#32549F] px-8md:px-16 lg:px-20">
                    <div className="flex flex-col max-w-7xl items-center gap-8 lg:flex-row lg:justify-between">
                        <div className="flex-1 space-y-6 py-12 md:py-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                A community that has your back
                            </h2>

                        </div>

                    </div>
                </section>
              
            </section>
        </Container>
    )
}