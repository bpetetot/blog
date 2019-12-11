import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"

import Navigation from "./navigation"

export default ({ children, ...props }) => (
  <Styled.root>
    <Navigation />
    <Header {...props} />
    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>
  </Styled.root>
)