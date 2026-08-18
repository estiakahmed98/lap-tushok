import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Headphones,
  RefreshCcw,
  Truck,
} from "lucide-react";
import { Footer, Header, ProductCard } from "@/components/site-shell";
import { products } from "@/lib/products";

const categories = [
  { name: "কাঁথা", count: "২ কালেকশন", image: products[0].image },
  { name: "বেডশিট", count: "২ কালেকশন", image: products[1].image },
  { name: "লেপ", count: "২ কালেকশন", image: products[2].image },
  { name: "তোষক", count: "২ কালেকশন", image: products[3].image },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">দেশীয় বুনন • পরিচিত আরাম</p>
            <h1>
              ঘর হোক
              <br />
              <em>মনের মতো।</em>
            </h1>
            <p className="hero-description">
              নরম কাঁথা, মুগ্ধ করা বেডশিট, উষ্ণ লেপ আর নিশ্চিন্ত ঘুমের
              তোষক—আপনার ঘরের প্রতিটি আরামের জন্য।
            </p>
            <Link href="/products" className="primary-link">
              কালেকশন দেখুন <ArrowRight />
            </Link>
            <div className="hero-note">
              <span>১০০%</span>
              <p>
                বাছাই করা
                <br />
                দেশীয় উপকরণ
              </p>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1500&q=90"
              alt="পরিপাটি ও আরামদায়ক শোবার ঘর"
            />
          </div>
          <a href="#categories" className="hero-scroll">
            <ArrowDown /> নিচে দেখুন
          </a>
        </section>
        <section className="trust-strip" id="delivery">
          <div>
            <Truck />
            <span>
              <strong>সারাদেশে ডেলিভারি</strong> ২–৫ কর্মদিবসে
            </span>
          </div>
          <div>
            <RefreshCcw />
            <span>
              <strong>সহজ এক্সচেঞ্জ</strong> ৭ দিনের মধ্যে
            </span>
          </div>
          <div>
            <Check />
            <span>
              <strong>মান যাচাই করা</strong> প্রতিটি পণ্য
            </span>
          </div>
          <div>
            <Headphones />
            <span>
              <strong>অর্ডার সহায়তা</strong> সকাল ৯টা–রাত ১০টা
            </span>
          </div>
        </section>
        <section className="category-section section-pad" id="categories">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ঘরের প্রয়োজন, এক জায়গায়</p>
              <h2>আপনার আরামটি বেছে নিন</h2>
            </div>
            <p>
              প্রতিদিনের ব্যবহার থেকে উৎসবের উপহার—প্রতিটি পণ্য বাছাই করা হয়
              দীর্ঘদিনের স্বস্তির কথা ভেবে।
            </p>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <Link
                key={item.name}
                href={`/products?category=${item.name}`}
                className="category-card"
              >
                <img src={item.image} alt={item.name} />
                <span className="category-shade" />
                <div>
                  <small>{item.count}</small>
                  <h3>{item.name}</h3>
                  <span>
                    দেখুন <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="featured section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">এই সপ্তাহের পছন্দ</p>
              <h2>Rasel Birds of eden বেস্টসেলার</h2>
            </div>
            <Link href="/products" className="text-link">
              সব পণ্য <ArrowRight />
            </Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
        <section className="story-banner">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1600369672770-985fd30004eb?auto=format&fit=crop&w=1400&q=85"
              alt="দেশীয় কাপড়ের কাজ"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">সুতায় সুতায় আপন গল্প</p>
            <h2>
              ঐতিহ্যের ছোঁয়া,
              <br />
              <em>আজকের ঘরে।</em>
            </h2>
            <p>
              দেশীয় কারিগরের দক্ষতা আর সময়োপযোগী নকশায় আমরা তৈরি করি এমন সব
              পণ্য, যা শুধু ঘর সাজায় না—ঘরকে আপন করে।
            </p>
            <Link href="/about" className="primary-link light">
              আমাদের গল্প <ArrowRight />
            </Link>
          </div>
        </section>
        <section className="quote">
          <p className="eyebrow">Rasel Birds of eden-এর অঙ্গীকার</p>
          <blockquote>
            “ভালো ঘুম, সুন্দর সকাল—
            <br />
            <em>আর সেই গল্প শুরু হোক আপনার ঘর থেকে।”</em>
          </blockquote>
        </section>
      </main>
      <Footer />
    </>
  );
}
