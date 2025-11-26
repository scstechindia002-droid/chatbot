// ----------------------all-id-get-here-----------------------------
const chatbotInput = document.getElementById("chatbot-message");
const chatbotContent = document.getElementById("chatbot-content");
const chatbotShowBtn = document.getElementById("chatbot-show-btn");
const chatbotCloseBtn = document.getElementById("chatbot-close-btn");
const chatbotContainer = document.getElementById("chatbot-container");

var currentMessageTime = '';
// ---------------defouilt-hide-block-element------
chatbotContainer.style.display = "none";
chatbotShowBtn.style.display = "flex";
// -----------chatbot-open---------------------
chatbotShowBtn.addEventListener("click", () => {
   getReply()
   chatbotContainer.style.display = "block";
   chatbotShowBtn.style.display = "none";
   getCurrentMessageTime()
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
    e.style.display = 'none'
  });
  document.querySelectorAll(".reply-message-container").forEach((e) => {
    e.textContent = "";
     e.style.display = 'none'
  });
  document.querySelectorAll(".animated-dotte-container").forEach((e) => {
    e.textContent = "";
     e.style.display = 'none'
  });
  document.querySelectorAll(".chatbot-sagation-message").forEach((e) => {
    e.textContent = "";
     e.style.display = 'none'
  });

  chatbotInput.disabled = false;
});

function getReply(userMessage) {
  const replyMessageContainer = document.createElement("div");
  replyMessageContainer.className = "reply-message-container";
  replyMessageContainer.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div><div class="reply-message-content">Hello! Welcome to SCS Tech India. How may I help you?</div><div class="reply-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(replyMessageContainer);

  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
}


function aboutBtn() {
  currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">About us</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div><div class="reply-message-content"><p>SCS Tech India is a leading IT & ITES company specializing in next-generation Digital Transformation solutions, with over 15 years of experience. We hold the prestigious CMMI Level 5 certification.</div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div><div class="reply-message-content">How would you like to get in touch with us?</div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1250)
   
}

function contactDetailsTabShow(){
   currentMessageTime = ''
  getCurrentMessageTime()
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div><div class="reply-message-content"></p>You can call us at <a class="chatbot-links" href="tel:91 22 23664500">+91 22 23664500</a> or WhatsApp us at<a class="chatbot-links" href="tel:91 9987799837"> +91 9987799837.</a> You can also email us at <a class="chatbot-links" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=admin@scstechindia.com">admin@scstechindia.com</a></div class="reply-message-time">${currentMessageTime}<div></div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button></div><div class="type-message-content">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1010)
}

function serviceTab() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Services</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div><div class="reply-message-content">We offer expertise across several key areas. Which area interests you the most? 
 <div>
</div></div> <div class="reply-message-time">${currentMessageTime}</div>`;
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
   currentMessageTime = ''
  getCurrentMessageTime()
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
  <div class="type-message-time">${currentMessageTime}</div>
 
</div>`;
  chatbotContent.appendChild(typeMessage);
  },);
}


function digitalInformation() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Digital Transformation</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a class="chatbot-links" href="digital-transformation">Digital Transformation</a></b> services involve partnering with clients to fundamentally rethink and rebuild business processes, culture, and customer experiences by integrating modern digital technologies. This is achieved through strategic consulting, modernization of legacy systems, adoption of Cloud and AI/ML, and implementing enterprise-wide solutions like ERP to streamline operations, enhance efficiency, and unlock new data-driven revenue streams.</P></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function softwareDevelopmentTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Software Development</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a class="chatbot-links" href="software-development">Software Development</a></b> services cover the entire lifecycle of creating bespoke digital solutions, from initial requirements analysis and UX/UI design to coding, testing, deployment, and ongoing maintenance. Offerings typically include developing custom enterprise applications, mobile apps, web portals, and integrating systems to ensure a solution is highly functional, scalable, secure, and perfectly aligns with unique business needs.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function aiDataAnalyticsTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">AI/ML & Data Analytics</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a class="chatbot-links" href="ai-ml-and-data-analytics-services">AI/ML & Data Analytics</a></b> services focus on helping organizations leverage their data assets to drive informed decision-making. This includes implementing advanced analytics platforms, building predictive models using Machine Learning (ML), developing Artificial Intelligence (AI) solutions like chatbots or smart automation, and providing Business Intelligence (BI) dashboards for actionable insights, transforming raw data into strategic foresight.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function roboticProcessAutomationTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Robotic Process Automation</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a class="chatbot-links" href="robotic-process-automation">Robotic Process Automation (RPA)</a></b> involves using software 'robots' to automate high-volume, repetitive, rule-based tasks across various business functions, such as data entry, form processing, and system integration. RPA services include process discovery, bot development, deployment, and governance to minimize human error, significantly reduce operational costs, and free up employees for more strategic, high-value work.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}

function blockchainTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Blockchain</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
      <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content">
        <p><b><a href="blockchain" class="chatbot-links">Blockchain</a></b> services assist businesses in adopting distributed ledger technology (DLT) 
        to create secure, transparent, and immutable records...</p>
      </div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}

function geographicInformationSystemTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Geographic Information System(GIS)</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a href="geographic-information-system-gis" class="chatbot-links">Geographic Information System (GIS)</a></b> services provide the tools and expertise to capture, manage, analyze, and visualize all types of location-based data. This involves developing custom mapping applications, integrating spatial data into enterprise systems (like utilities or logistics), and performing spatial analysis to enable location intelligence for improved decision-making in areas like asset tracking, urban planning, and resource management.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function cybersecurityTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Cybersecurity</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a href="cybersecurity" class="chatbot-links">Cybersecurity</a></b> services aim to protect an organization's systems, networks, and data from digital threats, ensuring confidentiality, integrity, and availability. Core offerings include risk assessments, vulnerability and penetration testing, 24/7 Managed Security Services (MSS), Incident Response planning, and implementing advanced solutions for threat detection, identity and access management (IAM), and regulatory compliance.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function cloudTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Cloud</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a href="cloud" class="chatbot-links">Cloud</a></b> services involve providing expertise across the major cloud platforms (e.g., AWS, Azure, GCP) to manage compute, storage, and networking resources. Services encompass strategic Cloud migration and modernization, developing Cloud-native applications, optimizing performance and cost management (FinOps), and offering Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) solutions.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function ItConsultancyTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">IT Consultancy</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a href="it-consultancy" class="chatbot-links">IT Consultancy</a></b> provides expert advisory services to guide businesses on technology strategy, architecture, and implementation to achieve specific business goals. Consultants conduct comprehensive technology assessments, develop long-term IT roadmaps, help with vendor and platform selection, and manage complex technology projects to ensure alignment between IT investments and overall corporate strategy.</p></div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
  setTimeout(() => {
    // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function dataCenterTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Data Center</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a href="data-center-services" class="chatbot-links">Data Center</a></b> services focus on designing, building, managing, and maintaining the physical and virtual infrastructure required to host and operate critical IT applications and data. This includes providing solutions for server and storage hardware, network infrastructure, virtualization, power and cooling management, and offering co-location, hosting, or fully managed services for maximum uptime and operational efficiency.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}
function disasterEmergencyManagementTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-contant"><div class="type-message">Disaster/Emergency Management</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content"><p><b><a href="disaster-emergency-services" class="chatbot-links">Disaster/Emergency Management</a></b> services, often termed Business Continuity and Disaster Recovery (BCDR), involve creating plans and implementing systems to ensure an organization can quickly resume mission-critical functions after a disruptive event. This covers planning, risk assessment, data backup and recovery solutions, establishing secondary failover sites, and conducting regular testing to minimize downtime and data loss.</p></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="reply-message-time">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}

function intelligentDebriefingAnalyticsTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div class="reply-message-content"><p><b><a href="intelligent-debriefing-with-analytics-ida" class="chatbot-links">The Intelligent Debriefing with Analytics (IDA)</a></b> platform is a proprietary, AI/ML-powered solution designed for intelligent incident management in mission-critical environments. It functions as a strategic command center by aggregating and analyzing fragmented multi-source data (including social media) into a single, encrypted, real-time intelligence report. The platform leverages predictive analytics to forecast potential threats, monitors compliance with Standard Operating Procedures (SOPs), and continuously refines its intelligence to enable faster response, smarter decision-making, and enhanced accountability during security or disaster events.</p></div>`;
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
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button  class="border-0 rounded-1" onclick="aboutBtn()">About Us </button> <button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1005)
}

function IndustriesTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Industries</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    aboutTab.innerHTML = `<div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div><div><div class="reply-message-content">We provide tailored solutions for multiple major industries. Which industry would you like to learn more about?<div></div>
  </div><div class="reply-message-time">${currentMessageTime}</div></div>`;
    chatbotContent.appendChild(aboutTab);
     
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
 setTimeout(() => {
   IndustriesDetailsTabShow()
 },1005)
}
function IndustriesDetailsTabShow(){
   currentMessageTime = ''
  getCurrentMessageTime()
   setTimeout(() => {
    const aboutTab = document.createElement("div");
    aboutTab.className = "chatbot-sagation-message";
    aboutTab.innerHTML = `
  <div class="chatbot-details-btn-container"><button onclick="window.location.href='oil-gas-and-power'">Oil, Gas, and Power</button><button onclick="window.location.href='banking-financial-services-and-insurance'">Banking, Financial Services, and Insurance</button><button onclick="window.location.href='homeland-security-and-defense'">Homeland Security and Defence</button><button onclick="window.location.href='transport-and-logistics'">Transport and Logistics</button><button onclick="window.location.href='telecom'">Telecom</button><button onclick="window.location.href='healthcare'">Healthcare</button><button onclick="window.location.href='agriculture'">Agriculture</button><button onclick="window.location.href='education'">Education</button><button onclick="window.location.href='critical-it-and-urban-infrastructure'">Critical IT and Urban Infrastructure</button><button onclick="window.location.href='solid-waste-management'">Solid Waste Management</button></div><div class="type-message-time">${currentMessageTime}</div>
  </div></div>`;
    chatbotContent.appendChild(aboutTab);
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  });
}

function productTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Products</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    <div class="chatbot-reply-icon"><img src="assets/images/message-chatbot-icon2.png" alt="message-cion"></div>  
    <div>
    <div class="reply-message-content">
        Our product line includes various enterprise solutions. 
        Which product are you interested in? 
</div>
<div class="reply-message-time">${currentMessageTime}</div>
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
  setTimeout(() => {
    productDetailsTabShow()
  },1005)
}

function productDetailsTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
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
    aboutTab.className = "chatbot-sagation-message";
    aboutTab.innerHTML = `
    <div class="chatbot-details-btn-container">
    <button onclick="intelligentDebriefingAnalyticsTabShow()">Intelligent Debriefing with Analytics (IDA)</button>
    <button onclick="smartLandslideSystemTabShow()">Smart Landslide Early Warning System</button>
    <button onclick="gisBasedWorkManagementSystemTabShow()">GIS-Based Workforce and Fleet Management System</button>
    <button onclick="projectManagementSystemTabShow()">Project Process Management System</button>
    </div>
 <div class="type-message-time">${currentMessageTime}</div>

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
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="replymessage-content"><div class="type-message">Intelligent Debriefing with Analytics</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
    <div><div class="reply-message-content">The Intelligent Debriefing with Analytics (IDA) platform is a proprietary, AI/ML-powered solution designed for intelligent incident management in mission-critical environments. It functions as a strategic command center by aggregating and analyzing fragmented multi-source data (including social media) into a single, encrypted, real-time intelligence report. The platform leverages predictive analytics to forecast potential threats, monitors compliance with Standard Operating Procedures (SOPs), and continuously refines its intelligence to enable faster response, smarter decision-making, and enhanced accountability during security or disaster events.
</div><div>${currentMessageTime}</div></div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
  setTimeout(() => {
     // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-content">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1010)
}
function smartLandslideSystemTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Smart Landslide Early Warning System</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
  <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content">The Smart Landslide Early Warning System (SLEWS) is a proprietary solution that combines AI/ML, IoT, and Geographic Information Systems (GIS) to predict and manage landslide disasters. It functions by continuously ingesting and analyzing real-time data from IoT weather stations, satellite imagery, and historical records to create dynamic risk layers and map susceptibility. Using advanced AI/ML models, SLEWS forecasts the probable location and timing of landslide events, providing early warnings and decision support tools via GIS-based dashboards and alerts to enable timely resource allocation and proactive response by disaster management teams.</div><div class="reply-message-time">${currentMessageTime}</div></div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
  setTimeout(() => {
     // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-content">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1010)
}
function gisBasedWorkManagementSystemTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">GIS-Based Workforce and Fleet Management System</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
  <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div><div><div class="reply-message-content">The GIS-based Workforce & Fleet Tracking System is a unified, cloud-native platform that enables real-time centralized monitoring of field crews and vehicle assets using GIS Mapping, GPS, IoT devices, and mobile apps. Its core functions include optimizing routes, resources, and route deviation; improving SLA compliance via geo-fenced alerts and task tracking; and providing data analytics for management reporting (MIS/Hawk-Eye Dashboards). The solution is designed to integrate seamlessly with existing ERP, CRM, weighbridges, and citizen complaint redressal systems, making field operations visible, accountable, and highly efficient, especially for smart governance and city-wide municipal operations.</div><div class="reply-message-time">${currentMessageTime}</div></div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
  setTimeout(() => {
     // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-content">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1010)
}
function projectManagementSystemTabShow() {
   currentMessageTime = ''
  getCurrentMessageTime()
  // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="typemessage-content"><div class="type-message">Project Process Management System</div><div class="type-message-time">${currentMessageTime}</div></div>`;
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
 <div class="chatbot-reply-icon"><img src="./images/messsage-chatbot-red-icon.png" alt="message-cion"></div> <div><div class="reply-message-content">The GIS-based Workforce & Fleet Tracking System is a unified, cloud-native platform that enables real-time centralized monitoring of field crews and vehicle assets using GIS Mapping, GPS, IoT devices, and mobile apps. Its core functions include optimizing routes, resources, and route deviation; improving SLA compliance via geo-fenced alerts and task tracking; and providing data analytics for management reporting (MIS/Hawk-Eye Dashboards). The solution is designed to integrate seamlessly with existing ERP, CRM, weighbridges, and citizen complaint redressal systems, making field operations visible, accountable, and highly efficient, especially for smart governance and city-wide municipal operations.</div><div class="reply-message-time">${currentMessageTime}</div></div>
    `;
    chatbotContent.appendChild(aboutTab);
    // scroll to bottom after adding the reply
    chatbotContent.scrollTo({
      top: chatbotContent.scrollHeight,
      behavior: "smooth",
    });
  }, 1000);
  setTimeout(() => {
     // ------------sendMessage---------------------
  const typeMessage = document.createElement("div");
  typeMessage.className = "typemessage-container";
  typeMessage.innerHTML = `<div class="chatbot-sagation-message"><div class="chatbot-details-btn-container"><button class="border-0 rounded-1" onclick="serviceTab()">Services </button> <button  class="border-0 rounded-1" onclick="IndustriesTabShow()">Industries</button> <button  class="border-0 rounded-1" onclick="productTabShow()">Products</button> <button  class="border-0 rounded-1" onclick="careersShow()">Careers</button><button class="border-0 rounded-1" onclick="contactDetailsTabShow()">Contact Us </button></div><div class="type-message-content">${currentMessageTime}</div></div>`;
  chatbotContent.appendChild(typeMessage);
  },1010)
}

function careersShow(){
    window.location.href = 'career';
}
function backBtn() {
  chatbotContent.scrollTo({
    top: chatbotContent.scrollTop - 200,
    behavior: "smooth"
  });
}

// ---------getCurrentMessageTime-------------
function getCurrentMessageTime(){
const now = new Date();
let hours = now.getHours();
const minutes = String(now.getMinutes()).padStart(2, '0');
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12; 
currentMessageTime = `${hours}:${minutes} ${ampm}`
}
getCurrentMessageTime()
