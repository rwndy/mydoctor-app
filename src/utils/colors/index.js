const mainColors = {
  green: '#0BCAD4',
  darkBlue: '#112340',
  blue1: '#0066CB',
  grey: '#E9E9E9',
  grey2: '#7D8797',
  grey3: '#EDEEF0',
  blusky200: '#EDFCFD',
  darkBlue2: '#8092AF',
  grey4: '#EDEEF0',
  blue: '#0066CB',
};

export const colors = {
  main: mainColors.green,
  secondary: mainColors.darkBlue,
  tertiary: mainColors.blue,
  white: '#fff',
  disable: mainColors.grey4,
  text: {
    primary: mainColors.darkBlue,
    secondary: mainColors.grey2,
    subTitle: mainColors.darkBlue2,
  },
  label: mainColors.grey2,
  border: {
    primary: mainColors.grey
  },
  button: {
    primary: {
      background: mainColors.green,
      text: '#fff',
    },
    secondary: {
      background: '#fff',
      text: mainColors.darkBlue,
    }
  },
  background: {
    main: mainColors.blusky200
  }
};