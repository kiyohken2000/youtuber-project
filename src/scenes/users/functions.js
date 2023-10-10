const apiKey = 'AIzaSyAJOuxtgOwWS8Ov5UlB1ziKef4R_MSc_Qk'
const sheetUrl = '18Gjjc1uf6n3SvLSsOM154yql2LevMjePVuMCybXIxX8'
const sheetName = 'users'

const dataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetUrl}/values/${sheetName}?valueRenderOption=FORMATTED_VALUE&key=${apiKey}`

const formatData = ({data}) => {
  const keys = data.values[0];
  const _data = data.values.slice(1);
  const obj = _data.map(arr => Object.assign({}, ...keys.map((k, i) => ({ [k]: arr[i] }))));
  return obj
}

export { dataUrl, formatData }