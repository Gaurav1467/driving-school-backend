const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
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
    tokens : [{
        token : {
            type : String,
            required : true
        }
    }],
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
    user.tokens = user.tokens.concat({token});
    await user.save();

    return token;
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