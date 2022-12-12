const mysqlx = require('@mysql/xdevapi');

var client = mysqlx.getClient(
    {   host : 'localhost', port : 33060,
        user : 'root', password : 'root' },
    { pooling: { enabled: true, maxIdleTime: 30000, maxSize: 25, queueTimeout: 10000 } }
);

function getVisitors(){
    return client.getSession().then(function(session){
        return session.sql('SELECT * FROM vsl.visitors WHERE timeIn >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)').execute();
    }).then((results) => {
        return results.fetchAll();
    }).catch((err) => {
        console.log(err);   
    });
}

exports.getVisitors = getVisitors;