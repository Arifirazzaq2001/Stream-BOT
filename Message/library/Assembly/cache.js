const fs = require('fs-extra-plus');

function nocache(module) {
    this.logger.info(`${module} updated`)
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
    })
 }
 
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
 }

module.exports = {
  nocache,
  uncache
} 
