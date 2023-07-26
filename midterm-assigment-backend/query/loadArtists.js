db = connect("mongodb://localhost/spotify");
printjson(db.artists.find({}));
