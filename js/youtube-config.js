/*
 * Automatic discovery uses YouTube Data API v3 to resolve this channel and
 * find its active public live broadcast. Restrict the API key in Google Cloud
 * Console. No unrelated fallback video is shown between broadcasts.
 */
window.MELDI_YOUTUBE_CONFIG = {
  channelHandle: '@meldidham.jasalpur',
  channelLiveUrl: 'https://www.youtube.com/@meldidham.jasalpur/live',
  apiKey: 'AIzaSyDLcFjz0hd3KdesFhv2aR45Sd7FVYKfegg',
  fallbackVideoId: 'nn3HzTtq0NE'
};
