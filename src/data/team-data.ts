import { color } from "@material-tailwind/react/types/components/alert";
import image1 from "@/assests/img/team-1.jpg";
import image2 from "@/assests/img/team-2.jpg";
import image3 from "@/assests/img/team-3.jpg";
import image4 from "@/assests/img/team-4.png";
import { StaticImageData } from "next/image";

interface data {
  img: StaticImageData;
  name: string;
  position: string;
  socials: Array<{
    color: color;
    name: string;
  }>;
}

const teamData:data[] = [
    {
      img: image1,
      name: "Ryan Tompson",
      position: "Web Developer",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "linkedin",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: image2,
      name: "Romina Hadid",
      position: "Marketing Specialist",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "linkedin",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: image3,
      name: "Alexa Smith",
      position: "UI/UX Designer",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "linkedin",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
    {
      img: image4,
      name: "Jenna Kardi",
      position: "Founder and CEO",
      socials: [
        {
          color: "light-blue",
          name: "twitter",
        },
        {
          color: "blue",
          name: "facebook",
        },
        {
          color: "pink",
          name: "dribbble",
        },
      ],
    },
  ];
  
  export default teamData;
  