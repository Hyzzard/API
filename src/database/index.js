const mongoose = requrie('mongoose');

mongoose.connect('mongodb://localhost/teste', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;