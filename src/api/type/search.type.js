const graphql = require('graphql');

const authorType = require('./author.type');
const { heroType, evilType } = require('./character.type');

const search = new graphql.GraphQLUnionType({
    name: 'Search',
    description: 'Search between authors, heroes and villains.',
    types: [authorType, heroType, evilType],
    resolveType(data) {
        if (data.idEvil !== null) {
            return heroType;
        }
        if (data.idHero !== null) {
            return evilType;
        }
        return authorType;
    },
});

module.exports = search;
