var fs = require('fs');
const filePath = './databases/file1.txt';
const writeStream = fs.createWriteStream('./databases/result.txt');
const pathName = writeStream.path;

let fileSplited = fs.readFileSync(filePath).toString().split('\n')

var array = []
for (let i = 0; i < fileSplited.length; i+=1){
    itemSplited = fileSplited[i].split(':')
    const login = itemSplited[1]
    const password = itemSplited[2]
    const mail = itemSplited[6]
    const nasc = itemSplited[7]
    const criacao = itemSplited[8]
    const myText = `Login: ${login}
Senha: ${password}
Email: ${mail}
Data de Nascimento ${nasc}
Data de Criação: ${criacao}\n
Obrigado por comprar com a Castor Smurfs! por favor deixe uma avaliação, isso nos ajuda a fortalecer na plataforma e ter cada vez mais estoque! ficamos muito agradecidos.\n`
array.push(myText)
console.log(array)
}

array.forEach(value => writeStream.write(`${value}\n`));
writeStream.on('finish', () => {
    console.log(`wrote all the array data to file ${pathName}`);
 });
 writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`)
});
// close the stream
writeStream.end();