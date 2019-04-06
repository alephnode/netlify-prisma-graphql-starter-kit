module.exports = `
  type Query {
    info: String!
    records: [Record!]!
    artists: [Artist!]!
    artist(name: String): [Artist!]!
    tracks: [Track!]!
    categories: [Category]
  }

  type Artist {
    id: ID!
    name: String!
    records: [Record]
  }

  type Record {
    id: ID!
    name: String!
    tracks: [Track]
  }

  type Track {
    id: ID!
    name: String!
    track_no: Int
  }

  type Category {
    id: ID!
    name: String!
    description: String
  }
`
