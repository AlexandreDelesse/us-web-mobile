import { Outlet, useLocation, useNavigate } from "react-router-dom";
import RestoreIcon from "@mui/icons-material/Restore";
import InfoIcon from "@mui/icons-material/Info";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import BottomNav from "./BottomNav";

export default function JobDetailNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentPath = pathname.split("/").pop();
  const tabs = [
    {
      link: "detail",
      label: "Mission",
      icon: <InfoIcon />,
    },
    {
      link: "detailEditable",
      label: "Details",
      icon: <RestoreIcon />,
    },
    {
      link: "signature",
      label: "Signature",
      icon: <DriveFileRenameOutlineIcon />,
    },
  ];

  const onLinkClick = (link: string) => {
    navigate(link, { replace: true });
  };

  return (
    <div>
      <Outlet />
      <BottomNav
        tabs={tabs}
        activeLink={currentPath || ""}
        onLinkClick={onLinkClick}
      />
    </div>
  );
}
