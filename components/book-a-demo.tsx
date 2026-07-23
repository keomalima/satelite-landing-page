"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full flex-col gap-1.5">{children}</div>;
};

interface Props {
  className?: string;
}

const BookADemo = ({
  className,
}: Props) => {
  return (
    <section id="contact" className={cn("bg-[#293647] py-16 md:py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <Badge variant="outline" className="border-[#e1b129] text-[#e1b129]">DEMANDE DE DÉMO</Badge>
            <h3 className="mt-2 text-2xl font-semibold text-white lg:text-4xl">
              Prêt à transformer votre gestion des risques professionnels ?
            </h3>
            <p className="text-sm text-[#a7bbd2] max-w-lg">
              Remplissez le formulaire ci-dessous et notre équipe vous contactera sous 24h.
            </p>
          </div>
          <form className="flex flex-col gap-5 md:rounded-2xl border border-white/10 bg-[#1e2733] p-6 md:p-10 shadow-2xl">
            <div className="flex w-full flex-col md:flex-row gap-4">
              <FormGroup>
                <Label className="text-[#a7bbd2] text-sm">Prénom</Label>
                <Input
                  type="text"
                  placeholder="Alex"
                  className="border-white/10 bg-[#293647] text-white placeholder:text-[#577aa0] focus-visible:ring-[#e1b129]/50"
                />
              </FormGroup>
              <FormGroup>
                <Label className="text-[#a7bbd2] text-sm">Nom</Label>
                <Input
                  type="text"
                  placeholder="Martin"
                  className="border-white/10 bg-[#293647] text-white placeholder:text-[#577aa0] focus-visible:ring-[#e1b129]/50"
                />
              </FormGroup>
            </div>
            <FormGroup>
              <Label className="text-[#a7bbd2] text-sm">Email professionnel</Label>
              <Input
                type="email"
                placeholder="alex.martin@entreprise.fr"
                className="border-white/10 bg-[#293647] text-white placeholder:text-[#577aa0] focus-visible:ring-[#e1b129]/50"
              />
            </FormGroup>
            <FormGroup>
              <Label className="text-[#a7bbd2] text-sm">Poste</Label>
              <Input
                type="text"
                placeholder="Responsable RH"
                className="border-white/10 bg-[#293647] text-white placeholder:text-[#577aa0] focus-visible:ring-[#e1b129]/50"
              />
            </FormGroup>
            <Button type="submit" className="mt-2 w-full bg-[#e1b129] font-semibold text-[#293647] hover:bg-[#d29c20] h-11 text-sm">
              Demander une démo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { BookADemo };
