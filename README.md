# RingX — Smart Wearable Air Mouse

A modern, lightweight, and responsive website built using **React + TypeScript + Vite + TailwindCSS** for showcasing the RingMouse product — a wearable finger-based air mouse designed for portability, comfort, and gesture-based control.

## 🚀 Features

* ⚡ **Modern, fast Vite setup**
* 🎨 **TailwindCSS** for clean, responsive UI
* 🟦 **TypeScript** for type-safe development
* 📱 **100% responsive design** (mobile-first)
* ✨ Smooth fade-in animations using **IntersectionObserver**
* 🧩 Component-based layout (Home, Features, Specs, Pricing, FAQ, etc.)
* 💡 Light theme with premium, minimal Apple-like aesthetics

## 🏗 Tech Stack

* **React** (Vite + TS)
* **TailwindCSS**
* **TypeScript**
* **Minimal JS animations**
* **CSS utility-first styling**

## 📂 Project Structure

```
src/
 ├── components/       # Reusable UI components
 ├── sections/         # Homepage sections (Hero, Features, Specs, Pricing...)
 ├── assets/           # Images, icons, renders
 ├── hooks/            # Custom hooks (e.g., useFadeIn)
 ├── pages/            # Voice to text Summarizer Page
 ├── App.tsx           # Main page structure
 ├── main.tsx          # Entry point
 └── index.css         # Tailwind base styles
```

## 🛠 Installation & Setup

```
git clone <your-repo-url>
cd ringmouse
npm install
npm run dev
```

## 🌐 Live Demo

<a href="https://ringmouse.vercel.app/">Live Website Link</a>

## 🧩 Core Sections

* **Hero** — Product highlight, image + CTA
* **Features** — Gesture control, portability, Bluetooth, battery
* **Use Cases** — Travel, presentations, students, gamers
* **Technical Specs** — Sensors, Bluetooth 5.3, battery, materials
* **FAQ** — Common questions
* **Footer** — Social links + contact

## 🎨 Design Guidelines

* Light theme (`#F9FAFB` background)
* Dark text (`#1B1C1E`)
* Blue accent (`#0A84FF`)
* Font: **Inter**
* Clean spacing, minimal UI, premium feel

## 🔧 Animations

The fade-in animation is implemented using:

* `IntersectionObserver`
* CSS opacity + translate transitions

## 📦 Production Build

```
npm run build
```

The build output will be in the `dist/` folder.

## 🙌 Contributors

* **Sankalp M Tellur**
* Team Members of **Golu Gang** (optional to list)

## 📄 License

Add a license if you want (MIT recommended).

---