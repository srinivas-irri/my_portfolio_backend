import portfolioData from "../data/portfolioData.js";

export const knowledgeBase = [];

/* ===========================
   SKILLS
=========================== */

knowledgeBase.push({

    type: "skills",

    keywords: [

        "skill",
        "skills",
        "technology",
        "technologies",
        "tech stack",
        "frontend",
        "angular",
        "react",
        "javascript",
        "typescript"

    ],

    data: portfolioData.skills

});

/* ===========================
   WORKS / PROJECTS
=========================== */

knowledgeBase.push({

    type: "projects",

    keywords: [
    "project",
    "projects",
    "works",
    "my work",
    "portfolio",
    "applications",
    "each project",
    "all projects",
    "project details",
    "explain projects",
    "show projects"
    ],

    data: portfolioData.works

});

// Individual project search
portfolioData.works.forEach(work => {

    knowledgeBase.push({

        type: "project",

        keywords: [

            work.title.toLowerCase(),

            ...work.tech.map(t => t.toLowerCase())

        ],

        data: work

    });

});

/* ===========================
   ABOUT
=========================== */

knowledgeBase.push({

    type: "about",

    keywords: [

    "about srinivas",
    "who is srinivas",
    "introduce yourself",
    "about yourself",
    "profile"

    ],

    data: portfolioData.personalInfo

});

/* ===========================
   EXPERIENCE
=========================== */

knowledgeBase.push({

    type: "experience",

    keywords: [

        "experience",
        "work experience",
        "career",
        "professional experience"

    ],

    data: portfolioData.personalInfo

});

/* ===========================
   Education & languages
=========================== */

knowledgeBase.push({

    type: "education",

   keywords: [
    "education",
    "qualification",
    "highest qualification",
    "degree",
    "graduation",
    "college",
    "university"
    ],

    data: portfolioData.education

});

/* ===========================
   CONTACT
=========================== */

knowledgeBase.push({

    type: "contact",

    keywords: [

        "contact",
        "contact me",
        "contact srinivas",
        "how to contact",
        "how do i contact",
        "reach",
        "reach srinivas",
        "reach out",
        "connect",
        "connect with",
        "email",
        "mail",
        "gmail",
        "phone",
        "mobile",
        "call",
        "linkedin",
        "github",
        "hire",
        "hire me"

    ],

    data: portfolioData.personalInfo

});


/* ===========================
   RESUME
=========================== */

knowledgeBase.push({

    type: "resume",

    keywords: [

        "resume",
        "cv",
        "download resume",
        "download cv",
        "latest resume"

    ],

    data: portfolioData.personalInfo

});