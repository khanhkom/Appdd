import {combineReducers} from 'redux';
import caloSang from './caloSang';
import caloTrua from './caloTrua';
import caloToi from './caloToi';
import caloNhe from './caloNhe';
const reducer = combineReducers({
    calosang:caloSang,
    calotrua:caloTrua,
    calotoi: caloToi,
    calonhe: caloNhe,
});
export default reducer
