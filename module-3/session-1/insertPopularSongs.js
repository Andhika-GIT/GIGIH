db = connect("mongodb://localhost/spotify");

db.popular_songs.insertMany([
  {
    title: "hidup ini",
    played: 50,
    period: 1988,
  },
  {
    title: "kenapa begitu",
    played: 24,
    period: 1992,
  },
  {
    title: "cinta gk buta",
    played: 25,
    period: 1982,
  },
  {
    title: "pohon kenangan",
    played: 35,
    period: 1998,
  },
  {
    title: "nikmatin saja",
    played: 42,
    period: 1985,
  },
  {
    title: "kasih saudara",
    played: 34,
    period: 1995,
  },
  {
    title: "putih salju",
    played: 38,
    period: 1981,
  },
  {
    title: "kesempatan kedua",
    played: 29,
    period: 1990,
  },
  {
    title: "tidak dapat digantikan",
    played: 27,
    period: 1990,
  },
  {
    title: "ini saatnya",
    played: 33,
    period: 1992,
  },
]);
