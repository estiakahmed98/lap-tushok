'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Footer, Header, ProductCard } from '@/components/site-shell'
import { products, type ProductCategory } from '@/lib/products'

const filters: Array<'সব' | ProductCategory> = ['সব', 'কাঁথা', 'বেডশিট', 'লেপ', 'তোষক']
function ProductCollection() {
  const requested = useSearchParams().get('category')
  const initial = filters.includes(requested as typeof filters[number]) ? requested as typeof filters[number] : 'সব'
  const [filter, setFilter] = useState(initial)
  const filtered = filter === 'সব' ? products : products.filter((p) => p.category === filter)
  return <><div className="shop-toolbar"><div className="filter-tabs">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="result-count">{filtered.length}টি পণ্য</span></div><section className="shop-grid">{filtered.map((p) => <div id={p.slug} key={p.id}><ProductCard product={p} /></div>)}</section></>
}
export default function ProductsPage() {
  return <><Header /><main className="shop-page"><section className="shop-hero"><p className="eyebrow">ঘরকাব্য কালেকশন</p><h1>আপনার ঘরের<br /><em>আরামের ঠিকানা।</em></h1><p>কাঁথা থেকে তোষক—নকশা, উপকরণ ও স্থায়িত্ব যাচাই করে বাছাই করা প্রতিটি পণ্য।</p></section><Suspense fallback={<p className="loading">পণ্য লোড হচ্ছে…</p>}><ProductCollection /></Suspense><section className="shop-note"><p className="eyebrow">সঠিক পণ্য বেছে নিতে</p><h2>সাইজ নিয়ে<br /><em>দ্বিধায় আছেন?</em></h2><p>আপনার খাটের দৈর্ঘ্য ও প্রস্থ ইঞ্চিতে মেপে আমাদের জানান। আমাদের টিম আপনার জন্য সঠিক সাইজটি বেছে দিতে সাহায্য করবে।</p><a href="tel:+8801700000000" className="text-link">এখনই কথা বলুন <ArrowRight /></a></section></main><Footer /></>
}
