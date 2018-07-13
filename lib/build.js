const fs = require('fs');
const chalk = require('chalk');

let createPro = function(path,name,ps){
	if(!fs.existsSync(path)){
		fs.mkdir(path, function (err) {
            if (err) {
                console.log(err);
                throw err;
            }
        })
        createFile(path, name, ps);
	}else{
		console.log(chalk.red('该项目已存在,换个项目名试试？'))
	}
}

let	createFile = function(path, name, ps){
	let defPath = path + '/' + name;

	let fileTypes = ['.html','.js','.scss','.json'];

	fileTypes.map((item)=>{
		if(item === '.json'){
			fs.writeFile(defPath + item, ps, (err)=> {
                if (err) {
                    return console.log(err);
                }
            });
		}else{
			fs.writeFile(defPath + item, '', (err)=> {
                if (err) {
                    return console.log(err);
                }
            });
		}
	})
	//创建图片文件夹
	fs.mkdir(path+'/images', function (err) {
        if (err) {
            console.log(err);
            throw err;
        }
    })
    console.log(chalk.green('项目创建成功，开始你的表演吧～'));
}

module.exports = {createPro};