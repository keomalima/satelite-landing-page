import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComplianceFeature {
  title: string;
  description: string;
  icon: React.ElementType<{ className?: string }>;
}

interface Compliance1Props {
  className?: string;
}

const features: ComplianceFeature[] = [
  {
    title: "Conformité RGPD",
    description:
      "Vos données de santé et d'accidents sont traitées dans le strict respect du Règlement Général sur la Protection des Données.",
    icon: ShieldCheck,
  },
  {
    title: "Certification ISO 27001",
    description:
      "Infrastructure conforme au standard international de sécurité de l'information, garantissant la protection des données sensibles de vos salariés.",
    icon: Lock,
  },
  {
    title: "Traçabilité complète",
    description:
      "Chaque action est horodatée et archivée pour répondre aux exigences d'audit de la CARSAT et de l'URSSAF.",
    icon: FileCheck,
  },
];

const Compliance1 = ({ className }: Compliance1Props) => {
  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className="container mx-auto">
        <div className="mb-10 md:mb-20 flex flex-col items-center gap-4 md:gap-6 text-center">
          <Badge variant="outline">Sécurité & Conformité</Badge>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-pretty md:text-4xl lg:text-5xl">
            Vos données protégées, vos obligations respectées.
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-muted-foreground lg:text-lg">
            Satelite est conçu pour répondre aux exigences réglementaires françaises en matière de données de santé au travail.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-0 md:gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex aspect-[4/3] md:aspect-auto flex-col items-center justify-center rounded-none border-x-0 border-t last:border-b md:last:border-b-0 border-border bg-background p-6 md:p-8 text-center transition-colors hover:bg-muted/40 md:rounded-2xl md:border"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#293647]">
                <feature.icon className="h-auto w-5 text-[#e1b129]" />
              </div>
              <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Compliance1 };
