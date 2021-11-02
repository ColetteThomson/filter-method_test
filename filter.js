  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

// a common requirement when working with datasets  in JavaScript 
// is to find the objects in an array of objects that contain a 
// specific property. For example, what if you wanted to pluck just paul 
// out of the array of people above

const paul = people.filter(person => person.name === "Paul");
// can shorter 'person' to p.  
// Could add [0] to end to access object itself (i.e. just curlies no square brackets), so not as part of an array
const paul2 = people.filter(p => p.name === "Paul");
console.log(paul2);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// or each skill, we want to check if skill.yrsExperience is greater than or equal to five.
/// need to do to return a true or false result for the original filter is return  whether 
// strongSkills.length is greater than zero.  

const hasStrongSkills = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
};
const candidates = students.filter(hasStrongSkills);
console.log(candidates);

// or simpler version of above
// note: This method is extremely useful when working  with advanced JavaScript APIs because these APIs  
// will usually return large arrays containing  lots of data, and knowing how to filter it  
// down to only the data you’re interested in is  crucial to getting the most out of those APIs.

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills1 = student => student.skills.filter(has5yearsExp).length > 0;
const candidates1 = students.filter(hasStrongSkills1);
console.log(candidates1);
