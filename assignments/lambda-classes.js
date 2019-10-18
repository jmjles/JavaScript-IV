// CODE here for your Lambda Classes
const msg = (val) => console.log(JSON.stringify(val,null,'\t').replace(/,/g,''));

class Person{
    constructor(p){
        this.name = p.name;
        this.age = p.age;
        this.location = p.location;
    }

    speak = () => `Hello my name is ${name}, I am from ${this.location}`;
}

class Instructor extends Person{
    constructor(p){
        super(p);
        this.specialty = p.specialty;
        this.favLanguage = p.favLanguage;
        this.catchPhrase = p.catchPhrase; 
    }
    
    demo = (subject) => `Today we are learning about ${subject}`
    grade = (subject,student) => `${student.name} receives a perfect score on ${subject}`
}

class Student extends Person{
    constructor(p){
        super(p);
        this.previousBackground = p.previousBackground;
        this.className = p.className;
        this.favSubjects = p.favSubjects;
    }

    listsSubjects = (subjects) => subjects.map(subject => subject)
    PRAssignment = (subject) => `${this.name} has submitted a PR for ${subject}`
    sprintChallenge = (subject) => `${this.name} has begun sprint challenge on ${subject}`
}

class ProjectManager extends Instructor{
    constructor(p){
        super(p);
        this.gradClassName = p.gradClassName;
        this.favInstructor = p.favInstructor;
    }
    standUp = (channel) =>  `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    debugCode = (student,subject) => `${this.name} debugs ${student.name}'s code on ${subject}`
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const linda = new ProjectManager({
    name:'Linda',
    age: 23,
    location:'United Kingdom',
    specialty:'Data Science',
    favLanguage: 'Python',
    catchPhrase: 'Always use a ;', 
    gradClassName: 'DC3',
    favInstructor: 'Santiago',
  })
  const mike = new Student({
    name: 'Mike',
    age: 21,
    location: 'New York',
    previousBackground: 'Customer Service',
    className: 'WEB26',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
  })

  msg(`########## Instructor Test ##########`);
  msg(fred)
  msg(fred.demo('User Interface'))
  msg(fred.grade('Science',mike))
  
  msg(`########## Project Manager ##########`);
  msg(linda);
  msg(linda.standUp('DC4'))
  msg(linda.debugCode(mike,'Fundamental Architect'))
  msg(`########## Student Test ##########`);  
  msg(mike)
  msg(mike.listsSubjects(mike.favSubjects))
  msg(mike.PRAssignment('UI 1'))
  msg(mike.sprintChallenge('Advanced CSS3'))