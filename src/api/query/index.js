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
        listAuthors: authorQuery.list,
        searchAuthor: authorQuery.search,
        publisherCharacter: characterQuery.publisher,
        authorCharacter: characterQuery.author,
        listEvils: evilQuery.list,
        searchEvil: evilQuery.search,
        listHeroes: heroQuery.list,
        searchHero: heroQuery.search,
        find: searchQuery.find,
    },
});

module.exports = query;
