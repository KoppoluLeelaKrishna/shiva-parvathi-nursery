"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Star,
  Leaf,
  Phone,
  MapPin,
  ExternalLink,
  MessageCircle,
  Truck,
  ShieldCheck,
  Trees,
  Sprout,
  User,
  Package,
  ClipboardList,
  Trash2,
  CheckCircle2,
  Store,
  ImageIcon,
  CircleHelp,
  X,
  Eye,
  Globe,
  Building2,
  Shield,
  CalendarDays,
  BadgeIndianRupee,
  Clock3,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Product = {
  id: number;
  name: {
    en: string;
    kn: string;
    te: string;
  };
  category: string;
  price: number;
  oldPrice?: number;
  size: string;
  stock: string;
  rating: number;
  image: string;
  description: string;
  featured?: boolean;
};

type CartItem = {
  id: number;
  name: string;
  qty: number;
  price: number;
};

const nurseryName = "Shiva Parvathi Nursery";
const ownerName = "Koppolu Ramana";
const phoneNumber = "+919989149977";
const whatsappNumber = "919989149977";
const mapsLink = "https://maps.app.goo.gl/mFTcxUavfxQipUjj7?g_st=ic";
const address =
  "Sri Nanjundeshwara Industries Bangalore main road, Urdigere, Hanumanthapura, Cross, Koratagere, Karnataka 572129, India";

const domainUrl = "https://shiva-parvathi-nursery.vercel.app";
const googleBusinessProfileUrl = mapsLink;

