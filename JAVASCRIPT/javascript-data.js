var student = [

            {
                name : 'Numan',
                age: 18,
                class_name: 'Web Dev',
                address:
                    {
                        city: 'Lahore', country: 'Pakistan', street: 'str no 2, mohalaa ajeeb nagar unknown place'
                    }
            },
            {
                name : 'Numan',
                age: 18,
                class_name: 'Web Dev'
            }
];

let studentname = student[0].name;
let studentAge = student[0].age;
let html = '<h2>'+ studentname +'</h2>';

document.getElementById('paragraph').innerHTML = html;

var student_array = Array(
    'Numan', 'Saleem', 'Irfan'
);

// console.log(student);
// console.log(student_array);


// console.log(student.student1.address);
// console.log(student_array[1]);