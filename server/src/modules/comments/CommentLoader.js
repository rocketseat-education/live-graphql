import Comment from "./CommentModel"

export async function saveComment(_, { input }) {
  const comment = await Comment.create(input)
  return comment
}

export async function getComments() {
  const comments = await Comment.find().sort({ createdAt: -1 })
  return comments
}

export async function deleteComments(_, { id }) {
  const del = await Comment.findByIdAndDelete(id)
  return del
}
