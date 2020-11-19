# Gorilla - Simple, custom config example
## Summary
This sample is made of up of two, simple source files, `main.ts` and `helper.ts`, and the gorilla config file, `config.json`. `main.ts` is the entry point to our script that imports content from `helper.ts`. The custom GreaseMonkey metadata is defined in the `config.json`.

## Build command
The build command below is how Gorilla build the script that is now in the `dist` directory.
`package.json`
```
...
"build": "gorilla --config ./sample-custom-config/src/config.json --input ./sample-custom-config/src/main.ts --output ./sample-custom-config/dist/out.user.js"
...
```
