

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Prince Kumar',
}

const about = [{
  // all the properties are optional - can be left empty or deleted
  name: 'Prince Kumar',
  role: 'Full Stack Web Developer',
  description:
    "I'm a Web Developer who is always creating and learning awesome stuff. Let's start scrolling and learn more about me.",
  resume: '',  
}]

const aboutme = [{
  // all the properties are optional - can be left empty or delete
  name: 'Prince Kumar',
  description:
    "I'm a Full Stack Web Developer specialization MERN Stack who gained skills from Newton School. I am attentive and agile learner with a diverse foundation of tech industry. Also motivated,self-starter and leader with strong organizational and communicative abilities.",
    image: 'https://avatars.githubusercontent.com/u/112944356?v=4',
}]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Amazon Clone',
    description:
      'JioMart is a multicategory online shopping platform, that currently offers a wide range of Groceries and Daily wear Fashion, to start with. The platform offers consumers a convenience of shopping from home, with a promise of great savings, free home delivery and no minimum order value.  ',
    stack: ['REACT', 'REDUX'],
    sourceCode: 'https://github.com/sinhaprince35/Amazon-Clone---React-Project---chrb89czjbfu',
    livePreview: '',
    image:'https://www.lifewire.com/thmb/nfg7SU0_fIU7yOBSw5wD2zc_y0I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Webp.net-gifmaker-5addf59fba61770036c5836f.gif'
  },
  {
    name: 'LinkedIn Clone',
    description:
      'This website is e-commerce website, where they provide clothing, shoes etc. in this project, we used React JS, Styled-components, bootstrap, and CSS. which we have merged by using GITHUB. ',
    stack: ['REACT', 'BOOTSTRAP'],
    sourceCode: 'https://github.com/sinhaprince35/LinkedIn-Clone---React-Project---670d18o55jc6',
    livePreview: '',
    image:'https://blog.linkboost.co/content/images/2021/11/desktopPost.gif'
  },
  {
    name: 'Tic-Tac-Toe',
    description:
      'Pluralsight, Inc. is an American privately held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals through its website.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
    sourceCode: 'https://github.com/sinhaprince35/JavaScript-Mini-Project---JS-Mini-Project---oapa93hnz4tu',
    livePreview: 'https://tic-tac-toe-game32.netlify.app/',
    image:'https://res.cloudinary.com/dz209s6jk/image/upload/v1641565925/Challenges/bpxighj3oorldbr7wzaq.jpg'
  },  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/html.png','https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/html2.PNG',"HTML"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/css.png','https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/css2.PNG',"CSS"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/javascript.png','https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/javascript2.PNG',"JAVASCRIPT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/react.png','https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/react2.PNG',"REACT"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/nodejs.png','https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/nodejs2.png',"NODEJS"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/mongodb.png','https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/mongodb2.PNG',"MONGODB"],
  ['https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/express.png','https://raw.githubusercontent.com/rahulsinha1996/myPorfolio/main/New_Logo/express2.PNG',"EXPRESSJS"]


]

const contact = [{
  // email is optional - if left empty Contact section won't show up
  email: 'sinhaprince35@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/prince-kumar-a6849831/',
    github: 'https://github.com/sinhaprince35',
  },
}]

export { header, about, projects, skills, contact,aboutme }
