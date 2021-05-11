import './App.css';
import React from 'react';
import Sound from "react-sound";

const WHITE = 0;
const BLACK = 1;

var running;

const icon = {
  0: "https://www.kaifan.lu/HappyBirthday/img/play.png",
  1: "https://www.kaifan.lu/HappyBirthday/img/pause.png"
  
};

const textPeriod = 60000;

// const sheet = {
//   39: [28.5, 60.5],
//   40: [10, 12.5, 29, 44.5, 61],
//   42: [10.5, 12, 13, 26, 45, 58],
//   44: [2, 11, 18, 26.5, 44, 50, 58.5],
//   45: [27, 59],
//   47: [1, 2.5, 7, 9, 17, 18.5, 23, 25, 43.5, 49, 50.5, 55, 57],
//   49: [5, 21, 33, 38, 41, 42.5, 43, 53],
//   51: [20.5, 37, 38.5, 41.5, 52.5],
//   52: [3, 6, 19, 22, 34, 35, 39, 42, 51, 54],
// };

// const sheet = {
//   40: [1, 1.75, 3, 7, 7.75, 9, 13, 13.75],
//   42: [2, 8, 18],
//   44: [5, 17],
//   45: [4, 11, 16, 21, 23],
//   47: [10, 22],
//   49: [15, 20], 
//   50: [19, 19.75],
//   52: [14],
// };

const sheet_manual = {
  42: [1, 1.75, 3, 7, 7.75, 9, 13, 13.75],
  44: [2, 8, 18],
  46: [5, 17],
  47: [4, 11, 16, 21, 23],
  49: [10, 22],
  51: [15, 20], 
  52: [19, 19.75], 
  54: [14],
  END: 24,
};

const sheet_auto = {
  18: [22],
  23: [2, 11, 23],
  25: [5, 19],
  27: [16],
  28: [17],
  30: [3, 6, 8, 12, 20],
  34: [9],
  35: [15],
  39: [2, 3, 4, 11, 14, 21, 23],
  40: [5, 8, 9, 10, 18, 22],
  42: [1, 1.75, 3, 7, 7.75, 9, 13, 13.75, 15, 16, 17, 20],
  44: [2, 8, 18, 19, 19.75],
  46: [5, 17],
  47: [4, 11, 14, 16, 21, 23],
  49: [10, 22],
  51: [15, 20], 
  52: [19, 19.75],
  54: [14],
  END: 24,
};
const EmptyBlackKey = () => <div className = "EmptyBlackKey">&nbsp;</div>;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      button1: 0,
      running: false,
      auto: true,
      sheet: sheet_auto,
    }
    this.update = () => (
      this.setState({
        time: new Date().valueOf() - this.state.start,
      })
    );
    this.stop = () => {
      clearInterval(running);
      this.setState({
        running: false,
        button1: 0,
        time: 0,
      })
    }
    this.begin = () => (
      this.state.running?
      (
        clearInterval(running),
        this.setState({
          running: false,
          button1: 0,
        })
      ):(
        this.setState({
          running: true,
          button1: 1,
          start: new Date().valueOf() - this.state.time,
        }),
        running = setInterval(this.update, 5)
      )
    )
    this.auto = () => {
      this.setState (
        this.state.auto?
        {
          auto: false,
          sheet: sheet_manual,
        }:{
          auto: true,
          sheet: sheet_auto,
        }
      )
    }
  }

  render = () => {
    return (
      <div className="App">
        <div className = "Holder">
          <div className = "WhiteKeyHolder">
            <Piano keyValue = {16} name = "C" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {18} name = "D" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {20} name = "E" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {21} name = "F" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {23} name = "G" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {25} name = "A" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {27} name = "B" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {28} name = "C" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {30} name = "D" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {32} name = "E" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {33} name = "F" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {35} name = "G" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {37} name = "A" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {39} name = "B" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {40} name = "C" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {42} name = "D" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {44} name = "E" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {45} name = "F" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {47} name = "G" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {49} name = "A" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {51} name = "B" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {52} name = "C" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {54} name = "D" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {56} name = "E" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {57} name = "F" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {59} name = "G" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {61} name = "A" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <Piano keyValue = {63} name = "B" type = {WHITE} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
          </div>
          <div className = "BlackKeyHolder">
            <EmptyBlackKey/>
            <Piano keyValue = {17} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {19} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <Piano keyValue = {22} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {24} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {26} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>

            <EmptyBlackKey/>
            <Piano keyValue = {29} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {31} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <Piano keyValue = {34} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {36} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {38} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>

            <EmptyBlackKey/>
            <Piano keyValue = {41} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {43} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <Piano keyValue = {46} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {48} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {50} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>

            <EmptyBlackKey/>
            <Piano keyValue = {53} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {55} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <EmptyBlackKey/>
            <Piano keyValue = {58} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {60} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
            <Piano keyValue = {62} type = {BLACK} running = {this.state.running} time = {this.state.time} auto = {this.state.auto} sheet = {this.state.sheet}/>
            <EmptyBlackKey/>
          </div>
          <div className = "ButtonHolder">
            <Switch on = {this.state.auto} handleClick = {this.auto}/>
            <div style = {{width: 110, height: 30, float: "left", textAlign: "left"}}>
              &nbsp;&nbsp;{this.state.auto?"自动弹奏":"手动弹奏"}
            </div>
            <div style = {{width: 30, height: 30, float: "left", position: "relative"}}>
              <img alt = "" src = {icon[this.state.button1]} className = "Button" onClick = {this.begin}/>
            </div>
            <div style = {{width: 10, height: 30, float: "left"}}>
              &nbsp;
            </div>
            <div style = {{width: 30, height: 30, float: "left", position: "relative"}}>
              <img alt = "" src = "https://www.kaifan.lu/HappyBirthday/img/stop.png" className = "Button" onClick = {this.stop}/>
            </div>
            <div style = {{width: 120, height: 30, float: "left"}}>
              &nbsp;
            </div>
          </div>
        </div>
        <div className = "ForMobile">
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h1>屏幕太小</h1>
          <h1>排版会乱</h1>
          <h1>请在电脑上打开</h1>
        </div>
      </div>
    );
  }
}

