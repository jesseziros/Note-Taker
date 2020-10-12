const fs = require('fs')
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Helper {
    read() {
        //return contents of db.json file (read the file)
        return readFileAsync("/db.json", "utf8");
    }
    
    write() {
        //write to the db.json file (write the file)
        return writeFileAsync('/db.json', 'utf8');
    }

    allNotes() {
        //use read()
        //parse the contents to an array or return an empty array
        read();
    }
}

module.exports = new Helper();