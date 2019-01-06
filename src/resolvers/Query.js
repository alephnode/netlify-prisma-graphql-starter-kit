module.exports = {
  artists: (_, args, context, info) => {
    return context.prisma.query.artists({}, info)
  },
  records: (_, args, context, info) => {
    return context.prisma.query.records({}, info)
  },
}
