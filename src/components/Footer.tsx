import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="d-flex gap-3 justify-content-center">
        <Link to={'/'}>Home</Link>
        <Link to={'/imprint'}>Impressum</Link>
        <Link to={'/dpd'}>Datenschutz</Link>
      </div>
      <div className="d-flex gap-3 justify-content-center">
        <img
          alt="erecht24 Agentur-Siegel"
          src="/erecht24-agentur-siegel-dark-190x80.png"
        />
        <img alt="exali Siegel" src="/siegel_exali_72x80.png" />
      </div>
      <p className="copyright">Copyright © 2024 – andreiSee</p>
    </>
  );
};

export default Footer;
