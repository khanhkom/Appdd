import { AsyncStorage } from 'react-native';
const saveFoodSang = async (foodArray) => {
    await AsyncStorage.setItem('foodsang', JSON.stringify(foodArray));
};

export default saveFoodSang;