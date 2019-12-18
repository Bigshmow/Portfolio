import style from './style';

const s = Object.create(style);

// Brand Colors
// #209CEE - main big blue
// #09121D - 1st text
// #0E476E - secondary deep blue
// #11BBD6 - hover
// #ED981F - button/accent
// #A15F00 - tertiary/accent
// #F2FEFF - Background && 2nd text

s.root = {
  fontFamily: 'Gill Sans, sans-serif',
  fontWeight: '300',
  fontSize: '16px',
  backgroundColor: '#F2FEFF'
  // letterSpacing: '0.025em',
  // padding: '3vh 0 12vh 0',
  // width: '500px',
  // // use responsive max-width to simulate padding/margin to allow
  // // space for vertical scroll bar without creating horizontal scroll bar
  // // (if there is padding, the window will scroll horizontally to show the padding)
  // maxWidth: 'calc(100vw - 40px)',

  // center based on vw to prevent content jump when vertical scroll bar show/hide
  // note: vw/vh include the width of scroll bars. Note that centering using margin auto
  // or % (which doesn't include scroll bars, so changes when scroll bars shown) causes a page jump
  // position: 'relative',
  // left: '50vw',
  // WebkitTransform: 'translate(-50%, 0)',
  // MozTransform: 'translate(-50%, 0)',
  // msTransform: 'translate(-50%, 0)',
  // OTransform: 'translate(-50%, 0)',
  // transform: 'translate(-50%, 0)',

  // WebkitTextSizeAdjust: 'none',
  // MozTextSizeAdjust: 'none',
  // msTextSizeAdjust: 'none',
  // textSizeAdjust: 'none',
};

s.dashboard = {
  color: '#09121D',
  backgroundColor: '#F2FEFF'
};

export default s;
