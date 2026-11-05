/*
 * Automatic discovery uses YouTube Data API v3 to resolve the channel handle
 * and search for its currently active public live broadcast. The API key is
 * intentionally empty until a restricted key is added. The configured fallback
 * video plays until an active channel broadcast is discovered.
 */
window.MELDI_YOUTUBE_CONFIG = {
  channelHandle: '@kpgaming5353',
  channelLiveUrl: 'https://www.youtube.com/@kpgaming5353/live',
  apiKey: 'AIzaSyBXIsqeJoTYgZy7SgcLgzEVcl6z53CWDfo',
  fallbackVideoId: 'hOcQLUrKboM'
};
