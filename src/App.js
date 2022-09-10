import "./App.css";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import NearMeIcon from "@mui/icons-material/NearMe";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function App() {
  return (
    <div className="App">
      <div className="cityTempContainer">
        <div className="container1">
          <div className="handyFunctions">
            <div className="addButton">
              <SvgIcon component={AddCircleOutlineOutlined}></SvgIcon>
            </div>
            <div className="pageToggle">
              <SvgIcon component={HdrStrongIcon}></SvgIcon>
            </div>
            <div className="tempToggle">
              &deg;C&nbsp;<SvgIcon component={ToggleOffIcon}></SvgIcon>
              &nbsp;&deg;F
            </div>
          </div>
          <div className="cityDetails">
            <div className="cityName">
              <div className="t11">
                <div className="cityText">
                  <SvgIcon component={NearMeIcon} fontSize="small"></SvgIcon>
                  &nbsp;&nbsp;New York, USA
                </div>
                <div className="cityTime">
                  <SvgIcon component={WbSunnyIcon} fontSize="small"></SvgIcon>
                  &nbsp;&nbsp;07:19
                </div>
              </div>
              <div className="t12">
                <div className="cityText1"> Today 28 Sept</div>
                <div className="cityTime">
                  <SvgIcon
                    component={WbTwilightIcon}
                    fontSize="small"
                  ></SvgIcon>
                  &nbsp;&nbsp;19:32
                </div>
              </div>
            </div>
          </div>
          <div className="temperature">
            <div className="container6">
              <div className="leftArrow">
                <SvgIcon component={NavigateBeforeIcon}></SvgIcon>
              </div>
              <div className="tempText">27&deg;</div>
              <div className="rightArrow">
                <SvgIcon component={NavigateNextIcon}></SvgIcon>
              </div>
            </div>
            <div className="container7">
              <SvgIcon component={WbSunnyIcon}></SvgIcon>&nbsp;&nbsp;Sunny
            </div>
          </div>
        </div>
      </div>
      <div className="detailsConatiner">
        <div className="userWelcome">
          <div className="container3">
            <div className="container4">
              <div className="welcomeText">
                <span className="t1">Welcome back Isabella!</span>
                <br />
                <span className="t2">
                  Check out today's weather Information
                </span>
              </div>
              <div className="userProfile">
                <div className="moreOption">
                  <SvgIcon component={MoreHorizIcon}></SvgIcon>
                </div>
                <div className="userPic">
                  <SvgIcon component={AccountCircleIcon}></SvgIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="futurePrediction">
          <div className="container2">
            <div className="extraInfo"></div>
            <div className="chart"></div>
          </div>
        </div>
        <div className="todaysDetails">
          <div className="moreDetailText">
            <span>More details of today's weather</span>
          </div>
          <div className="detailsChart">
            <div className="container5">
              <div className="row1">
                <div className="col1"></div>
                <div className="col2"></div>
                <div className="col3"></div>
              </div>
              <div className="row2">
                <div className="col4"></div>
                <div className="col5"></div>
                <div className="col6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
