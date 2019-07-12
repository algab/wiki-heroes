const graphql = require('graphql');
const httpGraphql = require('express-graphql');
const query = require('./query');

module.exports = (app) => {
    const schema = new graphql.GraphQLSchema({
        query,
    });

    app.use('/graphql', httpGraphql({ schema, pretty: true }));
    app.use('/graphiql', httpGraphql({ schema, graphiql: true, pretty: true }));
};
