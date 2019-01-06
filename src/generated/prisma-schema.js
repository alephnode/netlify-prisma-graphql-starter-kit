module.exports = {
  typeDefs: /* GraphQL */ `
    type AggregateArtist {
      count: Int!
    }

    type AggregateCategory {
      count: Int!
    }

    type AggregateRecord {
      count: Int!
    }

    type AggregateTrack {
      count: Int!
    }

    type Artist {
      id: ID!
      name: String!
      records(
        where: RecordWhereInput
        orderBy: RecordOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Record!]
    }

    type ArtistConnection {
      pageInfo: PageInfo!
      edges: [ArtistEdge]!
      aggregate: AggregateArtist!
    }

    input ArtistCreateInput {
      name: String!
      records: RecordCreateManyInput
    }

    input ArtistCreateManyInput {
      create: [ArtistCreateInput!]
      connect: [ArtistWhereUniqueInput!]
    }

    type ArtistEdge {
      node: Artist!
      cursor: String!
    }

    enum ArtistOrderByInput {
      id_ASC
      id_DESC
      name_ASC
      name_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type ArtistPreviousValues {
      id: ID!
      name: String!
    }

    input ArtistScalarWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      AND: [ArtistScalarWhereInput!]
      OR: [ArtistScalarWhereInput!]
      NOT: [ArtistScalarWhereInput!]
    }

    type ArtistSubscriptionPayload {
      mutation: MutationType!
      node: Artist
      updatedFields: [String!]
      previousValues: ArtistPreviousValues
    }

    input ArtistSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: ArtistWhereInput
      AND: [ArtistSubscriptionWhereInput!]
      OR: [ArtistSubscriptionWhereInput!]
      NOT: [ArtistSubscriptionWhereInput!]
    }

    input ArtistUpdateDataInput {
      name: String
      records: RecordUpdateManyInput
    }

    input ArtistUpdateInput {
      name: String
      records: RecordUpdateManyInput
    }

    input ArtistUpdateManyDataInput {
      name: String
    }

    input ArtistUpdateManyInput {
      create: [ArtistCreateInput!]
      update: [ArtistUpdateWithWhereUniqueNestedInput!]
      upsert: [ArtistUpsertWithWhereUniqueNestedInput!]
      delete: [ArtistWhereUniqueInput!]
      connect: [ArtistWhereUniqueInput!]
      disconnect: [ArtistWhereUniqueInput!]
      deleteMany: [ArtistScalarWhereInput!]
      updateMany: [ArtistUpdateManyWithWhereNestedInput!]
    }

    input ArtistUpdateManyMutationInput {
      name: String
    }

    input ArtistUpdateManyWithWhereNestedInput {
      where: ArtistScalarWhereInput!
      data: ArtistUpdateManyDataInput!
    }

    input ArtistUpdateWithWhereUniqueNestedInput {
      where: ArtistWhereUniqueInput!
      data: ArtistUpdateDataInput!
    }

    input ArtistUpsertWithWhereUniqueNestedInput {
      where: ArtistWhereUniqueInput!
      update: ArtistUpdateDataInput!
      create: ArtistCreateInput!
    }

    input ArtistWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      records_every: RecordWhereInput
      records_some: RecordWhereInput
      records_none: RecordWhereInput
      AND: [ArtistWhereInput!]
      OR: [ArtistWhereInput!]
      NOT: [ArtistWhereInput!]
    }

    input ArtistWhereUniqueInput {
      id: ID
    }

    type BatchPayload {
      count: Long!
    }

    type Category {
      id: ID!
      name: String!
      description: String
    }

    type CategoryConnection {
      pageInfo: PageInfo!
      edges: [CategoryEdge]!
      aggregate: AggregateCategory!
    }

    input CategoryCreateInput {
      name: String!
      description: String
    }

    type CategoryEdge {
      node: Category!
      cursor: String!
    }

    enum CategoryOrderByInput {
      id_ASC
      id_DESC
      name_ASC
      name_DESC
      description_ASC
      description_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type CategoryPreviousValues {
      id: ID!
      name: String!
      description: String
    }

    type CategorySubscriptionPayload {
      mutation: MutationType!
      node: Category
      updatedFields: [String!]
      previousValues: CategoryPreviousValues
    }

    input CategorySubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: CategoryWhereInput
      AND: [CategorySubscriptionWhereInput!]
      OR: [CategorySubscriptionWhereInput!]
      NOT: [CategorySubscriptionWhereInput!]
    }

    input CategoryUpdateInput {
      name: String
      description: String
    }

    input CategoryUpdateManyMutationInput {
      name: String
      description: String
    }

    input CategoryWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      description: String
      description_not: String
      description_in: [String!]
      description_not_in: [String!]
      description_lt: String
      description_lte: String
      description_gt: String
      description_gte: String
      description_contains: String
      description_not_contains: String
      description_starts_with: String
      description_not_starts_with: String
      description_ends_with: String
      description_not_ends_with: String
      AND: [CategoryWhereInput!]
      OR: [CategoryWhereInput!]
      NOT: [CategoryWhereInput!]
    }

    input CategoryWhereUniqueInput {
      id: ID
    }

    scalar Long

    type Mutation {
      createArtist(data: ArtistCreateInput!): Artist!
      updateArtist(
        data: ArtistUpdateInput!
        where: ArtistWhereUniqueInput!
      ): Artist
      updateManyArtists(
        data: ArtistUpdateManyMutationInput!
        where: ArtistWhereInput
      ): BatchPayload!
      upsertArtist(
        where: ArtistWhereUniqueInput!
        create: ArtistCreateInput!
        update: ArtistUpdateInput!
      ): Artist!
      deleteArtist(where: ArtistWhereUniqueInput!): Artist
      deleteManyArtists(where: ArtistWhereInput): BatchPayload!
      createCategory(data: CategoryCreateInput!): Category!
      updateCategory(
        data: CategoryUpdateInput!
        where: CategoryWhereUniqueInput!
      ): Category
      updateManyCategories(
        data: CategoryUpdateManyMutationInput!
        where: CategoryWhereInput
      ): BatchPayload!
      upsertCategory(
        where: CategoryWhereUniqueInput!
        create: CategoryCreateInput!
        update: CategoryUpdateInput!
      ): Category!
      deleteCategory(where: CategoryWhereUniqueInput!): Category
      deleteManyCategories(where: CategoryWhereInput): BatchPayload!
      createRecord(data: RecordCreateInput!): Record!
      updateRecord(
        data: RecordUpdateInput!
        where: RecordWhereUniqueInput!
      ): Record
      updateManyRecords(
        data: RecordUpdateManyMutationInput!
        where: RecordWhereInput
      ): BatchPayload!
      upsertRecord(
        where: RecordWhereUniqueInput!
        create: RecordCreateInput!
        update: RecordUpdateInput!
      ): Record!
      deleteRecord(where: RecordWhereUniqueInput!): Record
      deleteManyRecords(where: RecordWhereInput): BatchPayload!
      createTrack(data: TrackCreateInput!): Track!
      updateTrack(data: TrackUpdateInput!, where: TrackWhereUniqueInput!): Track
      updateManyTracks(
        data: TrackUpdateManyMutationInput!
        where: TrackWhereInput
      ): BatchPayload!
      upsertTrack(
        where: TrackWhereUniqueInput!
        create: TrackCreateInput!
        update: TrackUpdateInput!
      ): Track!
      deleteTrack(where: TrackWhereUniqueInput!): Track
      deleteManyTracks(where: TrackWhereInput): BatchPayload!
    }

    enum MutationType {
      CREATED
      UPDATED
      DELETED
    }

    interface Node {
      id: ID!
    }

    type PageInfo {
      hasNextPage: Boolean!
      hasPreviousPage: Boolean!
      startCursor: String
      endCursor: String
    }

    type Query {
      artist(where: ArtistWhereUniqueInput!): Artist
      artists(
        where: ArtistWhereInput
        orderBy: ArtistOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Artist]!
      artistsConnection(
        where: ArtistWhereInput
        orderBy: ArtistOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): ArtistConnection!
      category(where: CategoryWhereUniqueInput!): Category
      categories(
        where: CategoryWhereInput
        orderBy: CategoryOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Category]!
      categoriesConnection(
        where: CategoryWhereInput
        orderBy: CategoryOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): CategoryConnection!
      record(where: RecordWhereUniqueInput!): Record
      records(
        where: RecordWhereInput
        orderBy: RecordOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Record]!
      recordsConnection(
        where: RecordWhereInput
        orderBy: RecordOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): RecordConnection!
      track(where: TrackWhereUniqueInput!): Track
      tracks(
        where: TrackWhereInput
        orderBy: TrackOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Track]!
      tracksConnection(
        where: TrackWhereInput
        orderBy: TrackOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): TrackConnection!
      node(id: ID!): Node
    }

    type Record {
      id: ID!
      name: String!
      tracks(
        where: TrackWhereInput
        orderBy: TrackOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Track!]
    }

    type RecordConnection {
      pageInfo: PageInfo!
      edges: [RecordEdge]!
      aggregate: AggregateRecord!
    }

    input RecordCreateInput {
      name: String!
      tracks: TrackCreateManyInput
    }

    input RecordCreateManyInput {
      create: [RecordCreateInput!]
      connect: [RecordWhereUniqueInput!]
    }

    type RecordEdge {
      node: Record!
      cursor: String!
    }

    enum RecordOrderByInput {
      id_ASC
      id_DESC
      name_ASC
      name_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type RecordPreviousValues {
      id: ID!
      name: String!
    }

    input RecordScalarWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      AND: [RecordScalarWhereInput!]
      OR: [RecordScalarWhereInput!]
      NOT: [RecordScalarWhereInput!]
    }

    type RecordSubscriptionPayload {
      mutation: MutationType!
      node: Record
      updatedFields: [String!]
      previousValues: RecordPreviousValues
    }

    input RecordSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: RecordWhereInput
      AND: [RecordSubscriptionWhereInput!]
      OR: [RecordSubscriptionWhereInput!]
      NOT: [RecordSubscriptionWhereInput!]
    }

    input RecordUpdateDataInput {
      name: String
      tracks: TrackUpdateManyInput
    }

    input RecordUpdateInput {
      name: String
      tracks: TrackUpdateManyInput
    }

    input RecordUpdateManyDataInput {
      name: String
    }

    input RecordUpdateManyInput {
      create: [RecordCreateInput!]
      update: [RecordUpdateWithWhereUniqueNestedInput!]
      upsert: [RecordUpsertWithWhereUniqueNestedInput!]
      delete: [RecordWhereUniqueInput!]
      connect: [RecordWhereUniqueInput!]
      disconnect: [RecordWhereUniqueInput!]
      deleteMany: [RecordScalarWhereInput!]
      updateMany: [RecordUpdateManyWithWhereNestedInput!]
    }

    input RecordUpdateManyMutationInput {
      name: String
    }

    input RecordUpdateManyWithWhereNestedInput {
      where: RecordScalarWhereInput!
      data: RecordUpdateManyDataInput!
    }

    input RecordUpdateWithWhereUniqueNestedInput {
      where: RecordWhereUniqueInput!
      data: RecordUpdateDataInput!
    }

    input RecordUpsertWithWhereUniqueNestedInput {
      where: RecordWhereUniqueInput!
      update: RecordUpdateDataInput!
      create: RecordCreateInput!
    }

    input RecordWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      tracks_every: TrackWhereInput
      tracks_some: TrackWhereInput
      tracks_none: TrackWhereInput
      AND: [RecordWhereInput!]
      OR: [RecordWhereInput!]
      NOT: [RecordWhereInput!]
    }

    input RecordWhereUniqueInput {
      id: ID
    }

    type Subscription {
      artist(where: ArtistSubscriptionWhereInput): ArtistSubscriptionPayload
      category(
        where: CategorySubscriptionWhereInput
      ): CategorySubscriptionPayload
      record(where: RecordSubscriptionWhereInput): RecordSubscriptionPayload
      track(where: TrackSubscriptionWhereInput): TrackSubscriptionPayload
    }

    type Track {
      id: ID!
      name: String!
      track_no: Int
      artists(
        where: ArtistWhereInput
        orderBy: ArtistOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Artist!]
    }

    type TrackConnection {
      pageInfo: PageInfo!
      edges: [TrackEdge]!
      aggregate: AggregateTrack!
    }

    input TrackCreateInput {
      name: String!
      track_no: Int
      artists: ArtistCreateManyInput
    }

    input TrackCreateManyInput {
      create: [TrackCreateInput!]
      connect: [TrackWhereUniqueInput!]
    }

    type TrackEdge {
      node: Track!
      cursor: String!
    }

    enum TrackOrderByInput {
      id_ASC
      id_DESC
      name_ASC
      name_DESC
      track_no_ASC
      track_no_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type TrackPreviousValues {
      id: ID!
      name: String!
      track_no: Int
    }

    input TrackScalarWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      track_no: Int
      track_no_not: Int
      track_no_in: [Int!]
      track_no_not_in: [Int!]
      track_no_lt: Int
      track_no_lte: Int
      track_no_gt: Int
      track_no_gte: Int
      AND: [TrackScalarWhereInput!]
      OR: [TrackScalarWhereInput!]
      NOT: [TrackScalarWhereInput!]
    }

    type TrackSubscriptionPayload {
      mutation: MutationType!
      node: Track
      updatedFields: [String!]
      previousValues: TrackPreviousValues
    }

    input TrackSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: TrackWhereInput
      AND: [TrackSubscriptionWhereInput!]
      OR: [TrackSubscriptionWhereInput!]
      NOT: [TrackSubscriptionWhereInput!]
    }

    input TrackUpdateDataInput {
      name: String
      track_no: Int
      artists: ArtistUpdateManyInput
    }

    input TrackUpdateInput {
      name: String
      track_no: Int
      artists: ArtistUpdateManyInput
    }

    input TrackUpdateManyDataInput {
      name: String
      track_no: Int
    }

    input TrackUpdateManyInput {
      create: [TrackCreateInput!]
      update: [TrackUpdateWithWhereUniqueNestedInput!]
      upsert: [TrackUpsertWithWhereUniqueNestedInput!]
      delete: [TrackWhereUniqueInput!]
      connect: [TrackWhereUniqueInput!]
      disconnect: [TrackWhereUniqueInput!]
      deleteMany: [TrackScalarWhereInput!]
      updateMany: [TrackUpdateManyWithWhereNestedInput!]
    }

    input TrackUpdateManyMutationInput {
      name: String
      track_no: Int
    }

    input TrackUpdateManyWithWhereNestedInput {
      where: TrackScalarWhereInput!
      data: TrackUpdateManyDataInput!
    }

    input TrackUpdateWithWhereUniqueNestedInput {
      where: TrackWhereUniqueInput!
      data: TrackUpdateDataInput!
    }

    input TrackUpsertWithWhereUniqueNestedInput {
      where: TrackWhereUniqueInput!
      update: TrackUpdateDataInput!
      create: TrackCreateInput!
    }

    input TrackWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      track_no: Int
      track_no_not: Int
      track_no_in: [Int!]
      track_no_not_in: [Int!]
      track_no_lt: Int
      track_no_lte: Int
      track_no_gt: Int
      track_no_gte: Int
      artists_every: ArtistWhereInput
      artists_some: ArtistWhereInput
      artists_none: ArtistWhereInput
      AND: [TrackWhereInput!]
      OR: [TrackWhereInput!]
      NOT: [TrackWhereInput!]
    }

    input TrackWhereUniqueInput {
      id: ID
    }
  `,
}
