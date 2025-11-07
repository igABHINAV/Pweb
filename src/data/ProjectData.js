// --------------------------------------- Project List
export const ProjectList = [
  {
    title: "AI - Summarizer",
    description:
      "Project for Google Chrome Built-in AI Challenge 2025'. AI-powered Chrome extension that summarizes website privacy policies. Enabled users to highlight specific sections for summarization into a concise, readable format. Implemented a scoring system that rates policies out of 10 across key dimensions such as financial risk, software risk, and data privacy.",
    tech_stack: "Chrome's Summarizer API , HTML , Javascript",
    github_url: "https://github.com/igABHINAV/ai-summarizer"
  },
  {
    title: "One",
    description:
      "A multi-AI agent system in Python that automatically generates README(markdown) files and answers natural-language queries against GitHub repositories, integrated with an MCP (Model Context Protocol) server of GitHub and the Google's ADK(Agent Development Kit) to automate documentation creation and answering queries along with giving issue details(based on github's permission given) .",
    tech_stack: "Google ADK , Python , MCP Server(github) , Gemini ",
    github_url: "https://github.com/igABHINAV/one"
  },
  {
    title: "PadhAI",
    description:
      "a multi-source research agent using LangGraph, LangChain, and LLMs to aggregate results from Google, Bing, and Reddit, reducing manual research steps for prototype queries. Designed a graph-based, agentic structure that processes individual requests, routes them through an LLM agent, and provides valuable feedback.",
    tech_stack: "Python , Langchain , Langgraph",
    github_url: "https://github.com/igABHINAV/padhAI"
  },

  {
    title: "Yoom",
    description:
      "Built with the latest Next.js and TypeScript, this project is a video conferencing tool. It enables users to securely log in, create meetings and access various meeting functionalities such as recording, screen sharing, etc.",
    tech_stack: "NextJS , Clerk , Stream API",
    github_url: "https://github.com/igABHINAV/Yoom",
    demo_url: "https://yoom-beryl.vercel.app/",
    demo: true,
  },
  {
    title: "LiveDocs",
    description:
      "Built a real-time collaborative text editor using Next.js and the Liveblocks SDK, enabling simultaneous multi-user editing with real-time synchronization.",
    tech_stack: "Next.Js , Liveblocks SDK , Clerk",
    github_url: "https://github.com/igABHINAV/LiveDocs",
    demo_url: "https://livedocs-beige-eight.vercel.app/",
    demo: true,
  },
];

export const ExperienceList = [

  {
    title: "Zolo",
    role: "SDE 1 (July 2025 - Present)",
    description: [
      "Led design and delivery of a <strong>mid-stay room-change service</strong> built in <strong>Java + Spring Boot</strong> with <strong>real-time inventory validation</strong> and <strong>prorated billing</strong>, ensuring seamless synchronization with partner platforms such as <strong>MakeMyTrip</strong> accross various Zolo properties.",
      "Owned and led a team of <strong>3 engineers</strong> to implement a <strong>Kafka-based pub/sub</strong> for short-stay check-ins and check-outs across <strong>10+ Zolo properties</strong>, consolidating event flow across two microservices via an internal SDK.",
      "Engineered a <strong>distributed CRM task-generation microservice</strong> triggered by property events using <strong>ActiveMQ</strong>, automating operational workflows and reducing manual task overhead.",
      "Full lifecycle ownership: system design, performance tuning, CI/CD rollout and production monitoring for high-availability property services.",
      "Tech stack: <strong>Java, Spring Boot, PostgreSQL, MongoDB, Kafka, ActiveMQ, Docker, Kubernetes</strong>."
    ]
  }
  ,

  {
    title: "Zolo",
    role: "SDE Intern (Jan 2025 - June 2025)",
    description: [
      "Implemented <strong>RBAC</strong> in the asset-tracking API via internal SDK, enforcing authorization across <strong>30+ warehouse locations</strong> and reducing unauthorized-access risk.",
      "Delivered a <strong>GST-compliant invoicing microservice</strong> with a configurable SKU schema, cutting billing discrepancies by <strong>67%</strong> and improving reconciliation accuracy.",
      "Designed and presented a scalable enterprise asset-management architecture to the CTO and senior leadership; recommendations influenced adoption plans.",
      "Built a <strong>real-time notification microservice</strong> combining Kafka, ActiveMQ and batch scheduling to deliver asynchronous updates to <strong>50,000+ users</strong>, improving system responsiveness.",
      "Automated <strong>booking tax/GST calculations</strong> by integrating <strong>ancillary-charge logic</strong> into the billing pipeline and optimized PostgreSQL inventory queries via <strong>indexing and tuning</strong>, reducing query latency by <strong>60%</strong>.",
      "Tech stack: <strong>Java, Spring Boot, PostgreSQL, MongoDB, Kafka, ActiveMQ, Docker, Kubernetes</strong>."
    ]
  }

];

