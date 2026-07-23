"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SimulatorProps {
  className?: string;
}

const Simulator = ({ className }: SimulatorProps) => {
  const [employees, setEmployees] = useState(200);
  const [incidentsPerYear, setIncidentsPerYear] = useState(12);

  const hoursPerIncident = 4;
  const hourlyRate = 45;
  const reductionFactor = 0.4;

  const currentCost = incidentsPerYear * hoursPerIncident * hourlyRate;
  const savings = Math.round(currentCost * reductionFactor);
  const hoursGained = Math.round(incidentsPerYear * hoursPerIncident * reductionFactor);

  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className="container mx-auto">
        <div className="mb-10 md:mb-16 flex flex-col items-center gap-4 md:gap-6 text-center">
          <Badge variant="outline">Simulateur</Badge>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-pretty md:text-4xl lg:text-5xl">
            Estimez vos économies avec Satelite.
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-balance lg:text-lg">
            Ajustez les curseurs selon votre situation et découvrez le temps et l'argent que vous pourriez économiser.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-none ring-0 bg-muted/30">
            <CardContent className="p-6 md:p-10">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Label className="text-sm font-medium">
                      Nombre de salariés
                    </Label>
                    <Input
                      type="number"
                      min={1}
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="bg-background"
                    />
                    <input
                      type="range"
                      min={10}
                      max={2000}
                      step={10}
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="w-full accent-[#e1b129]"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label className="text-sm font-medium">
                      Incidents AT/MP par an
                    </Label>
                    <Input
                      type="number"
                      min={0}
                      value={incidentsPerYear}
                      onChange={(e) => setIncidentsPerYear(Number(e.target.value))}
                      className="bg-background"
                    />
                    <input
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={incidentsPerYear}
                      onChange={(e) => setIncidentsPerYear(Number(e.target.value))}
                      className="w-full accent-[#e1b129]"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-6 rounded-2xl bg-[#293647] p-6 md:p-8">
                  <div>
                    <p className="text-sm text-[#a7bbd2]">Économie estimée / an</p>
                    <p className="mt-1 text-4xl font-bold text-[#e1b129]">
                      {savings.toLocaleString("fr-FR")} €
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#a7bbd2]">Heures récupérées / an</p>
                    <p className="mt-1 text-3xl font-bold text-white">
                      {hoursGained}h
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#a7bbd2]">Coût actuel estimé</p>
                    <p className="mt-1 text-lg font-medium text-[#a7bbd2]">
                      {currentCost.toLocaleString("fr-FR")} € / an
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Simulator };

