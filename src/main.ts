

// export function render(){
//   document.getElementById('app').innerHTML = 'main0';
// }
// render()

// if(import.meta.hot){
//   import.meta.hot.accept((newModule)=>{
//     newModule.render()
//   })
// }

import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount("#app");

