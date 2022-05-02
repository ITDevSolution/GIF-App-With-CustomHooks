

export const api = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FJoambO1HvTPn6iky2NPo0BjrIO13yse&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`
    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log(data)

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });
    
    return gifs
  };