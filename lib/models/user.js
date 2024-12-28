import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Membatasi nilai role yang bisa diambil
        default: 'user' // Nilai default untuk role
    }
},
{ timestamps: true });

const User = mongoose.models.user || mongoose.model('user', Schema);

export default User;
