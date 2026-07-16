"use client";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface HeroSaasProps {
  className?: string;
  heading: string;
  description: string;
}

interface Hero206Props extends HeroSaasProps {}
type Props = Partial<Hero206Props>;

const defaultProps: Hero206Props = {
  heading: "La gestion des accidents du travail, réinventée.",
  description: "Satelite centralise le suivi des incidents, les déclarations réglementaires et la collaboration entre équipes RH et consultants - en un seul outil sécurisé.",
};


const Hero206 = (props: Props) => {
  const {  description, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      id="about"
      className={cn("relative overflow-hidden bg-[#293647]", className)}
    >
      <div className="relative z-10 container mx-auto py-32">
        <header className="relative mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-[#e1b129]/40 bg-[#fcf9ea] px-4 py-1 text-sm font-medium text-[#293647]">
            Gestion des risques professionnels
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-pretty text-white md:text-5xl lg:text-6xl">
            La gestion des accidents du travail,
            {" "}
            <span className="text-[#e1b129]">réinventée.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-balance text-[#a7bbd2] lg:text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="bg-[#e1b129] font-bold text-[#293647] hover:bg-[#d29c20]">
              Demander une démo
            </Button>
          </div>
        </header>
      </div>
    </section>
  );
};

export { Hero206 };

