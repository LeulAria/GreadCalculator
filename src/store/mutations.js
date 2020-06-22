export const TOGGLE_SETTING = (state) => {
	state.app_setting = !state.app_setting;
};

// Semister state mutations
export const CREATE_NEW_SEMISTER = (state, id) => {
	state.semisters.push({
		id,
		cources: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
		gread: 0.0,
	});
};

export const DELETE_SEMISTER = (state, id) => {
	state.semisters = state.semisters.filter((s) => s.id !== id);
	state.semisters.forEach((s, i) => {
		s.id = ++i;
	});
};

export const CREATE_NEW_COURCE = (state, payload) => {
	state.semisters[payload.sid].cources.push({ id: payload.id });
};

export const DELETE_COURCE = (state, { id, sid }) => {
	--sid;
	state.semisters[sid].cources = state.semisters[sid].cources.filter(
		(c) => c.id !== id
	);
	state.semisters[sid].cources.forEach((c, i) => {
		c.id = ++i;
	});

	if (state.semisters.length > 0) {
		let cgpaSum = state.semisters.reduce(
			(acc, semister) => (acc += semister.gread),
			0
		);
		state.cgpa = cgpaSum;
	} else {
		state.cgpa = 4;
	}
};

export const UPDATE_COURCE_INFO = (state, { courceInfo, sid, cid }) => {
	--sid;
	--cid;
	state.semisters[sid].cources[cid].courceInfo = courceInfo;
};

export const CALCULATE_SEMISTER_GREAD = (state, sid) => {
	--sid;

	state.semisters[sid].gread = calculateSemisterGread(state.semisters[sid]);

	state.cgpa = calculateCGPA(state.semisters);
};
const calculateSemisterGread = (semister) => {
	let totalCourceGread = 0;
	semister.cources.forEach((cource) => {
		totalCourceGread += cource.courceInfo ? +cource.courceInfo.courceCredit : 0;
	});
	return totalCourceGread;
};

const calculateCGPA = (semisters) => {
	return semisters.reduce((acc, semister) => (acc += semister.gread), 0);
};
