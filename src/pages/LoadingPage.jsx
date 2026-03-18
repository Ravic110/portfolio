import { useEffect, useState } from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`overlay ${isLoading ? "d-block" : "d-none"}`}>
      <div className="full_page">
        <div className="dots-container">
          <div className="dots" />
          <div className="dots" />
          <div className="dots" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
