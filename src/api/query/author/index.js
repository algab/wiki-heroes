const graphql = require('graphql');

const authorType = require('../../type/author.type');
const authorQuery = require('./query/author.query');

const list = {
    type: new graphql.GraphQLList(authorType),
    description: 'List all authors.',
    args: {
        begin: { type: graphql.GraphQLInt },
        end: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    },
    resolve: (_, args) => authorQuery.list(args.begin, args.end),
};

const search = {
    type: authorType,
    description: 'Search for an author.',
    args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    },
    resolve: (_, args) => authorQuery.search(args.id),
};

module.exports = { list, search };
