/**
Check if the current environment is the Windows Command Prompt.
@example
```
const isCmd = require("is-cmd");

isCmd();
//=> true
```
*/
declare function isCmd(): boolean

export = isCmd
