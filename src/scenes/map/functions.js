import axios from "axios";

const apiKey = 'dj00aiZpPUFQMUlhR2xIeGpaQSZzPWNvbnN1bWVyc2VjcmV0Jng9YWM-'
const getAddress = async({latitude, longitude}) => {
  try {
    const url = `https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder?lat=${latitude}&lon=${longitude}&appid=${apiKey}&output=json`
    const { data } = await axios.get(url)
    const { Feature } = data
    const { Property } = Feature[0]
    const { AddressElement } = Property
    const address = AddressElement.map(item => {
      return item.Name
    }).filter(v => v).join(' ')
    return address
  } catch(e) {
    console.log('get address error', e)
    return null
  }
}

export { getAddress }