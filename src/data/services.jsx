import { MdWeb } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { CiMobile1 } from "react-icons/ci";

export default [
    {
        title:'Web Design',
        description:'Fully responsive web design with html,css, javascript,bootstrap,tailwind css,react js,next js',
        icon: <MdWeb className="w-full h-full" />
    },
    {
        title:'Web Development',
        description:'Full stack web development with php, mysql, laravel, express js',
        icon: <VscCode className="w-full h-full" />
    },
    {
        title: 'App Development',
        description: 'Mobile app design and development with react-native ',
        icon: <CiMobile1 className="h-full w-full"/>
    }
];