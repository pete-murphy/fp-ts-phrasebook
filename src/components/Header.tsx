import { Link } from "gatsby"
import React, { FC } from "react"
import { css } from "styled-components"
import { getColor, Color } from "lib/colors"

type Props = {
  siteTitle: string
}

export const Header: FC<Props> = ({ siteTitle = "" }) => (
  <header
    css={css`
      background: ${getColor(Color.Primary)};
      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)
