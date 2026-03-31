import { Container } from "./Container"

export const Feature = () => {
  return (
    <section className="py-10">
      <Container className="dark:bg-blue-800/50  bg-[lab(11.0101%_14.3499_-42.1491)] w-full mx-auto py-8 rounded-lg rounded-tr-[140px]">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          
          {/* Item */}
          <div className="flex items-center gap-5 px-6 py-5 ">
            <div className="p-2 bg-blue-400 rounded-tr-[10px] rounded-bl-[10px]">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">27</p>
              <p className="text-muted-foreground text-sm">
                Students cracked GSoC 2025
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-center gap-5 px-6 py-5">
            <div className="p-2 bg-blue-400 rounded-tr-[10px] rounded-bl-[10px]">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22h16"/>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
              </svg>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">200+</p>
              <p className="text-muted-foreground text-sm">
                High paying internships
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex items-center gap-5 px-6 py-5">
            <div className="p-2 bg-blue-400 rounded-tr-[10px] rounded-bl-[10px]">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="14" x="2" y="6" rx="2"/>
              </svg>
            </div>
            <div>
              <p className="text-3xl font-semibold text-foreground">$150k</p>
              <p className="text-muted-foreground text-sm">
                Highest international package
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}