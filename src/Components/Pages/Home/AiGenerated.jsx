import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Lottie from "lottie-react";
import animation from '../../../assets/lottie/ai.json'

const AiGenerated = ({aiGeneratedRef}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [answer, setAnswer] = useState("");

  const data = [
    {
      question: "What are quick stress-relief techniques?",
      answer:
        "Practice deep breathing, engage in mindfulness exercises, or take a short walk outdoors.",
    },
    {
      question: "How to develop a healthy diet plan?",
      answer:
        "Focus on whole foods, balance macronutrients, and include a variety of vegetables, proteins, and whole grains.",
    },
    {
      question: "How to find cheap flight tickets?",
      answer:
        " Use fare comparison websites, book during off-peak seasons, and set up fare alerts for deals.",
    },
    {
      question: " What to do when traveling solo?",
      answer:
        "Stay in hostels to meet other travelers, research your destinations, and share your itinerary with someone back home.",
    },
    {
      question: " How to improve focus while studying?",
      answer:
        "Minimize distractions, use active recall techniques, and break study sessions into 25-30 minute intervals.",
    },
    {
      question: "How to learn a new language quickly?",
      answer:
        " Practice daily, use language-learning apps like Duolingo or Rosetta Stone, and immerse yourself by watching media in the target language.",
    },
    {
      question: "How to prepare for a coding interview?",
      answer:
        "Practice data structures and algorithms, solve problems on platforms like LeetCode, and review common interview questions.",
    },
    {
      question: "What are the best ways to network professionally?",
      answer:
        "Attend industry events, connect on LinkedIn, and join online communities related to your field.",
    },
    {
      question: "How to start investing in cryptocurrency?",
      answer:
        "Research thoroughly, choose a secure exchange, and invest only what you can afford to lose.",
    },
    {
      question: "What are the top habits of successful people?",
      answer:
        "They set clear goals, maintain discipline, embrace lifelong learning, and manage their time effectively.",
    },
    {
      question: "How to manage stress during exams?",
      answer:
        "Take regular breaks, practice mindfulness or meditation, and create a realistic study schedule.",
    },
    {
      question: "What are the best ways to improve writing skills?",
      answer:
        "Read extensively, write daily, and seek feedback from peers or mentors.",
    },
    {
      question: "How to stay motivated while working on long-term goals?",
      answer:
        "Break goals into smaller milestones, celebrate progress, and remind yourself of your ultimate purpose.",
    },
    {
      question: "What are essential travel safety tips?",
      answer:
        "Keep copies of important documents, stay aware of your surroundings, and avoid sharing your itinerary publicly.",
    },
    {
      question: "How to maintain a healthy work-life balance?",
      answer:
        "Set boundaries, prioritize self-care, and allocate time for both work and personal activities.",
    },
    {
      question: "What are the best strategies for learning new skills online?",
      answer:
        "Follow structured courses, practice consistently, and engage with online communities to exchange knowledge.",
    },
    {
      question: "How to build a successful online business?",
      answer:
        "Choose a niche, create valuable content, build a strong brand, and use social media and SEO to drive traffic.",
    },
    {
      question: "What are the best ways to improve mental health?",
      answer:
        "Exercise regularly, practice mindfulness, talk to a therapist, and maintain a strong social support network.",
    },
    {
      question: "How to set effective personal goals?",
      answer:
        "Set SMART goals, break them into smaller tasks, track progress, and stay flexible as you work towards them.",
    },
    {
      question: "What are the best tips for learning to code?",
      answer:
        "Start with a simple language like Python, practice regularly, build projects, and seek help from the programming community.",
    },
    {
      question: "How to start a side hustle?",
      answer:
        "Identify your skills, research your market, test your idea, and stay consistent while balancing your main job.",
    },
    {
      question: "What are the best practices for managing remote teams?",
      answer:
        "Communicate clearly, use collaboration tools, set clear expectations, and foster team morale through virtual bonding.",
    },
    {
      question: "How to choose a good book to read?",
      answer:
        "Consider your interests, read reviews, explore book lists in your preferred genre, and ask for recommendations from others.",
    },
    {
      question: "What are the benefits of mindfulness meditation?",
      answer:
        "It reduces stress, improves focus, enhances emotional regulation, and boosts overall well-being.",
    },
    {
      question: "How to stay productive when working from home?",
      answer:
        "Set a dedicated workspace, create a schedule, take breaks, and limit distractions to stay focused.",
    },
    {
      question: "How to build a professional portfolio?",
      answer:
        "Showcase your best work, keep it organized, and tailor it to the type of job or client you want to attract.",
    },

    {
      question: "What are the best budget-friendly laptops for students?",
      answer:
        "Look for laptops with good performance, such as the Lenovo IdeaPad, Acer Aspire, or HP Pavilion, which offer solid specs at affordable prices.",
    },
    {
      question: "How to choose the right smartphone for gaming?",
      answer:
        "For gaming, look for smartphones with high refresh rate screens, powerful processors (like Snapdragon 8 series), and good GPU performance. Popular choices include the ASUS ROG Phone and Xiaomi Black Shark.",
    },
    {
      question: "What are the top features to look for in a smartwatch?",
      answer:
        "Look for heart rate tracking, GPS, long battery life, water resistance, and fitness tracking features. The Apple Watch and Fitbit Charge are great options.",
    },
    {
      question: "What is the best way to clean and maintain my laptop?",
      answer:
        "Regularly clean the screen with a microfiber cloth, keep the keyboard free from dust, and use compressed air to clear out vents. It's also important to keep software updated and perform regular backups.",
    },
    {
      question: "How to choose the best wireless earbuds?",
      answer:
        "Look for features like noise cancellation, battery life, sound quality, and a comfortable fit. The Apple AirPods Pro, Sony WF-1000XM4, and Bose QuietComfort Earbuds are top choices.",
    },
    {
      question: "What is the best laptop for video editing?",
      answer:
        "For video editing, look for a laptop with a powerful CPU, high RAM, and a dedicated graphics card. Consider models like the MacBook Pro, Dell XPS 15, or Razer Blade 15.",
    },
    {
      question: "How do I choose the right camera for photography?",
      answer:
        "For photography, consider factors like sensor size, lens compatibility, and image quality. Popular options include the Canon EOS series, Nikon D series, and Sony Alpha series.",
    },
    {
      question: "What are the best kitchen gadgets to buy?",
      answer:
        "Some great kitchen gadgets include air fryers, smart blenders, electric pressure cookers, and instant-read thermometers, which help with meal preparation and cooking efficiency.",
    },
    {
      question: "How do I choose a good gaming monitor?",
      answer:
        "Look for a monitor with a high refresh rate (at least 120Hz), low response time, and good color accuracy. Brands like ASUS, Acer, and Dell offer excellent gaming monitors.",
    },
    {
      question:
        "What are the most important features to consider when buying a mattress?",
      answer:
        "Consider the mattress firmness, material (memory foam, innerspring, hybrid), support level, and durability. Popular options include Tempur-Pedic, Purple, and Saatva mattresses.",
    },
    {
      question: "What is the best way to maintain a fitness tracker?",
      answer:
        "Keep your fitness tracker clean, charge it regularly, and update its software. Make sure to sync it with your phone for accurate tracking.",
    },
    {
      question: "How do I choose the best wireless router?",
      answer:
        "Look for a router with high-speed capabilities, strong Wi-Fi coverage, and support for the latest Wi-Fi standards (Wi-Fi 6). Brands like Netgear, TP-Link, and ASUS offer top-quality routers.",
    },
    {
      question: "What should I consider when buying a DSLR camera?",
      answer:
        "Consider the resolution, sensor size, autofocus system, and lens options. Top brands include Canon, Nikon, and Sony for excellent DSLR cameras.",
    },
    {
      question: "How to pick the best vacuum cleaner for pet hair?",
      answer:
        "Choose a vacuum with strong suction power, a HEPA filter, and specialized attachments for pet hair. The Dyson Ball Animal and Shark Navigator are great choices for homes with pets.",
    },
    {
      question: "What are the most durable outdoor gear products?",
      answer:
        "Durable outdoor gear includes items like the Osprey backpacks, Coleman tents, YETI coolers, and Patagonia clothing, which are built for tough outdoor conditions.",
    },
    {
      question: "What are the key features of a good gaming chair?",
      answer:
        "Look for ergonomics, adjustable height, armrests, and lumbar support. Brands like Secretlab, DXRacer, and Noblechairs offer high-quality gaming chairs.",
    },
    {
      question: "How do I select a reliable power bank?",
      answer:
        "Look for a power bank with sufficient capacity (mAh), fast charging capabilities, and multiple output ports. Anker, RAVPower, and Aukey are reliable power bank brands.",
    },
    {
      question: "What are the benefits of a smart home device?",
      answer:
        "Smart home devices allow you to control lighting, temperature, security, and entertainment with your voice or app, improving convenience, efficiency, and security. Popular devices include Amazon Echo, Google Nest, and Ring.",
    },
    {
      question: "How to choose a good pair of running shoes?",
      answer:
        "Look for shoes with good cushioning, support, and a comfortable fit for your running style. Brands like Brooks, Asics, and Nike are popular choices for runners.",
    },
    {
      question: "What are the best wireless charging stations?",
      answer:
        "The best wireless charging stations should support multiple devices, fast charging, and be compatible with your phone model. Consider brands like Anker, Belkin, and Mophie for reliable options.",
    },
    {
      question: "How do I pick the right backpack for travel?",
      answer:
        "Choose a travel backpack with comfortable straps, enough space for your essentials, and durable material. Brands like Osprey, North Face, and Patagonia offer great options.",
    },
    {
      question: "What are the best laptops for remote work?",
      answer:
        "For remote work, look for a laptop with long battery life, portability, and good performance. Popular choices include the MacBook Air, Dell XPS 13, and Microsoft Surface Laptop.",
    },

    {
      question: "What are the best ergonomic office chairs?",
      answer:
        "The best ergonomic office chairs include options like the Herman Miller Aeron, Steelcase Gesture, and Autonomous ErgoChair Pro, which provide excellent support for long hours of work.",
    },
    {
      question: "How to choose the best home projector?",
      answer:
        "When selecting a home projector, consider the resolution, brightness (measured in lumens), connectivity options, and whether it supports 4K. Popular models include the Epson Home Cinema and BenQ TK850.",
    },
    {
      question: "What are the top features to look for in a robot vacuum?",
      answer:
        "Look for a robot vacuum with strong suction power, automatic mapping, multiple cleaning modes, and app control. Popular models include the iRobot Roomba, Roborock S7, and Neato D8.",
    },
    {
      question: "How to choose the best portable speaker?",
      answer:
        "For a portable speaker, consider sound quality, battery life, portability, and waterproof features. JBL, Bose, and Sonos offer great portable speaker options.",
    },
    {
      question: "What are the best budget smartphones?",
      answer:
        "The best budget smartphones offer great performance at affordable prices. Options like the Google Pixel 6a, Samsung Galaxy A53, and OnePlus Nord N200 are highly rated.",
    },
    {
      question: "How do I pick the best electric toothbrush?",
      answer:
        "Look for features such as timer, multiple brushing modes, pressure sensors, and a long-lasting battery. Top choices include Philips Sonicare, Oral-B, and Quip.",
    },
    {
      question: "What are the best waterproof Bluetooth headphones?",
      answer:
        "Look for waterproof Bluetooth headphones that offer good sound quality and secure fit. The Sony WF-SP800N, Jabra Elite Active 75t, and Bose SoundSport Free are excellent options.",
    },
    {
      question: "What should I consider when buying a smartwatch?",
      answer:
        "When purchasing a smartwatch, consider battery life, compatibility with your phone, fitness tracking features, and display quality. Popular models include the Apple Watch Series 8 and Samsung Galaxy Watch 5.",
    },
    {
      question: "What are the top features of a good DSLR camera?",
      answer:
        "Look for high resolution, fast autofocus, full-frame sensors, and good low-light performance. Popular DSLR cameras include the Canon EOS Rebel, Nikon D7500, and Canon EOS 5D Mark IV.",
    },
    {
      question: "What are the best noise-canceling headphones?",
      answer:
        "Noise-canceling headphones provide an immersive listening experience. The Sony WH-1000XM5, Bose QuietComfort 45, and Apple AirPods Pro are some of the top-rated models.",
    },
    {
      question: "How to choose the best tablet for productivity?",
      answer:
        "For productivity, choose a tablet with a large screen, multitasking capabilities, and a keyboard attachment. Consider the iPad Pro, Microsoft Surface Pro 7, or Samsung Galaxy Tab S7.",
    },
    {
      question: "What is the best way to organize my tech gadgets?",
      answer:
        "Use dedicated storage solutions like cable organizers, tech pouches, or drawer dividers to keep your gadgets and accessories organized and easily accessible.",
    },
    {
      question: "How to choose the best printer for home use?",
      answer:
        "Look for a printer with wireless capabilities, affordable ink, and good print quality. The Canon PIXMA, HP Envy, and Epson EcoTank are great home printer options.",
    },
    {
      question: "What are the best smart home devices for security?",
      answer:
        "Top smart home security devices include Ring doorbells, Nest Cam security cameras, and August smart locks, which help keep your home safe and secure.",
    },
    {
      question: "How do I pick the best bike for commuting?",
      answer:
        "For commuting, look for a bike with a comfortable seat, durable frame, and good gears. Hybrid bikes, like the Trek FX 3 and Cannondale Quick, are great for urban commuting.",
    },
    {
      question: "What are the best smart home lighting systems?",
      answer:
        "Smart lighting systems like Philips Hue, LIFX, and Wyze bulbs offer customizable lighting options that can be controlled through your smartphone or voice assistant.",
    },
    {
      question: "How to choose the best gaming console?",
      answer:
        "When picking a gaming console, consider game library, exclusive titles, performance (e.g., 4K support), and online features. The PlayStation 5, Xbox Series X, and Nintendo Switch are popular choices.",
    },
    {
      question: "What are the best wireless chargers for my phone?",
      answer:
        "Look for wireless chargers with fast charging support, compact design, and compatibility with your phone model. The Anker Wireless Charger, Belkin BoostUp, and Mophie Wireless Charging Pad are highly rated.",
    },
    {
      question: "What should I consider when buying a home theater system?",
      answer:
        "Look for features like sound quality, ease of setup, speaker configuration, and connectivity. Brands like Bose, Sonos, and Yamaha offer great home theater systems.",
    },
    {
      question: "How to choose the best fitness equipment for home workouts?",
      answer:
        "Consider your fitness goals, available space, and type of workouts. Dumbbells, kettlebells, resistance bands, and a yoga mat are versatile choices for home workouts.",
    },
    {
      question: "What are the best laptop cooling pads?",
      answer:
        "A good cooling pad will improve airflow and reduce overheating. Options like the Cooler Master NotePal X3, Thermaltake Massive 20, and Kootek Cooler Pad are reliable picks.",
    },
    {
      question: "How to choose the best coffee maker for home?",
      answer:
        "For home coffee brewing, look for a machine with adjustable settings, programmable features, and a durable design. Popular models include the Keurig K-Elite, Breville Barista Express, and Nespresso Vertuo.",
    },
  ];

  useEffect(() => {
    if (query) {
      const filteredSuggestions = data.filter((item) =>
        item.question.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions.map((item) => item.question));

      const matching = data.find(
        (item) => item.question.toLowerCase() === query.toLowerCase()
      );
      setAnswer(matching ? matching.answer : "");
    } else {
      setSuggestions([]);
      setAnswer("");
    }
  }, [query]);

  return (
    <div  ref={aiGeneratedRef} className="font" >
       <h2 className="text-4xl font-bold text-center">
          Get Your Answer By{" "}
          <motion.span
            animate={{ color: ["#f1391c", "#1cf1b7", "#dbf11c"] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="text-5xl"
          >
            Ai
          </motion.span>
        </h2>
        <p className="text-sm text-center my-3">Leverage the power of AI to enhance your query experience. Discover accurate insights, personalized <br />recommendations, and faster solutions tailored to your needs.</p>
      
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-500 text-white py-16 px-8 my-12 ">
      <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left mx-auto">
      <h2 className="font-bold text-3xl ">Unlock Insights with AI: Smarter Queries, Better Answers</h2>
      
        <p className="text-lg text-[#ffffff]">
          Type a question to explore answers and recommendations.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a query..."
            className="md:w-96 px-4 py-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <div className="space-y-2">
          {suggestions.length > 0 &&
            suggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 transition"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </motion.div>
            ))}
        </div>

        {answer && (
          <motion.div
            className="mt-4 bg-green-100 text-black px-4 py-4 rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h4 className="text-lg font-semibold">Answer:</h4>
            <p>{answer}</p>
          </motion.div>
        )}

        <motion.button
          onClick={() =>
            setQuery(data[Math.floor(Math.random() * data.length)].question)
          }
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Auto Generate
        </motion.button>
      </div>
      <div>
      <Lottie className="w-96" animationData={animation} loop={true} />
      </div>
    </div>
    </div>
  );
};

export default AiGenerated;
