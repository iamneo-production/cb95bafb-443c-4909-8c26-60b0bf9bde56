export const Incremant = () => async (dispatch) => {
    dispatch({
      type: "Inc"
    });
  };
  export const Decremant = () => async (dispatch) => {
    dispatch({
      type: "Dec"
    });
  };