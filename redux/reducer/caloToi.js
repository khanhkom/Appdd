const caloToi = (state = 0, action) => {
    if (action.type === 'them_calotoi') return state+action.calo;
    return state;
};

export default caloToi;