import '../../styles/DownloadCvButton.css';

const DownloadCVButton = () => {
  return (
    <a
      href="/cv/Augusto_Almiron_CV.pdf"
      download
      className="cv-button"
    >
      <span>Descargar CV</span>
    </a>
  );
};

export default DownloadCVButton;
