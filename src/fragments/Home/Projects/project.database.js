// Imports
import { pngs } from "../../../assets/pngs";

// Destructure imports
const { proj1, proj2, proj3, proj4, proj5, proj6 } = pngs;

const listOfProjects = [
  {
    thumbnail: proj1,
    title: "Altride",
    link: "/altride",
    desc: "An all inclusive ride hailing application for all kinds of users. It encompasses car rentals, requesting roadside assistance, scheduling rides and getting security assistance incase of an emergency.",
    type: "MOBILE APPLICATION",
  },
  {
    thumbnail: proj2,
    title: "GXPay",
    link: "/gxpay",
    desc: "A payment gateway solution for merchants and customers.  It encompasses all the financial transactions that grows businesses, tracking business finances, analyzing financial reports and audits.",
    type: "WEB APPLICATION",
  },
  {
    thumbnail: proj3,
    title: "Arthub",
    link: "/arthub",
    desc: "A non-fungible token marketplace application for creators and buyers to sell and buy their NFTs and other cryptocurrency collectibles. It bridges the gap between NFTs creators and their fans.",
    type: "MOBILE APPLICATION",
  },
  {
    thumbnail: proj4,
    title: "UTEXT",
    link: "/utext",
    desc: "A VOIP platform that creates seamless experience for users in term of connecting to their loved ones with the use of various channels such as: text messaging, voice calls and video calls. ",
    type: "MOBILE APPLICATION",
  },
  // {
  //   thumbnail: proj5,
  //   title: "Arthub",
  //   link: "",
  //   desc: "A payment gateway solutions for merchants and customers.  It encompasses all the financial transactions, paying of bills, saving for a goal and getting returns on savings.",
  //   type: "MOBILE APPLICATION",
  // },
  // {
  //   thumbnail: proj6,
  //   title: "Traverse",
  //   link: "",
  //   desc: "A payment gateway solutions for merchants and customers.  It encompasses all the financial transactions, paying of bills, saving for a goal and getting returns on savings.",
  //   type: "MOBILE APPLICATION",
  // },
];

export default listOfProjects;
