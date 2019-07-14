const graphql = require('graphql');

const publisherType = require('./publisher.type');

const author = new graphql.GraphQLObjectType({
    name: 'Author',
    description: 'Top story creators and comic character.',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        birthdate: { type: graphql.GraphQLString },
        deathdate: { type: graphql.GraphQLString },
        country: { type: graphql.GraphQLString },
        city: { type: graphql.GraphQLString },
        photo: { type: graphql.GraphQLString },
        publisher: { type: publisherType },
    },
});

module.exports = author;
