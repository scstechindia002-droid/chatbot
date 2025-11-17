const chatbotInput = document.getElementById("chatbot-message");
const chatbotContent = document.getElementById("chatbot-content");
const chatbotShowBtn = document.getElementById("chatbot-show-btn");
const chatbotCloseBtn = document.getElementById("chatbot-close-btn");
const chatbotContainer = document.getElementById("chatbot-container");

 chatbotContainer.style.display = "none";

// -----------chatbot-open---------------------
chatbotShowBtn.addEventListener("click", () => {
  chatbotContainer.style.display = "block";
  chatbotShowBtn.style.display = "none"
  
});
// -------------------chatbot-close----------------------
chatbotCloseBtn.addEventListener("click", () => {
  chatbotContainer.style.display = "none";
  chatbotShowBtn.style.display = "block";
  
  document.querySelectorAll('.typemessage').forEach(e => {
    e.textContent = '';
  });
  document.querySelectorAll('.abouttab-container').forEach(e => {
    e.textContent = '';
  });

  document.querySelectorAll('.reply-message-container').forEach(e => {
    e.textContent = '';
  });

  chatbotInput.disabled = false;;
  chatbotContent.scrollTop = 0;
});

// function chatbotMessage() {
//   const userMessage = chatbotInput.value;
   
//   if (userMessage) {
//     appendMessage(userMessage);
//   } else {
//     return false;
//   }
  
// }
function chatbotMessage() {
  const userMessage = chatbotInput.value.trim();

  if (!userMessage) {
    return false;
  }

  appendMessage(userMessage);

  // Disable input AFTER first message
  chatbotInput.disabled = true;

  // Optional: disable send button
  sendButton.disabled = true;
}

function appendMessage(userMessage) {
  console.log("userMessage", userMessage);
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage";
  typeMessage.innerHTML = `<div>${userMessage}</div>`;
  chatbotContent.appendChild(typeMessage);

  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTop = 0;
  setTimeout(() => {
    animatedDotte.style.display = "none";
    getReply(userMessage);
    chatbotInput.value = "";
  }, 1000);
}

function getReply(userMessage) {
  const replyMessageContainer = document.createElement("div");
  replyMessageContainer.className = "reply-message-container";
  replyMessageContainer.innerHTML = `<div>Hello! Welcome to SCS Tech India. How may I help you?<div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1">Industries</button> <button  class="border-0 rounded-1" onclick="productDiscussionTabShow()">Products</button> <button  class="border-0 rounded-1">Careers</button></div></div>`;
  chatbotContent.appendChild(replyMessageContainer);
  chatbotContent.scrollBottom = 0;
}

function aboutBtn() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p>SCS Tech India is a leading IT & ITES company specializing in next-generation Digital Transformation solutions, with over 15 years of experience. We hold the prestigious CMMI Level 5 certification. How would you like to get in touch with us?</p><p>We have offices in Mumbai (Headquarters), Delhi, Kolkata, Hyderabad, Dubai (UAE), and Singapore.</p><p></p>You can call us at +91 22 23664500 or WhatsApp us at +91 9987799837. You can also email us at <a herf="admin@scstechindia.com">admin@scstechindia.com</a></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function serviceTab() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div>We offer expertise across several key areas. Which area interests you the most? 
Options(Only the bulleted section name to be mentioned at the start, and when the user clicks on any service, it shows a brief detail about the service) 
 <div class="dropdown">
  <button class="border-0 rounded-1" dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Services
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#" onclick="digitalInformation()">Digital Transformation</a></li>
    <li><a class="dropdown-item" href="#" onclick="softwareDevelopmentTabShow()">Software Development</a></li>
    <li><a class="dropdown-item" href="#" onclick="aiDataAnalyticsTabShow()">AI/ML & Data Analytics</a></li>
    <li><a class="dropdown-item" href="#" onclick="roboticProcessAutomationTabShow()">Robotic Process Automation</a></li>
    <li><a class="dropdown-item" href="#" onclick="blockchainTabShow()">Blockchain</a></li>
    <li><a class="dropdown-item" href="#" onclick="geographicInformationSystemTabShow()">Geographic Information System(GIS)</a></li>
   
    <li><a class="dropdown-item" href="#" onclick="cybersecurityTabShow()">Cybersecurity</a></li>
    <li><a class="dropdown-item" href="#" onclick="cloudTabShow()">Cloud</a></li>
    <li><a class="dropdown-item" href="#" onclick="ItConsultancyTabShow()">IT Consultancy</a></li>
    <li><a class="dropdown-item" href="#" onclick="dataCenterTabShow()">Data Center</a></li>
    <li><a class="dropdown-item" href="#" onclick="disasterEmergencyManagementTabShow()">Disaster/Emergency Management</a></li>
    <li><a class="dropdown-item" href="#">Products</a></li>
    <li><a class="dropdown-item" href="#">Smart Landslide Early Warning System</a></li>
    <li><a class="dropdown-item" href="#">GIS-Based Workforce and Fleet Management System</a></li>
    <li><a class="dropdown-item" href="#">Project Process Management System</a></li>
  </ul>
