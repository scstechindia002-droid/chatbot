// ----------------------all-id-get-here-----------------------------
const chatbotInput = document.getElementById("chatbot-message");
const chatbotContent = document.getElementById("chatbot-content");
const chatbotShowBtn = document.getElementById("chatbot-show-btn");
const chatbotCloseBtn = document.getElementById("chatbot-close-btn");
const chatbotContainer = document.getElementById("chatbot-container");

// ---------------defouilt-hide-block-element------
chatbotContainer.style.display = "none";
chatbotShowBtn.style.display = "flex";
// -----------chatbot-open---------------------
chatbotShowBtn.addEventListener("click", () => {
    getReply()
  chatbotContainer.style.display = "block";
  chatbotShowBtn.style.display = "none";
});

function mainMenu() {
  chatbotContent.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// -------------------chatbot-close----------------------
chatbotCloseBtn.addEventListener("click", () => {
  chatbotContainer.style.display = "none";
  chatbotShowBtn.style.display = "flex";

  document.querySelectorAll(".typemessage-container").forEach((e) => {
    e.textContent = "";
  });
  document.querySelectorAll(".reply-message-container").forEach((e) => {
    e.textContent = "";
  });

  document.querySelectorAll(".reply-message-container").forEach((e) => {
    e.textContent = "";
  });

  chatbotInput.disabled = false;
});

function getReply(userMessage) {
  const replyMessageContainer = document.createElement("div");
  replyMessageContainer.className = "reply-message-container";
  replyMessageContainer.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div class="reply-message-content">Hello! Welcome to SCS Tech India. How may I help you?</div>`;
  chatbotContent.appendChild(replyMessageContainer);

  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productDiscussionTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button></div></div>`;
  chatbotContent.appendChild(typeMessage);
}


function aboutBtn() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">About us</div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div class="reply-message-content"><p>SCS Tech India is a leading IT & ITES company specializing in next-generation Digital Transformation solutions, with over 15 years of experience. We hold the prestigious CMMI Level 5 certification.</div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
   setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div class="reply-message-content">How would you like to get in touch with us?</div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  },1200);

  setTimeout(() =>{
    // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1250)
   
}


function contactDetailsTabShow(){

  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
   setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div class="reply-message-content"></p>You can call us at <a class="chatbot-links" href="tel:91 22 23664500">+91 22 23664500</a> or WhatsApp us at<a class="chatbot-links" href="tel:91 9987799837"> +91 9987799837.</a> You can also email us at <a class="chatbot-links" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=admin@scstechindia.com">admin@scstechindia.com</a></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
  setTimeout(() => {
     // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productDiscussionTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button></div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1010)
}


function serviceTab() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Services</div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div class="reply-message-content">We offer expertise across several key areas. Which area interests you the most? 
 <div>

  
</div>`;

    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
 setTimeout(() => {
   serviceDetailTabShow()
 },1050)
}


function serviceDetailTabShow(){
  setTimeout(() => {
     const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"> 
  <div class="chatbot-details-btn-container">
  <button onclick="digitalInformation()">Digital Transformation</button>
  <button  onclick="softwareDevelopmentTabShow()">Software Development</button>
  <button onclick="aiDataAnalyticsTabShow()">AI/ML & Data Analytics</button>
  <button onclick="roboticProcessAutomationTabShow()" >Robotic Process Automation</button>
  <button onclick="blockchainTabShow()">Blockchain</button>
  <button onclick="geographicInformationSystemTabShow()">Geographic Information System (GIS)</button>
  <button onclick="cybersecurityTabShow()">Cybersecurity</button>
  <button onclick="cloudTabShow()">Cloud</button>
  <button onclick="ItConsultancyTabShow()">IT Consultancy</button>
  <button onclick="dataCenterTabShow()">Data Center</button>
  <button onclick="disasterEmergencyManagementTabShow()">Disaster/Emergency Management</button>
  </div>
 
</div>`;
  chatbotContent.appendChild(typeMessage);
  },);
}
// function serviceDetailsTabShow() {
//   // ------------sendMessage---------------------
//   const typeMessage = document.createElement("div");
//   typeMessage.className = "typemessage-container";
//   typeMessage.innerHTML = `<div class="typemessage-content">All Services</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
//   chatbotContent.appendChild(typeMessage);
//   // ------------animted-dotte-loader------------------
//   const animatedDotte = document.createElement("div");
//   animatedDotte.className = "animated-dotte-container";
//   animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
//   chatbotContent.appendChild(animatedDotte);
//   chatbotContent.scrollTo({
//     top: chatbotContent.scrollHeight,
//     behavior: "smooth",
//   });