const businessHours = [
  { day: "Monday", time: "8:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 6:00 PM" },
  { day: "Thursday", time: "8:00 AM - 6:00 PM" },
  { day: "Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "8:00 AM - 6:00 PM" },
  { day: "Sunday", time: "Contact before visit" },
];

const products: Product[] = [
  {
    id: 1,
    name: { en: "Neem Tree", kn: "ಬೇವು ಮರ", te: "వేప చెట్టు" },
    category: "Native Trees",
    price: 149,
    oldPrice: 199,
    size: "3 ft",
    stock: "In Stock",
    rating: 4.8,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    description:
      "Healthy neem sapling ideal for homes, roadsides, and farms. Suitable for long-term shade and medicinal value.",
  },
  {
    id: 2,
    name: { en: "Mango Tree", kn: "ಮಾವಿನ ಮರ", te: "మామిడి చెట్టు" },
    category: "Fruit Trees",
    price: 299,
    oldPrice: 349,
    size: "4 ft",
    stock: "In Stock",
    rating: 4.9,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=1200&q=80",
    description:
      "Fruit-bearing mango plant suitable for gardens and orchards. A strong choice for home and farm plantations.",
  },
  {
    id: 3,
    name: { en: "Guava Tree", kn: "ಸೀಬೆ ಮರ", te: "జామ చెట్టు" },
    category: "Fruit Trees",
    price: 219,
    oldPrice: 259,
    size: "3.5 ft",
    stock: "In Stock",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=1200&q=80",
    description:
      "Compact guava plant perfect for home gardens and small farms with reliable fruit growth.",
  },
  {
    id: 4,
    name: { en: "Ashoka Tree", kn: "ಅಶೋಕ ಮರ", te: "అశోక చెట్టు" },
    category: "Decorative Trees",
    price: 199,
    oldPrice: 249,
    size: "5 ft",
    stock: "In Stock",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant decorative tree for boundaries, villas, layouts, and gardens.",
  },
  {
    id: 5,
    name: { en: "Coconut Tree", kn: "ತೆಂಗಿನ ಮರ", te: "కొబ్బరి చెట్టు" },
    category: "Fruit Trees",
    price: 399,
    oldPrice: 450,
    size: "5 ft",
    stock: "Low Stock",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
    description:
      "Strong coconut sapling for farms, resorts, and large spaces, ideal for long-term value planting.",
  },
  {
    id: 6,
    name: { en: "Banyan Tree", kn: "ಆಲದ ಮರ", te: "మర్రి చెట్టు" },
    category: "Native Trees",
    price: 349,
    oldPrice: 420,
    size: "4 ft",
    stock: "Pre-Book",
    rating: 4.9,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Traditional banyan tree for temples, campuses, parks, and open lands.",
  },
  {
    id: 7,
    name: { en: "Jamun Tree", kn: "ನೇರಳೆ ಮರ", te: "నేరేడు చెట్టు" },
    category: "Fruit Trees",
    price: 259,
    oldPrice: 299,
    size: "4 ft",
    stock: "In Stock",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
    description:
      "Healthy jamun plant suited for homes, farms, and avenue planting with seasonal fruit benefits.",
  },
  {
    id: 8,
    name: { en: "Sapota Tree", kn: "ಚಿಕ್ಕು ಮರ", te: "సపోటా చెట్టు" },
    category: "Fruit Trees",
    price: 279,
    oldPrice: 330,
    size: "4 ft",
    stock: "In Stock",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    description: "Sweet sapota plant for backyard fruit gardens and nurseries.",
  },
  {
    id: 9,
    name: { en: "Tamarind Tree", kn: "ಹುಣಸೆ ಮರ", te: "చింత చెట్టు" },
    category: "Native Trees",
    price: 239,
    oldPrice: 290,
    size: "4 ft",
    stock: "In Stock",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Strong tamarind sapling for farms, roadsides, and native planting with long lifespan and shade value.",
  },
  {
    id: 10,
    name: { en: "Jackfruit Tree", kn: "ಹಲಸಿನ ಮರ", te: "పనస చెట్టు" },
    category: "Fruit Trees",
    price: 329,
    oldPrice: 390,
    size: "4 ft",
    stock: "In Stock",
    rating: 4.8,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    description:
      "Healthy jackfruit plant suitable for home gardens and farms with strong tropical fruit demand.",
  },
];

const categories = ["All", "Fruit Trees", "Native Trees", "Decorative Trees"];

const galleryImages = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
  "/gallery/9.jpeg",
  "/gallery/10.jpeg",
  "/gallery/11.jpeg",
  "/gallery/12.jpeg",
  "/gallery/13.jpeg",
  "/gallery/14.jpeg",
  "/gallery/15.jpeg",
  "/gallery/16.jpeg",
  "/gallery/17.jpeg",
  "/gallery/18.jpeg",
];

const reviews = [
  {
    name: "Ramesh",
    text: "Good quality plants and easy WhatsApp ordering. Very useful for farm plantation.",
  },
  {
    name: "Sowjanya",
    text: "The tree selection is good and the nursery team responds quickly for booking.",
  },
  {
    name: "Mahesh",
    text: "Bulk order support was helpful for our land development and avenue plantation work.",
  },
];

const faqs = [
  {
    q: "Do you supply trees in bulk?",
    a: "Yes. We support bulk orders for farms, schools, resorts, layouts, roadside planting, and landscaping projects.",
  },
  {
    q: "Can I order through WhatsApp?",
    a: "Yes. Customers can directly send their cart or booking request through WhatsApp.",
  },
  {
    q: "Do you have fruit trees and native trees?",
    a: "Yes. We provide fruit trees, native trees, and decorative trees based on availability.",
  },
  {
    q: "Can I visit the nursery directly?",
    a: "Yes. You can use the Google Maps link on the website and contact us before visiting.",
  },
];

