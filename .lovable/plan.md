

# inatom.in — Premium Industrial 3D Printing Landing Page

## Design System
- **Background:** #F5F5F7 (Off-White), **Headers:** #1D1D1F, **Body:** #424245
- **Accent:** #0071E3 (Electric Blue) — buttons and active states only
- **Borders:** #E5E5E5, **Cards:** white, rounded-2xl, shadow-xl
- **Font:** Inter with tight tracking headers, relaxed line-height body
- **Navbar/Drawer:** Glassmorphism (backdrop-blur-md, bg-white/80)

---

## Layout Architecture

### Desktop (lg+): Split Screen
- **Left 60%:** Scrollable brochure (Hero → Materials → CAD → Guidelines → Footer)
- **Right 40%:** Sticky full-height Instant Quote Engine card

### Mobile (<lg): Stacked
- Brochure fills screen
- Fixed bottom bar with "Get Instant Quote" → opens Sheet/Drawer with Quote Engine

---

## Components to Build

### 1. Navbar (Sticky, Glassmorphic)
- "inatom" logo (lowercase, bold, tight tracking)
- Desktop: Services dropdown (FDM Manufacturing, CAD Engineering, Batch Production), Resources dropdown (Material Guide, Design Guidelines), Support link — all smooth-scroll anchors
- Mobile: Hamburger menu icon opening a sheet with nav links

### 2. Instant Quote Engine
- White card with heavy shadow, sticky on desktop, in drawer on mobile
- **Upload zone:** Dashed border, UploadCloud/Box icon, "Drag & Drop STL / STEP files" (UI only)
- **Config inputs:** Material select, 5 color circle radio buttons, Quality segmented control (Draft/Standard/Fine), Infill select
- **Pricing:** Large "₹0.00" with "Vol: 0cm³ • Time: 0h 0m" subtitle
- **Buttons:** "Upload to Calculate" (primary blue, full width) + "Email Official Quote" (ghost, opens contact modal)

### 3. Hero Section
- "Industrial Grade. Speed of Light." headline
- Subhead about FDM manufacturing, DfM, 24-hour turnaround
- Trust bar strip: Tolerance ±0.2mm • NDA Available • Pan-India Shipping (grey icons)

### 4. Material Capabilities Grid (4 cards)
- PLA/PETG — Rapid Prototyping
- ABS/ASA — UV/Heat Stable
- PC — High Impact, Flame Retardant
- PA-CF — Metal Replacement, High Stiffness
- Each card: icon, title, description with floating white card style

### 5. CAD Service Section (Dark)
- bg-slate-900 text-white contrast section
- "Stuck on a Sketch?" headline
- "Book Consultation" button → opens contact modal

### 6. Design Guidelines Accordion
- Shadcn Accordion with 3 items: Wall Thickness, Hole Diameter, Overhangs
- Clean minimalist styling

### 7. Footer
- 3-column: Company info, Links (with "Gift Shop & Consumer Products" under Marketplace), Legal
- Social icons + WhatsApp placeholder link

### 8. Contact Modal (Dialog)
- Triggered by "Book Consultation" and "Email Official Quote"
- Fields: Name, Phone/Email, Service Type dropdown, Description textarea
- On submit: close modal, show success toast with "Continue on WhatsApp" button (wa.me link)

### 9. Mobile Quote Bar
- Fixed bottom bar (below lg only) with "Get Instant Quote" button
- Opens Sheet containing the QuoteEngine component

---

## File Structure
- `src/pages/Index.tsx` — split-screen layout orchestration
- `src/components/Navbar.tsx`
- `src/components/QuoteEngine.tsx` — reused in right panel + mobile drawer
- `src/components/HeroSection.tsx`
- `src/components/MaterialGrid.tsx`
- `src/components/CadService.tsx`
- `src/components/DesignGuidelines.tsx`
- `src/components/Footer.tsx`
- `src/components/ContactModal.tsx`
- `src/components/MobileQuoteBar.tsx`
- Update `src/index.css` with custom colors and Inter font import

