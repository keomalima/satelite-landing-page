import {
  BarChart2,
  FileText,
  MessageSquare,
  ShieldAlert,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface FeatureIconListItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface FeatureIconListProps {
  heading: string;
  features?: FeatureIconListItem[];
  buttons?: Buttons;
  className?: string;
}

interface FeaturesProps extends FeatureIconListProps {}
type Props = Partial<FeaturesProps>;

const defaultProps: FeaturesProps = {
  heading: "Tout ce dont vos équipes ont besoin",
  features: [
    {
      icon: <ShieldAlert className="size-5 text-[#e1b129]" />,
      title: "Suivi des incidents en temps reel",
      description:
        "Centralisez chaque accident du travail et maladie professionnelle avec un historique complet, des statuts de traitement et des alertes sur les échéances.",
    },
    {
      icon: <FileText className="size-5 text-[#e1b129]" />,
      title: "DAT digitale & conforme",
      description:
        "Générez vos Déclarations d'Accident du Travail en conformité CARSAT/URSSAF. Réduisez les délais et éliminez les erreurs de saisie.",
    },
    {
      icon: <MessageSquare className="size-5 text-[#e1b129]" />,
      title: "Ticketing & collaboration",
      description:
        "Échangez documents et messages entre établissements, RH et consultants dans un espace unifié et traçable.",
    },
  ],
};

const MAX_FEATURES = 4;

const Features = (props: Props) => {
  const { heading, features, className } = {
    ...defaultProps,
    ...props,
  };
  const items = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section id="features" className={cn("bg-[#fbfbfb] py-32", className)}>
      <div className="container mx-auto">
        {heading && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-wide text-[#e1b129] uppercase">
              Fonctionnalités
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-[#293647] lg:text-5xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#577aa0]">
              De la déclaration à l'analyse, Satelite couvre l'intégralité du cycle de vie de vos dossiers d'accidents du travail.
            </p>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-[#fcf9ea]">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium text-[#293647]">{feature.title}</h3>
              <p className="text-[#577aa0]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };


