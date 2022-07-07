const studentRecords =  [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
      {name: 'Wick', id: 115, marks : 75 } ]



  //Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
  //['JOHN', 'BABA', 'YAGA', 'WICK']

    let count = studentRecords.length;
    for(let i=0; i<count; i++){
      console.log(studentRecords[i].name.toUpperCase("name"));
    }

    //Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
   //[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

   let count1 = studentRecords.filter(i => i.marks > 50);
   console.log(count1);

   //Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

   let count2 = studentRecords.filter(i => i.marks > 50 && i.id > 120);
   console.log(count2);

   //Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

   let totalMarks = studentRecords.reduce( ((a,b) => a+b.marks), 0)
   console.log(totalMarks);

   //Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

   let onlyName = studentRecords.filter(i => i.marks > 50).map(i => i.name);
   console.log(onlyName);

   // Question 6: This time we are required to print the sum of marks of the students with id > 120.

   let studentWithId = studentRecords.filter(i => i.id > 120).reduce(((a,b)=> a+b.marks),0);
   console.log(studentWithId);
   
   //Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks
   // has been added to those students who scored less than 50.

   let studentMarks = studentRecords.map(function(i){ 
    if(i.marks < 50){
        i.marks += 15;}
    return stu;
    }).filter(i => i.marks > 50).reduce((a,b) => a+b.marks, 0);
    console.log(studentMarks);
 
   //Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

   let Object = [{name: 'Mithilesh' , class:'12th', rollno: '12' },
                {name: 'Teja' , class:'11th', rollno: '11' },
                {name: 'Rishi' , class:'10th', rollno: '30' },
                {name: 'Ayush' , class:'9th', rollno: '20' },
                {name: 'Mohit' , class:'5th', rollno: '36' },
                {name: 'Surya' , class:'8th', rollno: '45' }]




