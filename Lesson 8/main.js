try {
    console.log('Hello world')
    throw new Error('Sap server')
    console.log('Rest of code')
} catch (e) {
    console.log(e)
}
const login = () => {
    console.log('Connecting to server...');
    throw new Error();
  };
  
  try {
    login();
  } catch (e) {
    console.log(e);
    console.log('He thong dang bao tri');
  }
  const logins = () => {
    setTimeout(() => {
      console.log('Login');
    }, 3000);
  };
  
  logins(); // mất 3s để chạy
  console.log('Go to home page');
  /* kết quả : dòng 32 in ra trước dòng 1  
  -> Bất đồng bộ 
  */