</div>`;

    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}

function digitalInformation() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Digital Transformation :- </b> services involve partnering with clients to fundamentally rethink and rebuild business processes, culture, and customer experiences by integrating modern digital technologies. This is achieved through strategic consulting, modernization of legacy systems, adoption of Cloud and AI/ML, and implementing enterprise-wide solutions like ERP to streamline operations, enhance efficiency, and unlock new data-driven revenue streams.</P></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function softwareDevelopmentShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Software Development</b> services cover the entire lifecycle of creating bespoke digital solutions, from initial requirements analysis and UX/UI design to coding, testing, deployment, and ongoing maintenance. Offerings typically include developing custom enterprise applications, mobile apps, web portals, and integrating systems to ensure a solution is highly functional, scalable, secure, and perfectly aligns with unique business needs.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function aiDataAnalyticsTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>AI/ML & Data Analytics</b>services focus on helping organizations leverage their data assets to drive informed decision-making. This includes implementing advanced analytics platforms, building predictive models using Machine Learning (ML), developing Artificial Intelligence (AI) solutions like chatbots or smart automation, and providing Business Intelligence (BI) dashboards for actionable insights, transforming raw data into strategic foresight.</p></diV>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function roboticProcessAutomationTabShow() {
  window.scrollBy({
    bottom: -500,
    behavior: "smooth",
  });
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Robotic Process Automation (RPA)</b> involves using software 'robots' to automate high-volume, repetitive, rule-based tasks across various business functions, such as data entry, form processing, and system integration. RPA services include process discovery, bot development, deployment, and governance to minimize human error, significantly reduce operational costs, and free up employees for more strategic, high-value work.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function blockchainTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Blockchain</b>services assist businesses in adopting distributed ledger technology (DLT) to create secure, transparent, and immutable records. Services typically involve developing private or consortium blockchain solutions for applications in supply chain management, financial transactions (e.g., tokenization), smart contracts, and secure digital identity management to enhance trust and efficiency across multi-party ecosystems.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function geographicInformationSystemTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Geographic Information System (GIS)</b> services provide the tools and expertise to capture, manage, analyze, and visualize all types of location-based data. This involves developing custom mapping applications, integrating spatial data into enterprise systems (like utilities or logistics), and performing spatial analysis to enable location intelligence for improved decision-making in areas like asset tracking, urban planning, and resource management.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function cybersecurityTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Cybersecurity</b>services aim to protect an organization's systems, networks, and data from digital threats, ensuring confidentiality, integrity, and availability. Core offerings include risk assessments, vulnerability and penetration testing, 24/7 Managed Security Services (MSS), Incident Response planning, and implementing advanced solutions for threat detection, identity and access management (IAM), and regulatory compliance.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function cloudTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Cloud</b> services involve providing expertise across the major cloud platforms (e.g., AWS, Azure, GCP) to manage compute, storage, and networking resources. Services encompass strategic Cloud migration and modernization, developing Cloud-native applications, optimizing performance and cost management (FinOps), and offering Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) solutions.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function ItConsultancyTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>IT Consultancy</b> provides expert advisory services to guide businesses on technology strategy, architecture, and implementation to achieve specific business goals. Consultants conduct comprehensive technology assessments, develop long-term IT roadmaps, help with vendor and platform selection, and manage complex technology projects to ensure alignment between IT investments and overall corporate strategy.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function dataCenterTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Data Center</b>services focus on designing, building, managing, and maintaining the physical and virtual infrastructure required to host and operate critical IT applications and data. This includes providing solutions for server and storage hardware, network infrastructure, virtualization, power and cooling management, and offering co-location, hosting, or fully managed services for maximum uptime and operational efficiency.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}
function disasterEmergencyManagementTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>Disaster/Emergency Management</b> services, often termed Business Continuity and Disaster Recovery (BCDR), involve creating plans and implementing systems to ensure an organization can quickly resume mission-critical functions after a disruptive event. This covers planning, risk assessment, data backup and recovery solutions, establishing secondary failover sites, and conducting regular testing to minimize downtime and data loss.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}

//  ------------Product-discussion-------------------
function productDiscussionTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div>Our product line includes various enterprise solutions. Which product are you interested in? (whichever product is selected, the user is redirected to that product's page)</div> <div class="dropdown">
  <button class="border-0 rounded-1" dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Services
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#" onclick="intelligentDebriefingAnalyticsTabShow()">Intelligent Debriefing with Analytics (IDA)</a></li>
    
  </ul>
</div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}

function intelligentDebriefingAnalyticsTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "abouttab-container";
    aboutTab.innerHTML = `<div><p><b>The Intelligent Debriefing with Analytics (IDA)</b> platform is a proprietary, AI/ML-powered solution designed for intelligent incident management in mission-critical environments. It functions as a strategic command center by aggregating and analyzing fragmented multi-source data (including social media) into a single, encrypted, real-time intelligence report. The platform leverages predictive analytics to forecast potential threats, monitors compliance with Standard Operating Procedures (SOPs), and continuously refines its intelligence to enable faster response, smarter decision-making, and enhanced accountability during security or disaster events.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollBottom = 0;
  }, 1000);
}

