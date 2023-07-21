db = connect("mongodb://localhost/spotify");
printjson(db.songs.find({}));
