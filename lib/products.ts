// Single source of truth for the ScoutOS product family and the links the
// parent site points at. Edit URLs here and they update across the home page,
// the support page and the footer.
//
// Link scheme: scoutos.org subdomains (agreed with the owner). DNS is wired
// separately; until each product's subdomain is live, update `url` here.

export type Product = {
  key: string;
  /** Formal name, first/formal use (masterbrand §2). */
  name: string;
  /** Product word alone, for the lockup. */
  shortName: string;
  /** One-line promise, in the ScoutOS voice (§9). */
  promise: string;
  /** Two-to-three sentence description. */
  description: string;
  /** Product home. */
  url: string;
  /** Where the product keeps its own help / FAQs. */
  supportUrl: string;
  /** Whether the product is publicly live yet. */
  live: boolean;
  /** Whether the product has its own help/FAQs pages to link to yet. Flip to
   *  true (and confirm supportUrl) when the product ships its support pages. */
  hasOwnSupport: boolean;
};

export const products: Product[] = [
  {
    key: 'events',
    name: 'ScoutOS Events',
    shortName: 'Events',
    promise: 'Permission slips, taken seriously.',
    description:
      'Collect parental permissions in a few minutes and turn event check-in into a one-second glance. Built for volunteer-run youth groups running camps, trips and club nights.',
    url: 'https://events.scoutos.org',
    supportUrl: 'https://events.scoutos.org/support',
    live: true,
    hasOwnSupport: true,
  },
  {
    key: 'hikecheck',
    name: 'ScoutOS HikeCheck',
    shortName: 'HikeCheck',
    promise: 'Know where everyone was last seen — and who to worry about.',
    description:
      'Checkpoint check-ins for organised hikes and walking events. Walkers scan a QR at each checkpoint; event staff get a live safety dashboard. A party that stops moving turns red without anyone touching the screen.',
    url: 'https://hikecheck.scoutos.org',
    supportUrl: 'https://hikecheck.scoutos.org/support',
    live: true,
    hasOwnSupport: false,
  },
  {
    key: 'waitlist',
    name: 'ScoutOS Waitlist',
    shortName: 'Waitlist',
    promise: 'A fair place in the queue for every young person.',
    description:
      'Manage waiting lists for oversubscribed sections and events, so families know where they stand and no young person is forgotten.',
    // Migrating to waitlist.scoutos.org, but the live site is scoutswaitlist.com
    // for now — keep pointing there until the migration completes.
    url: 'https://scoutswaitlist.com/',
    supportUrl: 'https://scoutswaitlist.com/',
    live: true,
    hasOwnSupport: false,
  },
];

// Official Scouts (UK) help — where anything about Scouting itself belongs.
export const scoutsHelpUrl = 'https://www.scouts.org.uk/get-help/';

// The body that builds and runs ScoutOS.
export const developer = {
  name: 'Milton Keynes District Scout Council',
  short: 'MK District Scout Council',
};

// General enquiries about ScoutOS the family (not a specific product).
export const contactEmail = 'hello@scoutos.org';

// Support address, shown on /support for family-level help requests.
export const supportEmail = 'help@scoutos.org';
