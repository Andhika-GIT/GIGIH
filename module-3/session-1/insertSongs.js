db = connect("mongodb://localhost/spotify");

db.songs.insertMany([
  {
    title: "hidup ini",
    artists: ["kemal", "udin"],
    album: "era-1980",
  },
  {
    title: "kenapa begitu",
    artists: ["kemal", "bima"],
    album: "era-1980",
  },
  {
    title: "cinta gk buta",
    artists: ["thomas", "mirna"],
    album: "era-1990",
  },
  {
    title: "pohon kenangan",
    artists: ["thomas", "bella"],
    album: "era-1990",
  },
  {
    title: "nikmatin saja",
    artists: ["kemal", "noyar"],
    album: "era-1980",
  },
  {
    title: "kasih saudara",
    artists: ["kemal", "naufal"],
    album: "era-1980",
  },
  {
    title: "putih salju",
    artists: ["kemal", "bella"],
    album: "era-1980",
  },
  {
    title: "kesempatan kedua",
    artists: ["thomas", "joseph"],
    album: "era-1990",
  },
  {
    title: "tidak dapat digantikan",
    artists: ["thomas", "sarah"],
    album: "era-1990",
  },
  {
    title: "ini saatnya",
    artists: ["thomas", "hendry"],
    album: "era-1990",
  },
]);
