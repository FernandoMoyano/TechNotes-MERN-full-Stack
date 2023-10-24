import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigation, useLocation } from "react-router-dom";

const DashFooter = () => {
  const content = (
    <footer className="dash-footer">
      <p>Usuario actual:</p>
      <p>Estado</p>
    </footer>
  );
  return content;
};

export default DashFooter;
