# ঘরকাব্য Product JSON Guide

নতুন পণ্য যোগ করতে `lib/products.json` ফাইলে নিচের object-টি কপি করে array-এর শেষে বসান। আগের object-এর পরে comma দিতে হবে।

```json
{
  "id": "KTH-003",
  "slug": "golap-nakshi-kantha",
  "name": "গোলাপ নকশিকাঁথা",
  "category": "কাঁথা",
  "shortDescription": "হাতে সেলাই করা নরম সুতি নকশিকাঁথা",
  "fullDescription": "পণ্যটি কীভাবে তৈরি, কেন আরামদায়ক, কোন মৌসুম বা ব্যবহারের জন্য উপযোগী এবং বিশেষ সুবিধাগুলো নিয়ে ৩–৪টি পূর্ণ বাক্য লিখুন।",
  "price": 2850,
  "compareAtPrice": 3200,
  "image": "/images/products/golap-nakshi-kantha.jpg",
  "badge": "নতুন",
  "material": "১০০% সুতি কাপড় ও সুতি সুতা",
  "size": "৯০ × ১০৮ ইঞ্চি",
  "colors": ["মেরুন", "সরিষা", "অফ-হোয়াইট"],
  "stock": 8,
  "featured": true
}
```

## কোন তথ্য কীভাবে দেবেন

- `id`: ইউনিক stock code। কাঁথা `KTH`, বেডশিট `BST`, লেপ `LEP`, তোষক `TSK` দিয়ে শুরু করুন।
- `slug`: ইংরেজি ছোট হাতের অক্ষর ও hyphen; একই slug দুইবার নয়।
- `category`: শুধু `কাঁথা`, `বেডশিট`, `লেপ`, অথবা `তোষক` লিখুন।
- `price`: শুধু সংখ্যা; `৳` বা comma দেবেন না।
- `shortDescription`: product card-এর জন্য এক লাইনের সংক্ষিপ্ত তথ্য।
- `fullDescription`: modal-এর জন্য ৩–৪টি পূর্ণ বাক্যে উপকরণ, আরাম, ব্যবহার ও বিশেষত্ব লিখুন।
- `compareAtPrice`: discount না থাকলে এই line-টি বাদ দিন।
- `image`: 4:5 portrait JPG/WebP, অন্তত 1000 × 1250 px। Local image হলে `public/images/products`-এ রাখুন।
- `badge`: প্রয়োজন না হলে line-টি বাদ দিন। ছোট label ব্যবহার করুন—`নতুন`, `বেস্টসেলার`, `সিজনাল`।
- `material`: কাপড়/তুলা/ফোমের সঠিক তথ্য দিন।
- `size`: type, দৈর্ঘ্য, প্রস্থ এবং তোষকের ক্ষেত্রে thickness লিখুন।
- `colors`: পাওয়া যায় এমন সব রঙ array-তে দিন।
- `stock`: বর্তমানে বিক্রিযোগ্য quantity।
- `featured`: homepage-এ গুরুত্ব দিতে `true`; প্রয়োজন না হলে বাদ দিন।

ছবির file name এবং `slug` একই রাখলে পণ্য manage করা সহজ হবে। প্রতিটি ছবিতে একই আলো, background এবং camera angle ব্যবহার করলে shop grid বেশি professional দেখাবে।
