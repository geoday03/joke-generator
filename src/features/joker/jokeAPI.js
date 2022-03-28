
export const fetchJoke = (flag) => {
  const data = require("axios")
    .get(`https://v2.jokeapi.dev/joke/${flag}`)
    .then(res => res.data)

  return data
}