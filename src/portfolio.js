const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AbhinavTiruvee.github.io',
  title: 'AT',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Abhinav Tiruveedhula',
  role: 'Software Developer',
  description:
    'I am a Computer Science major at the University of Texas at Austin, driven by a strong passion for software development. With 3 previous SWE internships, I\'m currently interning at Capital One on the Card Tech team.',
  resume: 'https://drive.google.com/file/d/1n5Ex1XOSGuaj-FE1aNqFd4NlFYIKy7db/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/abhinav-tiruveedhula/',
    github: 'https://github.com/AbhinavTiruvee',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LH Eats: Campus Dining Assistant',
    description: 'Developed an app in a three person team that displays UT Austin dining hall menus',
    stack: ['Swift', 'Python', 'SQL', 'AWS'],
    livePreview: 'https://apps.apple.com/us/app/ut-dining/id6468611223',
  },
  {
    name: 'Open Source Contributions',
    description: 'Contributed to the virtualization open source repositories Incus and Virt Manager',
    stack: ['Python', 'Go'],
    sourceCode: 'https://github.com/lxc/incus',
  },
  {
    name: 'Robot Learning Model to Play Ping Pong',
    description: 'Developed a model that enables a Sawyer robot to autonomously play ping pong versus a human',
    stack: ['Python', 'PyTorch', 'ROS'],
    sourceCode: 'https://github.com/Bfolefack/FRIPingPong',
    livePreview: 'https://drive.google.com/file/d/1kAI6itkNmM-1RVrLwQZjXwWHT1S-3EEK/view?usp=sharing'
  },
  {
    name: 'Impact of Online Stock Recommendations',
    description: 'Research report and presentation on validity of online stock recommendations before 2017',
    stack: ['R', 'Python'],
    sourceCode: 'https://github.com/AbhinavTiruvee/OnlineStockRecommendations',
    livePreview: 'https://drive.google.com/file/d/1JookXmXfAVReXoR-X-JqSbEVscN8p-gT/view?usp=sharing'
  },
  {
    name: 'CV Revive: AI Resume Screener',
    description: 'Collaboratively developed a web app that helps users score and improve their resumes using AI',
    stack: ['Python', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/texasluminescence/resume-screener',
  },
  {
    name: 'Energy Consumption of AI Generated Media',
    description: 'Completed a semester long research project on the energy consumption of AI media',
    stack: ['LaTeX', 'Research'],
    livePreview: 'https://drive.google.com/file/d/1lBsFt3lruc9LQEK-x-alzj_8HJoVElW7/view?usp=sharing'
  },
  {
    name: 'Personal Portfolio Website',
    description: 'Made this website that provides information about my software development background',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/AbhinavTiruvee/newportfolio',
    livePreview: 'https://abhinavtiruvee.github.io/'
  },
  {
    name: 'NFL Betting Guidance Program',
    description: 'Developed a project that uses APIs and a web scraper to compute best NFL bets',
    stack: ['Python'],
    sourceCode: 'https://github.com/AbhinavTiruvee/NFLBetHelper'
  },
  {
    name: 'Texas Luminescence Website',
    description: 'Helped make a club website that provides useful information for members and visitors',
    stack: ['React', 'JavaScript', 'AWS'],
    livePreview: 'https://texasluminescence.org/',
  },
  {
    name: 'Valorant Statistics using APIs',
    description:
      'From a given Valorant player\'s username, advanced metrics are given using the Valorant API',
    stack: ['Python'],
    sourceCode: 'https://github.com/AbhinavTiruvee/ValorantStats',
  },
  {
    name: 'Dots & Boxes using Networking',
    description: 'Dots & Boxes game that two players can play across a network connection',
    stack: ['Java'],
    sourceCode: 'https://github.com/AbhinavTiruvee/DotsAndBoxes'
  },
  {
    name: 'Connect 4 using Networking',
    description: 'Connect 4 game that two players can play across a network connection',
    stack: ['Java'],
    sourceCode: 'https://github.com/AbhinavTiruvee/ConnectFour'
  },
]

const exps = [

  {
    name: 'Amazon',
    position: 'SDE Intern',
    dates: 'September 2025 - December 2025',
    description: 'Incoming Fall Intern in the STORES organization in San Diego, California. Working on an upcoming Prime agent chat team to improve customer service experience.',
    stack: ['Java', 'AWS', 'Python']
  },
  {
    name: 'Capital One',
    position: 'SWE Intern',
    dates: 'May 2025 - August 2025',
    description: 'Worked on the Card Tech team to develop an OCR pipeline that extracts information from uploaded documents, improving processing efficiency and accuracy.',
    stack: ['Java', 'Spring Boot', 'AWS', 'Python']
  },
  {
    name: 'Kirby Corporation',
    position: 'SWE Intern',
    dates: 'May 2024 - August 2024',
    description: 'Worked on the Business Solutions team to implement technical solutions for a 5000+ employee company, addressing and resolving their specific technical needs and challenges.',
    stack: ['C#', '.NET', 'PowerApps', 'Python']
  },
  {
    name: 'Tecmend',
    position: 'SWE Intern',
    dates: 'January 2023 - May 2023',
    description: 'Utilized skills in Python and Django to add to three projects\'s backends over the course of the internship. Gained project-based experience in web applications, APIs, and databases.',
    stack: ['Python', 'SQL', 'React', 'JavaScript'],
  },
  {
    name: 'Springworks',
    position: 'SWE Intern',
    dates: 'May 2022 - August 2022',
    description: 'Contributed to four machine learning projects, culminating in the creation of a OCR program. Gained valuable experience in project management and agile development methodologies.',
    stack: ['Python', 'AWS', 'Docker', 'Postman'],
  },
  {
    name: 'UT Austin',
    position: 'Research Assistant',
    dates: 'January 2024 - May 2024',
    description: 'Assisted in numerous robotics projects in the Robot Learning Lab. Worked on software that enables a Sawyer robot to autonomously play table tennis against a human opponent.',
    stack: ['Python', 'ROS', 'PyTorch'],
  }
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C',
  'C#',
  'Assembly',
  'R',
  'SQL',
  'JavaScript',
  'React',
  'Django',
  'Pytorch',
  'ROS',
  'Excel',
  'AWS',
  'GCP',
  'Docker',
  'Postman',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abhinav.tiruveedhula@utexas.edu',
}

export { header, about, projects, exps, skills, contact }
