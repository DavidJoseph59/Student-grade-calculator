const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const subjects = ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics'];
const scores = {};

function promptForName() {
    rl.question('Enter your name: ', function (name) {
        const studentName = name.trim();
        console.log('Student Name: ' + studentName);
        promptForMarks(0, studentName);
    });
}

function promptForMarks(index, studentName) {
    const subject = subjects[index];

    rl.question(`Enter marks for ${subject}: `, function (input) {
        const score = Number(input);

        if (Number.isNaN(score) || score < 0 || score > 100) {
            console.log('Invalid score. Please enter a number between 0 and 100.');
            return promptForMarks(index, studentName);
        }

        scores[subject] = score;

        if (index < subjects.length - 1) {
            promptForMarks(index + 1, studentName);
            return;
        }

        const totalMarks = subjects.reduce((sum, subjectName) => sum + scores[subjectName], 0);
        const average = totalMarks / subjects.length;

        console.log('Mathematics: ' + scores.Mathematics);
        console.log('English: ' + scores.English);
        console.log('Biology: ' + scores.Biology);
        console.log('Chemistry: ' + scores.Chemistry);
        console.log('Physics: ' + scores.Physics);
        console.log('Total Marks: ' + totalMarks);
        console.log('Average score:', average);

        if (average >= 70) {
            console.log('Grade: A');
            console.log('Congratulations! You have passed!!.');
        } else if (average >= 60) {
            console.log('Grade: B');
            console.log('You have passed!!.');
        } else if (average >= 50) {
            console.log('Grade: C');
            console.log('You have passed!!.');
        } else if (average >= 45) {
            console.log('Grade: D');
            console.log('You have passed!!.');
        } else if (average >= 40) {
            console.log('Grade: E');
            console.log('You have passed!!.');
        } else {
            console.log('Grade: F');
            console.log('Sorry! You have failed!!.');
        }

        rl.close();
    });
}

promptForName();