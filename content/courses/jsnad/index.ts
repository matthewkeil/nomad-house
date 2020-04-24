export interface Segment {
  id: string;
  label: string;
  slug: string;
  description?: string;
  hero?: { video: string } | { image: string };
  examples?: string[];
  videos?: string[];
  posts?: string[];
  docs?: string[];
}

export interface Section {
  title: string;
  slug: string;
  weight?: number;
  segments: Segment[];
}

export type Course = Section[];

const intro: Section = {
  title: "Introduction",
  slug: "jsnad-course-introduction",
  segments: [
    {
      id: "",
      label: "About OpenJS Foundation",
      slug: "about-open-js-foundation",
      description:
        "The OpenJS Foundation is made up of 32 open source JavaScript projects including Appium, Dojo, jQuery, Node.js, and webpack. Their mission is to support the healthy growth of JavaScript and web technologies by providing a neutral organization to host and sustain projects, as well as collaboratively fund activities that benefit the ecosystem as a whole.",
    },
    {
      id: "",
      label: "Candidate Handbook",
      slug: "jsnad-candidate-handbook",
      description: "",
    },
    {
      id: "",
      label: "Candidate Handbook",
      slug: "jsnad-candidate-handbook",
      description: "",
    },
  ],
};
const background: Section = {
  title: "History and Fundamentals of Node.js",
  slug: "history-and-fundamentals-of-node",
  segments: [],
};
const javascriptPrerequisites: Section = {
  title: "JavaScript Prerequisites",
  slug: "javascript-prerequisites",
  weight: 0.07,
  segments: [
    { id: "", label: "Language fundamentals", slug: "language-fundamentals" },
    {
      id: "",
      label:
        "Scoped to core language features introduced since EcmaScript 1 and still heavily used today",
      slug:
        "scoped-to-core-language-features-introduced-since-EcmaScript-1-and-still-heavily-used-today",
    },
  ],
};
const controlFlow: Section = {
  title: "Control Flow",
  slug: "control-flow",
  weight: 0.12,
  segments: [
    {
      id: "",
      label: "Managing asynchronous operations",
      slug: "managing-asynchronous-operations",
    },
    {
      id: "",
      label: "Control flow abstractions",
      slug: "control-flow-abstractions",
    },
  ],
};
const fileSystem: Section = {
  title: "File System",
  slug: "file-system",
  weight: 0.08,
  segments: [
    { id: "", label: "Input/output", slug: "file-system-input-output" },
    { id: "", label: "Watching", slug: "file-system-watching" },
  ],
};
const moduleSystem: Section = {
  title: "Module System",
  slug: "module-system",
  weight: 0.07,
  segments: [{ id: "", label: "CommonJS Module System only", slug: "" }],
};
const packageJson: Section = {
  title: "Package.json",
  slug: "package-json",
  weight: 0.06,
  segments: [
    { id: "", label: "Package configuration", slug: "package-configuration" },
    { id: "", label: "Dependency management", slug: "dependency-management" },
  ],
};
const nodeCli: Section = {
  title: "Node.js CLI",
  slug: "node-js-cli",
  weight: 0.04,
  segments: [
    {
      id: "",
      label: "Node executable command line flags",
      slug: "node-executable-command-line-flags",
    },
  ],
};
const events: Section = {
  title: "Events",
  slug: "events",
  weight: 0.11,
  segments: [
    { id: "", label: "The event system", slug: "the-event-system" },
    {
      id: "",
      label: "Building event emitters",
      slug: "building-event-emitters",
    },
    {
      id: "",
      label: "Consuming event emitters",
      slug: "consuming-event-emitters",
    },
  ],
};
const processAndOS: Section = {
  title: "Process/Operating System",
  slug: "process-and-operating-system",
  weight: 0.06,
  segments: [
    {
      id: "",
      label: "Controlling the process",
      slug: "controlling-the-process",
    },
    { id: "", label: "Getting system data", slug: "getting-system-data" },
  ],
};
const bufferAndStreams: Section = {
  title: "Buffer and Streams",
  slug: "buffer-and-streams",
  weight: 0.11,
  segments: [
    {
      id: "1",
      label: "Node.js Buffer API’s",
      slug: "node-js-buffer-api",
      hero: { video: "" },
    },
    {
      id: "2",
      label: "Incremental Processing",
      slug: "incremental-processing",
    },
    { id: "3", label: "Transforming Data", slug: "transforming-data" },
    { id: "4", label: "Connecting Streams", slug: "connecting-streams" },
  ],
};
const childProcess: Section = {
  title: "Child Process",
  slug: "child-process",
  weight: 0.08,
  segments: [
    {
      id: "",
      label: "Spawning or Executing child processes",
      slug: "spawning-or-executing-child-processes",
    },
    {
      id: "",
      label: "Child process configuration",
      slug: "child-process-configuration",
    },
  ],
};
const errorHandling: Section = {
  title: "Error Handling",
  slug: "error-handling",
  weight: 0.08,
  segments: [
    { id: "", label: "Common patterns", slug: "common-patterns" },
    {
      id: "",
      label: "Handling errors in various scenarios",
      slug: "handling-errors-in-various-scenarios",
    },
  ],
};
const unitTesting: Section = {
  title: "Unit Testing",
  slug: "unit-testing",
  weight: 0.06,
  segments: [
    { id: "", label: "Using assertions", slug: "using-assertions" },
    {
      id: "",
      label: "Testing synchronous code",
      slug: "testing-synchronous-code",
    },
    {
      id: "",
      label: "Testing asynchronous code",
      slug: "testing-asynchronous-code",
    },
  ],
};
const diagnostics: Section = {
  title: "Diagnostics",
  slug: "diagnostics",
  weight: 0.06,
  segments: [
    { id: "", label: "Debugging Node.js", slug: "debugging-node-js" },
    {
      id: "",
      label: "Basic performance analysis",
      slug: "basic-performance-analysis",
    },
  ],
};
const theExam: Section = {
  title: "Preparation, and Taking the Exam",
  slug: "preparation-and-taking-the-exam",
  segments: [],
};

export const jsnad: Course = [
  intro,
  background,
  javascriptPrerequisites,
  controlFlow,
  fileSystem,
  moduleSystem,
  packageJson,
  nodeCli,
  events,
  processAndOS,
  bufferAndStreams,
  childProcess,
  errorHandling,
  unitTesting,
  diagnostics,
  theExam,
];
