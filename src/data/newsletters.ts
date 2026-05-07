import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";

import type { Newsletter } from "@/types/newsletter";

const FETCH_DELAY_IN_MS = 150;

export async function getNewsletters(): Promise<Newsletter[]> {
  await new Promise((resolve) => setTimeout(resolve, FETCH_DELAY_IN_MS));

  return NEWSLETTER_ITEMS;
}
