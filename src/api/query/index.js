const graphql = require('graphql');

const authorQuery = require('./author');
const characterQuery = require('./character');
const evilQuery = require('./evil');
const heroQuery = require('./hero');
const searchQuery = require('./search');

const query = new graphql.GraphQLObjectType({
    name: 'Query',
    description: 'Query GraphQL',
    fields: {
        listAuthor: authorQuery.list,
        searchAuthor: authorQuery.search,
        publisher: characterQuery.publisher,
        author: characterQuery.author,
        listEvil: evilQuery.list,
        searchEvil: evilQuery.search,
        listHero: heroQuery.list,
        searchHero: heroQuery.search,
        find: searchQuery.find,
    },
});

module.exports = query;
