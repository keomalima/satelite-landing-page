"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react"

import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import gsap from "gsap";

import { CustomEase } from "gsap/CustomEase"


gsap.registerPlugin(ScrollTrigger)
type Props = {
  className?: string;
}

const easing =  CustomEase.create("custom", "M0,0 C0.126,0.382 0.284,0.996 0.498,1.082 0.815,1.208 0.684,0.875 1,1")

const Hero = ({className}: Props) => {
  useGSAP(()=>{
    gsap.fromTo(".header > *", {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: .8, ease: easing, stagger: 0.06, scrollTrigger: {
        trigger: ".header > *",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }})
  })
  return (
    <section
      id="about"
      className={cn("relative overflow-hidden bg-[#293647]", className)}
    >
      <div className="relative z-10 container mx-auto py-16 md:py-32">
        <header className="relative mx-auto max-w-4xl text-center header">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-[#e1b129] text-[#e1b129] px-4 py-1 text-sm font-medium">
            Gestion des risques professionnels
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-pretty text-white md:text-5xl lg:text-6xl">
            La gestion des accidents du travail,
            {" "}
            <span className="text-[#e1b129]">réinventée.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-balance text-[#a7bbd2] lg:text-xl">
            Satelite centralise le suivi des incidents, les déclarations réglementaires et la collaboration entre équipes RH et consultants - en un seul outil sécurisé.
          </p>
        </header>
      </div>
    </section>
  );
};

export { Hero };

