export default (state = {}, action) => {
	const { wordString, id } = action;
	switch (action.type) {
		case 'ADD_WORD':
			return Object.assign({}, state, {
				[id]: {
					wordString: wordString,
					id: id
				}
			});
    case 'DELETE_WORD':
      let newState = {...state};
      delete newState[id];
      return newState;
		// case 'DISPLAY_WORDS':
    //   let newState2 = {...state};
    //   return newState2;
			default:
				return state;
	}
};