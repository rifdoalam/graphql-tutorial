const {ApolloServer} = require("apollo-server")
const mongoose = require('mongoose')
const typeDefs = require("./schema")
const resolvers = require("./resolver")
mongoose.connect("mongodb://localhost:27017/bwa-graphql")
const server = new ApolloServer({typeDefs,resolvers})
server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
});