//   setTimeout(() => {
//     animatedDotte.style.display = "none";
//     const aboutTab = document.createElement("div");
//     aboutTab.className = "reply-message-container";
//     aboutTab.innerHTML = `
//     <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div>
//     <div class="reply-message-content"><p><b>Services:-</b></p>
//  <table class="services-table" border="1" cellpadding="8" cellspacing="0">
  
//   <tbody>
//     <tr">
//       <td><a href="#" onclick="digitalInformation()">Digital Transformation</a></td>
//       <td><a href="#" onclick="softwareDevelopmentTabShow()">Software Development</a></td>
//     </tr>
    
//     <tr >
//       <td ><a href="#" onclick="aiDataAnalyticsTabShow()">AI/ML & Data Analytics</a></td>
//         <td><a href="#" onclick="roboticProcessAutomationTabShow()" >Robotic Process Automation</a></td>
//     </tr>
   
//     <tr >
//       <td><a href="#" onclick="blockchainTabShow()">Blockchain</a></td>
//       <td><a href="#" onclick="geographicInformationSystemTabShow()">Geographic Information System (GIS)</a></td>
//     </tr>
   
//     <tr >
//       <td><a href="#" onclick="cybersecurityTabShow()">Cybersecurity</a></td>
//       <td><a href="#" onclick="cloudTabShow()">Cloud</a></td>
//     </tr>
    
//     <tr>
//       <td><a href="#" onclick="ItConsultancyTabShow()">IT Consultancy</a></td>
//        <td><a href="#" onclick="dataCenterTabShow()">Data Center</a></td>
//     </tr>
   
//     <tr >
//       <td colspan="2" ><a href="#" onclick="disasterEmergencyManagementTabShow()">Disaster/Emergency Management</a></td>
//     </tr>
//   </tbody>
// </table>

// </div>
// `;
//     chatbotContent.appendChild(aboutTab);
//     chatbotContent.scrollTo({
//       top: chatbotContent.scrollHeight,
//       behavior: "smooth",
//     });
//   }, 1000);
// }

