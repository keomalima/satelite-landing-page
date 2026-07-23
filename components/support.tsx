import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SupportProps {
  className?: string;
}

const steps = [
  { number: "1", text: "Créez un ticket depuis votre espace" },
  { number: "2", text: "Un expert prend en charge votre demande" },
  { number: "3", text: "Recevez une réponse sous 24h ouvrées" },
];

const Support = ({ className }: SupportProps) => {
  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className="container mx-auto">
        <Card className="mx-auto max-w-5xl border-0 shadow-none bg-muted/30 ring-0">
          <div className="grid md:grid-cols-2">
            <CardHeader className="flex flex-col justify-center gap-4 p-8 md:p-12">
              <Badge variant="outline" className="w-fit">Support</Badge>
              <CardTitle className="text-2xl font-semibold tracking-tight md:text-3xl">
                Un problème ? Nos experts vous répondent directement.
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Pas de chatbot, pas de FAQ sans fin. Ouvrez un ticket et un développeur ou consultant spécialisé AT/MP vous accompagne jusqu'à la résolution.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-0 p-8 md:p-12">
              {steps.map((step, index) => (
                <div key={index}>
                  <div className="flex items-start gap-4 py-4">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#293647] text-sm font-bold text-[#e1b129]">
                      {step.number}
                    </div>
                    <p className="text-sm font-medium text-foreground pt-1">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <MessageCircle className="h-4 w-4" />
                <span>Temps de réponse moyen : moins de 12h</span>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export { Support };
