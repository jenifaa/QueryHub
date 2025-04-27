import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaQuestionCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center py-24">
      <div className="">
        {/* Header */}
        <h1 className="text-5xl font-bold font mb-7 text-center">
          Query<span className="text-red-950 text-6xl">H</span>ive
        </h1>
        <p className=" mb-6 text-center">
          Welcome to <span className="font-semibold">QueryHub</span>, your go-to
          platform for sharing knowledge, solving problems, and making informed
          decisions. Our goal is to provide <br /> an interactive space where users can
          ask, answer, and explore queries across various topics.
        </p>

        {/* Section 1: What We Are */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-4">
            What We Are
          </h2>
          <p className="mb-6">
            At QueryHub, our vision is to be the most trusted and comprehensive
            knowledge-sharing platform in the world. We aspire to foster an
            online community where the exchange of ideas and information
            transcends geographical boundaries, creating a space where users can
            learn, grow, and connect with experts in various fields. We believe
            that knowledge is most powerful when shared, and we aim to empower
            individuals through access to valuable insights and recommendations.
          </p>
        </div>
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-5">
            What We Do
          </h2>
          <p className="text-lg mb-6">
            QueryHub is more than just an information-sharing platform — it is a
            community built on trust, collaboration, and knowledge-sharing. <br /> Here
            is an in-depth look at what we do:
          </p>
          <div className="my-5">
            <p className="font-bold text-lg mb-3"> 1. Query Resolution:</p>
            <p>
              Our primary function at QueryHub is to help users find the answers
              they need. Whether you are a student trying to solve a complex
              problem, a professional seeking advice on a project, or someone
              curious about a topic, QueryHub is designed to provide accurate,
              detailed, and insightful responses to all kinds of queries. We
              leverage the collective knowledge of our vibrant community of
              users to ensure that all questions receive thoughtful and
              well-researched answers. Users can ask questions in various
              categories such as technology, health, finance, education,
              lifestyle, and many others. Once asked, the query is visible to
              other members of the community who can provide their answers,
              opinions, and solutions. Our platform ensures that every answer is
              moderated for relevance, clarity, and correctness, creating a
              robust and reliable knowledge base.
            </p>
          </div>
          <div className="mb-5">
            <p  className="font-bold text-lg mb-3">2.Expert Recommendations: </p>
            <p>
              Sometimes, answers are not enough. Users may need personalized
              recommendations based on their specific needs, preferences, or
              situations. That’s where our expert recommendations come in.
              QueryHub connects users with knowledgeable individuals and
              industry experts who can provide tailored suggestions and advice.
              Whether you’re looking for the best software for your business,
              recommendations for the latest gadgets, or advice on health and
              wellness, our platform helps you make informed decisions by
              offering curated, professional insights.
            </p>
          </div>
          <div className="mb-5">
            <p  className="font-bold text-lg mb-3">3.Collaboration and Community Engagement:</p>
            <p>
              One of the most exciting aspects of QueryHub is the sense of
              community it fosters. Our platform isn’t just about asking and
              answering questions — it’s about collaborating, networking, and
              engaging with like-minded individuals. QueryHub allows users to
              follow specific topics, contribute to discussions, and learn from
              others. By enabling community-driven engagement, we create an
              environment where individuals can connect with peers, mentors, and
              experts who share their interests. Our platform hosts various
              forums and discussion threads that allow users to dive deep into
              specific areas of interest, whether it be a hobby, a professional
              topic, or a global issue. This level of engagement helps build a
              network of people who can offer support, guidance, and diverse
              perspectives, creating a dynamic ecosystem where knowledge flows
              freely and organically.
            </p>
          </div>
          <div className="mb-5">
            <p  className="font-bold text-lg mb-3">4.A Place for Feedback and Suggestions :</p>
            <p>
              At QueryHub, we are constantly striving to improve. We value
              feedback from our users and actively encourage them to share their
              thoughts on how we can enhance the platform. We have a dedicated
              feedback system where users can submit suggestions, report issues,
              and propose new features. We take user feedback seriously and use
              it to shape the future of QueryHub. By involving our users in the
              development process, we ensure that the platform evolves in a way
              that meets their needs and expectations.
            </p>
          </div>
        </div>
        <div className="bg-base-100 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-bold mb-4">Why Choose QueryHub?</h2>
          <ul className="list-disc list-inside">
            <li className="mb-4">
              <strong>Reliable and Accurate Information:</strong> Our platform
              is built on trust. We moderate all content to ensure that the
              answers provided are accurate, credible, and relevant.
            </li>
            <li className="mb-4">
              <strong>Community Support:</strong> QueryHub thrives because of
              its community. Our users are passionate about helping one another
              and sharing their knowledge.
            </li>
            <li className="mb-4">
              <strong>Easy to Use:</strong> With a user-friendly interface,
              QueryHub is easy to navigate, allowing users to quickly find
              answers, ask questions, and interact with others.
            </li>
            <li className="mb-4">
              <strong>Expert Recommendations:</strong> Our platform connects
              users with industry experts who offer personalized advice and
              recommendations tailored to individual needs.
            </li>
            <li className="mb-4">
              <strong>Continuous Learning:</strong> Whether you’re seeking
              answers to specific queries or looking to expand your knowledge,
              QueryHub provides learning resources to help you grow.
            </li>
          </ul>
        </div>

        {/* Section 2: Our Team */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Team</h2>
          <p className=" mb-6 text-center">
            Meet the passionate individuals behind{" "}
            <span className="font-semibold">QueryHub</span>. We’re a group of
            dedicated professionals committed to providing top-notch solutions
            to all your queries.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/kgtgyVGy/form.jpg"
                alt="Team Member 1"
                className="rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="font-semibold text-xl">Jane Doe</h3>
              <p className="text-gray-500 mb-2">Lead Developer</p>
              <div className="text-4xl mb-2 text-blue-500">💻</div>
              <p className="text-gray-600">
                Jane is the mastermind behind our platform's core architecture,
                ensuring everything runs smoothly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/35nYwgz9/for.jpg"
                alt="Team Member 2"
                className="rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="font-semibold text-xl">John Smith</h3>
              <p className="text-gray-500 mb-2">Community Manager</p>
              <div className="text-4xl mb-2 text-green-500">🌱</div>
              <p className="text-gray-600">
                John is the voice of our community, making sure user feedback is
                heard and acted upon.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center">
              <img
                src="https://i.ibb.co.com/gLSzwVCp/forma.webp"
                alt="Team Member 3"
                className="rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="font-semibold text-xl">Alice Brown</h3>
              <p className="text-gray-500 mb-2">Customer Support</p>
              <div className="text-4xl mb-2 text-red-500">💬</div>
              <p className="text-gray-600">
                Alice is always ready to assist you with any queries and ensures
                the best user experience.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Our Details */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Our Details
          </h2>
          <p className="mb-6 text-center">
            We are located at the heart of Tech City. Our dedicated support team
            is always here to assist you, providing fast and accurate solutions
            for your needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md">
              <FaMapMarkerAlt className="text-4xl text-blue-500 mb-2" />
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-gray-600">
                123 Innovation Street, Tech City, 56789
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md">
              <FaPhone className="text-4xl text-green-500 mb-2" />
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <p className="text-gray-600">+1 (234) 567-890</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md">
              <FaEnvelope className="text-4xl text-red-500 mb-2" />
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-600">support@queryhub.com</p>
            </div>
          </div>
        </div>

        {/* Section 4: Additional Information */}
        <div className="bg-base-100 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Anything Else?
          </h2>
          <p className="mb-6 text-center">
            We’re continuously evolving, constantly improving, and adding new
            features to enhance your experience. Stay tuned for upcoming
            updates!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-4">
            <a
              href="mailto:support@queryhub.com"
              className="btn bg-blue-500 text-white flex items-center p-3 rounded-lg shadow-md"
            >
              <FaEnvelope className="mr-2" /> Email Us
            </a>
            <a
              href="tel:+123456789"
              className="btn bg-blue-700 text-white flex items-center p-3 rounded-lg shadow-md"
            >
              <FaPhone className="mr-2" /> Call Us
            </a>
            <a
              href="/faq"
              className="btn bg-blue-900 text-white flex items-center p-3 rounded-lg shadow-md"
            >
              <FaQuestionCircle className="mr-2" /> Visit FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
