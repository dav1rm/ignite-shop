import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  section: {
    marginTop: '4rem',
    display: 'flex',
    alignItems: 'center',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const ImageContainer = styled('div', {
  position: 'relative',
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 0px 60px 0px rgba(0,0,0,0.8)',

  img: {
    objectFit: 'cover',
  },

  div: {
    position: 'absolute',
    top: 5,
    left: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$purple',
    width: 30,
    height: 30,
    borderRadius: '50%',
    fontWeight: 'bold',
  },

  '&:not(:first-child)': {
    marginLeft: -30,
  },
});
