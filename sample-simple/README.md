# Gorilla - Simple, multi-file package
## Summary
This sample is made of up of two, simple source files, `main.ts` and `helper.ts`. `main.ts` is the entry point to our script that imports content from `helper.ts`.

Because we do not specify a default `config` file, Gorilla uses the default.

## Build command
The build command below is how Gorilla build the script that is now in the `dist` directory.
`package.json`
```
...
build: gorilla --input ./simple-multi-file/src/main.ts --output ./simple-multi-file/dist/out.user.js"
...
```
