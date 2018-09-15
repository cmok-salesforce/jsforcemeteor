require('yargs') // eslint-disable-line
    .demandCommand(2)
    .command('download <url> [files..]', 'download several files')
    .help()
    .command('get <source> [proxy]', 'make a get HTTP request', (yargs) => {
        yargs.positional('source', {
            describe: 'URL to fetch content from',
            type: 'string',
            default: 'http://www.google.com'
        }).positional('proxy', {
            describe: 'optional proxy URL'
        })
    })
    .help()
    .command('serve [port]', 'start the server', (yargs) => {
        yargs
            .positional('port', {
                describe: 'port to bind on',
                default: 5000
            })
    }, (argv) => {
        if (argv.verbose) console.info(`start server on :${argv.port}`)
        serve(argv.port)
    })
    .option('verbose', {
        alias: 'v',
        default: false
    })
    .option('r', {
        alias: 'reset',
        describe: 'clear data for site(s)',
        type: 'string'
    })
    .option('d', {
        alias: 'dashboard',
        describe: 'copy dashboard for the specified site across all others',
        type: 'array'
    })
    .usage('Usage: $0 -r [string] -d [array]')
    .argv