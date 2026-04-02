import { Container } from "./Container"

export const Photo = ()=>{
    return (
        <Container className="flex flex-col gap-8 py-1- lg:py-20">
            <section className="max-w-7xl mx-auto flex flex-col gap-4 lg:gap-6">
                <section className="relative overflow-hidden rounded-3xl  bg-gradient-to-r from-[#202230] via-[#293C69] to-[#32549F] px-8md:px-16 lg:px-20">
                    <div className="flex flex-col max-w-7xl items-center gap-8 lg:flex-row lg:justify-between">
                        <div className="flex-1 space-y-6 py-12 md:py-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-white leading-tight">
                                A community that has your back
                            </h2>
                            <ul className="space-y-3 text-sm text-white/90 md:text-base">
                            
                            </ul>
                            <ul className="space-y-3 text-sm text-white/90 md:text-base">
  {[
    "Active Discord with 24/7 community support",
    "Collaborate on open source and build together",
    "Weekly study groups and peer code reviews",
    "Job referrals and opportunity sharing",
  ].map((item) => (
    <li key={item} className="flex items-start gap-3">
      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
      <span>{item}</span>
    </li>
  ))}
</ul>
                        </div>

                    </div>
                    <div className="relative flex-1 self-stretch">
  <div className="relative h-full flex items-end">
    <img
      src="https://harkirat.classx.co.in/community1.png"
      alt="Community members collage"
      width={600}
      height={400}
      className="h-auto w-full object-contain"
    />
  </div>
</div>


                </section>
                <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
  {[1, 2, 3, 4].map((i) => (
    <div key={i} className="overflow-hidden rounded-xl relative aspect-[4/3]">
      <img
        src={`https://harkirat.classx.co.in/community${i + 1}.png`}
        alt={`Community event ${i}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  ))}
</div>
              
            </section>
        </Container>
    )
}