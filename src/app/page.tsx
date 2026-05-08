import React from "react";

import { getNewsletters } from "@/data/newsletters";
import { groupNewslettersBySite } from "@/services/newsletterAccess";
import HeaderPage from "@/components/HeaderPage";
import NewsletterSection from "@/components/NewsletterSection";

const currentUser = {
  subscriptions: ["RIGHT_1"],
};
const HomePage = async () => {
  const newsletters = await getNewsletters();
  const newslettersBySite = groupNewslettersBySite(newsletters);

  return (
    <main>
      <HeaderPage />

      {Object.entries(newslettersBySite).map(([site, newsletters]) => (
        <NewsletterSection
          key={site}
          site={site}
          newsletters={newsletters}
          user={currentUser}
        />
      ))}
    </main>
  );
};
export default HomePage;
