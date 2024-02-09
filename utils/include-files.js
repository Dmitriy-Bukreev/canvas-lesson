import { globSync } from 'glob';
import path from 'node:path';
import { resolve } from 'path';

export default function includeFiles(root, pattern) {
  return Object.fromEntries(
    globSync(pattern).map((file) => [
      // This remove file extension from each
      // file, so e.g. nested/foo.js becomes nested/foo
      file.slice(0, file.length - path.extname(file).length),
      // This expands the relative paths to absolute paths
      resolve(root, file),
    ]),
  );
}
