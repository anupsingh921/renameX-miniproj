const fs = require('node:fs');
const path = require('path');
const replaceThis="singhsaab"
const replaceWith= "anup"
const preview=false
const folder=path.join(__dirname, 'data'); /*USE THIS TO RENAME FILES INSIDE DATA FOLDER ONLY.*/
//const folder=__dirname;  /*USE THIS WHEN YOU WANT TO RENAME FILES INSIDE THE MAIN FOLDER*/
try {
  fs.readdir(folder,(err,data)=>{

    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        let oldFile=path.join(folder,item)
        let newFile= path.join(folder, item.replaceAll(replaceThis,replaceWith))
        
        if(!preview){
        fs.rename(oldFile,newFile,()=>{
            console.log("Rename is performed succesfully..")
        })
    }
    else{
        if("data/"+item!==newFile) console.log("data/"+item+" will be renamed to "+newFile)
    }
    }
  
  })
  
} catch (err) {
  console.error(err);
}