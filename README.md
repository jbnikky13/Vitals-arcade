# Vitals Arcade

A single-file web app: a hub of eight quick timing/reflex/memory mini-games, plus a "Buy me a coffee" support section and a suggestion box for feedback. Just-for-fun arcade games — not medical tests.

**Games:** Hold Steady, Reflex Test, Pulse Tap, Steady Hand, Balance Test, Tap Speed, Memory Match, Breathing Pacer.

## Before you upload: fill in your payment details

Open `index.html`, search for `DONATE CONFIG` (near the top of the `<script>` block), and edit:

```js
var DONATE = {
  paypalUsername: 'yourname',        // from paypal.me/yourname
  stripeLink: 'https://buy.stripe.com/your-payment-link',
  wallets: [
    { symbol: 'BTC', label: 'Bitcoin', address: 'your-btc-address-here' },
    { symbol: 'ETH', label: 'Ethereum', address: 'your-eth-address-here' }
  ]
};
```

**PayPal** — create a free link at [paypal.me](https://www.paypal.me), use the username part after the slash.

**Stripe** — in the [Stripe Dashboard](https://dashboard.stripe.com), go to Payment links → New, set an amount (or let people choose), and paste the generated `https://buy.stripe.com/...` URL.

**Crypto** — paste your own wallet addresses. Double check them — there's no way to reverse a crypto payment sent to the wrong address.

## Set up the suggestion box (optional)

Search for `FEEDBACK CONFIG` in `index.html`:

```js
var FEEDBACK = {
  endpoint: '',                 // e.g. 'https://formspree.io/f/xxxxxxx'
  email: 'you@example.com'
};
```

- **Simplest:** leave `endpoint` blank and set `email` to your address — the form will open the visitor's email app pre-filled with their message.
- **No email client needed:** sign up free at [formspree.io](https://formspree.io), create a form, and paste its endpoint URL into `endpoint`. Submissions will show up in your Formspree dashboard/email instead of requiring the visitor to send anything themselves.

## Running it

Just open `index.html` in a browser — no build step, no server needed.

## Uploading to GitHub (private repo)

1. Go to [github.com/new](https://github.com/new).
2. Name the repo (e.g. `vitals-arcade`).
3. Set visibility to **Private**.
4. Click **Create repository**.
5. On the next page, click **uploading an existing file**.
6. Drag `index.html` (and this `README.md`) into the upload area.
7. Scroll down, add a commit message, click **Commit changes**.

That's it — no git command line needed. If you later want it live as a public webpage (GitHub Pages requires the repo to be public, or a paid plan for private Pages), let me know and I can walk you through that too.

