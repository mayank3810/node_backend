import createUsersSchema from "../../../database/models/userModel.js";

const userSchema = {
    name: { type: String },
    userName: { type: String },
    email: { type: String },
    password: { type: String },
    mobileNumber: { type: String },
    profilePic: {
        type:{
            URL: { type: String, default: '"https://po-web-prod.vercel.app/images/profile-picture.webp' },
            thumbnailURL: { type: String, default: '"https://po-web-prod.vercel.app/images/profile-picture.webp' },
            assetType: { type: String, default: 'image' },
        },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    role: { type: String, default: 'user' },
}

const Users = createUsersSchema(userSchema);

export default Users;