function giveItBackLater(value, callback) {
    function doSmth() {
        callback(value)
    }
    setTimeout(doSmth, 100)
}

function addSomePromises(somePromise) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(somePromise), 100);
    }).then(function (result) {
        return result.repeat(2)
    }).catch(function (result) {
        return result.repeat(3)
    })
}

function promiseToGiveItBackLater(value) {
    return new Promise(resolve => {
        giveItBackLater(value, resolve)
    })
}


module.exports.giveItBackLater = giveItBackLater
module.exports.addSomePromises = addSomePromises
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater