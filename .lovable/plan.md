

## Plan: Update Hero Section Profile Image

Replace the local `profile.jpg` import with the provided external URL, displayed in the existing circular mask.

### Changes

**File: `src/components/HeroSection.tsx`**
- Remove the `import profileImg from "@/assets/profile.jpg"` line
- Replace `src={profileImg}` with `src="https://i.postimg.cc/65kJHkkr/Picsart-26-03-30-18-05-30-792-jpg.jpg"`

No other changes needed — the circular mask and styling are already in place.

