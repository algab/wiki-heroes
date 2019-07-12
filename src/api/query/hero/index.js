const graphql = require('graphql');

const { heroType } = require('../../type/character.type');
const heroQuery = require('./query/hero.query');

const list = {
    type: new graphql.GraphQLList(heroType),
    description: 'List all heroes.',
    args: {
        begin: { type: graphql.GraphQLInt },
        end: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    },
    resolve: (_, args) => heroQuery.list(args.begin, args.end),
};

const search = {
    type: heroType,
    description: 'Search for an hero.',
    args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) },
    },
    resolve: (_, args) => heroQuery.search(args.id),
};

module.exports = { list, search };
