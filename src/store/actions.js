export const toggleSetting = ({ commit }) => {
	commit('TOGGLE_SETTING');
};

// Semister actions
export const createSemister = ({ state, commit }) => {
	let id = state.semisters.length;
	commit('CREATE_NEW_SEMISTER', ++id)
};

export const deleteSemister = ({ commit }, id) => {
	commit('DELETE_SEMISTER', id)
};

// Semister Cources actions
export const addCource = ({ state, commit }, sid) => {
	--sid;
	let id = state.semisters[sid].cources.length;
	commit('CREATE_NEW_COURCE', {sid, id: ++id});
};

export const deleteCource = ({ commit }, cids) => {
	commit('DELETE_COURCE', cids)
};

export const updateCourceInfo = ({ dispatch, commit }, info) => {
	commit('UPDATE_COURCE_INFO', info);
	dispatch('calculateSemisterGread', info.sid)
};

export const calculateSemisterGread = ({ commit }, sid) => {
	commit('CALCULATE_SEMISTER_GREAD', sid)
};
