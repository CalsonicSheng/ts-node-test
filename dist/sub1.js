/*

- default parameter must be assigned with default initial value and CAN NOT HAVE "?" at the same time

  - this makes sense, since default parameter is ALWAYS ASSIGNED WITH INITIAL DEFAULT VALUES + TYPE, so it can NEVER BE UNDEFINED if we also add "?"

  - note that default parameter is also OPTIONAL parameter at the same time. U don't need to assign any value as it defaults back to initial default value (very important)

- this brings to the major difference between default and optional parameter:

  - option parameter: is default to "undefined" type with "undefined" value (to enable this behaviour, you have need to use "?")
  
  - default parameter: default to given type + given initial value

- as in conclusion

  - both optional and default (optional) parameters ARE NOT REQURIED TO ASSIGN A CORRESPONDING OBJECT VALUE WHEN CALL FUNCTION

  - ALWAYS PUT OPTIONAL/DEFAULT PARAMTER AFTER ALL THE REQUIRED POSITIONAL PARAMETERS

  - (special case) default parameter also works in parameter destructing and function signature

    - you HAVE TO use BOTH default assigment "=" wiith "?" marks in this case in order to mimic the optional effects

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

- one of the main reason we use TS is to pre-determine the "type" and "property structure/shape" as type annotation/declaration (only available under TS)

  - this will regulate and strict the actual object value assignment opertion later to follow exactly the pre-determined to eliminate assignment error (to be type-safe)

  - this also enables to directly use vscode autocomplete to call only the pre-determined properties to increase convenience and eliminate typo error

- the beauty of using TS is to allow us to check many run-time errors during development time


*/
function func1(a, b, c = 3) {
    console.log(a);
    console.log(b);
    console.log(c);
}
function func2({ a, b = '222' }, c = 333) {
    console.log('func2 runs');
    console.log(a);
    console.log(b);
    console.log(c);
}
const func3 = ({ a, b = 'B DEFAULT' }, c = 444) => {
    console.log('func3 runs');
    console.log(a);
    console.log(b);
    console.log(c);
    return true;
};
// with type / structure definition, you can directly use vscode autocomplete to call up all the pre-determined object properties
// this is very useful as you can not do this in pure JS
function func4(a) {
    console.log(a.a);
}
export { func1, func2, func3 };
