# 🚀 Site Launcher

A minimal Chrome extension to quickly open your favorite websites — no more digging through bookmarks.

## What it does

Click the extension icon → see your sites list → click to open. That's it.

No accounts. No syncing. No bloat.

## Preview

> A dark-themed popup (240px wide) showing your sites as clickable buttons with favicons.

## File Structure

```
site-launcher/
├── manifest.json   # Extension config (Manifest V3)
├── popup.html      # UI — the popup you see when clicking the icon
├── popup.js        # Handles click events, opens tabs
├── sites.js        # Your list of sites — edit this to customize
└── icon.png        # Extension icon
```

## Installation (Load Unpacked)

1. Clone or download this repo
   ```bash
   git clone https://github.com/tensuio/site-launcher.git
   ```
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked** and select the repo folder
5. The extension icon will appear in your toolbar

> Pin it for easy access: click the puzzle icon → pin Site Launcher.

## Customizing Your Sites

Edit `sites.js` to add or remove sites:

```js
const sites = [
  { name: "GitHub", url: "https://github.com" },
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "YouTube", url: "https://youtube.com" },
  // add more here...
];
```

Save the file, then go to `chrome://extensions` and click the **refresh icon** on the extension card.

## Tech Stack

- Vanilla JS
- HTML/CSS
- Chrome Extensions API — Manifest V3
- Permissions used: `tabs`

## License

MIT — do whatever you want with it.