class Text extends React.Component {
  render () {
    let i = 0;
    return (
      <div className = "TextHolder">
        &nbsp;&nbsp;
        {this.props.words.map(item => (
          <span className = "WordHolder" key = {item[0]+"_"+item[1]+"_"+item[2]+"_"+i++}>
            <span className = {this.props.time%textPeriod>item[1]?this.props.time%textPeriod>item[2]?"WordHidding":"WordShown":"WordHidden"}>
              {item[0]}
            </span>
            &nbsp;&nbsp;
          </span>
        ))}
      </div>
    )
  }
}

class Switch extends React.Component {
  render () {
    return (
      <div style = {{width: 50, height: 30, float: "left", position: "relative"}} onClick = {this.props.handleClick}>
        <div style = {{width: 50, height: 30, position: "absolute", top: 0, left: 0, right: 0, bottom: 0}}>
          <svg viewBox = "0 0 50 30">
            <circle cx = "15" cy = "15" r = "15" style = {{fill: "#333333"}}/>
            <circle cx = "35" cy = "15" r = "15" style = {{fill: "#333333"}}/>
            <rect x = "15" y = "0" width = "20" height = "30" style = {{fill: "#333333"}}/>
            <circle cx = "15" cy = "15" r = "14" style = {{fill: "#FEE1E6"}}/>
            <circle cx = "35" cy = "15" r = "14" style = {{fill: "#FEE1E6"}}/>
            <rect x = "15" y = "1" width = "20" height = "28" style = {{fill: "#FEE1E6"}}/>
          </svg>
        </div>
        <div className = {this.props.on?"switchHolderOn":"switchHolderOff"}>
          <svg viewBox = "0 0 30 30">
            <circle cx = "15" cy = "15" r = "12" className = {this.props.on?"switchOn":"switchOff"}/>:
          </svg>
        </div>
      </div>
    );
  }
}

