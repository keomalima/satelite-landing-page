"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  className?: string;
}

const stats: Stat[] = [
  {
    value: "-40%",
    label: "de temps passé sur les déclarations AT",
  },
  {
    value: "72h",
    label: "délai moyen de traitement d'un dossier",
  },
  {
    value: "100%",
    label: "des formulaires CERFA générés automatiquement",
  },
  {
    value: "24/7",
    label: "accès sécurisé à vos dossiers et historiques",
  },
];

const Stats = ({ className }: StatsProps) => {
  return (
    <section className={cn("bg-[#293647] py-16 md:py-32", className)}>
      <div className="container mx-auto">
        <div className="mb-10 md:mb-16 flex flex-col items-center gap-4 md:gap-6 text-center">
          <Badge variant="outline" className="border-[#e1b129] text-[#e1b129]">
            Résultats
          </Badge>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-pretty text-white md:text-4xl lg:text-5xl">
            Des résultats concrets, mesurables.
          </h2>
          <p className="mx-auto max-w-xl text-[#a7bbd2] text-balance lg:text-lg">
            Nos clients transforment leur gestion des risques professionnels et gagnent en efficacité dès les premières semaines.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden  md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#293647] p-8 md:p-10 text-center"
            >
              <span className="text-4xl font-bold text-[#e1b129] md:text-5xl">
                {stat.value}
              </span>
              <p className="mt-3 text-sm text-[#a7bbd2]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats };

