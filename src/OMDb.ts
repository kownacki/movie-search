export const search = async (query: string) => {
  // todo add more than 10
  const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
  return response.status === 200 ? await response.json() : false;
};

// export const getRepos = async (username) => {
//   const response = await fetch(`https://api.github.com/users/${username}/repos`);
//   return response.status === 200 ? await response.json() : false;
// };
