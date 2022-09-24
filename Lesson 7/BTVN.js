//Bai 1
const equation = (a,b) => {
    a = parseFloat(prompt('Dien vao so a (a khac 0)'))
    b = parseFloat(prompt('Dien vao so b'))
    if (a==0) {
        alert('Ko tim duoc nghiem x')
    } else {
        let nghiem = -b/a
        console.log(nghiem)
        alert("Nghiem cua phuong trinh la: "+ nghiem)
    }
}
equation()
//Bai 2
const triangle = (x,y) => {
    x = parseFloat(prompt('Dien vao canh ben 1 cua tam giac vuong (khac 0)'))
    y = parseFloat(prompt('Dien vao canh ben 2 cua tam giac vuong (khac 0)'))
    if (x==0) {
        alert('Khong ton tai tam giac')
    } else if (y==0) {
        alert('Khong ton tai tam giac')
    } else {
        let hypotenuse = Math.sqrt(x**2 + y**2)
        alert ('Canh huyen cua tam giac la: '+ hypotenuse)
        let height = x*y/hypotenuse
        alert ('Chieu cao cua tam giac la: '+ height)
        let goc1 = Math.asin(x/hypotenuse)
        console.log(goc1)
        let goc2 = Math.asin(y/hypotenuse)
        console.log(goc2)
        let pi = Math.PI
        let so_do_goc1 = goc1*(180/pi)
        console.log(so_do_goc1)
        let so_do_goc_2 = goc2*(180/pi)
        console.log(so_do_goc_2)
        console.log(so_do_goc1 + so_do_goc_2)
        alert ('So do cua 2 goc la: '+ so_do_goc1+ ', '+ so_do_goc_2)
    }
}
triangle()