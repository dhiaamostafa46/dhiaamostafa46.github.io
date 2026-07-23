const fs = require('fs');
const path1 = 'c:/Users/Dhiaa/Documents/profile/projects/projects.js';
const path2 = 'c:/Users/Dhiaa/Documents/profile/projects/projects copy.js';

let data1Str = fs.readFileSync(path1, 'utf8').replace('window.externalProjectsData = ', '');
let data2Str = fs.readFileSync(path2, 'utf8').replace('window.externalProjectsData = ', '');

// safely evaluate them (they are array literals)
const data1 = eval(data1Str);
const data2 = eval(data2Str);

const merged = [];
const data1Names = new Map();
data1.forEach(p => data1Names.set(p.name, p));

data2.forEach(p => {
  if (data1Names.has(p.name)) {
    merged.push(data1Names.get(p.name));
    data1Names.delete(p.name);
  } else {
    merged.push(p);
  }
});

// Add any projects that were in data1 but not in data2
data1Names.forEach(p => merged.push(p));

const output = 'window.externalProjectsData = ' + JSON.stringify(merged, null, 2) + ';';
fs.writeFileSync(path1, output, 'utf8');
console.log('Merged ' + merged.length + ' projects successfully.');
