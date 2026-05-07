import type { Newsletter, User } from "@/types/newsletter";

export function canAccessNewsletter(
  newsletter: Newsletter,
  user: User,
): boolean {
  if (newsletter.subscriptions.length === 0) {
    return true;
  }

  return newsletter.subscriptions.some((subscription) =>
    user.subscriptions.includes(subscription),
  );
}

export function getNewsletterCta(newsletter: Newsletter, user: User) {
  return canAccessNewsletter(newsletter, user) ? "S'inscrire" : "S'abonner";
}

export function groupNewslettersBySite(newsletters: Newsletter[]) {
  return newsletters.reduce<Record<string, Newsletter[]>>(
    (groups, newsletter) => {
      const site = newsletter.site;

      return {
        ...groups,
        [site]: [...(groups[site] ?? []), newsletter],
      };
    },
    {},
  );
}
