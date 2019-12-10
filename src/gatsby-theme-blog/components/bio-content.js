import React, { Fragment } from "react"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    Hello world, I'm{" "}
    <Styled.a href="http://example.com/">Benjamin Petetot</Styled.a>.
    <br />
    <small>
      Web developer, Open source advocate and conference organizer.
    </small>
  </Fragment>
)
