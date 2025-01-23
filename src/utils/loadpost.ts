export  const loadPosts = async () => {
  const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postJson = await postResponse.json();

  const photoResponse = await fetch(
    `https://api.unsplash.com/photos?client_id=${"R0ohvlWvDr4fsf510_6m_mASalWtHewFJ4VAOOnPoG8"}`
  );
  const photosJson = await photoResponse.json();

  const postsAndPhotos = postJson.map((post: object, index: number) => {
    return { ...post, cover: photosJson[index % photosJson.length].urls.small };
  });
  
  return {
    postsAndPhotos
  }
}