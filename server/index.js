require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server-lambda')
const { Prisma } = require('prisma-binding')
const { typeDefs: td } = require('../src/generated/prisma-schema')
const typeDefs = require('../src/schema')
const resolvers = require('../src/resolvers')

const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: td,
      secret: process.env.PRISMA_SECRET,
      endpoint: process.env.PRISMA_ENDPOINT,
    }),
  }),
})

exports.handler = server.createHandler()
