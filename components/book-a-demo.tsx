"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";


const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
};

interface BookADemoProps {
  badge?: string;
  heading?: string;
  className?: string;
}

const BookADemo = ({
  badge = "DEMANDE DE DEMO",
  heading = "Prêt à transformer votre gestion des risques professionnels ?",
 
 
  className,
}: BookADemoProps) => {
  return (
    <section id="contact" className={cn("bg-[#293647] md:py-32 pt-10", className)}>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-4">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <Badge variant="outline" className="border-[#e1b129] text-[#e1b129]">{badge}</Badge>
            <h3 className="mt-2 max-w-md text-center text-3xl font-medium text-white lg:mt-0 lg:max-w-xl lg:text-left lg:text-5xl">
              {heading}
            </h3>
          </div>
          <Card className="w-full max-w-xl place-self-center bg-[#fbfbfb] px-4 pt-10 pb-4 lg:max-w-none lg:place-self-start">
            <form className="flex flex-col gap-10">
              <div className="flex w-full items-center gap-4">
                <FormGroup>
                  <Label>Prenom</Label>
                  <Input
                    type="text"
                    placeholder="Alex"
                    className="bg-background"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Nom</Label>
                  <Input
                    type="text"
                    placeholder="Martin"
                    className="bg-background"
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <Label>Email professionnel</Label>
                <Input
                  type="email"
                  placeholder="Votre adresse e-mail professionnelle"
                  className="bg-background"
                />
              </FormGroup>
              <FormGroup>
                <Label>Poste</Label>
                <Input
                  type="text"
                  placeholder="Responsable RH"
                  className="bg-background"
                />
              </FormGroup>
              <Button type="submit" className="w-fit place-self-end bg-[#e1b129] font-bold text-[#293647] hover:bg-[#d29c20]">
                Demander une démo
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { BookADemo };
