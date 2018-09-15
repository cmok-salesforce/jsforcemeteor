require('commander')
    .description('this is a very usefull description.')
    .version('1.0')
    .option('-s, --src [dir]', 'salesforce src directory path [./src]', './src')
    .option('-a, --api-version [version]', 'salesforce API version [40.0]', '40.0')
    .option('-o, --output [dir]', 'salesforce package.xml directory path [.]', '.')
    .parse(process.argv);