function rupee(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export default function Page() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [qtyInputs, setQtyInputs] = useState<Record<number, string>>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    location: "",
    treeType: "",
    quantity: "",
    notes: "",
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = search.toLowerCase();
      const matchesSearch =
        p.name.en.toLowerCase().includes(q) ||
        p.name.kn.toLowerCase().includes(q) ||
        p.name.te.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);

      return (category === "All" || p.category === category) && matchesSearch;
    });
  }, [search, category]);

  const featuredProducts = products.filter((p) => p.featured);

  useEffect(() => {
    if (galleryImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        const updated = prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
        const changed = updated.find((item) => item.id === product.id);
        setQtyInputs((prevInputs) => ({
          ...prevInputs,
          [product.id]: String(changed?.qty ?? 1),
        }));
        return updated;
      }

      setQtyInputs((prevInputs) => ({
        ...prevInputs,
        [product.id]: "1",
      }));

      return [
        ...prev,
        { id: product.id, name: product.name.en, qty: 1, price: product.price },
      ];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setQtyInputs((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
    setQtyInputs({});
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const updateQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) => {
      const updated = prev
        .map((item) => {
          if (item.id !== id) return item;
          const qty = type === "inc" ? item.qty + 1 : item.qty - 1;
          return { ...item, qty };
        })
        .filter((item) => item.qty > 0);

      const changedItem = updated.find((item) => item.id === id);
      setQtyInputs((prevInputs) => ({
        ...prevInputs,
        [id]: changedItem ? String(changedItem.qty) : "1",
      }));
      return updated;
    });
  };

  const setQtyDirect = (id: number, value: string) => {
    setQtyInputs((prev) => ({ ...prev, [id]: value }));
    if (value === "") return;
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return;
    const finalQty = Math.max(1, Math.floor(numeric));
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: finalQty } : item))
    );
  };

  const commitQtyInput = (id: number) => {
    const raw = qtyInputs[id];
    if (raw === undefined) return;

    const numeric = Number(raw);
    const finalQty =
      raw === "" || Number.isNaN(numeric) ? 1 : Math.max(1, Math.floor(numeric));

    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: finalQty } : item))
    );

    setQtyInputs((prev) => ({
      ...prev,
      [id]: String(finalQty),
    }));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  const whatsappCartMessage = encodeURIComponent(
    `Hello, I want to order from ${nurseryName}.\n\nItems:\n${
      cart.length
        ? cart
            .map(
              (item) =>
                `- ${item.name} x ${item.qty} = ${rupee(item.price * item.qty)}`
            )
            .join("\n")
        : "No items yet"
    }\n\nTotal: ${rupee(totalPrice)}`
  );

  const whatsappBookingMessage = encodeURIComponent(
    `Hello ${ownerName}, I want to book trees from ${nurseryName}.\n\nName: ${booking.name}\nPhone: ${booking.phone}\nLocation: ${booking.location}\nTree Type: ${booking.treeType}\nQuantity: ${booking.quantity}\nNotes: ${booking.notes}`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GardenStore",
    name: nurseryName,
    telephone: phoneNumber,
    url: domainUrl,
    sameAs: [mapsLink],
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#f6f8f3] text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-green-600 p-3 text-white shadow">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{nurseryName}</h1>
                <p className="text-sm text-slate-500">
                  Trees • Plants • Bulk Orders • Nursery Services
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              <a href="#shop" className="text-sm font-medium hover:text-green-700">
                Shop
              </a>
              <a href="#about" className="text-sm font-medium hover:text-green-700">
                About
              </a>
              <a href="#gallery" className="text-sm font-medium hover:text-green-700">
                Gallery
              </a>
              <a href="#services" className="text-sm font-medium hover:text-green-700">
                Services
              </a>
              <a href="#booking" className="text-sm font-medium hover:text-green-700">
                Booking
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-green-700">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-2xl border border-green-200 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50 md:inline-flex"
              >
                WhatsApp
              </a>
              <div className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-2">
                <ShoppingCart className="h-5 w-5" />
                <span>{totalItems} items</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Official Nursery Website
            </p>
            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Healthy Trees, Fruit Plants, and Bulk Orders from Shiva Parvathi
              Nursery
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Order healthy trees, book bulk plantation requirements, and contact{" "}
              {ownerName} directly through call or WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
              >
                Shop Now
              </a>
              <a
                href="#booking"
                className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold hover:bg-white"
              >
                Bulk Booking
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-green-300 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
              >
                WhatsApp Inquiry
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <Trees className="mb-3 h-6 w-6 text-green-700" />
                <p className="text-2xl font-bold">{products.length}+</p>
                <p className="text-sm text-slate-500">Tree Varieties</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <Truck className="mb-3 h-6 w-6 text-green-700" />
                <p className="text-2xl font-bold">Bulk</p>
                <p className="text-sm text-slate-500">Order Support</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <Globe className="mb-3 h-6 w-6 text-green-700" />
                <p className="text-2xl font-bold">India +</p>
                <p className="text-sm text-slate-500">Global Access</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
            <img
              src={galleryImages[0]}
              alt="Nursery hero"
              className="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <Camera className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Healthy Plants</p>
              <p className="font-semibold">
                Quality nursery plants for home gardens, farms, and landscaping.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <Truck className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Bulk Orders</p>
              <p className="font-semibold">
                Bulk tree supply available for farms, schools, layouts, and plantations.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <Sprout className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Fruit Trees</p>
              <p className="font-semibold">
                Mango, Guava, Sapota, Coconut, Jamun, Jackfruit, and more.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <Trees className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Native Trees</p>
              <p className="font-semibold">
                Neem, Banyan, Tamarind, Ashoka, and other traditional trees.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <Phone className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Phone</p>
              <a href={`tel:${phoneNumber}`} className="font-semibold hover:text-green-700">
                {phoneNumber}
              </a>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <User className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Owner</p>
              <p className="font-semibold">{ownerName}</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <MapPin className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Location</p>
              <p className="line-clamp-2 font-semibold">{address}</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <ExternalLink className="mb-2 h-5 w-5 text-green-700" />
              <p className="text-sm text-slate-500">Google Maps</p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-700 hover:underline"
              >
                Open Location
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <Store className="h-6 w-6 text-green-700" />
                <h3 className="text-3xl font-bold">About Us</h3>
              </div>
              <p className="leading-8 text-slate-600">
                {nurseryName} is committed to providing healthy trees, fruit plants,
                native trees, and decorative plants for homes, farms, layouts,
                temples, schools, resorts, and plantation projects. We focus on
                quality plants, reliable customer support, and easy ordering through
                call and WhatsApp.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-700" />
                  <p className="text-slate-600">Healthy nursery plants for retail and bulk buyers.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-700" />
                  <p className="text-slate-600">Support for farm plantation and landscaping needs.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-700" />
                  <p className="text-slate-600">Easy customer contact through direct phone and WhatsApp.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-green-900 p-8 text-white shadow-md">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-green-300" />
                <h3 className="text-3xl font-bold">Business Highlights</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">Business Name</p>
                  <p className="mt-2 text-lg font-bold">{nurseryName}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">Owner</p>
                  <p className="mt-2 text-lg font-bold">{ownerName}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">Products</p>
                  <p className="mt-2 text-lg font-bold">{products.length}+ varieties</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-green-100">Order Type</p>
                  <p className="mt-2 text-lg font-bold">Retail + Bulk</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-6">
            <h3 className="text-3xl font-bold">Services & Support</h3>
            <p className="text-slate-500">
              Reliable nursery support for individuals, farms, and institutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <Sprout className="mb-3 h-6 w-6 text-green-700" />
              <h4 className="text-xl font-bold">Healthy Plants</h4>
              <p className="mt-2 text-slate-600">
                Carefully maintained saplings suitable for home gardens, farms, and landscaping needs.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <Truck className="mb-3 h-6 w-6 text-green-700" />
              <h4 className="text-xl font-bold">Bulk Order Support</h4>
              <p className="mt-2 text-slate-600">
                Suitable for avenue plantation, schools, resorts, farmhouses, and large nursery supply.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <Building2 className="mb-3 h-6 w-6 text-green-700" />
              <h4 className="text-xl font-bold">Landscape & Institutional Supply</h4>
              <p className="mt-2 text-slate-600">
                Helpful for layouts, temples, schools, offices, and commercial green projects.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <Clock3 className="mb-3 h-6 w-6 text-green-700" />
              <h4 className="text-xl font-bold">Business Hours</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <Globe className="mb-3 h-6 w-6 text-green-700" />
              <h4 className="text-xl font-bold">Official Website</h4>
              <p className="mt-2 text-slate-600">
                Your nursery website is now live and globally accessible online.
              </p>
              <a
                href={domainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block break-all text-sm font-semibold text-green-700 hover:underline"
              >
                {domainUrl}
              </a>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <Store className="mb-3 h-6 w-6 text-green-700" />
              <h4 className="text-xl font-bold">Google Business</h4>
              <p className="mt-2 text-slate-600">
                Customers can also find photos, location, and reviews on Google Maps.
              </p>
              <a
                href={googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-green-700 hover:underline"
              >
                Open Google Maps Profile
              </a>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <BadgeIndianRupee className="mb-3 h-6 w-6 text-green-700" />
              <h4 className="text-xl font-bold">India + Global Reach</h4>
              <p className="mt-2 text-slate-600">
                Main customer focus can be India, while the website stays globally accessible.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <ImageIcon className="h-6 w-6 text-green-700" />
            <div>
              <h3 className="text-3xl font-bold">Nursery Gallery</h3>
              <p className="text-slate-500">
                Explore real nursery photos, healthy plants, and plantation stock from Shiva Parvathi Nursery.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-md">
            <div className="relative">
              <img
                src={galleryImages[currentSlide]}
                alt={`Nursery Gallery ${currentSlide + 1}`}
                className="h-[260px] w-full rounded-[1.5rem] object-cover sm:h-[380px] lg:h-[520px]"
              />

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5 text-slate-800" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow hover:bg-white"
              >
                <ChevronRight className="h-5 w-5 text-slate-800" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    currentSlide === index ? "bg-green-600" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    currentSlide === index
                      ? "border-green-600"
                      : "border-transparent hover:border-green-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
              >
                View More on Google Maps
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-green-300 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-6">
            <h3 className="text-3xl font-bold">Featured Trees</h3>
            <p className="text-slate-500">
              Top picks for homes, farms, and landscapes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name.en}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-sm font-medium text-green-700">{product.category}</p>
                  <h4 className="mt-1 text-xl font-bold">{product.name.en}</h4>
                  <p className="mt-1 text-sm text-slate-600">{product.name.kn}</p>
                  <p className="text-sm text-slate-600">{product.name.te}</p>

                  <p className="mt-3 text-sm text-slate-600">{product.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">{rupee(product.price)}</p>
                      {product.oldPrice && (
                        <p className="text-sm text-slate-400 line-through">
                          {rupee(product.oldPrice)}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="rounded-2xl border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-50"
                      >
                        View
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="rounded-2xl bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="sticky top-[72px] z-30 mb-6 rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="text-3xl font-bold">Shop Trees</h3>
                <p className="text-slate-500">
                  English main name, with Kannada and Telugu below each tree.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search tree in English / Kannada / Telugu..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none sm:w-80"
                  />
                </div>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none"
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                <Store className="h-4 w-4" />
                Total Products: {filteredProducts.length}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                <ShoppingCart className="h-4 w-4" />
                Cart Items: {totalItems}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name.en}
                    className="h-64 w-full object-cover"
                  />
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute right-4 top-4 rounded-full bg-white p-3 shadow"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        wishlist.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-slate-500"
                      }`}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-sm font-medium text-green-700">{product.category}</p>
                  <h4 className="mt-1 text-xl font-bold">{product.name.en}</h4>
                  <p className="mt-1 text-sm font-medium text-slate-700">{product.name.kn}</p>
                  <p className="text-sm font-medium text-slate-700">{product.name.te}</p>

                  <div className="mt-2 flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm">{product.rating}</span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      {product.stock}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      Size: {product.size}
                    </span>
                  </div>

                  <div className="mt-4 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-2xl font-bold">{rupee(product.price)}</p>
                      {product.oldPrice && (
                        <p className="text-sm text-slate-400 line-through">
                          {rupee(product.oldPrice)}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="rounded-2xl border border-slate-300 px-3 py-2 font-semibold hover:bg-slate-50"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="rounded-2xl bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="booking" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-md">
              <div className="mb-5 flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-green-700" />
                <h3 className="text-3xl font-bold">Bulk Booking Form</h3>
              </div>

              <p className="mb-6 text-slate-600">
                For farms, schools, layouts, resorts, temples, roadside planting,
                and wholesale nursery requirements.
              </p>

              <div className="grid gap-4">
                <input
                  value={booking.name}
                  onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                  placeholder="Your Name"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                />
                <input
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  placeholder="Phone Number"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                />
                <input
                  value={booking.location}
                  onChange={(e) => setBooking({ ...booking, location: e.target.value })}
                  placeholder="Your Location"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                />
                <input
                  value={booking.treeType}
                  onChange={(e) => setBooking({ ...booking, treeType: e.target.value })}
                  placeholder="Tree Type Needed"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                />
                <input
                  value={booking.quantity}
                  onChange={(e) => setBooking({ ...booking, quantity: e.target.value })}
                  placeholder="Quantity"
                  className="rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                />
                <textarea
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  placeholder="Extra Notes"
                  className="min-h-[120px] rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                />

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappBookingMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Submit on WhatsApp
                  </a>

                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-green-900 p-8 text-white shadow-md">
              <div className="mb-5 flex items-center gap-3">
                <Package className="h-6 w-6 text-green-300" />
                <h3 className="text-3xl font-bold">Cart & Quick Order</h3>
              </div>

              <div className="space-y-3">
                {cart.length === 0 ? (
                  <p className="rounded-2xl bg-white/10 p-4 text-green-100">
                    No items added yet.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="rounded-2xl bg-white/10 p-4">
                      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                        <div className="min-w-0">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-green-100">
                            {rupee(item.price)} each • Qty: {item.qty} • Subtotal:{" "}
                            {rupee(item.price * item.qty)}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, "dec")}
                            className="rounded-xl bg-white/20 px-3 py-2 text-lg font-bold"
                          >
                            -
                          </button>

                          <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={qtyInputs[item.id] ?? String(item.qty)}
                            onChange={(e) =>
                              setQtyDirect(item.id, e.target.value.replace(/[^0-9]/g, ""))
                            }
                            onBlur={() => commitQtyInput(item.id)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                commitQtyInput(item.id);
                                (e.target as HTMLInputElement).blur();
                              }
                            }}
                            className="w-24 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-center text-white outline-none"
                          />

                          <button
                            onClick={() => updateQty(item.id, "inc")}
                            className="rounded-xl bg-white/20 px-3 py-2 text-lg font-bold"
                          >
                            +
                          </button>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="inline-flex items-center gap-2 rounded-xl bg-red-500/20 px-3 py-2 text-sm font-semibold text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-4">
                <div className="flex items-center justify-between">
                  <span>Total Items</span>
                  <span className="font-semibold">{totalItems}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span>Total Price</span>
                  <span className="text-xl font-bold">{rupee(totalPrice)}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappCartMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-green-900 hover:bg-green-50"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  Call for Order
                </a>

                <button
                  onClick={clearCart}
                  className="rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="rounded-[2rem] bg-green-600 px-8 py-10 text-white shadow-lg">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-3xl font-bold">Need bulk trees for your project?</h3>
                <p className="mt-3 text-green-50">
                  Contact Shiva Parvathi Nursery for farm supply, layout plantation,
                  schools, resorts, roadside planting, and custom bulk orders.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={`tel:${phoneNumber}`}
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-6">
            <h3 className="text-3xl font-bold">Customer Reviews</h3>
            <p className="text-slate-500">Simple review section for your business website.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[1.75rem] bg-white p-6 shadow-sm">
                <div className="mb-3 flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600">“{review.text}”</p>
                <p className="mt-4 font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <CircleHelp className="h-6 w-6 text-green-700" />
            <div>
              <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
              <p className="text-slate-500">Common questions customers may ask before ordering.</p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <h4 className="text-lg font-bold">{faq.q}</h4>
                <p className="mt-2 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-green-600 p-3 text-white">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{nurseryName}</h4>
                    <p className="text-sm text-slate-500">Karnataka Nursery Business</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-600">
                  Professional tree shopping website for retail, booking, and bulk orders.
                </p>
              </div>

              <div>
                <h5 className="font-bold">Owner</h5>
                <p className="mt-3 text-slate-600">{ownerName}</p>
                <a href={`tel:${phoneNumber}`} className="mt-2 block text-green-700 hover:underline">
                  {phoneNumber}
                </a>
              </div>

              <div>
                <h5 className="font-bold">Address</h5>
                <p className="mt-3 text-slate-600">{address}</p>
              </div>

              <div>
                <h5 className="font-bold">Quick Links</h5>
                <div className="mt-3 space-y-2">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-700 hover:underline"
                  >
                    Open Google Maps
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-green-700 hover:underline"
                  >
                    WhatsApp Inquiry
                  </a>
                  <a href="#gallery" className="block text-green-700 hover:underline">
                    Nursery Gallery
                  </a>
                  <a href="#booking" className="block text-green-700 hover:underline">
                    Bulk Booking
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>© 2026 {nurseryName}. All rights reserved.</p>
              <p>Official nursery website for India-focused and global customer access.</p>
            </div>
          </div>
        </footer>
      </main>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 hover:bg-slate-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-8 md:grid-cols-2">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name.en}
                className="h-full min-h-[320px] w-full rounded-[1.5rem] object-cover"
              />

              <div>
                <p className="text-sm font-medium text-green-700">{selectedProduct.category}</p>
                <h3 className="mt-2 text-3xl font-bold">{selectedProduct.name.en}</h3>
                <p className="mt-2 text-lg text-slate-600">{selectedProduct.name.kn}</p>
                <p className="text-lg text-slate-600">{selectedProduct.name.te}</p>

                <div className="mt-4 flex items-center gap-1 text-amber-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-medium">{selectedProduct.rating}</span>
                </div>

                <p className="mt-4 leading-7 text-slate-600">{selectedProduct.description}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Price</p>
                    <p className="text-2xl font-bold">{rupee(selectedProduct.price)}</p>
                    {selectedProduct.oldPrice && (
                      <p className="text-sm text-slate-400 line-through">
                        {rupee(selectedProduct.oldPrice)}
                      </p>
                    )}
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Size</p>
                    <p className="text-2xl font-bold">{selectedProduct.size}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Stock</p>
                    <p className="text-lg font-bold">{selectedProduct.stock}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Best For</p>
                    <p className="text-lg font-bold">Home / Farm / Landscape</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-green-100 bg-green-50 p-4">
                  <p className="font-semibold text-green-800">Plant Care Note</p>
                  <p className="mt-2 text-sm leading-6 text-green-900">
                    Water regularly after planting, provide sunlight based on plant type,
                    and contact the nursery for bulk-order guidance and planting support.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={() => addToCart(selectedProduct)}
                    className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                  >
                    Add to Cart
                  </button>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-green-300 px-6 py-3 font-semibold text-green-700 hover:bg-green-50"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}