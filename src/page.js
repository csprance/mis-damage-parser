import parse from './parseDamageLog';
import mockDamageLog from '../test/mockDamageLog';

function show() {
  console.log(parse(mockDamageLog));
  const newDiv = document.createElement('div');
  const add = document.createTextNode(JSON.stringify(parse(mockDamageLog)));
  newDiv.appendChild(add);
  document.body.appendChild(newDiv);
}

show();

export default show;
