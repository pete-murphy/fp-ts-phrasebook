import { Link } from "gatsby"
import React, { FC } from "react"
import { css } from "styled-components"
import { getColor, Color } from "lib/colors"

import { Logo } from "components/Logo"
import { Nav } from "components/Nav"

type Props = {
  siteTitle: string
}

export const Header: FC<Props> = ({ siteTitle }) => (
  <header
    css={css`
      /* outline: 12px solid blue;
      * {
        outline: 1px solid red;
      } */

      width: 100%;
      padding: 1rem 1rem;
      position: sticky;
      top: 0;
      background: ${getColor(Color.Background)};
      z-index: 2;
      box-shadow: 0 0 4rem ${getColor(Color.Gray200)};

      display: grid;
      grid-template-columns: max-content 1fr;
      grid-template-rows: auto 1fr;

      h1 {
        svg {
          display: block;
          height: 6rem;
          fill: ${getColor(Color.Primary800)};
        }
      }
    `}
  >
    <h1>
      <Link to="/">
        <Logo />
      </Link>
    </h1>
    <Nav />
  </header>
)
