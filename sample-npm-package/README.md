# Gorilla - NPM-imported package
## Summary
This sample script that contains an NPM-imported package. The imported package is bundled
directly into the output script for use in a browser. Tree-shaking is used to only import
required elements within the bundle, to reduce complexity and file size.

## Build command
The build command below is how Gorilla build the script that is now in the `dist` directory.
`package.json`
```
...
build: gorilla --input ./simple-npm-package/src/main.ts --output ./simple-npm-package/dist/out.user.js"
...
```
