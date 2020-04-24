import { Course } from "..";

export const jsnsd: Course = [
  {
    title: "Servers and Services",
    weight: 0.7,
    topics: [
      "Implementing public facing web servers",
      "Creating RESTful HTTP services",
      "Consuming other HTTP services",
      "Knowledge of HTTP verbs and status codes",
      "Processing user input",
    ],
  },
  {
    title: "Security",
    weight: 0.3,
    topics: ["Protecting against malicious input", "Attack mitigation"],
  },
];
