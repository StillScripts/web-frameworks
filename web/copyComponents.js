import fs from "fs";
import path from "path";

const obj = {};

/**
 * Take a list of files within a specific folder and create an object containing
 * each file and their content
 * @param {{path:string; name: string; ext: string}[]} fileList - The list of files to check
 */
async function openAllFilesInDir(fileList) {
  const fileContents = {};
  fileList.forEach((file) => {
    const { path, name, ext } = file;
    try {
      const fileContent = fs.readFileSync(path, { encoding: "utf-8" });
      const keyName = name.split(ext)[0]
      fileContents[keyName] = fileContent
    } catch (error) {
      console.log(error);
    }
  });
  return fileContents;
}

/**
 * Take a directory and get the paths for all the files that are
 * within it, including files within subfolders.
 * @param {string} directory - The directory to check within
 * @param {{path:string; name: string; ext: string}[]} fileList - The list of files within the directory
 */
function getAllFilesInDir(directory, fileList) {
  try {
    const files = fs.readdirSync(directory, {
      withFileTypes: true,
      encoding: "utf-8",
    });
    files.forEach((file) => {
      const currentPath = directory + "/" + file.name;
      if (file.isDirectory()) {
        fileList = getAllFilesInDir(currentPath, fileList);
      } else {
        fileList.push({
          path: currentPath,
          name: file.name,
          ext: path.extname(currentPath),
        });
      }
    });
  } catch (error) {
    console.log("Error with reading directory: ", error);
  }

  return fileList;
}

/**
 * @param {string} directory - The path of the directory to check within
 * @param {string} startPath - A start path that can be removed for easier reading
 */
function openFilesAndSaveJSON(directory, startPath) {
  // Get all the file paths to open in a directory
  const allFilePaths = getAllFilesInDir(directory, []);
  // Open the files and save their content in a json file
  openAllFilesInDir(allFilePaths).then((array) => {
    const framework = directory.split(startPath)[1];
    obj[framework] = array;
    try {
      fs.readdirSync("public");
    } catch (error) {
      console.log(error);
      fs.mkdirSync("public");
    }
    fs.writeFileSync("public/" + framework + ".json", JSON.stringify(obj));
  });
}

/**
 * Copy file content from src/components into JSON files
 */
function copyComponents() {
  try {
    const files = fs.readdirSync("src/components", {
      withFileTypes: true,
      encoding: "utf-8",
    });
    const allFrameworks = files
      .filter((f) => f.isDirectory())
      .map((f) => f.name);
    allFrameworks.forEach((framework) => {
      console.log(framework);
      openFilesAndSaveJSON(`src/components/${framework}`, "src/components/");
    });
  } catch (error) {
    console.log("Error with reading directory: ", error);
  }
}

copyComponents();
