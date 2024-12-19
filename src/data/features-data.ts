import {
    ChatBubbleBottomCenterTextIcon,
  } from "@heroicons/react/24/solid";
import { color } from "@material-tailwind/react/types/components/alert";


  interface data {
    color:color;
    title: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    description: string;
  }
  
  const featuresData:data[] = [
    {
      color: "gray",
      title: "Network Infrastructure Solutions",
      icon: ChatBubbleBottomCenterTextIcon,
      description:
        "Delivering top-notch network infrastructure services tailored to enterprises of all sizes across Canada.",
    },
    {
      color: "gray",
      title: "Wireless Technology Expertise",
      icon: ChatBubbleBottomCenterTextIcon,
      description:
        "Providing cutting-edge wireless technology solutions to ensure seamless communication and connectivity.",
    },
    {
      color: "gray",
      title: "Structured Cabling Solutions",
      icon: ChatBubbleBottomCenterTextIcon,
      description:
        "Expert consultation, implementation, and support for structured cabling systems essential to IT networks.",
    },
    {
      color: "gray",
      title: "VoIP System Integration",
      icon: ChatBubbleBottomCenterTextIcon,
      description:
        "Specializing in affordable VoIP systems with 24/7 support for efficient and reliable business communications.",
    },
    {
      color: "gray",
      title: "Custom Network Solutions",
      icon: ChatBubbleBottomCenterTextIcon,
      description:
        "Consulting and deploying networking systems that align with specific business goals and requirements.",
    },
    {
      color: "gray",
      title: "Reliable Technical Support",
      icon: ChatBubbleBottomCenterTextIcon,
      description:
        "Dedicated 24/7 customer service to ensure uninterrupted network performance and client satisfaction."
    },
  ];
  
  export default featuresData;
  