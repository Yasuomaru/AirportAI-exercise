const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: roles,
        required: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;