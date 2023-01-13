/*

- any js file can be directly executed in any local machine environment (outside the browser environment) once "node.js" is installed.

  - node.js acts as js execution environment outside the browser environment to run your code off-browser

- to execute local js file, you can do the following ways:

    1. "node <file.js>" as cmd in terminal
    
      - terminal must be navigate to the FOLDER THAT DIRECTLY CONTAINS THAT JS FILE to run that command

    2. run package.json script in terminal
    
      - script must specify exact path of that target js file relative to the root folder level (check package.json file)

    3. code runner extension
    
      - you must be on the exact file tab to run

- TS file can NOT be executed directly ANYWHERE (neither browser nor local node) since TS file type is not readable by neither browser nor node environment | ts file must be
compiled to js file FIRST and only js files can be executed from either node or browser environment.

- how to compile to js files from ts files (steps)

  1. install ts with npm globally "npm i -g typescript"
    
    - only need to do this once in life time
  
  2. then create ts file to write ts code
  
    - basically js code + type annotation which can only be written in ts file ONLY (very important)

  3. to compile TS to JS, we run "tsc <js file>" in terminal

    - terminal MUST navigate to the FOLDER THAT DIRECTLY CONTAINS THAT JS FILE to run that command, we have tested this already (very important)

    - complied js file will also auto be generated UNDER THE SAME FOLDER

  4. standard way is to create a "tsconfigure" file for compiling
  
    - run "tsc -init" cmd in terminal to auto-generate a tsconfig file (with default value) | or you can mannually create one (this file is to config/customize ts compiler behaviour)

    - once a "tsconfig.json" file is generated and configured (must be done first), then directly run "tsc" cmd in terminal will auto compile js file accordingly based on the configurations
    we defined/customized in the "tsconfig.json" file (otherwise ts doc will appeal instead)

    - "tsc" command can be run at any folder levels under root folder level

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- "tsconfigure" notes

  - "module" key/property: defined version of "module system" for final emitted/compiled js file ("commonjs" vs "es6 module")

  - "target" key/property: defined version of "js syntax version" for final emitted/compiled js file (old js vs es6+)

  - "watch" key/property: to enables "tsconfigure" to always auto compile ts files to js file upon EACH SAVE WITHOUT NEEDING TO RUN "TSC" COMMAND EACH TIME
  
    - this opeation will occupy the runtime of current terminal till you cancel the runtime in terminal
  
    - this "watch" key is not default key under "tsconfig.json"

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3rd party lib

- many many mainstream npm js lib already comes with their own TS declaration module/files automatically

- even if not, npm has many other community will write separate TS declaration file/modules for the CORRESPONDING npm module that didn't ship with ts declaration originally

  - you just have to download it separately as "dev dependency"

  - this step of downloading additional corresponding ts declaration module IS REQUIRED if you are using such "non-ts native module" in TS FILE
  
    - we have tested that such non-ts native module will give errors if you use it under ts file

- TS declaration modules are predefined modules that describe the shape of JavaScript object, or the types present for the ts compiler. These ts declaration files are available
for all libraries that were originally written in JavaScript, not TypeScript (if is already written in ts, when you dont need these modules).

  - by downloading these TS declaration modules, you can then import/use declared types/interface to enables property autocompletion.

*/
import { func1, func2, func3 } from './sub1.js';

// import * as all from 'uuid';
// console.log(all.v4());
const v0 = { width: 1, length: 1, height: 1 };
const v1 = { width: 1, length: 1, height: 1, volumn: 3 };
const v2 = 3;
// to retrieve complex interface type, we have to use []
const v3 = { a: '1', b: 1 };
const v4 = { a: '1', b: 1, d: 1 };
// ts function will check if all required positional parameters are assigned with values or not (this is not impossible under pure js)
func1('3', 3);
func2({ a: '2' });
func3({ a: '3' }, 9999999999);