function digitalInformation() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Digital Transformation</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Digital Transformation</b> services involve partnering with clients to fundamentally rethink and rebuild business processes, culture, and customer experiences by integrating modern digital technologies. This is achieved through strategic consulting, modernization of legacy systems, adoption of Cloud and AI/ML, and implementing enterprise-wide solutions like ERP to streamline operations, enhance efficiency, and unlock new data-driven revenue streams.</P></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function softwareDevelopmentTabShow() {
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Software Development</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Software Development</b> services cover the entire lifecycle of creating bespoke digital solutions, from initial requirements analysis and UX/UI design to coding, testing, deployment, and ongoing maintenance. Offerings typically include developing custom enterprise applications, mobile apps, web portals, and integrating systems to ensure a solution is highly functional, scalable, secure, and perfectly aligns with unique business needs.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function aiDataAnalyticsTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">AI/ML & Data Analytics</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>AI/ML & Data Analytics</b> services focus on helping organizations leverage their data assets to drive informed decision-making. This includes implementing advanced analytics platforms, building predictive models using Machine Learning (ML), developing Artificial Intelligence (AI) solutions like chatbots or smart automation, and providing Business Intelligence (BI) dashboards for actionable insights, transforming raw data into strategic foresight.</p></diV>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function roboticProcessAutomationTabShow() {
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Robotic Process Automation</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Robotic Process Automation (RPA)</b> involves using software 'robots' to automate high-volume, repetitive, rule-based tasks across various business functions, such as data entry, form processing, and system integration. RPA services include process discovery, bot development, deployment, and governance to minimize human error, significantly reduce operational costs, and free up employees for more strategic, high-value work.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function blockchainTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Blockchain</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);

  // show loader
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `
    <div class="dotte"></div>
    <div class="dotte dotte-two"></div>
    <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);

  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";

    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `
      <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content">
        <p><b>Blockchain</b> services assist businesses in adopting distributed ledger technology (DLT) 
        to create secure, transparent, and immutable records...</p>
      </div>`;
    chatbotContent.appendChild(aboutTab);

    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function geographicInformationSystemTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Geographic Information System(GIS)</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Geographic Information System (GIS)</b> services provide the tools and expertise to capture, manage, analyze, and visualize all types of location-based data. This involves developing custom mapping applications, integrating spatial data into enterprise systems (like utilities or logistics), and performing spatial analysis to enable location intelligence for improved decision-making in areas like asset tracking, urban planning, and resource management.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function cybersecurityTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Cybersecurity</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Cybersecurity</b>services aim to protect an organization's systems, networks, and data from digital threats, ensuring confidentiality, integrity, and availability. Core offerings include risk assessments, vulnerability and penetration testing, 24/7 Managed Security Services (MSS), Incident Response planning, and implementing advanced solutions for threat detection, identity and access management (IAM), and regulatory compliance.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function cloudTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Cloud</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Cloud</b> services involve providing expertise across the major cloud platforms (e.g., AWS, Azure, GCP) to manage compute, storage, and networking resources. Services encompass strategic Cloud migration and modernization, developing Cloud-native applications, optimizing performance and cost management (FinOps), and offering Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) solutions.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function ItConsultancyTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">IT Consultancy</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTop = chatbotContent.scrollHeight;
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>IT Consultancy</b> provides expert advisory services to guide businesses on technology strategy, architecture, and implementation to achieve specific business goals. Consultants conduct comprehensive technology assessments, develop long-term IT roadmaps, help with vendor and platform selection, and manage complex technology projects to ensure alignment between IT investments and overall corporate strategy.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
}
function dataCenterTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Data Center</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Data Center</b>services focus on designing, building, managing, and maintaining the physical and virtual infrastructure required to host and operate critical IT applications and data. This includes providing solutions for server and storage hardware, network infrastructure, virtualization, power and cooling management, and offering co-location, hosting, or fully managed services for maximum uptime and operational efficiency.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function disasterEmergencyManagementTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Disaster/Emergency Management</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>Disaster/Emergency Management</b> services, often termed Business Continuity and Disaster Recovery (BCDR), involve creating plans and implementing systems to ensure an organization can quickly resume mission-critical functions after a disruptive event. This covers planning, risk assessment, data backup and recovery solutions, establishing secondary failover sites, and conducting regular testing to minimize downtime and data loss.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function intelligentDebriefingAnalyticsTabShow() {
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content"><p><b>The Intelligent Debriefing with Analytics (IDA)</b> platform is a proprietary, AI/ML-powered solution designed for intelligent incident management in mission-critical environments. It functions as a strategic command center by aggregating and analyzing fragmented multi-source data (including social media) into a single, encrypted, real-time intelligence report. The platform leverages predictive analytics to forecast potential threats, monitors compliance with Standard Operating Procedures (SOPs), and continuously refines its intelligence to enable faster response, smarter decision-making, and enhanced accountability during security or disaster events.</p></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function IndustriesTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Industries</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);
  // ------------animted-dotte-loader------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `<div class="dotte"></div> <div class="dotte dotte-two"></div> <div class="dotte"></div>`;
  chatbotContent.appendChild(animatedDotte);
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });
  setTimeout(() => {
    animatedDotte.style.display = "none";
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content">We provide tailored solutions for multiple major industries. Which industry would you like to learn more about?<div><b>Industries</b>  <table class="services-table" border="1" cellpadding="8" cellspacing="0">
  <tbody>
    <tr">
      <td><a href="oil-gas-and-power">Oil, Gas, and Power</a></td>
      <td><a href="banking-financial-services-and-insurance">Banking, Financial Services, and Insurance</a></td>
    </tr>
    
    <tr >
      <td ><a href="homeland-security-and-defense">Homeland Security and Defence</a></td>
        <td><a href="transport-and-logistics">Transport and Logistics</a></td>
    </tr>
   
    <tr >
      <td><a href="telecom">Telecom</a></td>
      <td><a href="healthcare">Healthcare</a></td>
    </tr>
   
    <tr >
      <td><a href="agriculture">Agriculture</a></td>
      <td><a href="education">Education</a></td>
    </tr>
    
    <tr>
      <td><a href="critical-it-and-urban-infrastructure">Critical IT and Urban Infrastructure</a></td>
       <td><a href="solid-waste-management">Solid Waste Management</a></td>
    </tr>
  </tbody>
</table></div></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function productDiscussionTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Products</div> <div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);

  // ------------ animated loader ------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `
    <div class="dotte"></div>
    <div class="dotte dotte-two"></div>
    <div class="dotte"></div>
  `;
  chatbotContent.appendChild(animatedDotte);

  // scroll to bottom after adding loader
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    animatedDotte.style.display = "none";

    // add the reply message
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `
    <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div>  
    <div class="reply-message-content">
        Our product line includes various enterprise solutions. 
        Which product are you interested in? 
        (whichever product is selected, the user is redirected to that product's page)
        <div class="dropdown">
  <button class="border-0 rounded-1" onclick="allProductTabSHow()">
   Services
  </button>
  
</div>
      </div>
    `;
    chatbotContent.appendChild(aboutTab);

    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function productDiscussionTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">All Products</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);

  // ------------ animated loader ------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `
    <div class="dotte"></div>
    <div class="dotte dotte-two"></div>
    <div class="dotte"></div>
  `;
  chatbotContent.appendChild(animatedDotte);

  // scroll to bottom after adding loader
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    animatedDotte.style.display = "none";

    // add the reply message
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `
    <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div> 
    <div class="reply-message-content"><b>All Products</b>
 <tr">
      </tr"><table class="services-table" border="1" cellpadding="8" cellspacing="0">
  
  <tbody>
    <tr><td><a href="#" onclick="intelligentDebriefingAnalyticsTabShow()">Intelligent Debriefing with Analytics (IDA)</a></td>
      <td><a href="#" onclick="smartLandslideSystemTabShow()">Smart Landslide Early Warning System</a></td>
    </tr>
    
    <tr>
      <td><a href="#" onclick="gisBasedWorkManagementSystemTabShow()">GIS-Based Workforce and Fleet Management System</a></td>
        <td><a href="#" onclick="projectManagementSystemTabShow()">Project Process Management System</a></td>
    </tr>
  </tbody>
</table>

</div>
    `;
    chatbotContent.appendChild(aboutTab);

    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function intelligentDebriefingAnalyticsTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Intelligent Debriefing with Analytics</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);

  // ------------ animated loader ------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `
    <div class="dotte"></div>
    <div class="dotte dotte-two"></div>
    <div class="dotte"></div>
  `;
  chatbotContent.appendChild(animatedDotte);
  // scroll to bottom after adding loader
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    animatedDotte.style.display = "none";
    // add the reply message
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `
  <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div>
    <div class="reply-message-content">The Intelligent Debriefing with Analytics (IDA) platform is a proprietary, AI/ML-powered solution designed for intelligent incident management in mission-critical environments. It functions as a strategic command center by aggregating and analyzing fragmented multi-source data (including social media) into a single, encrypted, real-time intelligence report. The platform leverages predictive analytics to forecast potential threats, monitors compliance with Standard Operating Procedures (SOPs), and continuously refines its intelligence to enable faster response, smarter decision-making, and enhanced accountability during security or disaster events.
</div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function smartLandslideSystemTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Smart Landslide Early Warning System</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);

  // ------------ animated loader ------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `
    <div class="dotte"></div>
    <div class="dotte dotte-two"></div>
    <div class="dotte"></div>
  `;
  chatbotContent.appendChild(animatedDotte);
  // scroll to bottom after adding loader
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    animatedDotte.style.display = "none";
    // add the reply message
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `
  <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content">The Smart Landslide Early Warning System (SLEWS) is a proprietary solution that combines AI/ML, IoT, and Geographic Information Systems (GIS) to predict and manage landslide disasters. It functions by continuously ingesting and analyzing real-time data from IoT weather stations, satellite imagery, and historical records to create dynamic risk layers and map susceptibility. Using advanced AI/ML models, SLEWS forecasts the probable location and timing of landslide events, providing early warnings and decision support tools via GIS-based dashboards and alerts to enable timely resource allocation and proactive response by disaster management teams.</div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function gisBasedWorkManagementSystemTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">GIS-Based Workforce and Fleet Management System</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);

  // ------------ animated loader ------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `
    <div class="dotte"></div>
    <div class="dotte dotte-two"></div>
    <div class="dotte"></div>
  `;
  chatbotContent.appendChild(animatedDotte);
  // scroll to bottom after adding loader
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    animatedDotte.style.display = "none";
    // add the reply message
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `
  <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div class="reply-message-content">The GIS-based Workforce & Fleet Tracking System is a unified, cloud-native platform that enables real-time centralized monitoring of field crews and vehicle assets using GIS Mapping, GPS, IoT devices, and mobile apps. Its core functions include optimizing routes, resources, and route deviation; improving SLA compliance via geo-fenced alerts and task tracking; and providing data analytics for management reporting (MIS/Hawk-Eye Dashboards). The solution is designed to integrate seamlessly with existing ERP, CRM, weighbridges, and citizen complaint redressal systems, making field operations visible, accountable, and highly efficient, especially for smart governance and city-wide municipal operations.</div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}
