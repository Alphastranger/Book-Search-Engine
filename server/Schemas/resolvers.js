const {Book, User} = require('../models')

const resolvers = {
    Query: {
        books: async ()=> {
            return Book.find({})
        },
        users: async (parent, {_id})=>{
            const params = _id ? {_id} : {};
            return User.find(params)
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user
        },
        saveBook: async (parent, {_id})=>{
            const saveB = await Book.findOneandUpdate(
                {_id: user_id},
                {$addToSet: {savedBooks: body}},
                {new: true}
            )
            return saveB
        },
        deleteUser: async(parent, {_id})=>{
            const delUser = await User.findOneAndDelete(
                {_id: user._id},
            )
            if (!delUser) {
                return ({message: "Nobody here but us chickens"})
            }
            return delUser
        }

    }
}
module.exports = resolvers