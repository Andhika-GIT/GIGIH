db = connect("mongodb://localhost/spotify");
printjson(db.popular_songs.find({}));
