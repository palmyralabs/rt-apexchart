import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import DynamicMenu from "../wire/DynamicMenu";
import { Sidebar } from "./Sidebar";
import Topbar from "./Topbar";
// import DynamicMenu from "../../components/DynamicMenu";

interface MainLayoutInput {
  sideBarWidth?: string,
  appTitle: string
}

const MainLayout = (props: MainLayoutInput) => {
  var sideWidth = props.sideBarWidth;
  if (!sideWidth) {
    sideWidth = '260px';
  }


  const { width } = useWindowSize();
  const [mobileMode, setMobileMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const responsive = width < 900;

  useEffect(() => {
    setMobileMode(responsive);
  }, [responsive, setMobileOpen])

  const display = mobileMode ? "block" : "none";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} display={display} />
      <Sidebar
        SideMenu={DynamicMenu}
        appTitle={props.appTitle} width={sideWidth} mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen} responsive={responsive} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: '16px', md: '28px' },
          width: `calc(100%)`,
          minHeight: "calc(100vh - 60px)",
          marginTop: '60px',
          boxSizing: 'border-box',
          backgroundColor: 'var(--body-bgcolor, #f5f7fb)'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export { MainLayout };
export type { MainLayoutInput };
