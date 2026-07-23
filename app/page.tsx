import { Navbar } from "@/components/navbar"
import {Hero} from '@/components/hero'
import {BookADemo} from '@/components/book-a-demo'
import {Footer} from '@/components/footer'
import {Presentation} from '@/components/presentation'
import { Compliance1 } from "@/components/compliance1"
import { Stats } from "@/components/stats"
import { Support } from "@/components/support"
import { Analytics } from "@/components/analytics"
import { Simulator } from "@/components/simulator"

export default function Page() {
  return (
    <div className="">
     <Navbar />
     <Hero />
     <Presentation />
     <Analytics />
     <Stats />
     <Simulator />
     <Compliance1 />
     <Support />
     <BookADemo />
     <Footer />
    </div>
  )
}
