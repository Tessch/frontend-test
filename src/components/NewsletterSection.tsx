import React from "react";
import { Newsletter, User } from "@/types/newsletter";
import NewsletterCard from "./NewsletterCard";

type NewsletterSectionProps = {
  site: string;
  newsletters: Newsletter[];
  user: User;
};

const NewsletterSection = ({
  site,
  newsletters,
  user,
}: NewsletterSectionProps) => {
  const titleId = `newsletter-section-${site}`;

  return (
    <section className="newsletter-section" aria-labelledby={titleId}>
      <div className="newsletter-section__header">
        <h2 className="newsletter-section__title" id={titleId}>
          {site}
        </h2>
      </div>

      <ul className="newsletter-section__grid">
        {newsletters.map((newsletter) => (
          <li className="newsletter-section__item" key={newsletter.id}>
            <NewsletterCard newsletter={newsletter} user={user} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsletterSection;
