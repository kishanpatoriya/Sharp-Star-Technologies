import React,{useState} from 'react'
import { TypeAnimation } from 'react-type-animation';
import video from '../assets/service-hero.mp4';


function Services() {
        const [flippedCard, setFlippedCard] = useState(null);
    const services = [
        {
            id: "web-development",
            icon: "ti-code",
            title: "Web Development",
            desc: "Modern and responsive websites built with the latest technologies, delivering seamless user experiences, fast performance.",
            details: "We specialize in developing modern, scalable, and high-performing web solutions that empower businesses in the digital world. Our team creates responsive websites, custom web applications, and enterprise-grade platforms designed to deliver exceptional user experiences.",
            point: [
                "Custom Website Development",
                "Responsive Design",
                "E-Commerce Solutions",
                "WordPress Development",
                "SEO-Friendly Structure",
                "Website Maintenance"
            ]
        },
        {
            id: "mobile-app-development",
            icon: "ti-device-mobile", title: "Mobile app development",
            desc: "Powerful Android and iOS applications with modern features, intuitive interfaces, and high performance.", details: "We develop innovative mobile applications that deliver seamless user experiences across Android and iOS platforms. Our solutions are designed to be secure, scalable, and performance-driven, helping businesses engage customers and achieve their digital goals.",
            point: [
                "Android App Development",
                "iOS App Development",
                "Cross-Platform Apps",
                "API Integration",
                "App Testing & QA",
                "Maintenance & Support"
            ]
        },
        {
            id: "Custom software development",
            icon: "ti-cpu", title: "Custom software development",
            desc: "Scalable, customized software solutions that streamline business operations and improve productivity.", details: "Our custom software development services focus on creating tailored solutions that address unique business challenges. We build secure, scalable, and efficient software systems that improve productivity, automate processes, and support long-term growth.",
            point: [
                "Business Process Automation",
                "Enterprise Applications",
                "CRM & ERP Solutions",
                "Database Development",
                "System Integration",
                "Software Maintenance"
            ]
        },
        {
            id: "UI/UX design",
            icon: "ti-brush", title: "UI/UX design",
            desc: "Engaging, user-friendly interfaces that enhance customer satisfaction and create memorable digital experiences",
            details: "We create intuitive and visually appealing user interfaces that enhance user engagement and satisfaction. Our design process combines creativity, usability, and research to deliver exceptional digital experiences across web and mobile platforms.",
            point: [
                "User Interface Design",
                "User Experience Research",
                "Wireframing & Prototyping",
                "Responsive Design",
                "Design Systems",
                "Usability Testing"
            ]
        },
        {
            id: "E-commerce solutions",
            icon: "ti-shopping-cart", title: "E-commerce solutions",
            desc: "Feature-rich online stores with secure payment integration, inventory management, and seamless shopping.",
            details: "We build powerful e-commerce platforms that help businesses sell products and services online efficiently. Our solutions provide secure transactions, smooth shopping experiences, and advanced management tools to maximize revenue growth.",
            point: [
                "Online Store Development",
                "Payment Gateway Integration",
                "Inventory Management",
                "Shopping Cart Solutions",
                "Order Management",
                "Marketplace Integration"
            ]
        },
        {
            id: "Cloud solutions",
            icon: "ti-cloud", title: "Cloud solutions",
            desc: "Leverage cloud technologies to improve scalability, security, collaboration, and operational efficiency.",
            details: "Our cloud solutions help businesses modernize their infrastructure, improve flexibility, and reduce operational costs. We provide secure and scalable cloud environments that support growth, collaboration, and business continuity.",
            point: [
                "Cloud Migration",
                "Cloud Infrastructure Setup",
                "Data Storage Solutions",
                "Cloud Security",
                "Backup & Recovery",
                "Performance Optimization"
            ]
        },
        {
            id: "Digital marketing",
            icon: "ti-trending-up", title: "Digital marketing",
            desc: "Increase brand visibility and attract quality leads through SEO, social media, and online marketing strategies.",
            details: "We help businesses strengthen their online presence through result-driven digital marketing strategies. Our services focus on increasing visibility, generating quality leads, improving engagement, and driving sustainable business growth.",
            point: [
                "Search Engine Optimization (SEO)",
                "Social Media Marketing",
                "Content Marketing",
                "Pay-Per-Click Advertising",
                "Email Marketing",
                "Analytics & Reporting"
            ]
        },
        {
            id: "AI & automation solutions",
            icon: "ti-robot", title: "AI & automation solutions",
            desc: "Automate workflows and enhance decision-making with intelligent AI-powered solutions for your business goals.",
            details: "We leverage artificial intelligence and automation technologies to streamline operations, reduce manual effort, and improve decision-making. Our AI-powered solutions help businesses increase efficiency, productivity, and innovation.",
            point: [
                "Business Process Automation",
                "AI Chatbots",
                "Machine Learning Solutions",
                "Workflow Optimization",
                "Data Analysis & Insights",
                "Intelligent Automation"
            ]
        }
    ]
  return (
    <>
    <main>
<section id="services-hero">

    <video
        className="services-video"
        autoPlay
        muted
        loop
        playsInline
    >
        <source src={video} type="video/mp4" />
    </video>

    <div className="overlay"></div>

    <div className="hero-content">
        <h2 data-aos="flip-up">Our Services</h2>
        <TypeAnimation sequence={[`At our company, we offer end-to-end technology services that empower businesses to thrive in a competitive digital landscape. By combining technical expertise, creative thinking, and industry best practices, we develop solutions that drive innovation, optimize operations, and accelerate business growth. Whether you need a modern website, custom software, cloud integration, or digital consulting, we are committed to delivering excellence at every stage of your digital journey.`,]} repeat={0} wrapper='p' speed={60} className='hero-text'/>
    </div>

</section>


<section id='servicess' >
    <p data-aos="zoom-in">We Offer a wide range of IT services to help your business grow and succeed.</p>
  <div className="all-services">
                    {services.map((s, i) => (



                        <div
                            key={i}
                            className={`cart ${flippedCard === s.id ? "flipped" : ""}`}
                            onClick={() =>
      setFlippedCard(flippedCard === s.id ? null : s.id)
    }
                        >

                            <div className="card-inner">

                                {/* Front Side */}
                                <div className="card-front">
                                    <i className={`ti ${s.icon}`}></i>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>

                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setFlippedCard(s.id);
                                        }}
                                    >
                                        <p>Read More..</p>
                                    </a>
                                </div>

                                {/* Back Side */}
                                <div className="card-back">
                                    <h4>{s.title}</h4>
                                    <p>{s.details}</p>
                                    <ul>
                                        {s.point?.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>

                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setFlippedCard(null);
                                        }}
                                    >
                                        <p>Back</p>
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

</section>
        

    </main>
    </>
  )
}

export default Services
