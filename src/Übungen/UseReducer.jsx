

export function counterReducer(state, action) {
  switch (action.type) {
    case 'plus5':
      return { count: state.count + 5 };
    case 'minus5':

      return { count: state.count - 5 };
    case 'increment':

      return { count: state.count + 1 };
    case 'decrement':

      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:

      return state;
  }
}