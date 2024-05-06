{
    //---------------

    //---------type guards-----

    //typeof -------> type guard

    type Alphaneumeric = string | number

    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
        if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1+param2
    }else {
        return param1.toString() + param2.toString();
    }
}
const result1 = add('2','4');
console.log(result1);


// in guard

type NormalUser = {
    name: string
};
 type AdminUser = {
    name: string;
    role: 'Admin'
 }

 const getUser = (user: NormalUser | AdminUser)=>{
    if('role' in user){
        console.log(`my name id ${user.name} and my role is ${user.role}`);
    }else{
        console.log(`my name is ${user.name}`);
    }
 }

 const normalUser : NormalUser = {
    name: "Mr. Normal vai"
 }
 const adminUser: AdminUser = {
    name: "Mr. Admin Vai",
    role: "Admin"
 }
 getUser(adminUser)





///---------------    
}