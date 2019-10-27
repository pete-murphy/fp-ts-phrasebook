import { Link } from "gatsby"
import React, { FC } from "react"
import { css } from "styled-components"
import { getColor, Color } from "lib/colors"

type Props = {
  siteTitle: string
}

export const Header: FC<Props> = ({ siteTitle }) => (
  <header
    css={css`
      height: 20vh;
    `}
  ></header>
)
