const tintColorLight = '#7E78D2';
// const tintColorLight = '#D9EFFC';
const tintColorDark = '#A7A3E0';

const primaryDark = "#3E3F3B"

export default {
  light: {
    text: '#3E3F3B',
    // background: '#F7FFF7',
    background: '#8AA29E',
    backgroundPrimary: '#E3F2FD',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: '#D9EFFC',
    tabBarBackground: '#232323',
    gradient: ['#4c669f', '#3b5998', '#192f6a']
  },
  dark: {
    text: '#FAFAFA',
    background: '#8AA29E',
    backgroundPrimary: primaryDark,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    tabBarBackground: '#364542',
    gradient: ['rgba(61,245,167,1)', 'rgba(9,111,224,1)']
  },
};


// background-image: ;


// background-image: radial-gradient( circle farthest-corner at 10% 20%,   0%,  90% );