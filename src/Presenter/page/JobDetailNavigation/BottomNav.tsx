import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { Tab } from "./Tab";
interface BottomNavProps {
  tabs: Tab[];
  activeLink: string;
  onLinkClick: (link: string) => any;
}

export default function BottomNav(props: BottomNavProps) {
  const { activeLink, onLinkClick, tabs } = props;
  return (
    <Paper
      sx={{
        zIndex: 1000,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation showLabels value="Mission">
        {tabs.map((tab) => (
          <BottomNavigationAction
            key={tab.link}
            className={activeLink === tab.link ? "Mui-selected" : ""}
            onClick={() => onLinkClick(tab.link)}
            label={tab.label}
            icon={tab.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
