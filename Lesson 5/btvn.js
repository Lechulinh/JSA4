// // 1.1
const user = JSON.parse(localStorage.getItem('users'));
for (let x of users) {
  if (x.name == 'Phuoc') {
    x.name = 'Ha';
  }
}

console.log(users);
localStorage.setItem('users', JSON.stringify(users));

// 1.2
const users = JSON.parse(localStorage.getItem('users'));
for (let i = 0; i < users.length; ++i) {
  if (users[i].name == 'Phuoc') {
    users.splice(i, 1);
  }
}

console.log(users);
localStorage.setItem('users', JSON.stringify(users));

// 1.3
localStorage.removeItem('users');
// 2
const lyric = ['dong 1', 'dong 2', 'dong 3', 'dong 4', 'dong 5'];
let i = 0;
function showLyric() {
  console.log(lyric[i]);
  ++i;
}
setInterval(showLyric, 1000);