'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CheckCircle2, Menu, PackageCheck, Palette, Phone, Ruler, Search, ShoppingBag, X } from 'lucide-react'
import { formatPrice, type Product } from '@/lib/products'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="announcement">সারাদেশে হোম ডেলিভারি <span>•</span> ১,৫০০ টাকার বেশি অর্ডারে ডেলিভারি ফ্রি</div>
    <div className="nav-wrap">
      <button className="icon-button mobile-menu" aria-label={open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <Link href="/" className="wordmark"><span>ঘর</span>কাব্য<small>আরামে বোনা গল্প</small></Link>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="প্রধান নেভিগেশন">
        <Link href="/products" onClick={() => setOpen(false)}>সব পণ্য</Link><Link href="/products?category=কাঁথা" onClick={() => setOpen(false)}>কাঁথা</Link><Link href="/products?category=বেডশিট" onClick={() => setOpen(false)}>বেডশিট</Link><Link href="/products?category=লেপ" onClick={() => setOpen(false)}>লেপ</Link><Link href="/products?category=তোষক" onClick={() => setOpen(false)}>তোষক</Link><Link href="/about" onClick={() => setOpen(false)}>আমাদের গল্প</Link>
      </nav>
      <div className="nav-actions"><button className="icon-button" aria-label="খুঁজুন"><Search /></button><button className="bag-button" aria-label="শপিং ব্যাগ"><ShoppingBag /><span>০</span></button></div>
    </div>
  </header>
}

export function Footer() {
  return <footer className="footer"><div className="footer-grid"><div><div className="wordmark footer-mark"><span>ঘর</span>কাব্য<small>আরামে বোনা গল্প</small></div><p className="footer-copy"><span>বাংলার ঘরের জন্য যত্নে তৈরি আরামের আয়োজন—</span><span>কাঁথা, বেডশিট, লেপ ও তোষকে নিশ্চিন্ত ঘুমের সঙ্গী।</span></p></div><div><p className="eyebrow">দ্রুত লিংক</p><Link href="/products">সব পণ্য</Link><Link href="/about">আমাদের গল্প</Link><Link href="#delivery">ডেলিভারি ও রিটার্ন</Link></div><div><p className="eyebrow">অর্ডার করতে কল করুন</p><a className="footer-phone" href="tel:+8801700000000"><Phone /> ০১৭০০–০০০০০০</a><p>প্রতিদিন সকাল ৯টা – রাত ১০টা<br />ঢাকা, বাংলাদেশ</p></div></div><div className="footer-bottom"><span>© ২০২৬ ঘরকাব্য</span><span>দেশীয় কারিগর ও উপকরণে তৈরি</span></div></footer>
}

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', closeOnEscape) }
  }, [open])

  return <article className="product-card">
    <button type="button" className="product-image" onClick={() => setOpen(true)} aria-label={`${product.name} বিস্তারিত দেখুন`}>{product.badge && <span className="product-badge">{product.badge}</span>}<img src={product.image} alt={product.name} loading="lazy" /><span className="quick-add">বিস্তারিত দেখুন <span>→</span></span></button>
    <div className="product-meta"><div><p>{product.category} • {product.material}</p><button type="button" className="product-name" onClick={() => setOpen(true)}>{product.name}</button><small>{product.size}</small></div><div className="price-wrap"><strong>{formatPrice(product.price)}</strong>{product.compareAtPrice && <del>{formatPrice(product.compareAtPrice)}</del>}</div></div>
    {open && <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby={`modal-${product.id}`} onMouseDown={() => setOpen(false)}>
      <div className="modal-panel" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={() => setOpen(false)} aria-label="বন্ধ করুন"><X /></button>
        <div className="modal-image"><img src={product.image} alt={product.name} />{product.badge && <span className="product-badge">{product.badge}</span>}</div>
        <div className="modal-content"><p className="eyebrow">{product.category} • {product.id}</p><h2 id={`modal-${product.id}`}>{product.name}</h2><p className="modal-short">{product.shortDescription}</p><div className="modal-price"><strong>{formatPrice(product.price)}</strong>{product.compareAtPrice && <del>{formatPrice(product.compareAtPrice)}</del>}</div><p className="modal-description">{product.fullDescription}</p>
          <div className="product-details"><div><PackageCheck /><span><small>উপকরণ</small><strong>{product.material}</strong></span></div><div><Ruler /><span><small>মাপ</small><strong>{product.size}</strong></span></div><div><Palette /><span><small>পাওয়া যাবে</small><strong>{product.colors.join(' • ')}</strong></span></div><div><CheckCircle2 /><span><small>স্টক</small><strong>{product.stock > 0 ? `${product.stock}টি পণ্য প্রস্তুত আছে` : 'স্টক শেষ'}</strong></span></div></div>
          <a href="tel:+8801700000000" className="modal-order"><Phone /> অর্ডার করতে কল করুন <span>০১৭০০–০০০০০০</span></a><p className="modal-help">সাইজ বা রঙ নিশ্চিত করতে অর্ডারের আগে আমাদের সঙ্গে কথা বলুন।</p>
        </div>
      </div>
    </div>}
  </article>
}
