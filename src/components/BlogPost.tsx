import React from "react"
import { graphql } from "gatsby"
import { css } from "styled-components"

export default function Template({ data }: any) {
  const { markdownRemark: post } = data
  return (
    <div className="container">
      <div
        css={css`
          p {
            padding: 1rem 0;
            code {
              background: var(--code);
            }
          }
          h2 {
            margin-top: 2rem;
          }
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
