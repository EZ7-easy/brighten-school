import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
	{
		fullName: String,
		clerkId: String,
		email: String,
		picture: String,
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
)

const User = models.User || model('User', UserSchema)
export default User
