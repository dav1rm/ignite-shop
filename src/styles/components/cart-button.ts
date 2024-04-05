import { styled } from '..';

export const Container = styled('button', {
  variants: {
    color: {
      dark: {
        backgroundColor: '$gray800',
      },
      light: {
        backgroundColor: '$green500',
      },
    },
    size: {
      small: {
        height: '3rem',
        width: '3rem',
      },
      medium: {
        height: '3.5rem',
        width: '3.5rem',
      },
    },
  },

  alignItems: 'center',
  justifyContent: 'center',

  background: '$green300',
  padding: '0.75rem',
  borderRadius: 6,
  border: 'none',

  '&:hover': {
    cursor: 'pointer',
  },

  position: 'relative',

  div: {
    backgroundColor: '$green500',
    height: '1.5rem',
    width: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',

    position: 'absolute',
    right: -10,
    top: -6,
  },

  span: {
    fontSize: '$sm',
    fontWeight: 'bold',
    color: '$white',
  },
});
