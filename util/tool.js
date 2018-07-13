const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

var Tool = {
	/**
     * 判断目录
     */
    judgePath(){
	    var baseUrl = path.resolve(__dirname, '../'),
	        curUrl = process.cwd();

	    if(baseUrl !== curUrl) {
	        console.log(chalk.red('请在根目录下进行'));
	        process.exit();
	    }
    }
}

module.exports = Tool;