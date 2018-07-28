import * as appClass  from './App'

let app = new appClass.App();

console.log(`What Say You:${app.PlayMessage()}`)
console.log(`json.app:${JSON.stringify(app)}, propName:${app.propName}`);

const myNewApp = <appClass.App>({port:3004});

console.log(`json.myNewApp:${JSON.stringify(myNewApp)}, propName:${myNewApp.propName}`);
