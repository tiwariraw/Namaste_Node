# Installation

- npm i mongodb dotenv nodemon

# Steps

- Go to mongodb atlas website and sign in
- Create a M0 cluster (free)
- Create a user (give username and password)
- Get the connection string
- Install MongoDB Compass and enter the connection string and click "Save and Connect"
- Create a database and inside it create a collection (eg. test -> user)
- Install mongodb npm package & create a connection from code (nodejs)
- Perform CRUD operations on a collection in your database
  -- find({}) or find(query)
  -- insertOne() or insertMany([])
  -- updateOne() or updateMany([])
  -- deleteOne() or deleteMany([])

# References:

- https://www.npmjs.com/package/mongodb
- https://www.mongodb.com/docs/drivers/node/current/
- https://www.mongodb.com/docs/drivers/node/current/get-started/
- insertOne
  -- https://www.mongodb.com/docs/manual/reference/method/db.collection.insertOne/
  -- https://www.geeksforgeeks.org/mongodb-insertone-method-db-collection-insertone/
