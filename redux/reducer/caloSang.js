const caloSang = (state = 0, action) => {
    if (action.type === 'them_calosang') return state+action.calo;
    return state;
};

export default caloSang;