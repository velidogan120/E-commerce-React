# E-commerce React

Modern bir e-commerce frontend projesi. Uygulama React + Vite ile gelistirilmistir ve urun listeleme, urun detayi, sepet, giris/kayit ve siparis akislarini icerir.

## Ozellikler

- React 19 + Vite 8 tabanli hizli gelistirme ortami
- React Router ile coklu sayfa yonetimi
- Redux Toolkit ile global state yonetimi
- TanStack Query ile veri cekme, cache ve senkronizasyon
- Axios tabanli API istemcisi ve token tabanli Authorization header yonetimi
- Sepet verisinin localStorage uzerinden kalici tutulmasi
- Toast bildirimleri (react-toastify)
- Tailwind CSS 4 entegrasyonu

## Kullanilan Teknolojiler

- React
- Vite
- React Router
- Redux Toolkit + React Redux
- TanStack React Query
- Axios
- Tailwind CSS
- React Hook Form
- Lucide React

## Proje Kurulumu

Asagidaki adimlari takip ederek projeyi lokal ortamda calistirabilirsiniz.

### 1. Gereksinimler

- Node.js 20+
- npm 10+

### 2. Bagimliliklari yukle

```bash
npm install
```

### 3. Gelistirme sunucusunu baslat

```bash
npm run dev
```

Varsayilan olarak uygulama su adreste acilir:

```text
http://localhost:5173
```

## Komutlar

- `npm run dev`: Gelistirme sunucusunu baslatir
- `npm run build`: Production build olusturur
- `npm run preview`: Build ciktisini lokal olarak onizler
- `npm run lint`: ESLint calistirir

## Ortam Degiskenleri

Proje, API base URL bilgisi icin `VITE_E_COMMERCE_API` degiskenini destekler.

Kok dizinde `.env` dosyasi olusturup su sekilde kullanabilirsiniz:

```env
VITE_E_COMMERCE_API=https://workintech-fe-ecommerce.onrender.com
```

Not:

- Development ortaminda Vite proxy sayesinde `/api` istekleri hedef API adresine yonlendirilir.
- Production ortaminda `VITE_E_COMMERCE_API` yoksa varsayilan API adresi kullanilir.

## Route Yapisinin Ozeti

Ana route'lar:

- `/`
- `/shop/:gender?/:categoryName?/:categoryId?`
- `/shop/:gender?/:categoryName?/:categoryId?/:productNameSlug/:productId`
- `/about`
- `/price`
- `/team`
- `/contact`
- `/signup`
- `/login`
- `/shopping-cart`
- `/order` (protected)
- `/previous-order` (protected)

## Proje Yapisi

```text
src/
	components/        UI bilesenleri
	pages/             Sayfa bilesenleri
	layout/            Ana layout yapilari
	hooks/             Ozel React hook'lari
	lib/
		api/             Axios API istemcisi
		providers/       App provider kompozisyonu
		router/          Route ve protected route yonetimi
		services/        İstek katmani servisleri (auth, urun, siparis vb.)
		store/           Redux store ve slice'lar
	styles/            Bilesen bazli stil dosyalari
```

## Build ve Deploy

Production build almak icin:

```bash
npm run build
```

Deploy sirasinda SPA route destegi icin `vercel.json` icinde rewrite ayari mevcuttur.

## Katki

Katki saglamak icin:

1. Yeni bir branch acin.
2. Degisikliklerinizi yapin.
3. `npm run lint` ile kodu kontrol edin.
4. Pull request acin.
