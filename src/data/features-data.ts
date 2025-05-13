import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

interface data {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
  href: string;
  image: string;
}

const featuresData: data[] = [
  {
    title: "Structured Cabling Solutions",
    image: "/images/structuredCabling.png",
    href: "/structured-cabling",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Designing and installing high-performance structured cabling systems to support robust and scalable IT networks.",
  },
  {
    title: "Security System",
    image: "/images/security.jpg",
    href: "/security-system",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Comprehensive surveillance and access control systems to safeguard business environments from potential threats.",
  },
  {
    title: "Nurse Call System",
    image: "/images/technicalSupport.png",
    href: "/contact-us",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Advanced nurse call systems that enhance patient care and staff responsiveness in healthcare facilities.",
  },
  {
    title: "Infrastructure Support",
    image: "/images/customNetwork.png",
    href: "/infrastructure-support",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Reliable infrastructure support to maintain, optimize, and troubleshoot network systems for continuous operation.",
  },
  {
    title: "Network Design",
    image: "/images/network.png",
    href: "/custom-network",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Expert network design services to build customized, high-efficiency networks tailored to business demands.",
  },
  {
    title: "VoIP/Wifi System Integration",
    image: "/images/voip.png",
    href: "/voip-solutions",
    icon: ChatBubbleBottomCenterTextIcon,
    description:
      "Seamless integration of VoIP systems for cost-effective and scalable voice communication across teams.",
  },

];


export default featuresData;
