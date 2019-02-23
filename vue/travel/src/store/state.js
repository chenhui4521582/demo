import { LocalStorage } from '@util/util'
let defaultCity = '北京'
try {
  if (LocalStorage.get('city')) {
    defaultCity = LocalStorage.get('city')
  }
} catch (e) {
  console.log(' no error ')
}
let state = {
  city: defaultCity
}
export default state
