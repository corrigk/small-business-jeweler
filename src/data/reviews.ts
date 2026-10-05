// Real public reviews from Abe Harry & Son's Yelp page.
// Before launch, confirm the client is happy to feature them and add more over time.

export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  source: "Yelp" | "Google";
  text: string;
};

export const reviews: Review[] = [
  {
    id: "thomas-t",
    name: "Thomas T.",
    location: "Diamond Bar, CA",
    rating: 5,
    date: "Oct 16, 2023",
    source: "Yelp",
    text: "So thankful for you guys. We (my fiancé and I) thought our engagement ring was damaged so we brought it in for inspection. The Jewelers here are very professional and told us it was just the lighting that made the diamond looked damaged (yeah we're dumb). We were so stressed out and they took great care of us even though we didn't purchase the ring from them. Great honest people. If I'm ever back in Ohio, I will stop on by again.",
  },
  {
    id: "dan-b",
    name: "Dan B.",
    location: "Brunswick, OH",
    rating: 5,
    date: "Dec 4, 2020",
    source: "Yelp",
    text: "What a hidden gem (pun intended)! Chris and Leon are the absolute best. Patient, they'll do whatever it takes to find the right piece of jewelry for whatever occasion. Forget the big chains; these guys do it right. Highly recommended.",
  },
];

export const ratingSummary = {
  average: 5,
  count: reviews.length,
  source: "Yelp",
};

// Short pull-quotes for hero / strip sections.
export const pullQuotes = [
  { text: "Forget the big chains; these guys do it right.", name: "Dan B.", location: "Brunswick, OH" },
  { text: "Great honest people.", name: "Thomas T.", location: "Diamond Bar, CA" },
];
