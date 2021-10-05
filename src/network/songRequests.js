export const getSearchResults = async (q) => {
  // format query string: replace white-spaces with plus (+)
  const filter = q.replaceAll(' ', '+');
  const url = `https://www.musicloud-api.site/search?filter=${filter}&maxResults=10`;
  try {
    const response = await fetch(
      url
    );
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.error (error);
  }
}
