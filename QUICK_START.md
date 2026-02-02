# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your website!

### Step 3: Build for Production
```bash
npm run build
npm start
```

## 📝 Before Going Live

### Essential Updates

1. **Contact Information** (`lib/constants.ts`)
   ```typescript
   links: {
     email: 'your-email@lakecitydesign.com',
     phone: '+91-XXXXXXXXXX',
     // ...
   }
   ```

2. **Form Submission** (`app/api/contact/route.ts`)
   - Integrate with Resend, SendGrid, or your email service
   - Currently logs to console (for testing)

3. **Images** (`public/images/`)
   - Add hero mockups
   - Add project screenshots
   - Add testimonial photos
   - Add client logos

4. **Domain** (`app/sitemap.ts` & `app/robots.ts`)
   - Update `https://lakecitydesign.com` to your actual domain

## 🎨 Customization

### Colors
Edit `app/globals.css` - CSS variables:
- `--primary`: Deep Navy
- `--accent`: Amber
- `--background`: Off-white

### Content
- Case studies: `app/work/[slug]/page.tsx`
- Services: `lib/constants.ts`
- Pricing: `lib/constants.ts`

## 📦 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish: `.next`

## ✅ Testing Checklist

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] Mobile responsive
- [ ] Images load (or placeholders show)
- [ ] Links work
- [ ] SEO metadata present
- [ ] Performance score 95+

## 🆘 Troubleshooting

**Build errors?**
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct
- Ensure all dependencies installed

**Images not showing?**
- Check file paths in `public/images/`
- Use Next.js Image component correctly
- Check image formats (WebP/AVIF preferred)

**Form not submitting?**
- Check API route: `app/api/contact/route.ts`
- Verify email service integration
- Check browser console for errors

## 📚 Documentation

- Full details: `PROJECT_SUMMARY.md`
- Deployment: `DEPLOYMENT.md`
- Checklist: `FINAL_CHECKLIST.md`

---

**Ready to launch!** 🎉
