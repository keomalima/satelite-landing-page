"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Plus,
  RotateCw,
  Share,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface HeroSaasProps {
  className?: string;
  heading: string;
  description: string;
  logos?: Logo[];
  images?: Image[];
  mockupUrl?: string;
}

interface Hero206Props extends HeroSaasProps {}
type Props = Partial<Hero206Props>;

const defaultProps: Hero206Props = {
  heading: "La gestion des accidents du travail, réinventée.",
  description: "Satelite centralise le suivi des incidents, les déclarations réglementaires et la collaboration entre équipes RH et consultants - en un seul outil sécurisé.",
  logos: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
      alt: "Company logo 1",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
      alt: "Company logo 2",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg",
      alt: "Company logo 3",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-4.svg",
      alt: "Company logo 4",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-5.svg",
      alt: "Company logo 5",
      className: "h-5 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-6.svg",
      alt: "Company logo 6",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-7.svg",
      alt: "Company logo 7",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-8.svg",
      alt: "Company logo 8",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-9.svg",
      alt: "Company logo 9",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-10.svg",
      alt: "Company logo 10",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-11.svg",
      alt: "Company logo 11",
      className: "h-7 w-auto",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-12.svg",
      alt: "Company logo 12",
      className: "h-7 w-auto",
    },
  ],
  images: [
    {
      src: "/dashboard-preview.png",
      alt: "Aperçu du tableau de bord Satelite",
    },
  ],
  mockupUrl: "https://satelite.app",
};

/** Logo row under the hero copy. */
const MAX_LOGOS = 5;

const Hero206 = (props: Props) => {
  const { heading, description, logos, images, mockupUrl, className } = {
    ...defaultProps,
    ...props,
  };

  const logoRow = (logos ?? []).slice(0, MAX_LOGOS);
  const mockImage = images?.[0];

  return (
    <section
      id="about"
      className={cn("relative overflow-hidden bg-[#293647]", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] mask-[linear-gradient(to_bottom,transparent_0%,transparent_16%,black_30%,black_68%,transparent_100%)] bg-size-[4.5rem_4.5rem] opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-linear-to-b from-[#293647] from-35% to-transparent md:h-56"
      />
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

const BrowserMockup = ({
  className = "",
  url,
  image,
}: {
  className?: string;
  url: string;
  image: Image;
}) => (
  <div
    className={cn(
      "relative w-full overflow-hidden rounded-xl border md:rounded-2xl lg:rounded-3xl",
      className,
    )}
  >
    <div className="flex items-center justify-between gap-10 bg-[#fbfbfb] px-8 py-4 lg:gap-25">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
        <div className="ml-6 hidden items-center gap-2 opacity-40 lg:flex">
          <ChevronLeft className="size-5" />
          <ChevronRight className="size-5" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="relative hidden w-full rounded-full bg-[#fbfbfb] px-4 py-1 text-center text-sm tracking-tight text-[#577aa0] md:block">
          {url}
          <RotateCw className="absolute top-2 right-3 size-3.5" />
        </p>
      </div>

      <div className="flex items-center gap-4 opacity-40">
        <Share className="size-4" />
        <Plus className="size-4" />
        <Copy className="size-4" />
      </div>
    </div>

    <div className="relative w-full before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-16 before:bg-linear-to-b before:from-black/6 before:to-transparent md:before:h-20">
      {image.srcDark ? (
        <>
          <img
            src={image.src}
            alt={image.alt}
            className="hidden aspect-video h-full w-full object-cover object-top md:block dark:hidden"
          />
          <img
            src={image.srcDark}
            alt={image.alt}
            className="hidden aspect-video h-full w-full object-cover object-top md:hidden dark:md:block"
          />
          <img
            src={image.src}
            alt={image.alt}
            className="block h-full w-full object-cover md:hidden dark:hidden"
          />
          <img
            src={image.srcDark}
            alt={image.alt}
            className="hidden h-full w-full object-cover md:hidden dark:block"
          />
        </>
      ) : (
        <>
          <img
            src={image.src}
            alt={image.alt}
            className="hidden aspect-video h-full w-full object-cover object-top md:block"
          />
          <img
            src={image.src}
            alt={image.alt}
            className="block h-full w-full object-cover md:hidden"
          />
        </>
      )}
    </div>
    <div className="absolute bottom-0 z-10 flex w-full items-center justify-center bg-[#fbfbfb] py-3 md:hidden">
      <p className="relative flex items-center gap-2 rounded-full px-8 py-1 text-center text-sm tracking-tight">
        {url}
      </p>
    </div>
  </div>
);
