#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const tool = require('./util/tool.js');
const {createPro} = require('./lib/build.js');

program.version('1.0.0', '-v, --version')
	.command('init <name>')
	.action((name) => {
		if(!fs.existsSync(name)){
            inquirer.prompt([
                {
                    name: 'description',
                    message: '请输入项目描述'
                },
                {
                    name: 'author',
                    message: '请输入作者名称'
                }
            ]).then((answers) => {
            	const meta = {
	                name,
	                description: answers.description,
	                author: answers.author
	            }
	            let Path = process.cwd()+'/'+name;

	            createPro(Path, name, JSON.stringify(meta,null,4));
	        })
        }else{
            // 错误提示项目已存在，避免覆盖原有项目
            console.log(symbols.error, chalk.red('项目已存在'));
        }
	}).on('--help', function () {
    console.log('  Examples:');
    console.log('    $ w init index');
    console.log();
});
program.parse(process.argv);