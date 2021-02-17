export default (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_PLAY':
			return !state;
		default:
			return state;
	}
};