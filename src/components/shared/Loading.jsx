import { PacmanLoader } from "react-spinners";
import { useEffect } from "react";

let activeLoadingCount = 0;
let originalBodyOverflow = "";
let originalHtmlOverflow = "";

const Loading = () => {
  useEffect(() => {
    const { body, documentElement } = document;

    if (activeLoadingCount === 0) {
      originalBodyOverflow = body.style.overflow;
      originalHtmlOverflow = documentElement.style.overflow;
    }

    activeLoadingCount += 1;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    return () => {
      activeLoadingCount -= 1;

      if (activeLoadingCount <= 0) {
        activeLoadingCount = 0;
        body.style.overflow = originalBodyOverflow;
        documentElement.style.overflow = originalHtmlOverflow;
      }
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
        <PacmanLoader color="#00BFFF" size={50} />
      </div>
    </>
  );
};

export default Loading;
