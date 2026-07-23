"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";

interface AnalyticsProps {
  className?: string;
}

const incidentData = [
  { month: "Jan", incidents: 12 },
  { month: "Fév", incidents: 8 },
  { month: "Mar", incidents: 15 },
  { month: "Avr", incidents: 6 },
  { month: "Mai", incidents: 9 },
  { month: "Jun", incidents: 4 },
];

const delayData = [
  { month: "Jan", delai: 14 },
  { month: "Fév", delai: 11 },
  { month: "Mar", delai: 9 },
  { month: "Avr", delai: 7 },
  { month: "Mai", delai: 5 },
  { month: "Jun", delai: 3 },
];

const incidentConfig = {
  incidents: {
    label: "Incidents",
    color: "#e1b129",
  },
} satisfies ChartConfig;

const delayConfig = {
  delai: {
    label: "Délai (jours)",
    color: "#e1b129",
  },
} satisfies ChartConfig;

const Analytics = ({ className }: AnalyticsProps) => {
  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className="container mx-auto">
        <div className="mb-10 md:mb-16 flex flex-col items-center gap-4 md:gap-6 text-center">
          <Badge variant="outline">Statistiques</Badge>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-pretty md:text-4xl lg:text-5xl">
            Pilotez vos risques avec des données claires.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-balance lg:text-lg">
            Tableaux de bord en temps réel, tendances d'accidentologie, délais de traitement — tout ce qu'il faut pour prendre les bonnes décisions.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Incidents par mois</CardTitle>
              <CardDescription>
                Évolution du nombre d'AT déclarés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={incidentConfig} className="h-48 w-full">
                <BarChart data={incidentData} accessibilityLayer>
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                  />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar
                    dataKey="incidents"
                    fill="var(--color-incidents)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Délai de traitement</CardTitle>
              <CardDescription>
                Réduction progressive des délais (en jours)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={delayConfig} className="h-48 w-full">
                <LineChart data={delayData} accessibilityLayer>
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    fontSize={12}
                  />
                  <YAxis tickLine={false} axisLine={false} fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="delai"
                    stroke="var(--color-delai)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-delai)", r: 4 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl  grid-cols-2 gap-4 p-8 md:grid-cols-3 align-middle">
          {[
            { value: "Taux AT/MP", desc: "par établissement" },
            { value: "Top causes", desc: "d'accidents identifiées" },
            { value: "Alertes", desc: "sur seuils personnalisés" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-xl bg-muted/40 p-4 text-center "
            >
              <span className="text-sm font-semibold text-foreground">
                {item.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Analytics };

