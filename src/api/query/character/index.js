const graphql = require('graphql');

const { characterType } = require('../../type/character.type');
const publisherType = require('../../type/publisher.type');
const characterQuery = require('./query/character.query');

const publisher = {
    type: new graphql.GraphQLList(characterType),
    description: 'Search for all characters in a publisher.',
    args: {
        publisher: { type: new graphql.GraphQLNonNull(publisherType) },
    },
    resolve: (_, args) => characterQuery.publisher(args.publisher),
};

const author = {
    type: new graphql.GraphQLList(characterType),
    description: 'Search for all characters created by an author.',
    args: {
        idAuthor: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    },
    resolve: (_, args) => characterQuery.author(args.idAuthor),
};

module.exports = { publisher, author };
