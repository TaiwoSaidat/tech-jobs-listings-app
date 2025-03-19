export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  fullDescription: string;
  location: string;
  salary: string;
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    description:
      "We're looking for a skilled Frontend Developer to join our team.",
    fullDescription:
      "We're looking for a skilled Frontend Developer to join our growing team. The ideal candidate will have experience with React, TypeScript, and modern CSS frameworks. You'll be responsible for building user interfaces, implementing new features, and maintaining existing code. We offer competitive salary and benefits, flexible working hours, and a collaborative work environment.",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    postedDate: "2025-03-15",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems Ltd.",
    description: "Join our backend team to build scalable APIs and services.",
    fullDescription:
      "Join our backend team to build scalable APIs and services. You'll work on designing and implementing RESTful APIs, optimizing database queries, and ensuring high performance and reliability. We're looking for someone with experience in Node.js, Python, or Java, and a solid understanding of database systems. This role offers an opportunity to work on challenging problems and grow your skills in a supportive environment.",
    location: "New York, NY",
    salary: "$130,000 - $160,000",
    postedDate: "2025-03-12",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "InnovateTech",
    description:
      "Develop both frontend and backend components for our innovative products.",
    fullDescription:
      "Develop both frontend and backend components for our innovative products. We're looking for someone who can seamlessly work across the entire stack. The ideal candidate will have experience with React, Node.js, and relational databases. You'll be involved in all stages of the development process, from initial design through to deployment and maintenance. This is a great opportunity for someone who enjoys varied work and wants to have a broad impact.",
    location: "Austin, TX",
    salary: "$110,000 - $140,000",
    postedDate: "2025-03-17",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudNine Solutions",
    description: "Manage our cloud infrastructure and deployment pipelines.",
    fullDescription:
      "Manage our cloud infrastructure and deployment pipelines. We're looking for a DevOps Engineer who can help us optimize our CI/CD processes, maintain our cloud infrastructure, and improve system reliability. The ideal candidate will have experience with AWS or Azure, containerization technologies like Docker and Kubernetes, and infrastructure as code tools like Terraform. You'll play a crucial role in ensuring our systems are secure, scalable, and efficient.",
    location: "Seattle, WA",
    salary: "$125,000 - $155,000",
    postedDate: "2025-03-10",
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "Analytix",
    description: "Turn data into actionable insights for our clients.",
    fullDescription:
      "Turn data into actionable insights for our clients. We're looking for a Data Scientist who can work with large datasets, develop machine learning models, and communicate findings effectively. The ideal candidate will have experience with Python, R, or similar tools, and a strong background in statistics. You'll work closely with our clients to understand their needs and deliver solutions that drive business value.",
    location: "Chicago, IL",
    salary: "$115,000 - $145,000",
    postedDate: "2025-03-14",
  },
  {
    id: "6",
    title: "UX/UI Designer",
    company: "DesignForward",
    description:
      "Create beautiful and intuitive user experiences for our products.",
    fullDescription:
      "Create beautiful and intuitive user experiences for our products. We're looking for a UX/UI Designer who can take projects from concept to completion. The ideal candidate will have experience with user research, wireframing, prototyping, and visual design. You'll work closely with our product and development teams to ensure our products are not only functional but also delightful to use. This role offers an opportunity to have a significant impact on how users interact with our products.",
    location: "Portland, OR",
    salary: "$100,000 - $130,000",
    postedDate: "2025-03-16",
  },
  {
    id: "7",
    title: "Product Manager",
    company: "ProductVision",
    description: "Lead the development of new products from concept to launch.",
    fullDescription:
      "Lead the development of new products from concept to launch. We're looking for a Product Manager who can identify market opportunities, define product requirements, and coordinate cross-functional teams to deliver outstanding products. The ideal candidate will have experience in agile methodologies, a technical background, and strong communication skills. You'll be responsible for the success of our products and will have the opportunity to shape the future of our company.",
    location: "Boston, MA",
    salary: "$130,000 - $160,000",
    postedDate: "2025-03-13",
  },
  {
    id: "8",
    title: "Mobile Developer",
    company: "AppWorks",
    description: "Develop mobile applications for iOS and Android platforms.",
    fullDescription:
      "Develop mobile applications for iOS and Android platforms. We're looking for a Mobile Developer who can create high-performance, feature-rich applications that provide value to our users. The ideal candidate will have experience with Swift, Kotlin, or React Native, and a strong understanding of mobile UX patterns. You'll be responsible for implementing new features, fixing bugs, and ensuring our apps meet the highest standards of quality and performance.",
    location: "Miami, FL",
    salary: "$105,000 - $135,000",
    postedDate: "2025-03-11",
  },
  {
    id: "9",
    title: "QA Engineer",
    company: "QualityFirst",
    description: "Ensure our products meet the highest quality standards.",
    fullDescription:
      "Ensure our products meet the highest quality standards. We're looking for a QA Engineer who can develop and execute test plans, identify and report bugs, and work with developers to resolve issues. The ideal candidate will have experience with manual and automated testing, and a keen eye for detail. You'll play a crucial role in maintaining the quality of our products and improving our testing processes.",
    location: "Denver, CO",
    salary: "$90,000 - $120,000",
    postedDate: "2025-03-18",
  },
  {
    id: "10",
    title: "Security Engineer",
    company: "SecureNet",
    description: "Protect our systems and data from security threats.",
    fullDescription:
      "Protect our systems and data from security threats. We're looking for a Security Engineer who can identify vulnerabilities, implement security measures, and respond to incidents. The ideal candidate will have experience with network security, application security, and security best practices. You'll be responsible for ensuring our systems are secure and compliant with relevant regulations. This role offers an opportunity to work on challenging security problems and make a significant impact on our organization.",
    location: "Washington, DC",
    salary: "$140,000 - $170,000",
    postedDate: "2025-03-09",
  },
];
