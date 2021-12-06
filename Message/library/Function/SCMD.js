const fs = require('fs-extra-plus')

const scommand = JSON.parse(fs.readFileSync('./src/json/cmd/scommand.json'))
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
             scommand.push(obj)
             fs.writeFileSync('./src/json/cmd/scommand.json', JSON.stringify(scommand))
         }
const getCommandPosition = (id) => {
      let position = null
         Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
               position = i
            }
        })
     if (position !== null) {
     return position
     }
  }
const getCmd = (id) => {
      position = null
         Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
               position = i
            }
        })
     if (position !== null) {
     return scommand[position].chats
     }
  }
const checkSCommand = (id) => {
      let status = false
         Object.keys(scommand).forEach((i) => {
            if (scommand[i].id === id) {
              let status = true
           }
        })
     return status
  }
 
module.exports = { 
	scommand, 
	addCmd, 
	getCommandPosition, 
	checkSCommand, 
	getCmd
}