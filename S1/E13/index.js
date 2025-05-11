const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
	try {
		await client.connect();
		const database = client.db('test');
		const user = database.collection('user');


		// Query all the document in the user collection
		const res = await user.find({}).toArray();
		console.log(res);


		// Queries for a user that has a city value of 'Ghazipur'
		const query = { city: 'Bikaner' };
		const res1 = await user.findOne(query);
		console.log(res1);


		// Insert one document
		const res2 = await user.insertOne({ firstname: 'Girish', lastname: 'Joshi', city: 'Bikaner', skills: ['Java', 'Python'] });
		console.log(res2);


		const data = [
			{
				firstname: 'Shanu',
				lastname: 'Joshi',
				city: 'Bikaner',
				skills: ['Accounts', "Business Studies"]
			},
			{
				firstname: 'Shreya',
				lastname: 'Tiwari',
				city: 'Ghazipur',
				skills: ['English', 'Hindi']
			}
		]

		// Insert many documents
		const res3 = await user.insertMany(data);
		console.log(res3);


		// Update one document
		const res4 = await user.updateOne({ firstname: 'Shanu' }, { $set: { firstname: 'Sneha' } });
		console.log(res4);


		// Update one document
		const res5 = await user.deleteOne({ firstname: 'Sneha' });
		console.log(res5);

		// collection.countDocuments(filter) -> takes a filter object as an argument
		// collection.estimatedDocumentCount() -> returns the estimated number of documents || slower than countDocuments || doesn't take any argument
		const noOfDocuments = await user.countDocuments({});
		// const noOfDocuments = await user.estimatedDocumentCount();
		console.log(noOfDocuments);

	} catch (err) {
		console.log(err)
	} finally {
		await client.close();
	}
}

run();