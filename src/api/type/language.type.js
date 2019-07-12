const graphql = require('graphql');

const language = new graphql.GraphQLEnumType({
    name: 'Language',
    description: 'Languages ​​available for translation.',
    values: {
        Portuguese: { value: 1 },
    },
});

module.exports = language;
