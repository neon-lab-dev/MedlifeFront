import { useEffect } from "react";

const useScrollToTop = (pathname) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

  return { scrollToTop };
};

export default useScrollToTop;