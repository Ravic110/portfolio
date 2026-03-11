import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    {
      if(isLoading) {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    }
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <div id={`${isLoading ? "preloader" : "preloaded"}`}>
        <div className="loader_line" />
      </div>
      {/* /PRELOADER */}
    </>
  );
};

export default Preloader;
