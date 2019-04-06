"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Artist",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Record",
    embedded: false
  },
  {
    name: "Track",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/srmward/records-gql/dev`,
  secret: `wards-records-sUck-23092-32!`
});
exports.prisma = new exports.Prisma();
