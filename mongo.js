// Inserting data in mongo db 

use viveksingh
db.items.insertOne({name:"vivo",price:5000,rating:4.5,qty:200,sold:89})

use viveksingh
db.items.insertMany([{name:"oppo",price:500,rating:4.50,qty:2000,sold:809},{name:"vivo",price:5000,rating:4.5,qty:200,sold:89}])