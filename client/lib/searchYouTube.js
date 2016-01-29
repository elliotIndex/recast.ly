var searchYouTube = (options, callback, videoId, partType) => {
  var videoString = videoId ? `&relatedToVideoId=${videoId}` : "";
  if (videoId != '' && partType) {
    console.log(videoId);
    partType = `videos?part=${partType}`;
    videoString = `&id=${videoId}`
  };
  var partType = partType || "search?part=snippet&q="; 
  
  console.log(`https://www.googleapis.com/youtube/v3/${partType}${options.trim().replace(/ /g,'+')}${videoString}&type=video&key=${window.YOUTUBE_API_KEY}`);
  return $.get(`https://www.googleapis.com/youtube/v3/${partType}${options.trim().replace(/ /g,'+')}${videoString}&type=video&key=${window.YOUTUBE_API_KEY}`,
                data => callback(data));
};  

window.searchYouTube = searchYouTube;