export const BlogList = [
  {
    title: "What is Redis and how does it work Internally",
    description: "Deep dive into the redis and its internal working.",
    date: "March 2024",
    url: "https://medium.com/@ayushsaxena823/what-is-redis-and-how-does-it-work-cfe2853eb9a9",
    tags: ["Redis", "Architecture"],
  },
  {
    title: "My Summer of Bitcoin Story",
    description:
      "My complete journey of Summer of bitcoin 2023 at Eye of Satoshi",
    date: "August 2024",
    url: "https://medium.com/@ayushsaxena823/my-summer-of-bitcoin-story-4f576b03ad03",
    tags: ["Summer of Bitcoin", "Eye of Satoshi"],
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: "/assets/skill/python.png",
    name: "Python",
  },
  // {
  //   img: "/assets/skill/flask.png",
  //   name: "Flask",
  // },
  {
    img: "/assets/skill/ai.png",
    name: "Generative AI",
  },
  {
    img: "/assets/skill/googleadk.png",
    name: "Google ADK",
  },
  {
    img: "/assets/skill/langchain.png",
    name: "Langgraph/Langchain",
  },
  // {
  //   img: "/assets/skill/fastapi.png",
  //   name: "FastAPI",
  // },
  {
    img: "/assets/skill/java.png",
    name: "Java",
  },
  {
    img: "/assets/skill/spring.png",
    name: "Spring Boot",
  },
  {
    img: "/assets/skill/javascript.svg",
    name: "JavaScript",
  },
  {
    img: "/assets/skill/typescript.png",
    name: "TypeScript",
  },
  {
    img: "/assets/skill/nodejs.png",
    name: "Node Js",
  },
  // {
  //   img: "/assets/skill/nestjs.svg",
  //   name: "Nest Js",
  // },
  {
    img: "/assets/skill/react.svg",
    name: "ReactJS",
  },
  {
    img: "/assets/skill/nextjs.svg",
    name: "Next Js",
  },
  {
    img: "/assets/skill/c.png",
    name: "C++",
  },
  {
    img: "/assets/skill/mysql.png",
    name: "MySQL",
  },
  {
    img: "/assets/skill/mongo.png",
    name: "MongoDB",
  },
  {
    img: "/assets/skill/postgre.png",
    name: "Postgre SQL",
  },
  // {
  //   img: "/assets/skill/elastic.png",
  //   name: "Elastic Search",
  // },
  {
    img: "/assets/skill/redis.png",
    name: "Redis",
  },

  {
    img: "/assets/skill/kafka.png",
    name: "Kafka",
  },

  // {
  //   img: "/assets/skill/rust.svg",
  //   name: "Rust",
  // },
];

export const toolist = [
  {
    img: "/assets/skill/cursor.png",
    name: "Cursor",
  },
  {
    img: "/assets/skill/chat-gpt.png",
    name: "ChatGPT",
  },
  // {
  //   img: "/assets/skill/ubuntu.png",
  //   name: "Ubuntu",
  // },
  {
    img: "/assets/skill/vs.png",
    name: "Vs code",
  },
  {
    img: "/assets/skill/intellij.png",
    name: "IntelliJ",
  },
  {
    img: "/assets/skill/docker.png",
    name: "Docker",
  },
  // {
  //   img: "/assets/skill/grafana.png",
  //   name: "Grafana",
  // },
  // {
  //   img: "/assets/skill/jenkins.png",
  //   name: "Jenkins",
  // },
  {
    img: "/assets/skill/postman.png",
    name: "Postman",
  },
  {
    img: "/assets/skill/argocd.png",
    name: "ArgoCD",
  },
  // {
  //   img: "/assets/skill/azure.png",
  //   name: "Azure",
  // },
  {
    img: "/assets/skill/mcp.png",
    name: "MCP Server",
  },
  {
    img: "/assets/skill/github.png",
    name: "Git/Github",
  },
  {
    img: "/assets/skill/jira.png",
    name: "Jira",
  },
  {
    img: "/assets/skill/aws.png",
    name: "Aws",
  },
];
