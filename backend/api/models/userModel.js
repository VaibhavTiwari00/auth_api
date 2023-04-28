const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,

        },
        email: {
            type: 'string',
            required: true,
            unique:true,
        },
        password: {
            type: 'string',
            required:true,
        },
        isAdmin: {
            type: 'boolean',
            required: true,
            default: false,
        },
        picture: {
            type: 'string',
            required: true,
           default:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        }
        
    }, {
        timestamp:true,
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;