import { Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import type { FooterData, SocialLink } from "../App";

type FooterProps = {
  data: FooterData;
  theme: "light" | "dark";
};

const socialIcons: Record<SocialLink["icon"], ReactNode> = {
  instagram: (
    <span aria-hidden="true" className="text-sm font-bold leading-none">
      IG
    </span>
  ),
  linkedin: (
    <span aria-hidden="true" className="text-xs font-bold leading-none">
      in
    </span>
  ),
  dribbble: (
    <span aria-hidden="true" className="text-sm font-bold leading-none">
      Db
    </span>
  ),
  behance: (
    <span aria-hidden="true" className="text-xs font-bold leading-none">
      Be
    </span>
  ),
};

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="border-t border-(--site-border-muted) bg-(--site-control-muted-bg) px-6 py-16 text-(--site-page-muted) sm:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <nav aria-label="Footer navigation" className="mt-9">
          <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 text-sm font-semibold">
            {data.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-(--motion-fast) hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="mt-8 flex items-center justify-center gap-3">
          {data.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-(--site-border) bg-(--site-control-bg) text-(--site-page-muted) 
                transition-colors duration-(--motion-fast) hover:border-accent hover:text-accent"
              >
                {socialIcons[social.icon]}
              </a>
            </li>
          ))}
        </ul>

        <address className="mt-9 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-semibold not-italic">
          {data.contact.email ? (
            <a
              href={`mailto:${data.contact.email}`}
              className="inline-flex items-center gap-3 transition-colors duration-(--motion-fast) hover:text-accent"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              <span>{data.contact.email}</span>
            </a>
          ) : null}

          {data.contact.phone ? (
            <a
              href={`tel:${data.contact.phone.replace(/[\s()-]/g, "")}`}
              className="inline-flex items-center gap-3 transition-colors duration-(--motion-fast) hover:text-accent"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span>{data.contact.phone}</span>
            </a>
          ) : null}
        </address>

        <div className="mt-10 w-full max-w-xl border-t border-(--site-border) pt-5">
          <p className="text-[11px] font-semibold leading-6">{data.credit1}</p>
          <p className="text-[11px] font-semibold leading-6">{data.credit2}</p>
        </div>
      </div>
    </footer>
  );
};
