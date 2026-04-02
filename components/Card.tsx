
import { Container } from "./Container"

const courses = [
  {
    id: 1,
    title: "100xSchool Combined Bootcamp",
    description: "Web dev(Every Friday) Devops(Every Friday) Machine Learning and Ai(Every Saturday) Web3(Every Sunday) DSA (Every Thursday)",
    image: "https://appx-content-v2.classx.co.in/paid_course3/2026-01-31-0_6302172904491252.jpg",
    price: 3999,
    originalPrice: 5999,
    discount: 34,
    href: "/new-courses/20",
  },
  {
    id: 2,
    title: "Web Dev + Devops Bootcamp",
    description: "Web dev Devops",
    image: "https://appx-content-v2.classx.co.in/paid_course3/2026-01-31-0_0916663009561891.jpg",
    price: 3999,
    originalPrice: 5999,
    discount: 34,
    href: "/new-courses/21",
  },
  {
    id: 3,
    title: "Web# Bootcamp",
    description: "Complete Solana and Web3 Bootcamp",
    image: "https://appx-content-v2.classx.co.in/paid_course3/2026-01-31-0_0916663009561891.jpg",
    price: 3999,
    originalPrice: 5999,
    discount: 34,
    href: "/new-courses/21",
  },
  {
    id: 3,
    title: "AI and Ml Bootcamp",
    description: "Ai And Ml syllabus",
    image: "https://appx-content-v2.classx.co.in/paid_course3/2026-01-31-0_0916663009561891.jpg",
    price: 3999,
    originalPrice: 5999,
    discount: 34,
    href: "/new-courses/21",
  },
 
]
interface CourseCardProps {
  title: string
  description: string
  image: string
  price: number
  originalPrice: number
  discount: number
  href: string
}

const CourseCard = ({ title, description, image, price, originalPrice, discount, href }:CourseCardProps) => (
  <div className="overflow-hidden rounded-2xl border bg-white p-4 flex flex-col ">
    <div className="relative overflow-hidden rounded-lg border mb-4 w-full">
      <img
        alt={title}
        width="100"
        height="100"
        decoding="async"
        className="object-cover transition-opacity duration-200 ease-out aspect-video w-full opacity-100"
        style={{ color: "transparent" }}
        src={image}
      />
    </div>

    <div className="flex flex-col gap-4 flex-1">
      <div>
        <h3 className="text-xl font-semibold text-foreground min-h-15">{title}</h3>
        <p className="line-clamp-2 text-base text-muted-foreground min-h-[52px]">{description}</p>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <p className="mb-0 text-primary">₹{price.toLocaleString()}</p>
          <p className="text-neutral-400 line-through mb-0">₹{originalPrice.toLocaleString()}</p>
        </div>
        <div className="text-green-600 text-sm font-semibold bg-green-100 px-3 py-1 rounded-full w-fit">
          {discount}% off
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        <select className="flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm h-9 bg-white w-full">
          <option value="INR">INR</option>
          <option value="USD">USD</option>
        </select>

        <a target="_self" href={href}>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-6 py-5 font-semibold w-full cursor-pointer transition-all">
            View Details
          </button>
        </a>
      </div>
    </div>
  </div>
)

export const Card = () => {
  return (
    <Container className="w-full bg-[#001c52] dark:bg-black pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-2 px-0 md:px-5">
          <h2 className="text-3xl text-center sm:text-start font-bold text-white md:text-4xl lg:text-5xl">
            Feature Cohort
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-5 ">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </Container>
  )
}