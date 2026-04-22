export default {
    home: {
        title: 'Welcome to my website!',
        content: 'Start exploring',
        home: 'Home',
        project: 'Projects',
        about: 'About',
        projects: 'Projects',
        aboutMe: 'About Me',
        skills: 'Skills',
        experiences: 'Experience',
        services: 'Services',
        contact: 'Contact',
        introduce: 'Hello, I am Minh, a Full-Stack Web Developer based in Hanoi. I have extensive experience in designing, building, and customizing scalable web applications. My expertise includes',
    },
    me: {
        hello: "Hi, I'm",
        title: "I'm Minh. I am a Full-Stack Web Developer based in Hanoi.",
        content: "I have over 6 years of experience in web development and software engineering, specializing in building high-performance web applications.",
        availableForWork: "Available for work",
        description1: "Building high-performance web applications with over",
        description2: "years of experience.",
        description3: "Specialized in",
        hireMe: "Hire Me",
        viewProjects: "View Projects",
        scrollDown: "Scroll down",
        yearsExp: "Years Exp.",
        projects: "Projects",
        companies: "Companies"
    },
    myProject: {
        myProject: "Featured Projects",
        content: "A selection of my best work, including full-stack web applications and corporate software solutions.",
        featured: "Featured Project",
        viewProject: "View Project",
        projectsData: [
            {
                title: "Sim Selling Website",
                description: "A high-performance sim card selling website developed with SEO optimization. Admin dashboard built with Angular for a smooth management experience.",
                image: "/Group67.png",
                link: "https://mobifonehanoi.vn/",
                tags: ["Laravel", "Angular", "SEO", "MySQL", "jQuery"],
                color: "#6c63ff",
            },
            {
                title: "CRM Software",
                description: "CRM software helping businesses manage customer interactions, fostering loyalty and streamlining operations.",
                image: "/Group68.png",
                link: "https://bizfly.vn/giai-phap/bizfly-crm.html",
                tags: ["Laravel", "MongoDB", "MithrilJS", "Jenkins"],
                color: "#00d4ff",
            },
        ]
    },
    contact: {
        badge: "✦ Get In Touch",
        title: "Let's Work Together",
        subtitle: "Have a project in mind or just want to say hi? Feel free to reach out!",
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        socials: "Follow Me",
    },
    about: {
        badge: "✦ About Me",
        introSuffix: " PHP, Laravel, React and Next.js. I love building high-performance products, beautiful interfaces, and great user experiences.",
        techWorking: "Technologies I work with",
        name: "Name",
        location: "Location",
        email: "Email",
        status: "Status",
        available: "Available",
        yearsExperience: "Years Experience",
        downloadCV: "Download CV"
    },
    skills: {
        badge: "✦ My Skills",
        title: "Technical Expertise",
        subtitle: "Technologies I've worked with across front-end, back-end, and tooling.",
        toolsEnv: "Tools & Environments",
        technicalSkills: "Technical Skills",
        professionalSkills: "Professional Skills",
        communication: "Communication",
        teamWork: "Teamwork",
        projectManagement: "Project Management",
        creativity: "Creativity"
    },
    experiences: {
        badge: "✦ My Journey",
        title: "Education & Experience",
        subtitle: "My academic background and professional journey as a software developer.",
        education: "Education",
        workExperience: "Work Experience",
        current: "Current",
        educationData: [
            {
                degree: "Bachelor of Information Technology",
                school: "HUMG",
                schoolFull: "Hanoi University of Mining and Geology",
                period: "2015 – 2020",
                details: [
                    "Specialization: Software Technology",
                    "Graduation GPA: 2.42 / 4.0",
                ],
                type: "education",
            }
        ],
        workData: [
            {
                title: "Software Developer",
                company: "VMMS",
                period: "11/2019 – 08/2020",
                responsibilities: [
                    "Core module development",
                    "RESTful API design",
                    "Database design",
                    "Package management",
                ],
                tech: ["Laravel", "Javascript"],
                type: "work",
            },
            {
                title: "Software Developer",
                company: "VCCorp",
                period: "08/2020 – 06/2022",
                responsibilities: [
                    "CRM system development",
                    "Reporting & statistical features",
                    "Security encryption & 3rd party integration",
                ],
                tech: ["Laravel", "Javascript", "MithrilJS"],
                type: "work",
            },
            {
                title: "Software Developer",
                company: "Nissho Electronics",
                period: "07/2022 – 05/2023",
                responsibilities: [
                    "HRTECH system development for candidates",
                    "Client requirements analysis",
                    "AI integration for candidate evaluation",
                ],
                tech: ["Laravel", "Javascript", "Vuejs"],
                type: "work",
            },
            {
                title: "Software Developer",
                company: "Shine Vision",
                period: "05/2023 – Present",
                responsibilities: [
                    "Building management system for UK clients",
                    "Client requirements analysis",
                    "API design & integration",
                    "Database architecture",
                ],
                tech: ["Laravel", "Javascript"],
                type: "work",
                current: true,
            }
        ]
    },
    project: {
        title: "Project Details",
        subtitle: "Details of projects and practical work experience.",
        goToWebsite: "Go to website",
        role: "Role",
        tasks: "Tasks:",
        teamSize: "Team size:",
        projectsData: [
            {
                title: "E-COMMERCE WEBSITE",
                link: "https://mobifonehanoi.vn/",
                tasks: [
                    "Developed modules for the company's core system.",
                    "Designed the database architecture.",
                    "Built RESTful APIs.",
                    "Published modules to Packagist.",
                    "Used modules to rapidly deploy new websites."
                ],
                company: "VMMS",
                period: "11/2019 - 08/2020",
                role: "Software Developer",
                teamSize: 2,
                techs: ["Laravel", "Javascript"]
            },
            {
                title: "CRM SYSTEM",
                link: "https://bizfly.vn/giai-phap/bizfly-crm.html",
                tasks: [
                    "Developed a customer relationship management (CRM) system.",
                    "Implemented statistical reporting features.",
                    "Managed permissions, Excel exports, and Push Notifications.",
                    "Used internal modules to accelerate website creation.",
                    "Implemented security encryption, SMS sending, and integrated third-party APIs (Haravan, KiotViet, Janco)."
                ],
                company: "VCCorp",
                period: "08/2020 - 06/2022",
                role: "Software Developer",
                teamSize: 11,
                techs: ["Laravel", "Javascript", "Mithril"]
            },
            {
                title: "HRTECH PLATFORM",
                link: null,
                tasks: [
                    "Developed an HRTECH system for candidate management.",
                    "Built the HRTECH system for Aeon Vietnam.",
                    "Analyzed client requirements and designed system features.",
                    "Built RESTful APIs.",
                    "Used Vue.js to develop the candidate portal and admin dashboard.",
                    "Integrated AI for candidate scoring and evaluation."
                ],
                company: "Nissho Electronics",
                period: "07/2022 - 05/2023",
                role: "Software Developer",
                teamSize: 8,
                techs: ["Laravel", "Javascript", "Vuejs"]
            },
            {
                title: "SURVEY SYSTEM",
                link: null,
                tasks: [
                    "Developed a building management system for UK clients.",
                    "Analyzed client requirements and designed system features.",
                    "Designed the database architecture.",
                    "Built RESTful APIs."
                ],
                company: "Shine Vision",
                period: "05/2023 - Present",
                role: "Software Developer",
                teamSize: 10,
                techs: ["Laravel", "Javascript"]
            }
        ]
    },
    footer: {
        jobTitle: "Full-Stack Developer · Hanoi, Vietnam",
        builtWith: "Built with Next.js & ❤️"
    },
    blog: {
        badge: "✦ Latest Insights",
        title: "Tech & Thoughts",
        viewAll: "View All Stories",
        readMore: "Read More"
    }
}
