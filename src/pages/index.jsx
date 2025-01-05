'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'


const Skill = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-indigo-700 dark:text-indigo-300">{name}</span>
      <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500" style={{ width: `${level}%` }}></div>
    </div>
  </div>
)

const ExperienceCard = ({ title, company, period, description, skills }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{title}</h3>
    <p className="text-indigo-500 dark:text-indigo-300 mb-2">{company} | {period}</p>
    <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
)


const FloatingIcon = ({ icon, delay, screenWidth, screenHeight }) => (
  <motion.i
    className={`fas fa-${icon} text-indigo-300 opacity-20 text-4xl absolute`}
    initial={{ y: -20, x: Math.random() * screenWidth }}
    animate={{
      y: screenHeight,
      x: Math.random() * screenWidth,
      rotate: 360,
    }}
    transition={{
      duration: Math.random() * 20 + 10,
      repeat: Infinity,
      delay: delay,
    }}
  />
)

const BackgroundAnimation = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)

      const handleResize = () => {
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight)
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (screenWidth === 0 || screenHeight === 0) return null // Prevent rendering until dimensions are available

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <FloatingIcon icon="hashtag" delay={0} screenWidth={screenWidth} screenHeight={screenHeight} />
      <FloatingIcon icon="chart-line" delay={2} screenWidth={screenWidth} screenHeight={screenHeight} />
      <FloatingIcon icon="bullhorn" delay={4} screenWidth={screenWidth} screenHeight={screenHeight} />
      <FloatingIcon icon="comments" delay={6} screenWidth={screenWidth} screenHeight={screenHeight} />
      <FloatingIcon icon="thumbs-up" delay={8} screenWidth={screenWidth} screenHeight={screenHeight} />
      <FloatingIcon icon="users" delay={10} screenWidth={screenWidth} screenHeight={screenHeight} />
      <FloatingIcon icon="share-alt" delay={12} screenWidth={screenWidth} screenHeight={screenHeight} />
      <FloatingIcon icon="search" delay={14} screenWidth={screenWidth} screenHeight={screenHeight} />
    </div>
  )
}
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll()
  const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, 300])

  useEffect(() => {
    setIsLoaded(true)
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-900 text-gray-800 dark:text-gray-200 overflow-hidden">
      <BackgroundAnimation />

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-indigo-600 dark:bg-indigo-400 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 relative z-10"
      >
        <header className="h-screen flex flex-col justify-center items-center relative mb-16">
          <motion.div
            className="relative z-10 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D5635AQEyCAjbUb9sPg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1733299182404?e=1736712000&v=beta&t=TZt_8CW0KSG2AWrZsbLOabScM3sMX14JBBXZt9i35hU"
              alt="Priyanka Sagar"
              width={200}
              height={200}
              className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg mb-8"
            />
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-indigo-800 dark:text-indigo-300"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Priyanka Sagar
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-light mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Marketing | Social Media Marketing Management
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="/Priyanka_Sagar_Resume.docx"
                download
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-100 transition duration-300 shadow-lg"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </header>

        <section className="mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-indigo-700 dark:text-indigo-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4">
              As a dedicated marketing professional with over 5 years of experience, I specialize in crafting and executing comprehensive marketing strategies that drive brand growth and engagement. My expertise spans across various digital marketing channels, with a particular focus on social media marketing and e-commerce management.
            </p>
            <p className="mb-4">
              Throughout my career, I've honed my skills in content creation, data analysis, and customer engagement, allowing me to develop targeted campaigns that resonate with diverse audiences. I'm passionate about staying ahead of industry trends and leveraging emerging technologies to maximize marketing ROI.
            </p>
            <p className="mb-4">
              My approach combines creativity with data-driven decision-making, ensuring that every marketing initiative is not only innovative but also measurable and aligned with business objectives. I thrive in dynamic environments where I can apply my analytical skills to interpret market trends and consumer behavior, translating insights into actionable strategies.
            </p>
            <p>
              Based in Punjabi Bagh, West Delhi, Delhi, India, I'm eager to contribute my expertise to forward-thinking organizations. I'm open to on-site, hybrid, and remote opportunities, and I'm available for immediate start in both full-time and part-time capacities. My goal is to join a team where I can continue to grow professionally while making significant contributions to the company's marketing success.
            </p>
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-indigo-700 dark:text-indigo-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <Skill name="Social Media Marketing" level={95} />
            <Skill name="E-commerce Management" level={90} />
            <Skill name="Data Analysis" level={85} />
            <Skill name="Content Creation" level={92} />
            <Skill name="SEO & SEM" level={88} />
            <Skill name="Customer Service" level={90} />
            <Skill name="Team Management" level={85} />
            <Skill name="Marketing Strategy" level={87} />
            <Skill name="Excel & Data Management" level={89} />
            <Skill name="Influencer Marketing" level={86} />
          </div>
        </section>

        <section className="mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-indigo-700 dark:text-indigo-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            <ExperienceCard
              title="Social Media Marketing Management"
              company="Trigo Blockchain"
              period="Sep 2022 - Present · 2 yrs 5 mos"
              description="As the lead Social Media Marketing Manager at Trigo Blockchain, I've been instrumental in developing and implementing comprehensive social media strategies that have significantly increased brand visibility and engagement in the competitive blockchain space. My role involves:"
              skills={[
                "Strategy Development",
                "Content Creation",
                "Community Management",
                "Analytics & Reporting",
                "Influencer Collaborations",
                "Paid Social Campaigns",
                "Crisis Management",
                "Brand Voice Consistency"
              ]}
            />
            <ExperienceCard
              title="E-commerce Executive"
              company="Yelloelifestyle Pvt. Ltd."
              period="Feb 2022 - Aug 2022 · 7 mos"
              description="In my role as E-commerce Executive at Yelloelifestyle, I was responsible for managing and optimizing the company's online retail operations. My key contributions included:"
              skills={[
                "Product Listing Optimization",
                "Inventory Management",
                "SEO Implementation",
                "Customer Experience Enhancement",
                "Sales Analytics",
                "A/B Testing",
                "Cross-platform Integration",
                "Performance Tracking"
              ]}
            />
            <ExperienceCard
              title="Counselor"
              company="Scholars Academy"
              period="Aug 2020 - Jan 2022 · 1 yr 6 mos"
              description="As a Counselor at Scholars Academy, I provided comprehensive academic and career guidance to students. This role honed my communication and interpersonal skills, which have proven invaluable in my marketing career. Key responsibilities included:"
              skills={[
                "Career Guidance",
                "Academic Planning",
                "Workshop Facilitation",
                "Student Mentoring",
                "Parent Communication",
                "Program Development",
                "Data-driven Counseling",
                "Crisis Intervention"
              ]}
            />
          </div>
        </section>

        <section className="mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-indigo-700 dark:text-indigo-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Additional Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Online Advertising",
              "Keyword Research",
              "Keyword Density",
              "Data Management",
              "Listing Optimization",
              "Data Entry",
              "Office Management",
              "Influencer Data Collection",
              "Excel Data Analysis",
              "Excel Pivot Tables",
              "Sales & Marketing",
              "Office Administration",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-indigo-700 dark:text-indigo-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Summary
          </motion.h2>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As a seasoned marketing professional with over 5 years of experience, I bring a wealth of expertise in digital marketing, social media management, and e-commerce operations. My career is characterized by a proven track record of developing and executing comprehensive marketing strategies that significantly enhance brand visibility, engage target audiences, and drive measurable business growth.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In my current role at Trigo Blockchain, I've demonstrated my ability to navigate the complex and rapidly evolving landscape of blockchain technology, translating technical concepts into compelling marketing narratives. I've successfully increased our social media engagement by 200% and played a key role in establishing our brand as a thought leader in the industry.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              My experience at Yelloelifestyle Pvt. Ltd. honed my e-commerce expertise, where I optimized product listings, implemented data-driven SEO strategies, and improved the overall customer journey, resulting in a 35% increase in online sales within six months.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              I pride myself on my analytical approach to marketing, leveraging data to inform strategy and measure success. My proficiency in tools such as Google Analytics, SEMrush, and various social media management platforms allows me to extract actionable insights and continuously refine marketing efforts for maximum impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              Looking ahead, I am eager to bring my diverse skill set and passion for innovative marketing to a dynamic organization. I am particularly interested in opportunities that allow me to continue pushing the boundaries of digital marketing, whether it's exploring emerging platforms, implementing cutting-edge marketing technologies, or developing integrated campaigns that deliver exceptional ROI.
            </p>
          </motion.div>
        </section>

        <section id="contact" className="mb-16">
          <motion.h2
            className="text-3xl font-semibold mb-8 text-indigo-700 dark:text-indigo-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </section>

        <footer className="text-center mt-16 pb-8">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Priyanka Sagar. All rights reserved.
          </p>
        </footer>
      </motion.main>
    </div>
  )
}

