import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.iconTextParent}>
        <div className={styles.iconText}>
          <img
            className={styles.tickCircleIcon}
            alt=""
            src="../tickcircle.svg"
          />
          <div className={styles.text}>Internship Description</div>
        </div>
        <div className={styles.iconText}>
          <img
            className={styles.tickCircleIcon}
            alt=""
            src="../tickcircle.svg"
          />
          <div className={styles.text}>Internship Guide</div>
        </div>
        <div className={styles.iconText2}>
          <img
            className={styles.tickCircleIcon}
            alt=""
            src="../untickcircle.svg"
          />
          <div className={styles.text}>Surveys</div>
        </div>
        <div className={styles.iconText3}>
          <img
            className={styles.tickCircleIcon}
            alt=""
            src="../untickcircle.svg"
          />
          <div className={styles.text}>Settings</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.iconTextWrapper}>
          <div className={styles.iconText}>
            <img
              className={styles.arrowLeftIcon}
              alt=""
              src="../arrowleft.svg"
            />
            <div className={styles.text}>Back</div>
          </div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text5}>Add New Internship</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.continueToNextStepParent}>
            <div className={styles.continueToNext}>Continue to Next Step</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="../arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.menuWrapper}>
            <img className={styles.tickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.survey1Wrapper}>
                  <div className={styles.survey1}>Survey 1</div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon1}
                alt=""
                src="../arrowright1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.menuWrapper}>
            <img className={styles.tickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module1}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.survey1Wrapper}>
                  <div className={styles.survey1}>Survey 2</div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon1}
                alt=""
                src="../arrowright1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.assessment}>
          <div className={styles.additemParent}>
            <img
              className={styles.tickCircleIcon}
              alt=""
              src="../additem.svg"
            />
            <div className={styles.addSurvey}>Add Survey</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.survey1Parent}>
          <div className={styles.survey1}>Survey 1</div>
          <div className={styles.textFieldParent}>
            <div className={styles.textField}>
              <div className={styles.text6}>Question</div>
              <img
                className={styles.icons16pxarrowDownFilled}
                alt=""
                src="../icons16pxarrowdownfilled.svg"
              />
            </div>
            <div className={styles.professionPills}>
              <img
                className={styles.addSquareIcon}
                alt=""
                src="../addsquare.svg"
              />
              <div className={styles.addQuestion}>Add Question</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
