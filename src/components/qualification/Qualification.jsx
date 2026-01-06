import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          {/* ================= EDUCATION ================= */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* LEFT */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Computer Science and Engineering
                </h3>
                <span className="qualification__subtitle">
                  GIFT Autonomous (Bhubaneswar)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Expected Graduation 2026
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Intermediate (12th)</h3>
                <span className="qualification__subtitle">
                  S.S High School Alouli (Khagariya)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
            </div>

            {/* LEFT */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Matriculation (10th)</h3>
                <span className="qualification__subtitle">
                  S.S High School Alouli (Khagariya)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* LEFT */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Python with Data Analytics (Internship)
                </h3>
                <span className="qualification__subtitle">
                  JSpiders – Training & Development Center (Bhubaneswar)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Oct 2025 (Ongoing....)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Generative AI (Internship)
                </h3>
                <span className="qualification__subtitle">
                  Oretes Consulting Pvt Ltd (Bhubaneswar)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2024 - July 2024
                </div>
              </div>
            </div>

            {/* LEFT */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Java (Internship)</h3>
                <span className="qualification__subtitle">
                  TechZex Software Pvt Ltd (Bhubaneswar)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June 2023 - July 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
