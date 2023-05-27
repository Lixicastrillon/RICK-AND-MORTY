let myFavorites = [];

const postFav = (res, req) => {
  const character = req.body;

  myfavorites.push(character);

  return res.status(200).json(myFavorites);
};
const deleveFav = (res, req) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((fav) => {
    fav.id === Number(id);

    return res.status(200).json(myFavorites);
  });
};

module.exports = { postFav, deleveFav };
