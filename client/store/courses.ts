interface Section {
  title: string;
  weight: number;
  topics: string[];
}
type Course = Section[];

const jsnad: Course = [
  {
    title: 'Buffer and Streams',
    weight: 0.11,
    topics: [
      'Node.js Buffer API’s',
      'Incremental Processing',
      'Transforming Data',
      'Connecting Streams'
    ]
  },
  {
    title: 'Control Flow',
    weight: 0.12,
    topics: ['Managing asynchronous operations', 'Control flow abstractions']
  },
  {
    title: 'Child Process',
    weight: 0.08,
    topics: ['Spawning or Executing child processes', 'Child process configuration']
  },
  {
    title: 'Diagnostics',
    weight: 0.06,
    topics: ['Debugging Node.js', 'Basic performance analysis']
  },
  {
    title: 'Error Handling',
    weight: 0.08,
    topics: ['Common patterns', 'Handling errors in various scenarios']
  },
  { title: 'Node.js CLI', weight: 0.04, topics: ['Node executable command line flags'] },
  {
    title: 'Events',
    weight: 0.11,
    topics: ['The event system', 'Building event emitters', 'Consuming event emitters']
  },
  { title: 'File System', weight: 0.08, topics: ['Input/output', 'Watching'] },
  {
    title: 'JavaScript Prerequisites',
    weight: 0.07,
    topics: [
      'Language fundamentals',
      'Scoped to core language features introduced since EcmaScript 1 and still heavily used today'
    ]
  },
  { title: 'Module System', weight: 0.07, topics: ['CommonJS Module System only'] },
  {
    title: 'Process/Operating System',
    weight: 0.06,
    topics: ['Controlling the process', 'Getting system data']
  },
  {
    title: 'Package.json',
    weight: 0.06,
    topics: ['Package configuration', 'Dependency management']
  },
  {
    title: 'Unit Testing',
    weight: 0.06,
    topics: ['Using assertions', 'Testing synchronous code', 'Testing asynchronous code']
  }
];

const jsnsd: Course = [
  {
    title: 'Servers and Services',
    weight: 0.7,
    topics: [
      'Implementing public facing web servers',
      'Creating RESTful HTTP services',
      'Consuming other HTTP services',
      'Knowledge of HTTP verbs and status codes',
      'Processing user input'
    ]
  },
  {
    title: 'Security',
    weight: 0.3,
    topics: ['Protecting against malicious input', 'Attack mitigation']
  }
];

export const state = () => ({
  courses: [jsnad, jsnsd]
});
