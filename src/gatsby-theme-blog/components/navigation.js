import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

export default () => (
  <div
    css={css({
      maxWidth: `container`,
      mx: `auto`,
      px: 3,
    })}
  >
    <Styled.a
      as={Link}
      to="/"
      activeStyle={{ color: "red", textDecoration: `none` }}
      partiallyActive
      css={css({
        color: `inherit`,
        boxShadow: `none`,
      })}
    >
      Blog
    </Styled.a>
    <Styled.a
      as={Link}
      to="/projects"
      css={{ margin: "0 20px" }}
      activeStyle={{ color: "red" }}
      partiallyActive
    >
      Projects
    </Styled.a>
    <Styled.a
      as={Link}
      to="/about"
      activeStyle={{ color: "red" }}
      partiallyActive
    >
      About
    </Styled.a>
  </div>
)
