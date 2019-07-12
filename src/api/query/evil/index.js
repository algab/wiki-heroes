const graphql = require('graphql');

const { evilType } = require('../../type/character.type');
const evilQuery = require('./query/evil.query');

const list = {
    type: new graphql.GraphQLList(evilType),
    description: 'List all villains.',
    args: {
        begin: { type: graphql.GraphQLInt },
        end: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    },
    resolve: (_, args) => evilQuery.list(args.begin, args.end),
};

const search = {
    type: evilType,
    description: 'Search for an evil.',
    args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    },
    resolve: (_, args) => evilQuery.search(args.id),
};

module.exports = { list, search };
