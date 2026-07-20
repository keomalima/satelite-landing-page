"use client";

import { Building2, FileText, SquareStack } from "lucide-react";
import React, { useState } from "react";
import type { ElementType } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface PresentationSlider {
  title: string;
  description: string;
  icon: ElementType<{ className?: string }>;
  color?: string;
  href?: string;
  src: string;
  alt: string;
  label?: string;
}

type Props = {
  features?: PresentationSlider[];
  className?: string;
}


const defaultProps: Props = {
  features: [
    {
      title: "DAT digitale & conforme",
      description:
        "Générez vos Déclarations d'Accident du Travail en conformité CARSAT/URSSAF.",
      icon: FileText,
      src: "dat.png",
      alt: "Dat preview",
      label: "Overview",
    },
    {
      title: "Suivi des incidents en temps reel",
      description:
        "Centralisez chaque accident du travail et maladie professionnelle avec un historique complet.",
      icon: SquareStack,
      src: "incident.png",
      alt: "Incident detail",
      label: "Workflow",
    },
    {
      title: "Espace établissement unifié",
      description:
        "Centralisez en un seul endroit les informations de l’établissement, des salariés entre autres",
      icon: Building2,
       src: "est.png",
      alt: "Establishment context",
      label: "Establishments",
    },
  ],
};


const Presentation = (props: Props) => {
  const { features,  className } = {
    ...defaultProps,
    ...props,
  };

  const visibleFeatures = (features ?? []);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge variant="outline">Fonctionnalités</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
            Tout ce dont vos équipes ont besoin.
          </h1>
        </div>
        <div className="relative mx-auto px-2">
          <div className="relative aspect-video max-h-[500px] w-full">
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              {visibleFeatures.map((feature, i) => {
                 const isActive = activeImageIndex === i;
                return (
                   <div
                    key={`${feature.src}-${i}`}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 ease-out",
                      isActive
                        ? "z-10 opacity-100"
                        : "pointer-events-none z-0 opacity-0",
                    )}
                    aria-hidden={!isActive}
                  >
                      <img
                        src={feature.src}
                        alt={feature.alt}
                        className="absolute inset-0 size-full rounded-xl border border-border object-cover object-top"
                      />                
                  </div>
                )
              }
              )
            }
            </div>
            <div className="pointer-events-none absolute inset-0 z-20 rounded-xl bg-linear-to-t from-background via-transparent to-transparent" />
            <div className="pointer-events-none absolute -top-28 -right-28 -z-10 aspect-video h-72 w-96 mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] bg-size-[12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]" />
            <div className="pointer-events-none absolute -top-28 -left-28 -z-10 aspect-video h-72 w-96 mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] bg-size-[12px_12px] opacity-40 sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]" />
          </div>
        </div>
        <div
          className="mx-auto mt-10 flex max-w-5xl flex-col md:flex-row"
          onMouseLeave={() => setActiveImageIndex(0)}
        >
          {visibleFeatures.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="mx-6 hidden h-auto w-0.5 bg-linear-to-b from-muted via-transparent to-muted md:block"
                />
              )}
              <div
                className="flex grow basis-0 cursor-default flex-col items-center rounded-md bg-background p-4 transition-colors hover:bg-muted/40"
                onMouseEnter={() => setActiveImageIndex(index)}
              >
                <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background drop-shadow-lg">
                  <feature.icon className="h-auto w-5" />
                </div>
                <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-center text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Presentation };
