import { styled } from "..";

export const Container = styled("aside", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,

  width: "30rem",
  height: "100%",
  backgroundColor: "$gray800",

  padding: "3rem 3rem 3rem",
  paddingTop: "4.5rem",
  display: "flex",
  flex: 1,
  flexDirection: "column",

  header: {
    marginBottom: "2rem",

    button: {
      position: "absolute",
      top: "1.5rem",
      right: "1.5rem",
      background: "transparent",
      border: "none",

      "&:hover": {
        cursor: "pointer",
      },
    },
  },

  section: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },

  footer: {
    display: "flex",
    flexDirection: 'column',

    div: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      small: {
        fontSize: '$sm',
      },
      span: {
        fontSize: '$md',
      },
      b: {
        fontSize: '$md',
      },
      strong: {
        fontSize: '$xl',
        marginTop: "0.25rem",
      }
    },

    button: {
      marginTop: "3.438rem",
    }
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
});

export const ProductItem = styled("article", {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: "1.5rem",
  gap: "1.25rem",

  div: {
    display: "flex",
    flex: 1,
    flexDirection: 'column',
  },

  span: {
    fontSize: '$md',
    color: '$gray300',
    marginBottom: "0.125rem",
  },

  strong: {
    fontSize: '$md',
    color: '$gray100',
    marginBottom: "0.5rem",
  },

  button: {
    width: "4rem",
    height: "1.625rem",
    backgroundColor: "transparent",
    border: 0,
    color: '$green500',
    fontSize: '$sm',
    fontWeight: 'bold',
    textAlign: "start",
    cursor: 'pointer',
  }
})
