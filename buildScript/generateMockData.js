import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import { fs } from 'file-system';
import chalk from 'chalk';
//pass the schema to jsf to implement and write it in to the file
const js = JSON.stringify(jsf(schema));
fs.writeFile("./src/api/db.json", js, function (err) {
    if (err) {
        return (console.log(chalk.red(err)));
    }
    else {
        return (console.log(chalk.green("You did it!")));
    }
})

