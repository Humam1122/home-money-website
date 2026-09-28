# Home Money — Official Marketing & Download Website

The official product landing and APK download website for **Home Money**, a calm, private local-first personal finance and expense manager for Android.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS v4 (Custom paper-like theme matching the mobile app: `#0F5F55`, `#F4F6F7`, `#101A1E`)
- **Icons**: Lucide React
- **Deployment Target**: Vercel

---

## 📁 Project Structure

```
home-money-website/
├── public/
│   ├── brand/
│   │   ├── app-icon.png               # Official brand app icon
│   │   └── adaptive-icon.png          # Android adaptive foreground icon
│   ├── downloads/
│   │   └── Home-Money-v1.0.0.apk      # Standalone release APK for download
│   └── screenshots/
│       ├── README.md                  # Screenshot specifications & guidelines
│       ├── 01-dashboard.png           # (Optional) Real device screenshot
│       ├── 02-add-expense.png         # (Optional) Real device screenshot
│       ├── 03-multi-item.png          # (Optional) Real device screenshot
│       ├── 04-analytics.png           # (Optional) Real device screenshot
│       ├── 05-bills.png               # (Optional) Real device screenshot
│       ├── 06-budgets.png             # (Optional) Real device screenshot
│       └── 07-pdf-report.png          # (Optional) Real device screenshot
├── src/
│   ├── app/
│   │   ├── globals.css                # Tailwind CSS v4 tokens & typography
│   │   ├── icon.png                   # Dynamic site icon / favicon
│   │   ├── layout.tsx                 # SEO meta tags, OpenGraph, font setup
│   │   ├── page.tsx                   # Main landing page
│   │   ├── robots.ts                  # robots.txt handler
│   │   └── sitemap.ts                 # sitemap.xml generator
│   ├── components/
│   │   ├── Navbar.tsx                 # Responsive header with mobile drawer
│   │   ├── Hero.tsx                   # Value proposition, download CTA, device frame
│   │   ├── PhoneFrame.tsx             # Modern Android smartphone mockup frame
│   │   ├── AppScreenMockups.tsx       # Pixel-accurate fallback screen previews
│   │   ├── AppScreenshots.tsx         # Interactive 7-screen feature tour
│   │   ├── Features.tsx               # 8 core features grid
│   │   ├── HowItWorks.tsx             # 3-step workflow
│   │   ├── AnalyticsSection.tsx       # 5 on-device calculation metrics
│   │   ├── PrivacySection.tsx         # Transparent local-first SQLite explanation
│   │   ├── DownloadSection.tsx        # Direct APK download & Android install guide
│   │   ├── SupportDeveloper.tsx       # Optional developer contribution tiers
│   │   ├── FAQSection.tsx             # Accordion FAQ
│   │   └── Footer.tsx                 # Branding, links, license, and credits
│   └── config/
│       └── release.ts                 # Single source of truth for APK versioning
├── package.json
└── tsconfig.json
```

---

## 🚀 Running Locally

### 1. Install Dependencies
```bash
cd home-money-website
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test
```bash
npm run build
npm run start
```

---

## 📦 How to Distribute APKs via GitHub Releases

Because the standalone Android APK is > 100 MB, it is distributed via **GitHub Releases** rather than tracked inside the Git repository itself:

1. **Build or obtain the new APK**:
   `Home-Money-vX.Y.Z.apk`
2. **Create a GitHub Release**:
   - Go to: `https://github.com/Humam1122/home-money-website/releases/new`
   - Set tag to: `v1.0.0` (or your new version tag)
   - Title: `Home Money v1.0.0`
   - Upload the APK file (`Home-Money-v1.0.0.apk`) as the binary release asset.
   - Click **Publish release**.
3. **Update the config** in `src/config/release.ts`:
   ```typescript
   export const CURRENT_RELEASE: AppRelease = {
     version: 'v1.0.1',
     versionCode: 2,
     releaseDate: 'October 2026',
     apkFileName: 'Home-Money-v1.0.1.apk',
     apkFileSize: '102.5 MB',
     apkDownloadPath:
       'https://github.com/Humam1122/home-money-website/releases/download/v1.0.1/Home-Money-v1.0.1.apk',
     githubReleaseUrl:
       'https://github.com/Humam1122/home-money-website/releases/tag/v1.0.1',
     // ...
   };
   ```
4. Commit and push the website repository. All download buttons, direct links, and version badges update automatically.

---

## 📱 How to Add Real Device Screenshots

The website includes pixel-accurate fallback screen representations matching the exact mobile app design tokens (`#0F5F55`, `#F4F6F7`, `#FFFFFF`).

To display your real device screenshots instead:
1. Capture screenshots on your Android phone (portrait orientation, e.g. 1080x2400).
2. Save them into `home-money-website/public/screenshots/` with these filenames:
   - `01-dashboard.png`
   - `02-add-expense.png`
   - `03-multi-item.png`
   - `04-analytics.png`
   - `05-bills.png`
   - `06-budgets.png`
   - `07-pdf-report.png`
3. The phone frames on the website will automatically load and display your real images!

---

## 🌐 Deploying to Vercel

### Option A: Using the Vercel CLI
```bash
cd home-money-website
npx vercel
```
Follow the interactive prompts to link your project and deploy.

### Option B: Deploying via GitHub
1. Initialize a Git repository inside `home-money-website`:
   ```bash
   cd home-money-website
   git init
   git add .
   git commit -m "Initial commit of Home Money marketing website"
   ```
2. Push to your GitHub account:
   ```bash
   git remote add origin https://github.com/<your-username>/home-money-website.git
   git push -u origin main
   ```
3. Import the repository in your [Vercel Dashboard](https://vercel.com/new).
4. Vercel will automatically detect Next.js and build the site.
