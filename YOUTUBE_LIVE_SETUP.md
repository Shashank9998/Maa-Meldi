# YouTube Live auto-detection setup

The Live Darshan page is already wired to find the channel's active public live stream. It uses YouTube Data API v3 `channels.list` to resolve `@kpgaming5353`, then `search.list` with `eventType=live` to find the active broadcast. When one is found, the embedded player, YouTube link, and live chat are switched to that stream. It checks again every 15 minutes.

## Add the API key

1. In Google Cloud Console, create/select a project and enable **YouTube Data API v3**.
2. Create an **API key** under APIs & Services → Credentials.
3. Restrict the key to **YouTube Data API v3**. Add website/referrer restrictions for local development (for example `http://127.0.0.1:5500/*`) and the final website domain when known.
4. Open `js/youtube-config.js` and put the key in `apiKey`, keeping the quotes:

   ```js
   apiKey: 'YOUR_RESTRICTED_API_KEY',
   ```

5. Reload `live-darshan.html`. Without a key, the configured fallback video still plays, but new live broadcasts will not be detected automatically.

The browser-side API key is visible to visitors, so keep the API and website restrictions enabled. For a busy public site, move polling behind a server endpoint with caching so each visitor does not spend the API quota independently.

References: [YouTube search.list](https://developers.google.com/youtube/v3/docs/search/list), [YouTube channels.list](https://developers.google.com/youtube/v3/docs/channels/list), [API key authorization](https://developers.google.com/youtube/v3/guides/authentication).
