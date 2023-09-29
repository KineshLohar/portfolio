const programmingQuotes = [
    {
      author: "Linus Torvalds",
      quote: "Talk is cheap. Show me the code."
    },
    {
      author: "Bill Gates",
      quote: "It's fine to celebrate success, but it is more important to heed the lessons of failure."
    },
    {
      author: "Steve Jobs",
      quote: "Innovation distinguishes between a leader and a follower."
    },
    {
      author: "Grace Hopper",
      quote: "The most damaging phrase in the language is 'We've always done it this way.'"
    },
    {
      author: "Alan Turing",
      quote: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine."
    },
    {
      author: "Larry Wall",
      quote: "The three chief virtues of a programmer are: Laziness, Impatience, and Hubris."
    },
    {
      author: "Edsger W. Dijkstra",
      quote: "Computer Science is no more about computers than astronomy is about telescopes."
    },
    {
      author: "Ada Lovelace",
      quote: "That brain of mine is something more than merely mortal, as time will show."
    },
    {
      author: "Bjarne Stroustrup",
      quote: "In C++ it's harder to shoot yourself in the foot, but when you do, you blow off your whole leg."
    },
    {
      author: "Guido van Rossum",
      quote: "I'm not a great programmer; I'm just a good programmer with great habits."
    },
    {
      author: "Donald Knuth",
      quote: "Premature optimization is the root of all evil (or at least most of it) in programming."
    },
    {
      author: "Alan Kay",
      quote: "The best way to predict the future is to invent it."
    },
    {
      author: "Richard Stallman",
      quote: "Free software is a matter of liberty, not price. To understand the concept, you should think of 'free' as in 'free speech,' not as in 'free beer.'"
    },
    {
      author: "Eric S. Raymond",
      quote: "Given enough eyeballs, all bugs are shallow."
    },
    {
      author: "Martin Fowler",
      quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
    },
    {
      author: "Dennis Ritchie",
      quote: "The only way to learn a new programming language is by writing programs in it."
    },
    {
      author: "John Carmack",
      quote: "The most important thing, in anything you do, is always trying your hardest, because even if you try your hardest and it's not as good as you'd hoped, you still have that sense of not letting yourself down."
    },
    {
      author: "Alan Perlis",
      quote: "A language that doesn't affect the way you think about programming is not worth knowing."
    },
    {
      author: "Margaret Hamilton",
      quote: "There was no choice but to be pioneers."
    },
    {
      author: "Larry Page",
      quote: "In the technology world, it's about the people. Getting the best people, retaining them, nurturing a creative environment, and helping to find a way to innovate."
    },
    {
      author: "Elon Musk",
      quote: "I think it is possible for ordinary people to choose to be extraordinary."
    },
    {
      author: "Tim Berners-Lee",
      quote: "The original idea of the web was that it should be a collaborative space where you can communicate through sharing information."
    },
    {
      author: "Brian Kernighan",
      quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
    },
    {
      author: "Yukihiro Matsumoto (Matz)",
      quote: "Programmers often feel a tension between the desire to write high-quality code and the pressure to deliver functionality quickly."
    },
    {
      author: "Jeff Atwood",
      quote: "The best code is no code at all."
    },
    {
      author: "Peter Norvig",
      quote: "It's easier to ask forgiveness than it is to get permission."
    },
    {
      author: "Niklaus Wirth",
      quote: "Software is getting slower more rapidly than hardware becomes faster."
    },
    {
      author: "Jon Bentley",
      quote: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies."
    },
    {
      author: "Ken Thompson",
      quote: "One of my most productive days was throwing away 1,000 lines of code."
    },
    {
      author: "E.W. Dijkstra",
      quote: "Simplicity is prerequisite for reliability."
    },
    {
      author: "Andy Hunt",
      quote: "You are not defined by your code."
    },
    {
      author: "Brian W. Kernighan",
      quote: "Controlling complexity is the essence of computer programming."
    },
    {
      author: "Paul Graham",
      quote: "It's hard to do a really good job on anything you don't think about in the shower."
    },
    {
      author: "Larry Wall",
      quote: "The first rule of Perl club is - You do not talk about Perl club."
    },
    {
      author: "Nolan Lawson",
      quote: "The best code is no code."
    },
    {
      author: "Brendan Eich",
      quote: "Always bet on JavaScript."
    },
    {
      author: "Robert C. Martin",
      quote: "It is not enough for code to work."
    },
    {
      author: "John Woods",
      quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
    },
    {
      author: "Albert Einstein",
      quote: "The only real valuable thing is intuition."
    },
    {
      author: "Yoda",
      quote: "Do or do not, there is no try."
    },
    {
      author: "Rasmus Lerdorf",
      quote: "I'm not a real programmer. I throw together things until it works, then I move on. The real programmers will say, 'Yeah, it works, but you're leaking memory everywhere.'"
    },
    {
      author: "James Gosling",
      quote: "Java is C++ without the guns, knives, and clubs."
    },
    {
      author: "Albert Einstein",
      quote: "Imagination is more important than knowledge."
    },
    {
      author: "Carl Sagan",
      quote: "Somewhere, something incredible is waiting to be known."
    },
    {
      author: "Isaac Asimov",
      quote: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'"
    },
    {
      author: "Richard Feynman",
      quote: "Nature uses only the longest threads to weave her patterns, so each small piece of her fabric reveals the organization of the entire tapestry."
    },
    {
      author: "Carl Friedrich Gauss",
      quote: "Mathematics is the queen of the sciences."
    },
    {
      author: "John von Neumann",
      quote: "In mathematics, you don't understand things. You just get used to them."
    },
    {
      author: "Alan Turing",
      quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
    },
    {
      author: "John McCarthy",
      quote: "Don't just write programs that work; write programs that make sense."
    },
    {
      author: "Tim O'Reilly",
      quote: "Create something that people need to exist."
    },
    {
      author: "Alan Kay",
      quote: "The best way to predict the future is to invent it."
    },
    {
      author: "Robert C. Martin",
      quote: "It is not enough for code to work."
    },
    {
      author: "Eric S. Raymond",
      quote: "Given enough eyeballs, all bugs are shallow."
    },
    {
      author: "Nolan Lawson",
      quote: "The best code is no code."
    },
    {
      author: "Brendan Eich",
      quote: "Always bet on JavaScript."
    },
    {
      author: "Larry Wall",
      quote: "The first rule of Perl club is - You do not talk about Perl club."
    },
    {
      author: "Rasmus Lerdorf",
      quote: "I'm not a real programmer. I throw together things until it works, then I move on. The real programmers will say, 'Yeah, it works, but you're leaking memory everywhere.'"
    },
    {
      author: "James Gosling",
      quote: "Java is C++ without the guns, knives, and clubs."
    },
    {
      author: "Albert Einstein",
      quote: "Imagination is more important than knowledge."
    },
    {
      author: "Carl Sagan",
      quote: "Somewhere, something incredible is waiting to be known."
    },
    {
      author: "Isaac Asimov",
      quote: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'"
    },
    {
      author: "Richard Feynman",
      quote: "Nature uses only the longest threads to weave her patterns, so each small piece of her fabric reveals the organization of the entire tapestry."
    },
    {
      author: "Carl Friedrich Gauss",
      quote: "Mathematics is the queen of the sciences."
    },
    {
      author: "John von Neumann",
      quote: "In mathematics, you don't understand things. You just get used to them."
    },
    {
      author: "Alan Turing",
      quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
    },
    {
      author: "Grace Hopper",
      quote: "The most damaging phrase in the language is 'We've always done it this way.'"
    },
    {
      author: "Dennis Ritchie",
      quote: "The only way to learn a new programming language is by writing programs in it."
    },
    {
      author: "Jon Bentley",
      quote: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies."
    },
    {
      author: "Ken Thompson",
      quote: "One of my most productive days was throwing away 1,000 lines of code."
    },
    {
      author: "E.W. Dijkstra",
      quote: "Simplicity is prerequisite for reliability."
    },
    {
      author: "Andy Hunt",
      quote: "You are not defined by your code."
    },
    {
      author: "Brian W. Kernighan",
      quote: "Controlling complexity is the essence of computer programming."
    },
    {
      author: "Paul Graham",
      quote: "It's hard to do a really good job on anything you don't think about in the shower."
    },
    {
      author: "Larry Wall",
      quote: "The first rule of Perl club is - You do not talk about Perl club."
    },
    {
      author: "Niklaus Wirth",
      quote: "Software is getting slower more rapidly than hardware becomes faster."
    },
    {
      author: "Jeff Atwood",
      quote: "The best code is no code at all."
    },
    {
      author: "Peter Norvig",
      quote: "It's easier to ask forgiveness than it is to get permission."
    },
    {
      author: "Brian Kernighan",
      quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
    },
    {
      author: "Yukihiro Matsumoto (Matz)",
      quote: "Programmers often feel a tension between the desire to write high-quality code and the pressure to deliver functionality quickly."
    },
    {
      author: "Richard Stallman",
      quote: "Free software is a matter of liberty, not price. To understand the concept, you should think of 'free' as in 'free speech,' not as in 'free beer.'"
    },
    {
      author: "Larry Page",
      quote: "In the technology world, it's about the people. Getting the best people, retaining them, nurturing a creative environment, and helping to find a way to innovate."
    },
    {
      author: "Elon Musk",
      quote: "I think it is possible for ordinary people to choose to be extraordinary."
    },
    {
      author: "Tim Berners-Lee",
      quote: "The original idea of the web was that it should be a collaborative space where you can communicate through sharing information."
    },
    {
      author: "Robert C. Martin",
      quote: "It is not enough for code to work."
    },
    {
      author: "John Woods",
      quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
    },
    {
      author: "Albert Einstein",
      quote: "The only real valuable thing is intuition."
    },
    {
      author: "Yoda",
      quote: "Do or do not, there is no try."
    },
    {
      author: "Rasmus Lerdorf",
      quote: "I'm not a real programmer. I throw together things until it works, then I move on. The real programmers will say, 'Yeah, it works, but you're leaking memory everywhere.'"
    },
    {
      author: "James Gosling",
      quote: "Java is C++ without the guns, knives, and clubs."
    },
    {
      author: "Albert Einstein",
      quote: "Imagination is more important than knowledge."
    },
    {
      author: "Carl Sagan",
      quote: "Somewhere, something incredible is waiting to be known."
    },
    {
      author: "Isaac Asimov",
      quote: "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'"
    },
    {
      author: "Richard Feynman",
      quote: "Nature uses only the longest threads to weave her patterns, so each small piece of her fabric reveals the organization of the entire tapestry."
    },
    {
      author: "Carl Friedrich Gauss",
      quote: "Mathematics is the queen of the sciences."
    },
    {
      author: "John von Neumann",
      quote: "In mathematics, you don't understand things. You just get used to them."
    },
    {
      author: "Alan Turing",
      quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
    },
  ];
  
export default programmingQuotes;
