const graphql = require('graphql');

const authorType = require('./author.type');
const languageType = require('./language.type');
const publisherType = require('./publisher.type');

const resolve = require('../resolve');

let hero = null;
let evil = null;

const character = new graphql.GraphQLInterfaceType({
    name: 'Character',
    description: 'The leading and most famous characters in the world of comics.',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: {
            type: graphql.GraphQLString,
            args: { language: { type: languageType } },
        },
        year: { type: graphql.GraphQLInt },
        first: { type: graphql.GraphQLString },
        publisher: { type: publisherType },
        photo: { type: graphql.GraphQLString },
        authors: { type: new graphql.GraphQLList(authorType) },
    },
    resolveType(data) {
        if (data.idEvil !== null) {
            return hero;
        }
        return evil;
    },
});

hero = new graphql.GraphQLObjectType({
    name: 'Hero',
    description: 'The most beloved comic book heroes.',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: {
            type: graphql.GraphQLString,
            args: { language: { type: languageType } },
            resolve: (_, args) => resolve.language(_, args.language),
        },
        year: { type: graphql.GraphQLInt },
        first: { type: graphql.GraphQLString },
        publisher: { type: publisherType },
        photo: { type: graphql.GraphQLString },
        authors: {
            type: new graphql.GraphQLList(authorType),
            resolve: (data) => { resolve.author(data.idAuthor); },
        },
        evils: {
            type: new graphql.GraphQLList(character),
            resolve: (data) => { resolve.evil(data.idEvil); },
        },
    },
    interfaces: [character],
});

evil = new graphql.GraphQLObjectType({
    name: 'Evil',
    description: 'The most terrible comic book villains.',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: {
            type: graphql.GraphQLString,
            args: { language: { type: languageType } },
            resolve: (_, args) => resolve.language(_, args.language),
        },
        year: { type: graphql.GraphQLInt },
        first: { type: graphql.GraphQLString },
        publisher: { type: publisherType },
        photo: { type: graphql.GraphQLString },
        authors: {
            type: new graphql.GraphQLList(authorType),
            resolve: (data) => { resolve.author(data.idAuthor); },
        },
        heroes: {
            type: new graphql.GraphQLList(character),
            resolve: (data) => { resolve.hero(data.idHero); },
        },
    },
    interfaces: [character],
});

module.exports = { characterType: character, heroType: hero, evilType: evil };
