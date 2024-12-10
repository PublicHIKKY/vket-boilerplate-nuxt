interface Command {
  name: string;
  description: string;
}

interface Section {
  id: string;
  title: string;
  content: string[];
  commands?: Command[];
}
