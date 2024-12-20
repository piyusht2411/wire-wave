import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

interface data {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  image: string;
}

const featuresData: data[] = [
  {
    title: "Network Infrastructure Solutions",
    image: "/images/network.png",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Delivering top-notch network infrastructure services tailored to enterprises of all sizes across Canada.",
  },
  {
    title: "Wireless Technology Expert",
    image: "/images/wireless.avif",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Providing cutting-edge wireless technology solutions to ensure seamless communication and connectivity.",
  },
  {
    title: "Structured Cabling Solutions",
    image: "/images/structuredCabling.png",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Expert consultation, implementation, and support for structured cabling systems essential to IT networks.",
  },
  {
    title: "VoIP System Integration",
    image: "/images/voip.png",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Specializing in affordable VoIP systems with 24/7 support for efficient and reliable business communications.",
  },
  {
    title: "Custom Network Solutions",
    image: "/images/customNetwork.png",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Consulting and deploying networking systems that align with specific business goals and requirements.",
  },
  {
    title: "Reliable Technical Support",
    image: "/images/technicalSupport.png",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Dedicated 24/7 customer service to ensure uninterrupted network performance and client satisfaction.",
  },
];

export default featuresData;
