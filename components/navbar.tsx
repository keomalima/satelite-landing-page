"use client"
import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react"
import { CustomEase } from "gsap/CustomEase"

import gsap from "gsap"

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const features = [
    {
      title: "Suivi des incidents",
      description: "Historique complet et statuts de traitement",
      href: "#features",
    },
    {
      title: "DAT digitale",
      description: "Conformite CARSAT/URSSAF et automatisation",
      href: "#features",
    },
    {
      title: "Ticketing collaboratif",
      description: "Echanges traces entre RH et consultants",
      href: "#features",
    },
    {
      title: "Statistiques",
      description: "Pilotage de la sinistralite en temps reel",
      href: "#features",
    },
    {
      title: "Conformite",
      description: "Suivi des echeances reglementaires",
      href: "#features",
    },
    {
      title: "Accompagnement",
      description: "Support dedie aux equipes RH",
      href: "#features",
    },
  ];

  const easing =  CustomEase.create("custom", "M0,0 C0.126,0.382 0.284,0.996 0.498,1.082 0.815,1.208 0.684,0.875 1,1 ")

  useGSAP(()=>{
    gsap.fromTo(".links > *", {y: 100, opacity: 0}, {y: 0, opacity: 1, delay: 0.3 , duration: .8, ease: easing, stagger: 0.06})
  })
  return (
    <section className={cn("bg-[#293647] py-4", className)}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between links">
          <a
            href="#"
            className="flex items-center gap-2"
          >
            <img
              src="/logo_without_baseline_blue_background.svg"
              className="h-25 w-auto"
              alt="Logo Satelite"
            />
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className={"links"}>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white">
                  Fonctionnalités
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 bg-[#fbfbfb] p-3">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-[#fcf9ea]"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 font-semibold text-[#293647]">
                            {feature.title}
                          </p>
                          <p className="text-sm text-[#577aa0]">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                  )}
                >
                  A propos
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hidden bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline" className="hidden border-white text-white hover:bg-white/10">
              Connexion
            </Button>
            <a
              href="#contact"
              className={buttonVariants({
                className: "bg-[#e1b129] font-bold text-[#293647] hover:bg-[#d29c20]",
              })}
            >
              Demander une démo
            </a>
          </div>
          <Sheet>
            <SheetTrigger className="lg:hidden" render={<Button variant="outline" size="icon" className="border-white text-white hover:bg-white/10" />}><MenuIcon className="h-4 w-4" /></SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto bg-[#293647] text-white">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="#"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="logo_white_background.png"
                      className="h-8 w-auto"
                      alt="Logo Satelite"
                    />
                    <span className="text-lg font-bold tracking-tighter text-white [font-family:Montserrat,sans-serif]">
                      Satelite
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base text-white hover:no-underline">
                      Fonctionnalités
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-white/10"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 font-semibold text-white">
                                {feature.title}
                              </p>
                              <p className="text-sm text-[#a7bbd2]">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="#about" className="font-medium text-white hover:text-[#e1b129]">
                    A propos
                  </a>
                  <a href="#contact" className="font-medium text-white hover:text-[#e1b129]">
                    Contact
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <a
                    href="#contact"
                    className={buttonVariants({
                      className: "bg-[#e1b129] font-bold text-[#293647] hover:bg-[#d29c20]",
                    })}
                  >
                    Demander une démo
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
