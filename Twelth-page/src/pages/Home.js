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
        <div className={styles.iconText1}>
          <img
            className={styles.tickCircleIcon}
            alt=""
            src="../untickcircle.svg"
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
        <div className={styles.iconText2}>
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
          <div className={styles.iconText1}>
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
                <div className={styles.overviewWrapper}>
                  <div className={styles.overview}>Overview</div>
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
                <div className={styles.overviewWrapper}>
                  <div className={styles.overview}>Schedule</div>
                </div>
              </div>
              <img
                className={styles.arrowRightIcon1}
                alt=""
                src="../arrowright1.svg"
              />
            </div>
            <div className={styles.assessmentParent}>
              <div className={styles.assessment}>
                <div className={styles.menuParent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="../menu2.svg"
                  />
                  <div className={styles.duration}>Duration</div>
                </div>
              </div>
              <div className={styles.assessment}>
                <div className={styles.menuParent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="../menu2.svg"
                  />
                  <div className={styles.duration}>Timeline</div>
                </div>
              </div>
              <div className={styles.assessment}>
                <div className={styles.menuParent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="../menu2.svg"
                  />
                  <div className={styles.duration}>Deliverables</div>
                </div>
              </div>
              <div className={styles.assessment3}>
                <div className={styles.menuParent}>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="../addsquare.svg"
                  />
                  <div className={styles.duration}>Add More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.menuWrapper}>
            <img className={styles.tickCircleIcon} alt="" src="../menu.svg" />
          </div>
          <div className={styles.module}>
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper1}>
                <div className={styles.overviewWrapper}>
                  <div className={styles.overview}>Resources</div>
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
        <div className={styles.assessment4}>
          <div className={styles.menuParent}>
            <img
              className={styles.tickCircleIcon}
              alt=""
              src="../additem.svg"
            />
            <div className={styles.duration}>Add Chapter</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.durationParent}>
          <div className={styles.duration1}>Duration</div>
          <div className={styles.textField}>
            <div className={styles.text6}>Description</div>
            <img
              className={styles.icons16pxarrowDownFilled}
              alt=""
              src="../icons16pxarrowdownfilled.svg"
            />
          </div>
          <div className={styles.dragNDropToUploadYourVidParent}>
            <div className={styles.continueToNext}>
              Drag n drop to upload your video
            </div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="../documentupload.svg"
            />
          </div>
          <div className={styles.textParent}>
            <div className={styles.text7}>Filename.pptx</div>
            <img className={styles.arrowRightIcon} alt="" src="../close.svg" />
          </div>
        </div>
        <div className={styles.durationParent}>
          <div className={styles.duration1}>Timeline</div>
          <div className={styles.textField}>
            <div className={styles.text6}>Description</div>
            <img
              className={styles.icons16pxarrowDownFilled}
              alt=""
              src="../icons16pxarrowdownfilled.svg"
            />
          </div>
          <div className={styles.dragNDropToUploadYourVidParent}>
            <div className={styles.continueToNext}>
              Drag n drop to upload your video
            </div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="../documentupload.svg"
            />
          </div>
          <div className={styles.textParent}>
            <div className={styles.text7}>Filename.pptx</div>
            <img className={styles.arrowRightIcon} alt="" src="../close.svg" />
          </div>
        </div>
        <div className={styles.durationParent}>
          <div className={styles.duration1}>Deliverables</div>
          <div className={styles.textField}>
            <div className={styles.text6}>Description</div>
            <img
              className={styles.icons16pxarrowDownFilled}
              alt=""
              src="../icons16pxarrowdownfilled.svg"
            />
          </div>
          <div className={styles.dragNDropToUploadYourVidParent}>
            <div className={styles.continueToNext}>
              Drag n drop to upload your video
            </div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="../documentupload.svg"
            />
          </div>
          <div className={styles.textParent}>
            <div className={styles.text7}>Filename.pptx</div>
            <img className={styles.arrowRightIcon} alt="" src="../close.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
