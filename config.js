module.exports = function (mode) {
    var config = {
        development: {
            server: {
                host: 'localhost',
                port: 7777,
                routes: {
                    cors: true
                }
            },
            thinky: {
                host: 'localhost',
                port: 28014,
                authkey: '',
                db: 'wedo_app'
            },
            auth: {
                privateKey: 'zCdA7wcu9Q14aWBuj2MfmhKklgZNfRlH'
            },
            api: {
                basePath: 'http://localhost:7777/api/v1/'
            }
        },
        production: {
            server: {
                host: 'findmynode.com',
                port: Number(process.env.PORT || 80),
                routes: {
                    cors: true
                }
            },
            thinky: {
                host: 'localhost',
                port: 28014,
                authkey: '',
                db: 'wedo_app'
            },
            auth: {
                privateKey: '4H7Ypt3g3Fc3d6J44PdE87c8l6T97M38'
            },
            api: {
                basePath: 'http://findmynode.com/api/v1/'
            }
        },
        test: {
            server: {
                host: 'localhost',
                port: 3000
            },
            thinky: {
                host: 'localhost',
                port: 10001,
                authkey: '',
                db: 'automate_office'
            },
            rethinkdb: {
                clusterPort: 10000,
                driverPort: 10001,
                authkey: '',
                db: 'automate_office'
            },
            auth: {
                privateKey: 'zCdA7wcu9Q14aWBuj2MfmhKklgZNfRlH'
            },
            api: {
                basePath: 'http://localhost:7777/api/v1/'
            }
        }
    };
//ust be alb eto inser tosmething and teh n=get it otbower. 
    return config[process.env.NODE_ENV || mode || 'development'];
};