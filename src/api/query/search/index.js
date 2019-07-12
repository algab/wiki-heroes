const graphql = require('graphql');

const searchType = require('../../type/search.type');
const searchQuery = require('./query/search.query');

const find = {
    type: new graphql.GraphQLList(searchType),
    description: 'Perform search among authors, heroes and villains.',
    args: {
        text: { type: new graphql.GraphQLNonNull(graphql.GraphQLString) },
    },
    resolve: (_, args) => searchQuery.find(args.text),
};

module.exports = { find };
