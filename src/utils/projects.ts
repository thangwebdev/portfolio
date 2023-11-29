export type CategoryType = "react.js" | "next.js" | "fullstack";

export type ProjectType = {
  id: string;
  categories: CategoryType[];
  name: string;
  tech: string;
  description: string;
  imgPath: string;
  deployLink?: string;
  github?: string;
};

export const projects: ProjectType[] = [
  {
    id: "manage store",
    categories: ["react.js", "fullstack"],
    tech: "Fullstack",
    name: "Manage Store",
    description: `I developed it utilizing Express.js for the backend, 
    React.js for the frontend, and the MongoDB database.
    `,
    imgPath: "/assets/projects/huleshop.png",
    deployLink: "https://huleshop.thangwebdev.click",
    github: "https://github.com/thangwebdev/Hule-Shop",
  },
  {
    id: "portfolio",
    categories: ["next.js"],
    tech: "Next.js",
    name: "Portfolio",
    description: `This website was constructed using Next.js for the frontend,
     with additional backend features developed using Next.js.`,
    imgPath: "/assets/projects/portfolio.png",
    deployLink: "https://thangwebdev.click",
    github: "https://github.com/thangwebdev/portfolio",
  },
  {
    id: "movie",
    categories: ["react.js"],
    tech: "React.js",
    name: "Movie Website",
    description: `The movie website was developed utilizing React.js for the frontend, 
    and it interfaces with an API from a freely available source.`,
    imgPath: "/assets/projects/movie.png",
    deployLink: "https://movie.thangwebdev.click",
    github: "https://github.com/vothang104/react-simple-movie",
  },
];