class Piano extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseDown: false,
      mouseDownCount: 0,
      playing: Sound.status.STOPPED,
      volume: 100,
    }
    this.stop = undefined;
    this.handleMouseDown = () => {
      clearTimeout(this.stop);
      this.setState({
        mouseDown: true,
        mouseDownCount: this.state.mouseDownCount+1,
        playing: Sound.status.PLAYING,
      });
      this.stop = setTimeout(() => this.setState({
        mouseDownCount: this.state.mouseDownCount+1,
        playing: Sound.status.STOPPED,
      }), 1000)
      document.addEventListener("mouseup", this.handleMouseUp, true);
    }
    this.handleMouseUp = () => {
      this.setState({
        mouseDown: false,
      });
    }
  }

  render() {
    return (
      <div onMouseDown = {this.handleMouseDown} className = {this.props.type?this.state.mouseDown?"BlackKey_active":"BlackKey":this.state.mouseDown?"WhiteKey_active":"WhiteKey"}>
        {/* {!this.props.type && (
          <Track auto = {this.props.auto} handleMouseDown = {this.handleMouseDown} handleMouseUp = {this.handleMouseUp} mouseDown = {this.state.mouseDown} time = {this.props.time} keyValue = {this.props.keyValue}/>
        )} */}
        <Track running = {this.props.running} sheet = {this.props.sheet} type = {this.props.type} auto = {this.props.auto} handleMouseDown = {this.handleMouseDown} handleMouseUp = {this.handleMouseUp} mouseDown = {this.state.mouseDown} time = {this.props.time} keyValue = {this.props.keyValue}/>
        <span className = "KeyName">{this.props.name}</span>
        <KeySound keyValue = {this.props.keyValue} playing = {this.state.playing} volume = {this.state.volume} mouseDownCount = {this.state.mouseDownCount}/>
      </div>
    );
  }
}

class KeySound extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.mouseDownCount !== nextProps.mouseDownCount;
  }

  render() {
    return (
    <Sound
      url={"https://www.kaifan.lu/happybirthday2u/" + this.props.keyValue + ".mp3"}
      autoLoad={true}
      playStatus={this.props.playing}
      volume={this.props.volume}
      playFromPosition={0}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
    )
  }
}

class Track extends React.Component {
  constructor () {
    super();
    this.lock = true;
  }

  render() {
    return (
      <svg viewBox = {this.props.type?"0 0 13 1000":"0 0 28 1000"} className = "Track">
        {this.props.sheet[this.props.keyValue] && this.props.sheet[this.props.keyValue].map((time) => {
          let t = (this.props.time/625-time)%this.props.sheet.END*125;
          if (this.props.running && this.props.auto && t >= 840 && t < 850 && this.lock) {
            this.lock = false;
            this.props.handleMouseDown();
            setTimeout(() => {
              this.lock = true;
              this.props.handleMouseUp();
            }, 60);
          }
          return t > 0 && t < 845 && 
          (this.props.type?
          <circle key = {this.props.keyValue + "_" + time} cx = "6.5" cy = {t} r = "5" style = {{fill: "#5c65c8"}}/>:
          <circle key = {this.props.keyValue + "_" + time} cx = "14" cy = {t} r = "5" style = {{fill: "#c86a76"}}/>);
        })}
        {this.props.type?
        <rect x="6" y="0" width="1" height="899" style = {{fill: "#5c65c8"}}/>:
        <rect x="13.5" y="0" width="1" height="899" style = {{fill: "#c86a76"}}/>}
        {this.props.type?
        this.props.mouseDown?<rect x="0" y="843" width="13" height="9" style = {{fill: "#5c65c8"}}/>:<rect x="2" y="845" width="9" height="5" style = {{fill: "#5c65c8"}}/>:
        this.props.mouseDown?<rect x="7.5" y="843" width="13" height="9" style = {{fill: "#c86a76"}}/>:<rect x="9.5" y="845" width="9" height="5" style = {{fill: "#c86a76"}}/>}
      </svg>
    )
  }
}

export default App;
