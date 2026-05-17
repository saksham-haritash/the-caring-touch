# Full Project Audit & Polish Plan: The Caring Touch
*Status: Deep Dive Analysis*

## 1. Visual & Functional Audit (Live Site vs. Code)

### 🚩 Critical Issues (The "Fucked" List)
- **Hero Image:** Currently using `https://images.unsplash.com/photo-1631217815622-137f9d3f71a0...`. If the user sees a question mark, this URL is likely failing, timing out, or being blocked. **Fix:** Use a verified, high-reliability Unsplash source.
- **Cropping:** The Hero section uses `min-h-screen` and `flex items-center`. On some mobile browsers, the address bar shifts the viewport, causing the bottom buttons to be pushed off-screen or cropped. **Fix:** Change to `min-h-screen` with a more flexible vertical padding/margin strategy and ensure `overflow-y-auto` on the body.
- **Text Overflow:** Large headings (`text-7xl`) can overflow on small mobile screens. **Fix:** Use more aggressive responsive typography (e.g., `text-4xl` for mobile, `text-7xl` for desktop).

### ⚠️ Polish Issues (The "Not Quite There" List)
- **Smoothness:** While Framer Motion is used, the transition from the Hero to the Services section can feel abrupt. **Fix:** Add a subtle fade-in for the section entrance.
- **Button Interactivity:** Anchor links (`#appointment`) work, but they jump instantly. **Fix:** Ensure `scroll-behavior: smooth` is globally applied in `index.css`.
- **Visual Depth:** The gradient overlay on the hero image is a bit static. **Fix:** Add a slight parallax or scale effect to the background image on load.

## 2. Proposed Changes (Kimi Design Plan)

### Structural Fixes
- **Hero Component:**
  - Replace image URL with a guaranteed high-res medical luxury shot.
  - Change `relative min-h-screen` $\rightarrow$ `relative min-h-[100dvh]` (Dynamic Viewport Height) to prevent mobile cropping.
  - Wrap the content in a `div` with `py-20 px-6` to ensure it never hits the screen edge.

### Visual Enhancements
- **Typography:** Implement `clamp` for font sizes or better Tailwind responsive classes (`text-4xl sm:text-5xl lg:text-7xl`).
- **Animations:** 
  - Hero text: Change `y: 30` $\rightarrow$ `y: 20` for a more subtle, premium feel.
  - Add a `whileInView` animation to the Hero content as a safety fallback.

### Final Checklist Before Push
- [ ] Test image URL in a private browser.
- [ ] Test `Scribe/iPhone` viewport simulation for cropping.
- [ ] Confirm all buttons lead to existing IDs.
- [ ] Verify `index.css` contains `scroll-behavior: smooth`.

## 3. Implementation Strategy
I will execute these changes in a single `App.jsx` rewrite to ensure no partial updates cause new bugs. I will then verify the build locally before pushing.
