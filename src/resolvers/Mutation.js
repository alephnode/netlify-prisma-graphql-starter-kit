// const addRecord = (_, args, context, info) => {
//   return context.prisma.mutation.createArtist(
//     {
//       data: {
//         name: args.name,
//         records: args.records
//           ? {
//               create: {
//                 name: args.records.name,
//                 tracks: args.tracks
//                   ? {
//                       create: [
//                         {
//                           name: args.tracks.name,
//                           track_no: args.tracks.no,
//                         },
//                       ],
//                     }
//                   : null,
//               },
//             }
//           : null,
//       },
//     },
//     info
//   )
// }

const deleteRecord = (root, args, context, info) => {
  return context.prisma.mutation.deleteRecord({ where: { id: args.id } }, info)
}

module.exports = { deleteRecord }
