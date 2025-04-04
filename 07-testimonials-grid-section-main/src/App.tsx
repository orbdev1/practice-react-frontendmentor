import TestimonialsGrid from "./components/TestimonialsGrid";

type User = {
  name: string;
  title: string;
  image: string;
  special: boolean;
};

type Testimonial = {
  id: number;
  user: User;
  testimony: string;
  description: string;
};
const testimonials: Testimonial[] = [
  {
    id: 1,
    user: {
      name: "Daniel Clifford",
      title: "Verified Graduate",
      image: "/image-daniel.jpg",
      special: true,
    },
    testimony:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    description:
      "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
  },
  {
    id: 2,
    user: {
      name: "Jonathan Walters",
      title: "Verified Graduate",
      image: "/image-jonathan.jpg",
      special: false,
    },
    testimony: "The team was very supportive and kept me motivated",
    description:
      "“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
  },
  {
    id: 3,
    user: {
      name: "Jeanette Harmon",
      title: "Verified Graduate",
      image: "/image-jeanette.jpg",
      special: false,
    },
    testimony: "An overall wonderful and rewarding experience",
    description:
      "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
  },
  {
    id: 4,
    user: {
      name: "Patrick Abrams",
      title: "Verified Graduate",
      image: "/image-patrick.jpg",
      special: false,
    },
    testimony:
      "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    description:
      "“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
  },
  {
    id: 5,
    user: {
      name: "Kira Whittle",
      title: "Verified Graduate",
      image: "/image-kira.jpg",
      special: false,
    },
    testimony: "Such a life-changing experience. Highly recommended!",
    description:
      "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
  },
];

function App() {
  return (
    <section className="min-h-screen font-barlow font-medium grid place-items-center">
      <TestimonialsGrid testimonials={testimonials} />
    </section>
  );
}

export default App;
