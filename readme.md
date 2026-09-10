


A cli tool i build to understand how to build cli tool i use build youw own x cli tool docs as a refrence.

commands i use and why :-
npm list -g --depth=0 => i use this commands to check which tool linked with npm globally.
npm unlink -g <package/toolname> => used to unlink tool and package globally
npm link => i use this commands to link tool with npm.
npm link --force i used to forecefully link tool.

node.js concepts used in projet:-
process.argv is an array it used to handle command line arguments like read and handle in node.js
in this array , array[0] and array[1] is paths of scripts in node.js and actual inputs starts with array[2] so we use slice(2).
[process.argv[0] => C:\Program Files\nodejs\node.exe;
process.argv[1] => C:\Users\...\tool\bin\index.js;] like this paths.

library use in project:- arg
i use arg library to make things simple.
i use arg becouse of some features like:- 
- 1. Automatic Type Conversion & Validation
- 2. Flag Aliasing (Shortcuts)
- 3. Separation of Commands and Flags
- 4. Cleaner, Less Boilerplate Code

i use a chalk library for better ux and for some features like:-
- 1. Better Visual Hierarchy
- 2. Improved User Experience (UX)
- 3. Easy Syntax

pkg-up i used it becouse it find a packge.json file in parent directory and folder tree