const fs = require("fs/promises");
const path = "./saiprasad";
const filePath = ${path}/demo.txt;

async function manageDirectory() {
  try {

    await fs.access(path);
    console.log("Given directory already exists !!");
  } catch (error) {

    if (error.code === 'ENOENT') {
      try {
        await fs.mkdir(path);
        console.log("New directory created successfully !!");
      } catch (mkdirError) {
        console.error("Error creating directory:", mkdirError);
        return;
      }
    } else {
      console.error("Error checking directory:", error);
      return; 
    }
  }

 
  const data = "Hello, I am Prasad Indulkar. From Kolhapur";
  try {
    await fs.writeFile(filePath, data, { flag: 'w' });
    console.log("demo.txt file created successfully !!");
  } catch (fileError) {
    console.error("Error creating demo.txt:", fileError);
  }


  try {
    const files = await fs.readdir(path);
    console.log("Directory contents:", files);
  } catch (readError) {
    console.error("Error reading directory:", readError);
  }
}


async function deleteDirectory() {
  try {
    await fs.rm(path, { recursive: true, force: true });
    console.log("Directory deleted successfully !!");
  } catch (deleteError) {
    console.error("Error deleting directory:", deleteError);
  }
}


manageDirectory().then(() => {

    return deleteDirectory();
});