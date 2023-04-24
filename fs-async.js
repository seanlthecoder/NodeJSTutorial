const { readFile, writeFile } = require(`fs`);

console.log(`start`);

readFile(`./content/first.txt`, `utf8`, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile(`./content/second.txt`, `utf8`, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
        // this will create a new txt file called 'result-async.txt'
      `./content/result-async.txt`,
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        // if there's an error we will console.log the error
        if (err) {
          console.log(err);
          return;
        }
        // if everything is correct, we will console.log the result
        console.log(`done with this task`);
      }
    );
  });
});

console.log(`starting next task`);
