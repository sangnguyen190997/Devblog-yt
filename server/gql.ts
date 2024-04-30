export function discussionGql(ghDiscussionCategoryId: string | undefined) {
  return `{
        repository(owner: "sangnguyen190997", name: "DevBlog-yt") {
            discussions(first: 100, categoryId: "${ghDiscussionCategoryId}") {
              nodes {
                title
                url
                number
                bodyHTML
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                 labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
    }`
}

export function discussionGqlDetail(postId: number | undefined) {
  return `{
    repository(owner: "sangnguyen190997", name: "DevBlog-yt") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`
}
