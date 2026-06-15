import { Link } from "react-router-dom";
import { HiOutlineCloudArrowDown, HiArrowLeft } from "react-icons/hi2";
import resumePdf from "../assets/Dada_Damilola_Michael_CV_UIUX 2026.pdf";

const RESUME_FILENAME = "Dada_Damilola_Michael_CV_UIUX_2026.pdf";

export default function ProjectHeader() {
  return (
    <>
      <nav className="navbar project-header">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            Damilola Michael
          </Link>

          <a href={resumePdf} download={RESUME_FILENAME} className="navbar-resume">
            Download Resume
            <span className="navbar-resume-icon">
              <HiOutlineCloudArrowDown size={15} color="#f97316" />
            </span>
          </a>
        </div>
      </nav>

      <div className="project-back-bar">
        <a href="/#projects" className="project-back-link">
          <HiArrowLeft className="project-back-arrow" />
          <span>Back</span>
        </a>
      </div>
    </>
  );
}
