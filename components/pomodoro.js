import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Colour from "../color/napalearncolor";

// pomodoro clock function for music page
class Pomodoro extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLen: "5",
      sessionLen: "25",
      sesTimeLeft: { nice: "25:00", raw: 25 * 60 },
      timerPaused: true,
      breakStarted: false
    };
    this.timer;
  }
  // session time 
  updateSession(val) {
    if (this.timer) {
      this.timer.clearTimer();
    }
    this.setState({ sessionLen: val, sesTimeLeft: { nice: val, raw: parseInt(val) * 60 } });
  }
  // break time
  updateBreak(val) {
    if (this.timer) {
      this.timer.clearTimer();
    }
    this.setState({ breakLen: val });
    if (this.state.breakStarted) {
      this.setState({ sesTimeLeft: { nice: val, raw: parseInt(val) * 60 } })
    }
  }

  handleClick() {
    let { timerPaused, sesTimeLeft } = this.state;

    if (timerPaused) {
      this.timer = new Timer(sesTimeLeft.raw);
      this.timer.start(this.printT.bind(this), () => this.switchClock());
    } else {
      this.timer.clearTimer();
    }
    this.setState({ timerPaused: !timerPaused });
  }

  switchClock() {
    let { breakLen, sessionLen, breakStarted } = this.state;
    const duration = breakStarted ? sessionLen : breakLen;
    this.timer = new Timer(parseInt(duration) * 60);
    this.timer.start(this.printT.bind(this), () => this.switchClock());
    this.setState({ breakStarted: !breakStarted });
  }

  printT(endAt) {
    const timeDiffinSec = Math.ceil((endAt - (new Date()).getTime()) / 1000);
    const min = Math.floor(timeDiffinSec / 60);
    const sec = timeDiffinSec % 60;
    this.setState({
      sesTimeLeft:
      {
        nice: min + ':' + (sec < 10 ? '0' + sec : sec),
        raw: timeDiffinSec
      }
    });
  }

  render() {
    let { timerPaused, sessionLen, sesTimeLeft, breakStarted, breakLen } = this.state;
    let display = sesTimeLeft.nice;

    const sessionLenInSec = parseInt(sessionLen) * 60;
    const breakLenInSec = parseInt(breakLen) * 60;

    let title = 'Session:', fillClass = 'fill default', percent;
    if (breakStarted) {
      title = 'Break!';
      fillClass = 'fill break';
      percent = (breakLenInSec - sesTimeLeft.raw) / breakLenInSec * 100;
    } else {
      percent = (sessionLenInSec - sesTimeLeft.raw) / sessionLenInSec * 100;
    }

    let disableSes, disableBreak;
    if (!timerPaused) {
      disableSes = disableBreak = true;
    } else if (!this.timer) {
      disableSes = disableBreak = false;
    } else {
      if (breakStarted) {
        disableBreak = false;
        disableSes = true;
      } else {
        disableSes = false;
        disableBreak = true;
      }
    }

    let box = {
      width: "200px",
      height: "100px",
      marginTop: "8px",
      padding: "16px",
      color: Colour.Black,
      background: Colour.FirstPink,
      borderRadius: "90px",
      border: "6px solid",
      borderColor: Colour.White,
      fontSize: "36px",
      fontWeight: "extrabold",
    }
    {/*Show pomodoro clock */ }
    return (
      <div>
        <Heading size='lg' color={Colour.Darkblue} marginTop={5} align='center'>Set timer</Heading>
        <Center>
          <Flex direction='column'>
            <Flex direction='row'>
              <Text fontSize='18px' fontWeight='bold' color={Colour.Darkblue} marginRight={5} >BREAK LENGTH</Text>
              <ClockSetting disabled={disableBreak} handle={this.updateBreak.bind(this)} pos="pull-left" val={this.state.breakLen} />
            </Flex>
            <Flex direction='row'>
              <Text fontSize='18px' fontWeight='bold' color={Colour.Darkblue} marginRight={2} >SESSION LENGTH</Text>
              <ClockSetting disabled={disableSes} handle={this.updateSession.bind(this)} pos="pull-right" val={this.state.sessionLen} />
            </Flex>
          </Flex>
        </Center>
        <div className="clearfix"></div>
        <div id="clock" onClick={this.handleClick.bind(this)}>
          <div className="inner-border"></div>
          <div className={fillClass} style={{ height: percent + '%' }}></div>
          <div className="title-label" align='center'></div>
          <Text align='center' fontSize='2xl' fontWeight='bold' color={Colour.Darkblue} >{title}</Text>
          <div id="time-figure">
            <Center>
              <Box sx={box} align='center' _hover={{ color: Colour.Darkblue }}>{display}</Box>
            </Center>
            <Text align='center' fontSize='14px' fontWeight='bold' color={Colour.Darkblue} marginTop={2}>Please click above to start timer!</Text>
          </div>
        </div>
      </div>
    )
  }
}

class ClockSetting extends React.Component {
  constructor() {
    super();
  }

  handleChange(e) {
    const val = e.target.value;
    this.props.handle(val);
  }

  render() {
    let { pos, label, disabled, val } = this.props;
    let disable = disabled ? 'disabled' : '';
    return (
      <label className={pos}> {label}
        <input disabled={disable} value={val} onChange={this.handleChange.bind(this)}
          className="form-control clockSetting input-lg" type="number" min="1" max="60" />
      </label>
    )
  }
}

class Timer {
  constructor(sec) {
    this.duration = sec || 0;
    this.timerID;
  }

  start(runTask, callback) {
    const endAt = (new Date()).getTime() + this.duration * 1000; //timestamp of end time
    runTask(endAt);
    this.timerID = setInterval((() => {
      if ((new Date()).getTime() <= endAt) {
        runTask(endAt);
      } else {
        this.clearTimer();
        if (typeof callback === "function") {
          callback();
        }
      }
    }).bind(this), 1000)
  }

  clearTimer() {
    clearInterval(this.timerID);
  }
}

export default Pomodoro;