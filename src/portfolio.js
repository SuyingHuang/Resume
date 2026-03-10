/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "黄鹏",
  title: "你好，我是黄鹏",
  subTitle: emoji(
    "我是一个热爱新技术的在读大学生。本科专业为通信工程，我现在的研究兴趣是机器学习/计算机网络。"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lSbuhnnZCEhF5cFXMzJwdjmHDg34tqXj/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "我能做些什么",
  subTitle: "",
  skills: [
    emoji(
      "⚡ 自诩有良好的学习能力和抓重点能力，可以在短期内快速上手一个项目"
    ),
    emoji("⚡ 思维活泛，毕设研究复现他人论文时常能向老师汇报我的新思考，新观点"),
    emoji(
      "⚡ 善于与他人效率地沟通并解决问题"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fab fa-c"
    },
    {
      skillName: "数学（含高数、线代、数值分析）",
      fontAwesomeClassname: "fa-solid fa-calculator"
    },
    {
      skillName: "数字信号处理",
      fontAwesomeClassname: "fa-solid fa-wave-square"
    },
    {
      skillName: "计算机网络",
      fontAwesomeClassname: "fa-solid fa-computer"
    },
    {
      skillName: "机器学习",
      fontAwesomeClassname: "fa-solid fa-robot"
    },
    {
      skillName: "微控制器",
      fontAwesomeClassname: "fa-solid fa-microchip"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fa-solid fa-m"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "哈尔滨工业大学",
      logo: require("./assets/images/harbin-institute-of-technology-logo.png"),
      subHeader: "Master of Information and Communication Engineering",
      duration: "September 2026 - June 2028",
      desc: "Not known for the time being",
      descBullets: [
	  
      ]
    },
    {
      schoolName: "东北大学",
      logo: require("./assets/images/Northeastern-logo.png"),
      subHeader: "Bachelor of Information and Communication Engineering",
      duration: "September 2022 - June 2026",
      desc: "Ranked top 10% in the program.Outstanding student cadres.School-level scholarships",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  title: "Work experience",
  subtitle: "希望贵司能给我一个机会哇",
  display: true, //Set it to true to show workExperiences Section
  experience: [
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "这里包含了我的毕业设计",
  projects: [
    {
      image: require("./assets/images/sat.jpg"),
      projectName: "时敏网络下的分布式资源调度与优化系统",
      projectDesc: "原论文题目不叫这个，但这里叫这个名字让非通信人士也很好理解",
      footerLink: [
        {
          name: "Visit My Work",
          url: "https://github.com/SuyingHuang/Undergraduate-Thesis-Research-Record.git"
        }
        //  you can add extra buttons here.
      ]
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Interdisciplinary Contest in Modeling Finalist",
      subtitle:
        "COMAP's Mathematical Contest in Modeling (MCM) and Interdisciplinary Contest in Modeling (ICM) are international contests for high school students and college undergraduates.",
      image: require("./assets/images/Comap+1280+x+960.webp"),
      imageAlt: "Comap Logo",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://www.comap-math.org/mcm/2025Certs/2512459.pdf"
        }
      ]
    },
    {
      title: "National College Student Electronic Design Competition",
      subtitle:
        "全国大学生电子设计竞赛是由教育部和工业和信息化部共同发起的大学生学科竞赛，旨在推动高等学校信息与电子类学科课程体系和内容的改革。",
      image: require("./assets/images/diansai.png"),
      imageAlt: "National College Student Electronic Design Competition Logo",
      footerLink: [
        {
          name: "My team achievement",
          url: "https://github.com/SuyingHuang/2025-National-College-Student-Electronic-Design-Competition.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "如果",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "如果您有一份差事愿意介绍给我，很乐意与您沟通",
  number: "+86-13538297841",
  email_address: "suyinghuang2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
