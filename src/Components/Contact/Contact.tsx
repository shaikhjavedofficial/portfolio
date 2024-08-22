import { Box, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import "./Contact.css";
import withBreakpoint, {
  BreakpointProps,
} from "~/src/Utils/withBreakpoint/withBreakpoint";
import withRouter, { WithRouterProps } from "~/src/Utils/withRouter/withRouter";
interface IContactProps extends WithRouterProps, BreakpointProps {}
class Contact extends Component<IContactProps> {
  render() {
    const { xs, md } = this.props;
    return (
      <Box className="mainBody" height={xs ? "auto" : "100vh"}>
        <Stack alignItems="center" flexDirection="column" gap="3rem" pb="2rem">
          <Stack alignItems="center">
            <Typography variant="h5" color="#60ACE6">
              CONTACT
            </Typography>
            <Typography variant="h4" color="white">
              want to get in touch?
            </Typography>
          </Stack>
          <Stack flexDirection={xs ? "column" : "row"} gap="5rem">
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              className="icons"
              alignItems="center"
              justifyContent="center"
            >
              <i className="ri-map-pin-line ri-5x" />
              <Typography variant="h6" color="#60ACE6">
                WHERE TO FIND ME
              </Typography>
              <Typography variant="body1" color="#60ACE6">
                Maharashtra, India
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              alignItems="center"
              justifyContent="center"
              className="icons"
            >
              <i className="ri-mail-send-line ri-5x" />
              <Typography variant="h6" color="#60ACE6">
                EMAIL ME AT
              </Typography>
              <a className="links" href="mailto:javedsk.javed@live.com">
                javedsk.javed@live.com
              </a>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              alignItems="center"
              className="icons"
              justifyContent="center"
            >
              <i className="ri-linkedin-box-line ri-5x" />
              <Typography variant="h6" color="#60ACE6">
                MESSAGE ME ON
              </Typography>
              <a
                className="links"
                href="https://www.linkedin.com/in/shaikh-javed/"
              >
                linkedin
              </a>
            </Box>
          </Stack>
          <Typography
            color="#60ACE6"
            variant="body1"
            bottom="1rem"
            position="fixed"
            left="3rem"
          >
            &#169; Copyright Shaikh Javed 2024.
          </Typography>
        </Stack>
      </Box>
    );
  }
}

export default withBreakpoint(withRouter(Contact));
