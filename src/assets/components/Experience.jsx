import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function Experience({ darkMode }) {
    const projects = [
        {
            id: 1,
            name: "Freelance Software Engineer",
            description: "Built multiple websites for clients, including e-commerce platforms, portfolio sites, and business websites. I worked closely with clients to understand their requirements and delivered customized solutions using modern web technologies. This experience allowed me to develop strong skills in front-end and back-end development, as well as project management and client communication.",
            date: "Jan 2024 - Present"
        },
        {
            id: 2,
            name: "Motorola Solutions",
            description: "Internship as a Database Administrator, where I was responsible for managing and optimizing databases, ensuring data integrity, and supporting the development team with database-related tasks. I took on various projects, including database design, performance tuning, and data migration, which allowed me to gain hands-on experience in database management and administration.",
            date: "Jan 2025 - Dec 2025"
        },
        {
            id: 3,
            name: "Emstill Solutions",
            description: "Worked as a Software Engineer at a FinTech company during the internship period from my university, where I was responsible for developing and maintaining software applications that support financial services. I collaborated with cross-functional teams to design and implement new features, optimize existing code, and ensure the reliability and security of our applications.",
            date: "Jun 2023 - Dec 2023"
        },
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
                    3 Years Of
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    viewport={{ once: true }}
                    className={`text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight uppercase ${darkMode ? "text-[#333333]" : "text-orange-500"}`}
                >
                    Experience
                </motion.h1>
            </div>

            {/* experience list */}
            <div className="flex flex-col gap-4">
                {projects.map((project, i) => (
                    <MotionLink
                        key={project.id}
                        to="/experience"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
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
                            <p className={`text-sm italic mt-1 text-orange-500`}>
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
                    </MotionLink>
                ))}
            </div>

        </section>
    );
}