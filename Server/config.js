const credentials = {
    userName:'nandakumar83',
    password:'nandu212'
}
const config = {
    mongoUri:`mongodb://${credentials.userName}:${credentials.password}@ds233970.mlab.com:33970/taskmanager`
}

module.exports = config;