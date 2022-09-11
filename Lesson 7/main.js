const sum = (a,b) => {
    return a+b
}
//For/of
let arr = [1,2,3,4,5]
/**
 * Truy cap thong qua vi tri trong mang (index)
 */
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// Truy cap truc tiep den gia tri cua phan tu
for (let x of arr) {
    console.log(x);
}
// Default parameter
const initApp = (theme = 'light_mode', endpoint = '') => {
    console.log('ung dung dang o trang thai:', theme)
    console.log('duong dan hien tai: https://example.com' + endpoint)
};
initApp();
initApp('dark_mode', 'login')
let name = 'Linh';
let str = `Hello ${name}`;
console.log(str);
let students = ['Viet', 'Vy', 'Linh', 'Long', 'Nam'];
for (let x of students) {
    document.body.innerHTML += `<p>Hello ${x}</p>`
}