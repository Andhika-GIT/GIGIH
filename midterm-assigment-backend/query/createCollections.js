db = connect("mongodb://localhost/youtube");

db.createCollection("comment");
db.createCollection("product");
db.createCollection("user");
db.createCollection("video");
