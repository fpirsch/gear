module.exports = function(options, data, callback) {
    data.forEach(function(item) {
        console.log(item);
    });

    callback(null, data);
};