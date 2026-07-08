"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";


const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex w-full flex-col gap-2">{children}</div>;
};

interface BookADemo1Props {
  badge?: string;
  heading?: string;
  benefits?: string[];
  companies?: string[];
  className?: string;
}

const BookADemo1 = ({
  badge = "DEMANDE DE DEMO",
  heading = "Prêt à transformer votre gestion des risques professionnels ?",
  benefits = [
    "Rejoignez les équipes RH et cabinets de conseil qui font confiance à Satelite.",
    "Sans engagement. Réponse sous 24h.",
  ],
  companies = [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-8.svg",
  ],
  className,
}: BookADemo1Props) => {
  return (
    <section id="contact" className={cn("bg-[#293647] py-32", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-4">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-8">
            <Badge variant="outline" className="border-[#e1b129] text-[#e1b129]">{badge}</Badge>
            <h3 className="mt-2 max-w-md text-center text-3xl font-medium text-white lg:mt-0 lg:max-w-xl lg:text-left lg:text-5xl">
              {heading}
            </h3>
            <ul className="flex flex-col">
              {benefits.map((benefit, index) => {
                return (
                  <li
                    key={`bookademo1-benefit-${index}`}
                    className="flex max-w-md items-start gap-2 px-4 last:hidden last:border-b-0 lg:border-b lg:py-6 last:lg:flex"
                  >
                    <ArrowRight
                      className="hidden size-6 shrink-0 text-[#e1b129] lg:block"
                      strokeWidth={1}
                    />
                    <p className="text-center font-medium text-[#a7bbd2] lg:text-left">
                      {benefit}
                    </p>
                  </li>
                );
              })}
            </ul>
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
              <FormGroup>
                <Label>Vos besoins</Label>
                <Textarea
                  placeholder="Precisez votre contexte (DAT, ticketing, suivi des incidents...)"
                  className="bg-background"
                />
              </FormGroup>
              <FormGroup>
                <Label>Comment nous avez-vous connu ?</Label>
                <Select>
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="Recommendation, recherche web, etc." />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="search">Recherche web</SelectItem>
                    <SelectItem value="referral">Recommandation</SelectItem>
                    <SelectItem value="event">Evenement professionnel</SelectItem>
                    <SelectItem value="partner">Partenaire</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </FormGroup>
              <Button type="submit" className="w-fit place-self-end bg-[#e1b129] font-bold text-[#293647] hover:bg-[#d29c20]">
                Demander une démo gratuite
              </Button>
              <p className="-mt-6 text-right text-xs text-[#a7bbd2]">Sans engagement. Réponse sous 24h.</p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { BookADemo1 };
