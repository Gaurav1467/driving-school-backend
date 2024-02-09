const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;


const userSchema = new Schema({
    firstname: {
        type: String,
        require: true,
        trim : true
    },
    lastname: {
        type: String,
        require: true,
        trim : true
    },

    email: {
        type: String,
        requrie: true,
        unique: true,
        trim : true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error('Emnail is Invalid');
            }
        }
    },

    password: {
        type: String,
        require: true,
        minlength: 4,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw Error(`You can't use this "password" in password.`)
            }
        }
    },
    fathername: {
        type: String,
        trim : true
    },

    address: {
        type: String,
        trim : true
    },
    pin : {
        type : Number,
        trim : true
    },
    state: {
        type : String,
        trim : true
    },
    mobile : {
        type : Number,
        trim : true
    },
    token : {
        type : String
    },
    avatar : {
        type : Buffer
    }

}, {
    timestamps : true
})

userSchema.statics.findByCreds = async (email, password) => {
    const user = await User.findOne( {email});
   

    if(!user){
        throw new Error('Unable to login!');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
       
        throw new Error('Unable to login!');
    }

    return user;
}

userSchema.statics.generateAuthToken = async function (user) {
    const token = jwt.sign({_id : user._id.toString()} , 'asdfghjkl');
    user.token = token;
    console.log(user);
    // await user.save();

    return user;
}

userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
       user.password = await bcrypt.hash(user.password,8);
    }
    next();
})

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;
    delete userObject.avatar;

    return userObject;
}

const User = mongoose.model('user', userSchema);

module.exports = User;