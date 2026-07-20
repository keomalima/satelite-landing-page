import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}

type Props = {
  sections?: FooterSection[];
  legalLinks?: FooterLink[];
  className?: string;
};

const defaultProps: Props = {
  sections: [
    {
      title: "Plateforme",
      links: [
        { name: "Fonctionnalités", href: "#presentation" },
        { name: "À propos", href: "#about" },
        { name: "Demander une démo", href: "#contact" },
      ],
    },
    {
      title: "Informations",
      links: [
        { name: "Mentions légales", href: "#" },
        { name: "Politique de confidentialité", href: "#" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ],
  legalLinks: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
  ],
};

const Footer = (props: Props) => {
  const {
    sections,
    legalLinks,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("bg-[#1e2733] py-32", className)}>
      <div className="container mx-auto px-15">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href="#">
                <img
                  src="/logo_without_baseline_blue_background.svg"
                  alt="Logo Satelite"
                  title="Satelite"
                  className="h-20 w-auto"
                />
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-[#7897b8]">
              La plateforme de reference pour la gestion des accidents du travail.
            </p>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections?.slice(0, 3).map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-xs font-semibold tracking-widest text-[#e1b129] uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-[#a7bbd2]">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-white"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 py-8 text-xs font-medium text-[#577aa0] md:flex-row md:items-center md:text-left">
          <p className="order-2 text-sm lg:order-1">© 2026 Satelite. Tous droits réservés.</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks?.map((link, idx) => (
              <li key={idx} className="hover:text-white">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer };
