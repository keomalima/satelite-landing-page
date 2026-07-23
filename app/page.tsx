import { Navbar } from "@/components/navbar"
import {Hero} from '@/components/hero'
import {BookADemo} from '@/components/book-a-demo'
import {Footer} from '@/components/footer'
import {Presentation} from '@/components/presentation'
import { Compliance1 } from "@/components/compliance1"
import { Stats } from "@/components/stats"
import { Support } from "@/components/support"
import { Analytics } from "@/components/analytics"

export default function Page() {
  return (
    <div className="">
     <Navbar />
     <Hero />
     <Presentation />
     <Analytics />
     <Stats />
     <Compliance1 />
     <BookADemo />
     <Support />
     <Footer />
    </div>
  )
}
