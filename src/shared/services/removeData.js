import AsyncStorage from '@react-native-async-storage/async-storage';

const removeData = async (key) => {
    try {
      return await AsyncStorage.removeItem(key)
    } catch (e) {
      console.log("removeData, ha ocurrido un error en la eliminacion")
    }
}

export default removeData;