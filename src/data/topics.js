import { svgs } from "../assets/svgs";

const {
  P1Bottom,
  P1Top,
  P2Bottom,
  P2Top,
  P3Bottom,
  P3Top,
  P4Bottom,
  P4Top,
  P5Bottom,
  P5Top,
  P6Bottom,
  P6Top,
  P7Bottom,
  P7Top,
  P8Bottom,
  P8Top,
} = svgs;

const topics = {
  uxresearch: [
    {
      name: "PRODUCT DEFINITION",
      descriptions: [
        "Analyzing blueprints to understand the basics of the project.",
        "Interviewing key stakeholders to align on vision and expectations.",
        "Value proposition mapping to create consensus around the product.",
      ],
      Illustrations: [P1Top, P1Bottom],
      headerBg: "#0CA34D",
    },
    {
      name: "RESEARCH",
      descriptions: [
        "Interviewing users to collect qualitative data.",
        "Carrying out participatory activities to observe users in their authentic environment.",
        "Conducting competitive analysis to understand the landscape of solutions.",
      ],
      Illustrations: [P2Top, P2Bottom],
      headerBg: "#F9A000",
    },
    {
      name: "IDEATION",
      descriptions: [
        "Prioritizing features and functionalities to crystallize the product vision.",
        "Crafting user flow to expose potential pitfalls and crucial moments.",
      ],
      Illustrations: [P3Top, P3Bottom],
      headerBg: "#0A84FF",
    },
  ],

  uxdesign: [
    {
      name: "PROTOTYPING",
      descriptions: [
        "Crafting rapid prototypes to visualize vital concepts and ensure the “pseudo product” meets all of your needs.",
        "Conducting user testing to evaluate the usability and accessibility of the design and identify areas for improvement.",
      ],
      Illustrations: [P4Top, P4Bottom],
      headerBg: "#FF5172",
    },
    {
      name: "WIREFRAMING",
      descriptions: [
        "Crafting hi-fi wireframes to incorporate refinements, simplify the display, and improve the user experience.",
        "Creating responsive design to enhance the user experience across devices.",
      ],
      Illustrations: [P5Top, P5Bottom],
      headerBg: "#F5832D",
    },
  ],

  uidesign: [
    {
      name: "DESIGN CONCEPT",
      descriptions: [
        "Coming up with mood boards to determine a unique visual style.",
        "Creating a design concept to communicate the eventual look and feel.",
        "Establishing a design system to ensure uniformity across every touchpoint.",
      ],
      Illustrations: [P6Top, P6Bottom],
      headerBg: "#0A84FF",
    },
    {
      name: "VISUAL DESIGN",
      descriptions: [
        "Designing inner screens to ensure consistency throughout the interface.",
        "Conducting user-testing to uncover how visual design impacts user behavior.",
        "Designing micro-animations to make users’ experience enjoyable and visualize the results of users’ actions.",
      ],
      Illustrations: [P7Top, P7Bottom],
      headerBg: "#F7941D",
    },
    {
      name: "HAND OFF",
      descriptions: [
        "Executing design-to-development hand-off and Q/A to ensure the design is implemented properly.",
        "Once the product is launched, I continuously improve product metrics to address ever-evolving user needs.",
      ],
      Illustrations: [P8Top, P8Bottom],
      headerBg: "#FF5172",
    },
  ],
};

export default topics;
