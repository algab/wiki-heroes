const graphql = require('graphql');

const publisher = new graphql.GraphQLEnumType({
    name: 'Publisher',
    description: 'Information from the main publishers.',
    values: {
        Marvel: {
            value: 1,
            description: 'Marvel Comics founded by Martin Goodman in 1939 in the state of New York. It was the publisher responsible for publishing characters such as Spider-Man, Iron Man, Captain America and among others.',
        },
        DC: {
            value: 2,
            description: 'DC Comics founded by Malcolm Wheeler-Nicholson in 1934 in the state of California. It was the publisher responsible for publishing such characters as Superman, Batman, Wonder Woman and among others.',
        },
    },
});

module.exports = publisher;
