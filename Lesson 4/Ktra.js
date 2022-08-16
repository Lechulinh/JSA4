function findEven(params) {
    for (let i=4; i<=20; i++) {
        if (i%2==0) {
            console.log(i)
        }
    }
}
findEven()
function numberOneTriangle() {
    for (let i = 1; i < 10000; i=i*10+1) {
        console.log(i)
    }
}
numberOneTriangle()
function clock() {
    let h= document.getElementById("gio")
    let m= document.getElementById("phut")
    let s= document.getElementById("giay")
    let h_ht= new Date().getHours();
    let m_ht= new Date().getMinutes();
    let s_ht= new Date().getSeconds();
    gio.innerHTML= h_ht
    phut.innerHTML= m_ht
    giay.innerHTML= s_ht
}
let run= setInterval(clock,1000)
clock()