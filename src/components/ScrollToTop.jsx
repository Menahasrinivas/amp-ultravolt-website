import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopMenu() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // instant venumna remove pannalaam
    });
  }, [pathname]);

  return null;
}