const addRecord = (_, args, context, info) => {
  return context.prisma.mutation.createArtist(
    {
      data: {
        name: args.name,
        records: args.records
          ? {
              create: {
                name: args.records.name,
                tracks: args.tracks
                  ? args.tracks.forEach(t => ({
                      create: {
                        name: t.name,
                        track_no: t.track_no,
                      },
                    }))
                  : null,
              },
            }
          : null,
      },
    },
    info
  )
}

const deleteRecord = (_, args, context, info) => {
  return context.prisma.mutation.deleteRecord({ where: { id: args.id } }, info)
}

module.exports = { addRecord, deleteRecord }
