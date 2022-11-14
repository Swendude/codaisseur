# Challenge:

## Setup

- npm init
- npm i typescript
- npm i ts-node
- Generate a tsconfig.json by running `npx tsc --init`
  - Modify the tsconfig.json file:
    ```json
    "target": "es6" ,
    "lib": [
        "dom",
        "es6"
    ],
    "rootDir": "./",
    "outDir": "./build",
    ```
- `npx ts-node [filename].ts` to run a file
- `npx tsc` to compile all the files

## Challenge

- Make type definitions for a farm. The starting point should be a type called 'Farm'

  ```typescript
  interface Farm = {
      farmer: Farmer;
      animals: Animal[];
      name: string
  }
  ```

  - From there create the types `Farmer` & `Animal`, give the some interesting properties

- make functions that work on these types such as:
  - Getting the number of animals on the farm
  - Filtering the animals on their name or their kind
  - Adding animals to the farm
  - Removing an animal from the farm
  - Anything else you can think of!

## Resources

- https://www.youtube.com/c/MattPocockUk/videos
- https://www.typescriptlang.org/docs/handbook/
