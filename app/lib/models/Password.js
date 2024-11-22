import mongoose from 'mongoose';

const PasswordSchema = new mongoose.Schema({
    site: {type: String, required: true, default: 'None'},
    username: { type: String, required: true, default: "None" },
    password: { type: String, required: true, default: "None" },
    id: {type: String, required: true, default: 0}
});

export default mongoose.models.Password || mongoose.model('Password', PasswordSchema);
