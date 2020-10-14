const FtpSrv = require('ftp-srv');
const fs = require('fs'); 
const ftpServer = new FtpSrv({
    username: "111",
    password: "111",
    root: "./",
    greeting: ["Hello ", "Looking of somthing ?",]
});

ftpServer.on('login', (data, resolve, reject) => {
    if (data.password === '111') {
        if (!fs.existsSync(`d:/Projects/Node/FTP Server/public/${data.username}`)){
            fs.mkdirSync(`d:/Projects/Node/FTP Server/public/${data.username}`)
        }
        resolve({ root: `d:/Projects/Node/FTP Server/public/${data.username}/` });
    }
    else {
        reject('wrong password');
    }
});

ftpServer.listen()
    .then(() => {
        console.log('run');
    });