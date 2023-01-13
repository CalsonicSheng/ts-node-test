/*

- any js file can be directly executed in any local machine environment (outside the browser environment) once "node.js" is installed. 

  - node.js acts as js execution environment outside the browser environment to run your code off-browser

- to execute local js file, you can do the following ways:

    1. run "node <file.js>" cmd in terminal 
    
      - terminal must be navigate to the DIRECT FOLDER THAT DIRECTLY CONTAINS THAT JS FILE to run that command

      - or, full relative path must be provided (see package.json)

    2. run script defined in "package.json" file in terminal under a project
    
      - script must specify exact path of that target js file relative to the root project folder (check package.json file)

      - we use "npm run" as prefix to run specific script defined in "package.json" file (we can run this in any folder level under root project folder)

    3. using code runner extension 
    
      - you must be on the exact file tab to run 

      - code runner extension (in vscode only) already config corresponding runtime environment AUTOMATICALLY when you switch to different files that is written in different language 

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
import { Complex, MoreShape, Shape, SampleType1, ObjectCombined, SampleType4, GenericInterface } from './types.js';

const v0: Shape = { width: 1, length: 1, height: 1 };

const v1: MoreShape = { width: 1, length: 1, height: 1, volumn: 3 };

const v2: SampleType1 = 3;

// to retrieve complex interface type, we have to use []
const v3a: Complex['obj1'] = { a: '1', b: 1 };

const v3b: Complex['obj2'] = { c: '1', d: 1, e: 1 };

const v4: ObjectCombined = { a: '1', b: 1, d: 1 };

const v5: SampleType4 = { a: '1', b: 1, c: '1' };

const v6: GenericInterface<string> = { a: '1', b: 1 };

// ts function will check if all required positional parameters are assigned with values or not (this is not impossible under pure js)
func1<string>('3', 3); // function generic type
func2({ a: '2' });
func3({ a: '3' }, 9999999999);
