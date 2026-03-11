const Footer = () => {
  return (
    <>
      {/* footer copyright */}
      <div className="footer-copyright text-center pt-25 pb-25 bg-white">
        <span>
          © Copyright <span className="fw-bold">{ (new Date().getFullYear()) }</span> - Faliana RANAIVOSEHENO
        </span>
      </div>
    </>
  );
};

export default Footer;
