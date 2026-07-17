import { Navbar } from "@/components/navbar"
import {Hero} from '@/components/hero'
import {Features} from '@/components/features'
import {BookADemo} from '@/components/book-a-demo'
import {Footer} from '@/components/footer'
import {Presentation} from '@/components/presentation'

export default function Page() {
  return (
    <div className="">
     <Navbar />
     <Hero />
     <Presentation />
     <BookADemo />
     <Footer />
    </div>
  )
}
