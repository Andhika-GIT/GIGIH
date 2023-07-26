db = connect("mongodb://localhost/spotify");

db.artists.insertMany([
  {
    name: "kemal",
    date_of_birth: "12-05-1962",
    genres: ["klasik", "pop"],
  },
  {
    name: "thomas",
    date_of_birth: "19-02-1960",
    genres: ["klasik", "pop"],
  },
  {
    name: "udin",
    date_of_birth: "04-01-1962",
    genres: ["klasik", "pop"],
  },
  {
    name: "mirna",
    date_of_birth: "24-06-1965",
    genres: ["klasik", "pop"],
  },
  {
    name: "bella",
    date_of_birth: "22-04-1961",
    genres: ["klasik", "pop"],
  },
  {
    name: "noyar",
    date_of_birth: "02-02-1961",
    genres: ["klasik", "pop"],
  },
  {
    name: "naufal",
    date_of_birth: "29-08-1961",
    genres: ["klasik", "pop"],
  },
  {
    name: "bella",
    date_of_birth: "04-07-1960",
    genres: ["klasik", "pop"],
  },
  {
    name: "joseph",
    date_of_birth: "12-09-1961",
    genres: ["klasik", "pop"],
  },
  {
    name: "sarah",
    date_of_birth: "22-11-1962",
    genres: ["klasik", "pop"],
  },
]);
