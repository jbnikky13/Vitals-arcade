# Vitals Arcade

A playful, mobile-first web arcade of **14 quick mini-games** for reflexes, timing, memory, focus, numbers, words, and logic.

The hub now uses a bright cartoon arcade style with chunky cards, playful motion, and an animated scene of arcade cabinets and players instead of the old ECG/medical-style header.

**Games**
- Neon Pong
- Solve in Seconds
- Pattern Breaker
- Reflex Test
- Pulse Tap
- Steady Hand
- Tap Speed
- Memory Match
- Math Rush
- Sequence Recall
- Word Rush
- Odd One Out
- Boss Quiz
- Number Merge

> **Important:** Vitals Arcade is entertainment only. It is not a medical device and game scores are not clinical measurements.

## Running

This is a single-file web app. Open `index.html` directly in a browser or deploy it as a static site. No build step is required.

## Support

The Support panel contains the existing Paystack and Binance Pay configuration. Update the donation configuration in `index.html` if you need to change the payment details.

## Suggestions

The Suggest panel supports the existing feedback configuration in `index.html`. You can use the configured endpoint or email fallback.

## Design direction

The current hub is intentionally:
- Bright and cartoonish
- Touch-friendly
- Mobile-first
- Fast to understand
- Game-focused rather than medical-looking
- Animated without requiring heavy assets

The arcade scene is built with HTML/CSS, so there is no external image asset to load for the main hero animation.

## Accessibility

The app respects `prefers-reduced-motion` by disabling decorative animations when requested by the device/browser.
