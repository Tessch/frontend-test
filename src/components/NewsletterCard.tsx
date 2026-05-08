import Image from "next/image";
import { getNewsletterCta } from "@/services/newsletterAccess";
import { Newsletter, User } from "@/types/newsletter";
import React from "react";

type NewsletterCardProps = {
  newsletter: Newsletter;
  user: User;
};

const NewsletterCard = ({ newsletter, user }: NewsletterCardProps) => {
  const ctaLabel = getNewsletterCta(newsletter, user);
  return (
    <article>
      <div className="newsletter-card__image-wrapper">
        <Image
          src={`${newsletter.image}`}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 33vw"
          className="newsletter-card__image"
        />
        <h3 className="newsletter-card__title">{newsletter.title}</h3>
      </div>

      <div className="newsletter-card__content">
        <h3 className="newsletter-card__title">{newsletter.title}</h3>

        <p className="newsletter-card__description">{newsletter.description}</p>

        <button
          className="newsletter-card__button"
          type="button"
          aria-label={`${ctaLabel} à la newsletter ${newsletter.title}`}
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
};

export default NewsletterCard;
