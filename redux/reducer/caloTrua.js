const caloTrua = (state = 0, action) => {
    if (action.type === 'them_calotrua') return state+action.calo;
    return state;
};

export default caloTrua;