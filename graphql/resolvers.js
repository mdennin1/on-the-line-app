const resolvers = {
    Query: {
        hello: (name = 'World') => `Hello ${name}`
    }
}

export default resolvers;