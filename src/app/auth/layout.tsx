import { Box } from "@/ui/Box/Box";
import React, { Suspense } from "react";
import { Typography } from "@/ui/Typography/Typography";
import {
  authLayoutAdvertScreenSx,
  authLayoutContainerSx,
  authLayoutFooterSx,
  authLayoutFormContainerSx,
  authLayoutHeaderSx,
  authLayoutIssueContainerSx, authLayoutPictureContainer,
} from "@/screens/auth/layout.styled";
import "react-toastify/dist/ReactToastify.css";
import logo from "@/assets/png/Logo.png";
import { Image } from "@/ui/Image/Image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const EMAIL = "info@mind-money.eu";

  return (
    <Box sx={authLayoutContainerSx}>
      <Box
        sx={authLayoutPictureContainer}
      />
      <Box sx={authLayoutFormContainerSx}>
        <Box>
          <Box component="header" sx={authLayoutHeaderSx}>
            <Image src={logo} alt="logo" />
          </Box>
          <Suspense fallback={<div>Loading...</div>}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              alignContent="flex-start"
            >
              {children}
            </Box>
          </Suspense>
        </Box>

        <Box component="footer" sx={authLayoutFooterSx}>
          <Typography variant="h4" component="span" color="secondary">
            © 2024 MIND MONEY LIMITED
          </Typography>
          <Box display="flex" gap="4px" sx={authLayoutIssueContainerSx}>
            <Typography variant="h4" component="span" color="secondary">
              Have some issue?
            </Typography>
            <Box>
              <Typography variant="h4" component="span" color="secondary">
                Wrote us
              </Typography>{" "}
              <Box
                component="a"
                sx={{ textDecoration: "none" }}
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={authLayoutAdvertScreenSx}>
        <Typography variant="h1" mb="24px">
          Start Investing in global stock markets
        </Typography>
        <Typography variant="h2">
          Mind.money.eu is the easiest place to invest your money and become a
          rich guy. Sign up and get started today free trial fo 14 days!
        </Typography>
      </Box>

    </Box>
  );
}
