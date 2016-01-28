var searchYouTube = (options, callback) => {
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   part: "snippet",
  //   type: 'GET',
  //   data: { 
  //     q: options.trim().replace(/ /g,'+'),
  //     key: window.YOUTUBE_API_KEY,
  //   },
  //   dataType:'json',
  //   success: data => callback(data),
  //   error: () => console.log('youtube request failed')
  // });

console.log(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.trim().replace(/ /g,'+')}&type=video&key=${window.YOUTUBE_API_KEY}`);
  return $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.trim().replace(/ /g,'+')}&type=video&key=${window.YOUTUBE_API_KEY}`,
                data => { window.exampleVideoData = data.items})
};  
window.searchYouTube = searchYouTube;
