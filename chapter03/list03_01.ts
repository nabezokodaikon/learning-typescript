import * as fs from 'https://deno.land/std/node/fs.ts';

module list03_01 {

  interface FileItem {
    path: string;
    contents: FileItem[];
  }

  class FileReader {
    getFiles(path: string, depth: number = 0) {
      const fileTree = [];
      const files = Array.from(Deno.readDirSync(path)).map(i => i.name);

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const stats = Deno.statSync(file);
        let fileItem: FileItem;

        if (stats.isDirectory) {
          fileItem = {
            path: file,
            contents: this.getFiles(file, (depth + 1))
          };
        } else {
          fileItem = {
            path: file,
            contents: []
          }
        }
        fileTree.push(fileItem)
      }
      return fileTree;
    }
  }

  export class LimitedFileReader extends FileReader {
    constructor(public maxDepth: number) {
      super();
    }

    getFiles(path: string, depth = 0) {
      if (depth > this.maxDepth) {
        return [];
      } else {
        return super.getFiles(path, depth);
      }
    }
  }

}

const fileReader = new list03_01.LimitedFileReader(1);
const files = fileReader.getFiles('./');
console.log(files);
