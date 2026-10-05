// Business facts for Abe Harry & Son.
// Name, address, phone and hours are real (from their public listing).
// Everything marked PLACEHOLDER still needs to be confirmed with the client.

export const business = {
  name: "Abe Harry & Son",
  shortName: "Abe Harry & Son",
  descriptor: "Jewelers",
  city: "Independence, Ohio",
  address: {
    street: "6450 Rockside Woods Blvd S, Suite 240",
    city: "Independence",
    state: "OH",
    zip: "44131",
  },
  phone: "(216) 696-2500",
  phoneHref: "tel:+12166962500",
  // PLACEHOLDER: no public email known yet. Used only by the demo contact form.
  email: "hello@example.com",
  hours: [
    { day: "Monday", time: "9:30 AM – 3:45 PM" },
    { day: "Tuesday", time: "9:30 AM – 3:45 PM" },
    { day: "Wednesday", time: "9:30 AM – 3:45 PM" },
    { day: "Thursday", time: "9:30 AM – 3:45 PM" },
    { day: "Friday", time: "9:30 AM – 3:45 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],
  // PLACEHOLDER: confirm the real service list with the client.
  services: [
    {
      title: "Engagement Rings",
      text: "Sit down with us, see the stones in person, and find the ring that fits the person and the budget.",
    },
    {
      title: "Wedding Bands",
      text: "Matching sets, his-and-hers bands, and anniversary rings in gold, platinum, and more.",
    },
    {
      title: "Custom Design",
      text: "Bring us an idea or a family heirloom and we will help turn it into something one of a kind.",
    },
    {
      title: "Repairs & Resizing",
      text: "Prongs, clasps, chains, and sizing, handled carefully by people who treat your jewelry like their own.",
    },
    {
      title: "Inspections & Appraisals",
      text: "Not sure about a stone or a setting? We will take an honest look and tell you what we see.",
    },
  ],
} as const;

export const mapsQuery = encodeURIComponent(
  "Abe Harry & Son, 6450 Rockside Woods Blvd S Suite 240, Independence, OH 44131",
);
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.state} ${business.address.zip}`;

// Flip to false to show "Inquire for pricing" instead of prices everywhere.
export const SHOW_PRICES = true;
