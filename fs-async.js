const { readFile, writeFile} = require('fs')

// Reading sample, encoding is compulsion else returns in buffer object

// readFile('./files/first.txt','utf8',(err, result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result);
// })
console.log('Start');
// doing the same functionality as in sync file

readFile('./files/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return
    }
    
    const first =result
    readFile('./files/second.txt','utf8',(err, result)=>{
        if(err)
        {
            console.log(err);
            return
        }
        const second = result
        writeFile(
            './files/result-async.txt',
            `Result:
            ${first}
            ${second}
            `,
            // {
            //     flag : 'a'//appending
            // }
            (err, result)=>{
                if(err){
                    console.log(err);
                }
                console.log('Done');
            }
        )
    })
})
console.log("Next");