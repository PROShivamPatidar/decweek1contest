let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log(data);
  }
  
  // 2. Add Data
  function addData() {
    let name = prompt("Enter name:");
    let age = prompt("Enter age:");
    let profession = prompt("Enter profession:");
    let newDataObject = {
        name: name,
        age: age,
        profession: profession
    };
    data.push(newDataObject);
    alert("data added successfully");
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const nonAdmins = data.filter((item) => item.profession !== "admin");

    // Extract the admin objects
    const admins = data.filter((item) => item.profession === "admin");
    data = nonAdmins;
    alert("Removed admins:", admins);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let array1 = [
        { name: "ravi", age: 24, profession: "frontend developer" },
        { name: "mohan", age: 27, profession: "backend developer" },
      ]; 
      let array2 = [
        { name: "ram", age: 28, profession: "sde developer" },
        { name: "sita", age: 29, profession: "database" },
      ];
      const concatenatedArray = array1.concat(array2);
      console.log("Concatenated Array:", concatenatedArray);  
      alert("successfully Concatenated");
    }
  
  // 5. Average Age
  function averageAge() {   
    const sumOfAges = data.reduce((acc, person) => acc + person.age, 0);

    // Calculate the average age
    const average = sumOfAges / data.length;
  
    // Log the result
    console.log("Average Age:", average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some((person) => person.age > 25);

  // Log the result
  if (isAbove25) {
    console.log("At least one person is older than 25.");
  } else {
    console.log("No one is older than 25.");
  }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const uniqueProfessionsSet = new Set();
    data.forEach((person)=>{
        uniqueProfessionsSet.add(person.profession);
    });
    const uniqueProfessionsArray=Array.from(uniqueProfessionsSet);
    console.log("Distinct Professions:", uniqueProfessionsArray);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((person1, person2) => person1.age - person2.age);

  // Log the sorted array
  console.log("Sorted by Age (Ascending):", data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const johnIndex = data.findIndex((person) => person.name === "john");

  // Check if 'john' is found
  if (johnIndex !== -1) {
    // Update 'john's profession to 'manager'
    data[johnIndex].profession = "manager";

    // Log the updated array
    console.log("Updated Data:", data);
  } else {
    console.log("'john' not found in the array.");
  }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = 0;
  let adminCount = 0;

  // Iterate through the array to count developers and admins
  data.forEach((person) => {
    if (person.profession === "developer") {
      developerCount++;
    } else if (person.profession === "admin") {
      adminCount++;
    }
  });

  // Log the results
  console.log("Total Developers:", developerCount);
  console.log("Total Admins:", adminCount);

  }