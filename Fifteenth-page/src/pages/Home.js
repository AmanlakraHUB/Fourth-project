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
        <div className={styles.iconText}>
          <img
            className={styles.tickCircleIcon}
            alt=""
            src="../tickcircle.svg"
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
                <div className={styles.basicSettingsWrapper}>
                  <div className={styles.basicSettings}>Basic Settings</div>
                </div>
              </div>
              <img
                className={styles.untickSquareIcon}
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
                <div className={styles.basicSettingsWrapper}>
                  <div className={styles.basicSettings}>Hero Image</div>
                </div>
              </div>
              <img
                className={styles.untickSquareIcon}
                alt=""
                src="../arrowright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.internshipUrlParent}>
          <div className={styles.basicSettings}>Internship URL</div>
          <div className={styles.textFieldWrapper}>
            <div className={styles.textField}>
              <div className={styles.text6}>radicalx-internship-url</div>
              <img
                className={styles.icons16pxarrowDownFilled}
                alt=""
                src="../icons16pxarrowdownfilled.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.accessParent}>
          <div className={styles.basicSettings}>Access</div>
          <div className={styles.frameParent3}>
            <div className={styles.untickSquareParent}>
              <img
                className={styles.untickSquareIcon}
                alt=""
                src="../unticksquare.svg"
              />
              <div className={styles.text7}>Private Internship</div>
            </div>
            <div className={styles.untickSquareParent}>
              <img
                className={styles.untickSquareIcon}
                alt=""
                src="../unticksquare.svg"
              />
              <div className={styles.text7}>Hidden Internship</div>
            </div>
          </div>
        </div>
        <div className={styles.accessParent}>
          <div className={styles.basicSettings}>Security</div>
          <div className={styles.frameWrapper3}>
            <div className={styles.untickSquareParent}>
              <img
                className={styles.untickSquareIcon}
                alt=""
                src="../unticksquare.svg"
              />
              <div className={styles.text7}>Disable Text Copying</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
