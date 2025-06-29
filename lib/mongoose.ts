import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase = async () => {
	mongoose.set('strictQuery', true)
	
	if(!process.env.MONGODB_URL){
		return console.log('Missing MONGODB_URL')
	}
	
	if (isConnected){
		return
	}
	
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: 'quiz',
			autoCreate: true,
		} as ConnectOptions)
		isConnected = true
	} catch (error) {
		console.log(error)
	}
}

