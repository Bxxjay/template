import { motion } from "framer-motion";
export default function Thoughts({ darkMode }) {
    const projects = [
        {
            id: 1,
            name: "The Law of Leaky Abstractions",
            description: "The idea that even though programming tools and systems are designed to hide complexity and make things easier, those hidden details eventually “leak” through when something goes wrong. Using TCP over unreliable IP as the main example, it shows how abstractions simplify software development but can never fully shield programmers from the underlying mechanics, meaning developers still need deep technical knowledge to debug failures, optimize performance, and truly understand how systems work.",
            link: "https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/",
            date: "Nov 2002"
        },
        {
            id: 2,
            name: "Choose Boring Technology",
            description: "Software abstractions help simplify complex systems by hiding difficult underlying details, but they are never perfect, and when problems arise those hidden complexities eventually “leak” through, requiring engineers to understand the lower-level systems beneath the tools they use. At the same time, strong engineering decisions often come from choosing stable and well-understood technologies instead of constantly chasing new trends, since every new tool introduces additional complexity, operational overhead, and hidden risks. Long-term success in software engineering therefore depends not only on innovation, but also on restraint, reliability, and a deep understanding of the systems that abstractions attempt to simplify.",
            link: "https://mcfunley.com/choose-boring-technology",
            date: "Mar 2015"
        },
        {
            id: 3,
            name: "Teach Yourself Programming In Ten Years",
            description: "Programming mastery cannot be achieved in a few days or hours despite what many books and tutorials claim; true expertise takes years of deliberate practice, continuous learning, and real-world experience. Becoming a strong programmer requires building projects, learning from mistakes, collaborating with others, understanding how computers actually work, and constantly challenging yourself beyond your current skill level. Books and courses can provide a starting point, but real growth comes from long-term dedication, curiosity, and hands-on problem solving rather than chasing shortcuts or quick success promises.",
            link: "https://norvig.com/21-days.html",
            date: "Jan 2014"
        },
        {
            id: 4,
            name:"Things I Wish Someone Had Told Me When I Was Learning How to Code",
            description:"Learning how to code becomes much more meaningful when you understand why you want to learn it and what you hope to build with it. Coding is not some mysterious talent only meant for exceptionally gifted people; it is a skill that can be developed through practice, patience, and persistence. Beginners often face frustration when programs fail to work, but this experience is normal for programmers at every level, and progress comes from believing that problems can be solved with time and effort. The author also points out that there is no single “correct” way to code, despite the endless arguments and gatekeeping within tech communities about tools, languages, or what makes someone a “real programmer.” What truly matters is using whatever tools help you create the things you care about and continuing to improve over time. In the end, consistency and perseverance matter far more than natural talent or finding the perfect learning method.",
            link: "https://www.freecodecamp.org/news/things-i-wish-someone-had-told-me-when-i-was-learning-how-to-code-565fc9dcb329/",
            date: "Nov 2013"
       },
        {
            id: 5,
            name:"The Cost Of Javascript",
            description:"Modern websites often rely heavily on JavaScript, but sending too much of it can seriously hurt performance, especially on mobile devices with slower CPUs or weak network connections. Large JavaScript bundles not only take longer to download, but also require significant time for browsers to parse, compile, and execute before a site becomes interactive. Unlike images or fonts, JavaScript can block the browser’s main thread, causing delays, lag, and unresponsive pages. The article explains that developers can improve performance by reducing unnecessary code through techniques like code-splitting, minification, compression, caching, tree-shaking, and lazy loading. It also emphasizes testing on average mobile hardware rather than only high-end devices, since real users often experience much slower performance. Approaches such as PRPL and Progressive Bootstrapping help deliver only the code needed for the current page, improving load speed and responsiveness. Ultimately, keeping JavaScript lightweight and efficient is essential for creating fast, interactive, and user-friendly web experiences.",
            link:"https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e",
            date:"Aug 2020"
},
        {
            id: 6,
            name:"Responsive Design Patterns",
            description:"Pando, a massive interconnected tree system, as a metaphor for modern responsive web design, emphasizing that the web should no longer be viewed as a collection of fixed pages but as flexible networks of modular components that adapt across countless devices and screen sizes. Responsive design allows developers to maintain a new kind of control by using fluid grids, flexible images, and media queries to create layouts that adjust dynamically rather than remaining rigid. As technology evolves rapidly with mobile devices, tablets, wearables, and varying network conditions, designers must shift toward component-driven systems, reusable design patterns, and modular interfaces that can scale and adapt independently. The text also highlights the importance of pattern libraries and responsive frameworks in managing increasingly complex websites, showing how organizations build interfaces like “Legos” that automatically respond to different contexts. Ultimately, the author argues that responsive design is not just about layouts or screen sizes, but about creating flexible, content-focused systems capable of surviving the constantly changing landscape of the modern web.",
            link:"https://ethanmarcotte.com/books/responsive-design-patterns-and-principles/full/chap01/",
            date:"Nov 2014"
        }
    ];



    return (
        <section className={`px-8 md:px-16 py-10 transition-colors duration-300 ${darkMode ? "bg-[#111111]" : "bg-[#f5f5f5]"}`}>

            {/* heading */}
            <div className="mb-8">
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-white" : "text-black"}`}
                >
                    Design
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true }}
                    className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}
                >
                    Thoughts
                </motion.h1>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className={`group flex items-center gap-6 rounded-2xl p-4 transition-all duration-300 cursor-pointer
                            ${darkMode
                                ? "bg-[#1a1a1a] hover:bg-[#222222] hover:scale-[1.02] hover:shadow-xl"
                                : "bg-white hover:bg-gray-50 hover:scale-[1.02] hover:shadow-xl"
                            }`}
                    >
                        {/* text */}
                        <div className="flex flex-col gap-1 flex-1">
                            <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
                                {project.name}
                            </h2>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                                {project.description}
                            </p>
                            <p className="text-sm italic mt-1 text-orange-500">
                                {project.date}
                            </p>
                        </div>

                        {/* arrow */}
                        <div className="flex-shrink-0 pr-2">
                            <svg
                                className="w-6 h-6 text-orange-500 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </div>
                    </motion.a>
                ))}
            </div>

        </section>
    );
}