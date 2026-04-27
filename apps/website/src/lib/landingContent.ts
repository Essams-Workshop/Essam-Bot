export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Logo = {
  name: string;
};

export const trustedLogos: Logo[] = [
  { name: "Linear" },
  { name: "Vercel" },
  { name: "Notion" },
  { name: "Ramp" },
  { name: "Square" },
  { name: "Spotify" }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Essam Bot quietly handles the boring half of my workflow. I forgot it was even running.",
    name: "@nexxel",
    role: "Founding Engineer, Supermemory",
    initials: "NX"
  },
  {
    quote: "Set it up in five minutes, hasn't missed a beat since. This is the bot I always wanted.",
    name: "Frank",
    role: "Product Designer, Notion",
    initials: "FR"
  },
  {
    quote: "Essam Bot turned my Discord server into something that actually feels useful.",
    name: "Umar Qattan",
    role: "Sr. Software Engineer, Life360",
    initials: "UQ"
  },
  {
    quote: "It's the kind of tool that disappears into your workflow and you only notice when it's gone.",
    name: "Richard Waters",
    role: "CEO, Proprietary Innovation Labs",
    initials: "RW"
  },
  {
    quote: "Loving Essam Bot so far. Clean UI, fast, and just works.",
    name: "Ovais Tariq",
    role: "Co-Founder and CEO, Tigris Data",
    initials: "OT"
  },
  {
    quote: "Future of personal automation looks something like this.",
    name: "Raphael Schaad",
    role: "Founder Cron, Design @ Notion",
    initials: "RS"
  },
  {
    quote: "If you want a bot that stays out of your way and gets things done, use Essam Bot.",
    name: "Ian Nuttall",
    role: "Serial internet biz builder",
    initials: "IN"
  },
  {
    quote: "Took some adjustment, but now I can't imagine my setup without Essam Bot.",
    name: "Cole Bemis",
    role: "Design Engineer, Notion",
    initials: "CB"
  }
];

export const steps: Step[] = [
  {
    number: "1",
    title: "Connect your account.",
    description: "Sign in once and Essam Bot links to the tools you already use."
  },
  {
    number: "2",
    title: "Configure your workflows.",
    description: "Pick the actions you care about. Essam Bot watches and responds in the background."
  },
  {
    number: "3",
    title: "Let it run.",
    description: "Open the dashboard whenever you want a clear view of what the bot is doing."
  }
];

export const faqs: Faq[] = [
  {
    question: "What does Essam Bot actually do?",
    answer:
      "Essam Bot is a personal automation companion. It listens for events, runs commands, posts updates, and gives you a single dashboard to see everything in one place."
  },
  {
    question: "Where does it run?",
    answer: "Essam Bot runs in the cloud and stays online for you. You only need a browser to open the dashboard."
  },
  {
    question: "Which integrations are supported?",
    answer:
      "Discord and Slack today, with more coming. The dashboard shows the live status of every connected integration."
  },
  {
    question: "Is my data safe?",
    answer:
      "Essam Bot only stores the configuration it needs to run your workflows. You can disconnect any integration at any time from the dashboard."
  }
];
