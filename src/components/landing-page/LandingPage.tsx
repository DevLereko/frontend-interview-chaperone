import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../side-bar/SideBar";

export default function LandingPage() {
  return (
    <Box>
      <SideBar />
      <Outlet />
    </Box>
  );
}