function projectManagementSystemTabShow() {
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content">Project Process Management System</div><div class="chatbot-type-icon"><img src="./images/chatbot-use-icon.png" alt="message-cion"></div>`;
  chatbotContent.appendChild(typeMessage);

  // ------------ animated loader ------------------
  const animatedDotte = document.createElement("div");
  animatedDotte.className = "animated-dotte-container";
  animatedDotte.innerHTML = `
    <div class="dotte"></div>
    <div class="dotte dotte-two"></div>
    <div class="dotte"></div>
  `;
  chatbotContent.appendChild(animatedDotte);
  // scroll to bottom after adding loader
  chatbotContent.scrollTo({
    top: chatbotContent.scrollHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    animatedDotte.style.display = "none";
    // add the reply message
    const aboutTab = document.createElement("div");
    aboutTab.className = "reply-message-container";
    aboutTab.innerHTML = `
 <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div> <div class="reply-message-content">The GIS-based Workforce & Fleet Tracking System is a unified, cloud-native platform that enables real-time centralized monitoring of field crews and vehicle assets using GIS Mapping, GPS, IoT devices, and mobile apps. Its core functions include optimizing routes, resources, and route deviation; improving SLA compliance via geo-fenced alerts and task tracking; and providing data analytics for management reporting (MIS/Hawk-Eye Dashboards). The solution is designed to integrate seamlessly with existing ERP, CRM, weighbridges, and citizen complaint redressal systems, making field operations visible, accountable, and highly efficient, especially for smart governance and city-wide municipal operations.</div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
}

function careersShow(){
    window.location.href = 'career';
}