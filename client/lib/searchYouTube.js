var searchYouTube = (options, callback) => {
  return $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.trim().replace(/ /g,'+')}&type=video&key=${window.YOUTUBE_API_KEY}`,
                data => { window.exampleVideoData = data.items})
};  

window.searchYouTube = searchYouTube;
