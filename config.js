// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Tommy Ouyang",
    program: "Btech-Automation",
    university: "McMaster University, Canada",
    email: "ouyanh4@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Traffic Analysis at Steeles Avenue West and Keele Street Using SUMO",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈30 seconds): raw video → Traffic Simulation → Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Steeles Avenue West and Keele Street is a busy intersection in Vaughan, Ontario.",
			"Traffic congestion causes delays and long waiting times.",
			"SUMO software is used to simulate traffic conditions.",
			"Compare human-driven vehicles (HDVs) and autonomous vehicles (AVs)."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"A digital traffic model is needed to study the intersection.",
			"Traffic congestion causes low speeds and long queues.",
			"The impact of autonomous vehicles (AVs) on traffic flow is unclear.",
			"The effect of changing traffic light timing has not been tested."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Develop a SUMO traffic model and analyze human-driven vehicles (HDVs).",
			"Compare traffic flow between human-driven vehicles (HDVs) and autonomous vehicles (AVs).",
			"Test changes to traffic light timing and evaluate their impact on traffic flow."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Roadway network development and HDV baseline",
				text: "Build the SUMO road network, set traffic demand and signal timing, and run the 100% HDV baseline.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: CAV scenario implementation",
				text: "Run a 100% CAV simulation using different vehicle-following parameters.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Intervention implementation",
				text: "Change the east-west green light time from 27 to 41 seconds and run the simulation.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Summary of the project findings",
				text: "Compare traffic results from all scenarios and summarize the key findings and conclusions.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Roadway Network Development and HDV Baseline (SUMO)",
        bullets: [
				  { text: "Build a digital road network of Steeles Avenue West and Keele Street using SUMO." },
          { text: "Set up road lanes, turning movements, and traffic light signals." },
          { text: "Configure traffic demand and run the 100% human-driven vehicle (HDV) simulation." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: CAV Scenario Implementation (SUMO)",
        bullets: [
          { text: "Use the same road network and traffic demand as the HDV baseline." },
          { text: "Change vehicle settings to simulate 100% connected and autonomous vehicles (CAVs)." },
          { text: "Run the simulation and compare traffic speed and density with the HDV baseline." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Intervention Implementation (SUMO)",
        bullets: [
				  { text: "Identify traffic congestion and long queues at the intersection." },
          { text: "Increase the east-west green light time from 27 to 41 seconds." },
          { text: "Run the updated SUMO simulation and compare traffic speed and density with the HDV baseline." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Compare traffic speed and density across the HDV, CAV, and intervention scenarios." },
          { text: "Present simulation results using graphs and tables to identify traffic improvements." },
          { text: "Summarize key findings, project limitations, and recommendations for future improvements." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"SUMO simulation results compare traffic speed, density, and capacity across three scenarios: 100% HDV, 100% CAV, and improved traffic signal timing. The results help identify possible improvements in traffic flow and areas for future study.",

			charts: {
				left: {
					title: "Scenario 1 — Base Scenario",
					src: "assets/img/image6.jpg",
					alt: "Scenario 1 train schedule chart showing arrivals and departures across S1 to S4"
				},
				right: {
					title: "Scenario 2 — CAV Scenario",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 train schedule chart showing arrivals and departures across S1 to S4"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"HDV Baseline: Traffic speed decreases as vehicle density increases, causing congestion.",
				"CAV Scenario: Autonomous vehicles show only a small improvement compared to HDVs.",
				"Intervention Scenario: Increasing the east-west green light time slightly improves traffic capacity by 2.5%.",
				"Limitations: Results are based on simulation data without real-world validation.",
				"Future Improvements: Collect real traffic data and test more traffic light settings."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

  members: [
      { name: "Tommy Ouyang", role: "Traffic simulation, analysis, and results presentation" },
      { name: "Jacob Kwan", role: "Data collection and analysis" },
      { name: "Nicolas Martin Jao", role: "SUMO road network development" }
    ],

    acknowledgments: [
      "Workshop: Btech Automation",
      "Institution: McMaster University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Python, GIS"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/ouyan/REPO"
  }
};
