import { MdWeb } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { FaWordpressSimple } from "react-icons/fa";
export default [
    {
        title: 'Web Design',
        description: 'Fully responsive web design with html,css, javascript,tailwind css, react js, JQuery',
        icon: <MdWeb className="w-full h-full" />
    },
    {
        title: 'Web Development',
        description: 'Full stack web development with php, mysql, laravel, express js',
        icon: <VscCode className="w-full h-full" />
    },
    {
        title: 'WordPress/WooCommerce',
        description: 'Wordpress/WooCommerce website design & development',
        icon: < FaWordpressSimple className="h-full w-full" />
    }
];