const nameVar='Guy';
console.log('nameVar',nameVar);

let nameLet = 'jen';
console.log('nameLet',nameLet);
// Cannot reassign let nameLet='guy'
const nameConst='Frank';
console.log('nameConst', nameConst);
// Cannot change const

const fullName = 'Guy Pender';
if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName); // let is block scoped and cannot be accessed UNLIKE var
