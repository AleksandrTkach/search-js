# Install:
```
$ npm i
$ npm run build
```

# Task:
data.js has the input data for this assignment.

Write a method, that accepts 2 parameters:
1. data array (from data.js)
2. object with filtering parameters.

After applying filtering, it displays matched results in console.

---------------------------------------------------------
Example:

customFilter(dataArray, filteringObject){

    //your logic

    console.log(results);
}

----------------------------------------------------------
Examples of filteringObject:

{category:'bal'}
or
{category:'bal', regions:["chest", "shoulders"]}
or
{category:'bal', regions:'shoulders', ID:'004'}

-----------------------------------------------------------
Requirements to logic:

- You do NOT know which keys will be in filteringObject
- You do NOT know if we are comparing strings, or match value inside of an array ( in data you can have "category": "bal" OR "category": ["bal", "air"] )
- Method needs to work with any key names, and any number of keys in filteringObject
- Method needs to match all provided values from filteringObject, and return only those results, that match all of them.
- If value is an array, for example ["chest", "shoulders"], it can match just one of these.
- No need to create UI, we are only interested in js logic
