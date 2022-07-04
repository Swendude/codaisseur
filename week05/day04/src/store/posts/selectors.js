export const selectCommentsWithUsers = (reduxState) => {
  const comments = reduxState.posts.comments;
  const users = reduxState.posts.users;
  const result = comments.map((comment) => {
    const userId = comment.userId;
    const user = users.find((user) => user.id === userId);
    return { ...comment, user: user };
  });
  return result;
};
