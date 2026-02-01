export const projects = [
  {
    id: "project-1",
    name: "Care.io",
    image: "/projects/project-new.png",
    description:
      "Care.io is a home-care giving service website. Where an authenticate user can book a service to take care his/her beloved one at home. After booking a service user will get an email for conformation.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "React Icons",
      "Nodemailer"
    ],
    liveLink: "https://care-io-theta.vercel.app",
    githubLink: "https://github.com/Rumon-Ghosh/care.io.git",
    challenges:
      "Organizing toy data in a user-friendly way and implementing secure Firebase authentication and use Nodemailer for conformation of a service booking.",
    improvements:
      "Add advanced search and filters, seller analytics, more categories, and localized content to reach more families.",
  },
  {
    id: "project-2",
    name: "MicroEarn",
    image: "/projects/project-new-2.png",
    description:
      "MicroEarn is a professional micro-tasking and earning platform connecting Workers and Buyers through a coin-based economy. It features secure RBAC, a real-time task system, and comprehensive dashboards for all user roles.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    liveLink: "https://micro-task-11a98.web.app",
    githubLink: "https://github.com/Rumon-Ghosh/micro-task-frontend.git",
    serverLink: "https://github.com/Rumon-Ghosh/micro-task-backend.git",
    adminCredentials: {
      email: "admin@mail.com",
      password: "admin**"
    },
    features: [
      "Secure Authentication: Firebase Email/Password and Google Login.",
      "Role-Based Access Control: Distinct Dashboards for Workers, Buyers, and Admins.",
      "Coin-Based Economy: Earn coins for tasks and spend coins to create tasks.",
      "Task Management: Create, update, and delete tasks with real-time coin deduction.",
      "Withdrawal System: Workers can request withdrawals reaching $10 threshold.",
      "Dashboard Analytics: Visual statistics for Total Earnings, Tasks, and more.",
      "Security: JWT implemented for secure API communication."
    ],
    challenges:
      "Implementing a secure, role-based access control system and maintaining a consistent coin-based economy between Buyers and Workers in real-time.",
    improvements:
      "Planning to integrate real-time notifications, automated proof verification using AI, and more diverse withdrawal methods for global users.",
  },
  {
    id: "project-3",
    name: "BookCourier",
    image: "/projects/project-3.png",
    description:
      "BookCourier is a complete book-ordering platform with role-based dashboards for users, admins, and librarians. Users can browse, search, sort, and order books with secure Stripe payments.",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Stripe",
      "React Router",
      "Axios",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Framer Motion",
      "Recharts",
      "SweetAlert2",
      "Swiper",
      "React Hook Form",
    ],
    liveLink: "https://assignment-11-3cad8.web.app",
    githubLink: "https://github.com/Rumon-Ghosh/book-courier-client.git",
    challenges:
      "Implementing role-based dashboards, secure Stripe payments, complex book filters, and keeping state in sync across all user roles.",
    improvements:
      "Improve the recommendation system, add more payment and delivery options, and expand analytics and reporting for admins and librarians.",
  },
];