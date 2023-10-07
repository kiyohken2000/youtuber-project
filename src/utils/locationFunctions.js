import * as Location from 'expo-location';

// 皇居の緯度経度
const initialLocation = {
  latitude: 35.685227414646036,
  longitude: 139.75278795749747,
}

const getLocation = async() => {
  let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return initialLocation;
    }
  let location = await Location.getCurrentPositionAsync({});
  const {latitude, longitude} = location.coords
  return {latitude, longitude}
}

const calculateDistance = ({lat1, lon1, lat2, lon2}) => {
  // 緯度経度をラジアンに変換
  const radiansLat1 = (Math.PI / 180) * lat1;
  const radiansLon1 = (Math.PI / 180) * lon1;
  const radiansLat2 = (Math.PI / 180) * lat2;
  const radiansLon2 = (Math.PI / 180) * lon2;

  // 緯度と経度の差を計算
  const deltaLat = radiansLat2 - radiansLat1;
  const deltaLon = radiansLon2 - radiansLon1;

  // Haversine式を使用して距離を計算
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(radiansLat1) * Math.cos(radiansLat2) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // 地球の半径（約6371キロメートル）をかけて距離を計算
  const distance = 6371 * c;
  const roundedDistance = distance.toFixed(3);

  return parseFloat(roundedDistance); // 文字列から数値に変換して返す
}

export { initialLocation, getLocation, calculateDistance }