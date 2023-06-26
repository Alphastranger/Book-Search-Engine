const {Book, User} = require('../models')

const resolvers = {
    Query: {
        me: async (parent, args, context)=> {
            if (context.user) {
                const userData = await user.findOne({_id:context.user._id})
                return userData
            }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
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
        removeBook: async ()=>{
            const delBook = await User.findOneAndUpdate(
                {_id: bookId}
            )
        },


    }
}
module.exports = resolvers