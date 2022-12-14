import Colour from "../color/napalearncolor";

export default {
  bgColor: {
    width: '100%',
    height: '100%',
    bgColor: Colour.CreamP,
  },

  container: {
    width: '100%',
    marginTop: '24px',
    padding: '12px',
  },

  container1: {
    width: '100%',
    marginTop: '30px',
    paddingLeft: '24px',
    paddingRight: '24px',
  },

  boxText: {
    minWidth: '200px',
    maxWidth: '800px',
    padding: '12px',
    marginTop: '30px',
  },

  boxContent: {
    width: '300px',
    padding: '12px',
  },

  boxContent1: {
    maxWidth: '270px',
    minWidth: '200px',
    backgroundColor: 'white',
    padding: '12px',
    boxShadow: 'md',
    rounded: 'md',
    marginTop: '18px',
  },

  boxProfile: {
    maxwidth: '270px',
    minWidth: '200px',
    padding: '12px',
  },

  devImage: {
    borderRadius: 'full',
    boxSize: '200px',
    minWidth: '200px'
  },

  devText: {
    as: 'b',
    fontSize: '2xl'
  },

  devHeading: {
    marginTop: '32px',
    marginBottom: '5px'
  },

  informationHeadingText: {
    fontSize: '4xl',
    color: '#3E3C6E',
    fontWeight: 'bold'
  },

  informationText: {
    textAlign: 'center',
    padding: '12px'
  },

  startButton: {
    colorScheme: 'white',
    size: 'lg',
    backgroundColor: Colour.FirstPink,
    marginTop: '40px',
    marginBottom: '20px',
    _hover: {
      bg: 'White',
      border: '2px solid',
      color: Colour.FirstPink
    }
  }
}