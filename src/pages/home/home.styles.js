export default {
  homeCards: {
    zIndex: 1,
    margin: '0 1rem',
    position: 'relative',
  },
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    margin: '3rem 0 5rem',
  },
  homeTitle: {
    fontWeight: 400,
    transition: 'font-size .75s ease-in-out 25ms letterSpacing .75s ease-in-out 25ms',
  },
  homeRight: {
    margin: '0 1rem',
    position: 'relative',
  },
  // homeSpinner1: {
  //   position: 'absolute',
  //   top: '22vh',
  //   left: '15%',
  // },
  refTransform: {
    position: 'fixed',
    top: '22vh',
    zIndex: -1,
    letterSpacing: '1.5px',
    opacity: '1',
    transition: 'all .85s ease 50ms',
    fontSize: '2.75rem',
    color: '#009688',
    fontWeight: 400,
    transform: 'translate(-40vw,3.5vh) rotate(-3.5deg) rotate(3.5deg)',
  },
  refInit: {
    transition: 'all .85s ease-out 50ms',
    fontSize: '3.75rem',
    letterSpacing: '0',
    opacity: '.85',
    fontWeight: 400,
    color: '#009688',
    zIndex: 0,
    transform: 'translateX(0)',
    position: 'initial',
  },
};
