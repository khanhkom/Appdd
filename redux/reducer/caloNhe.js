const caloNhe = (state = 0, action) => {
    if (action.type === 'them_calonhe') return state+action.calo;
    return state;
};

export default caloNhe;