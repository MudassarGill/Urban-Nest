import p1 from "../assets/images/property-1.jpg";
import p2 from "../assets/images/property-2.jpg";
import p3 from "../assets/images/property-3.jpg";
import p4 from "../assets/images/property-4.jpg";
import p5 from "../assets/images/property-5.jpg";
import p6 from "../assets/images/property-6.jpg";
import commercial from "../assets/images/type-commercial.jpg";

export const propertyTypes = ["House", "Apartment", "Villa", "Commercial"];

export const priceOptions = [
  { value: "", label: "Any price" },
  { value: "10000000", label: "Up to 1 Crore" },
  { value: "25000000", label: "Up to 2.5 Crore" },
  { value: "50000000", label: "Up to 5 Crore" },
  { value: "100000000", label: "Up to 10 Crore" },
];

export function formatPrice(price) {
  if (price >= 10000000) return `Rs. ${+(price / 10000000).toFixed(2)} Crore`;
  return `Rs. ${+(price / 100000).toFixed(2)} Lakh`;
}

export const properties = [
  {
    id: 1, title: "Modern Family House", type: "House", city: "Lahore", area: "DHA Phase 5",
    price: 45000000, beds: 4, baths: 3, sqft: 2400, image: p1, agentId: 1,
    description: "A bright, modern family home with a spacious lounge, open kitchen and a private garden. Close to schools and markets.",
  },
  {
    id: 2, title: "City View Apartment", type: "Apartment", city: "Karachi", area: "Clifton",
    price: 18500000, beds: 2, baths: 2, sqft: 1100, image: p2, agentId: 2,
    description: "A comfortable apartment with a large balcony and a city view. Secure building with parking and a lift.",
  },
  {
    id: 3, title: "Garden Villa", type: "Villa", city: "Islamabad", area: "F-7",
    price: 120000000, beds: 5, baths: 4, sqft: 3800, image: p3, agentId: 3,
    description: "A large villa with a landscaped garden, double-height living room and a separate guest wing.",
  },
  {
    id: 4, title: "Two Storey Family Home", type: "House", city: "Lahore", area: "Bahria Town",
    price: 32000000, beds: 3, baths: 3, sqft: 2000, image: p4, agentId: 1,
    description: "A neat two storey home in a gated community with a wide front lawn and a covered terrace.",
  },
  {
    id: 5, title: "Modern Townhouse", type: "House", city: "Islamabad", area: "Bahria Town",
    price: 38000000, beds: 3, baths: 2, sqft: 1800, image: p5, agentId: 2,
    description: "A stylish townhouse with clean lines, a rooftop sitting area and easy access to main roads.",
  },
  {
    id: 6, title: "Skyline Penthouse", type: "Apartment", city: "Karachi", area: "DHA Phase 6",
    price: 85000000, beds: 3, baths: 3, sqft: 2600, image: p6, agentId: 3,
    description: "A top floor penthouse with floor-to-ceiling windows and a private terrace.",
  },
  {
    id: 7, title: "Glass Office Building", type: "Commercial", city: "Lahore", area: "Gulberg",
    price: 150000000, beds: 0, baths: 4, sqft: 5000, image: commercial, agentId: 1,
    description: "A modern office building on a main road with parking and open floor plans, ready for a business to move in.",
  },
];