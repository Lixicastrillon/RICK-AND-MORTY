const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = (res, req) => {
  const { id } = req.params;

  axios
    .get(`${URL}/${id}`)

    .then((result) => result.data)
    .then(({ name, gender, species, origin, image, status }) => {
      let character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      return res.status(200).json(character);
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getCharById
}
