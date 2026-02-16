# Hum Landing Page

A beautiful, warm, and welcoming landing page for Hum — community-first chat for Web3 natives.

## Features

✨ **Modern Design**
- Warm light-mode aesthetic with soft blues, teals, and coral accents
- Animated mesh gradient backgrounds
- Smooth animations with Framer Motion
- Fully responsive design

🎯 **Key Sections**
- Hero with animated background and waitlist form
- Pain Points ("Why We Built Hum")
- Feature showcase
- Social proof placeholder (ready for screenshots)
- Call-to-action
- Footer

📧 **Google Sheets Integration**
- Free waitlist email collection
- Automatically saves emails with timestamps
- No external services required

## Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set Up Google Sheets (Waitlist)

#### Create a Google Cloud Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable **Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Name it (e.g., "hum-waitlist")
   - Click "Create and Continue"
   - Skip optional steps, click "Done"

5. Generate Key:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Choose "JSON" format
   - Download the JSON file

#### Create a Google Sheet

1. Create a new [Google Sheet](https://sheets.google.com)
2. Name it "Hum Waitlist" (or anything you prefer)
3. In row 1, add headers: `Email` (A1) and `Timestamp` (B1)
4. Copy the Spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```
5. Share the sheet with your service account email:
   - Click "Share" button
   - Paste the service account email (from JSON: `client_email`)
   - Give "Editor" access

#### Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open the JSON key file you downloaded and fill in `.env.local`:
   ```env
   GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
   GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
   GOOGLE_SHEETS_SPREADSHEET_ID="your-spreadsheet-id-here"
   ```

   **Important:** The private key should be on one line with `\n` for newlines.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables in Vercel dashboard:
   - `GOOGLE_SHEETS_PRIVATE_KEY`
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_SPREADSHEET_ID`
6. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Netlify dashboard
7. Deploy!

## Customization

### Update Tagline

Edit `components/Hero.tsx` and replace the placeholder:
```tsx
<motion.p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-4 font-light">
  Your tagline goes here
</motion.p>
```

### Add Social Proof Screenshots

Replace the placeholders in `components/SocialProof.tsx` with actual images:
```tsx
<img src="/screenshots/proof-1.png" alt="Social proof" className="rounded-3xl" />
```

### Update Social Links

Edit `components/Footer.tsx` to add your actual social media links.

### Change Colors

Edit `tailwind.config.ts` to customize the color palette.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Deployment:** Vercel/Netlify

## Project Structure

```
hum-landing-page/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Waitlist API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── components/
│   ├── CTA.tsx                   # Call-to-action section
│   ├── Features.tsx              # Features showcase
│   ├── Footer.tsx                # Footer
│   ├── Hero.tsx                  # Hero section
│   ├── PainPoints.tsx            # Problem/solution section
│   ├── SocialProof.tsx           # Social proof placeholder
│   └── WaitlistForm.tsx          # Email signup form
├── public/                       # Static assets
├── .env.local.example            # Environment variables template
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Todo

- [ ] Finalize tagline
- [ ] Add social proof screenshots (X, Reddit, LinkedIn posts)
- [ ] Register domain (hum.chat recommended)
- [ ] Add actual social media links to footer
- [ ] Optional: Add analytics (Vercel Analytics, Plausible, etc.)

## License

MIT

## Support

For questions or issues, please open an issue on GitHub or contact us at [your-email].

---

Built with ❤️ for the Web3 community
