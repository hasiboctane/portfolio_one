// import project1 from '/images/projects/project-1.jpg';
import portfolio_one from '../assets/images/portfolio_one.jpg';
import rest_api from '../assets/images/rest_api.jpg';
import ecommerce_one_API from '../assets/images/ecommerce_one_API.jpg';
import dressZone from '../assets/images/dress_zone_admin.jpg';
import agency from '../assets/images/agency.jpg';
import evm from '../assets/images/evm_1.jpg';
export default [
    {
        id: 1,
        title: 'Event Management System built with Laravel.',
        description: 'It is built with Laravel with features like authentication, role/permission management, and admin dashboards.',
        githubLink: 'https://github.com/hasiboctane/project_2k25_two',
        image: evm,
        details: {
            technologies: ['Laravel 11', 'jQuery', 'Bootstrap.js', 'Laravel Breeze', 'Spatie', 'MySQL'],
            features: [
                'CRUD functionality',
                'Responsive admin panel for managing the system.',
                'Assign roles and permissions to users.',
                'Manage event categories.',
                'Manage events, including creating, updating, and deleting events.',
            ],
            longDescription: 'Event Management System built with Laravel. It includes user authentication, role/permission management, and an admin dashboard for managing events and categories.'
        }
    },
    {
        id: 2,
        title: 'Laravel E-commerce',
        description: 'DressZone online store built with Laravel, Livewire,Filament, Tailwind CSS, and MySQL.',
        githubLink: 'https://github.com/hasiboctane/ecommerce_two',
        image: dressZone,
        details: {
            technologies: ['Laravel 11', 'Livewire', 'Filament', 'Tailwind CSS', 'MySQL'],
            features: [
                'CRUD functionality',
                'Authentication',
                'Filament admin panel for managing the system.',
                'Product management',
                'Shopping cart',
                'Order management',
            ],
            longDescription: 'DressZone is an online store built with Laravel, Livewire, Filament, Tailwind CSS, and MySQL. It includes user authentication, product management, shopping cart, and order management functionalities.'
        }

    },
    {
        id: 3,
        title: 'Agency Website',
        description: 'Fully responsive agency website using react js ',
        // githubLink: 'https://github.com/hasiboctane',
        liveLink: 'https://mollaji-agency.vercel.app/',
        image: agency,

    },
    {
        id: 4,
        title: 'REST API ',
        description: 'REST API using Express js, MongoDB etc ',
        githubLink: 'https://github.com/hasiboctane/api_one',
        image: rest_api,
        details: {
            technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
            features: [
                'CRUD functionality',
                'Authentication',
            ],
            longDescription: 'REST API built with Node.js, Express.js, and MongoDB. Includes user authentication & CRUD functionality.'
        }
    },
    {
        id: 5,
        title: 'Portfolio website',
        description: 'Fully responsive portfolio with react js, Tailwind css',
        liveLink: 'https://hasibbt7274.vercel.app/',
        githubLink: 'https://github.com/hasiboctane/portfolio_one',
        image: portfolio_one
    },
    {
        id: 6,
        title: 'E-commerce API',
        description: 'E-commerce Rest API using Express js, MongoDB etc ',
        githubLink: 'https://github.com/hasiboctane/ecommerce_one',
        image: ecommerce_one_API,
        details: {
            technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
            features: [
                'E-commerce functionality',
                'Product catalog',
                'Shopping cart',
                'Order management'
            ],
            longDescription: 'REST API for e-commerce built with Node.js, Express.js, and MongoDB. Includes user authentication, product management, shopping cart, and order capabilities.'
        }
    },
    // {
    //     id: 6,
    //     title: 'Portfolio Website',
    //     description: 'Fully responsive portfolio with react js, tailwind css',
    //     image: project1
    // }
]
