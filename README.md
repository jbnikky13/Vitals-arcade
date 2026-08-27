# Vitals Arcade

A single-file web app: a hub of eight quick timing/reflex/memory mini-games, plus a "Buy me a coffee" support section and a suggestion box for feedback. Just-for-fun arcade games — not medical tests.

**Games:** Hold Steady, Reflex Test, Pulse Tap, Steady Hand, Balance Test, Tap Speed, Memory Match, Breathing Pacer.

## Before you upload: fill in your payment details

Open `index.html`, search for `DONATE CONFIG` (near the top of the `<script>` block), and edit:

```js
var DONATE = {
  paystackLink: 'https://paystack.com/pay/your-page-slug',
  binance: {
    qrImage: 'data:image/png;base64,...',  // already filled in with your QR
    binancePayId: 'Blockchain enthusiastic'
  }
};
```

**Paystack ("Card / Bank")** —
1. Sign up free at [paystack.com](https://paystack.com) (supports businesses based in Nigeria, Ghana, South Africa, Kenya, and a few other African markets — but **payers can be from anywhere in the world**, paying by card).
2. In the dashboard: **Revenue → Payment Pages → Create page**. Set an amount or let visitors choose, give it a name.
3. Copy the generated `https://paystack.com/pay/...` link and paste it into `paystackLink` above.

**Binance Pay** — already set up with your QR code baked into the file. Nothing to do unless you want to swap it for a new one later (see the note in the code comments).

We removed the PayPal option since PayPal.me isn't reliably available for Nigeria-based accounts yet — Paystack is the more dependable option for you right now, and it settles directly without needing a middleman app.

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

