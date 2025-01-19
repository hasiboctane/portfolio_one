// import project1 from '/images/projects/project-1.jpg';
import portfolio_one from '../assets/images/portfolio_one.jpg';
import rest_api from '../assets/images/rest_api.jpg';
import ecommerce_one_API from '../assets/images/ecommerce_one_API.jpg';
import dressZone from '../assets/images/project_dress_zone.jpg';
import agency from '../assets/images/agency.jpg'
export default [

    {
        id: 1,
        title: 'WooCommerce Website',
        description: 'Wordpress/WooCommerce online store',
        // githubLink: 'https://github.com/hasiboctane',
        liveLink: 'https://dresszone.fashion/',
        image: dressZone,

    },
    {
        id: 2,
        title: 'Agency Website',
        description: 'Fully responsive agency website using react js ',
        // githubLink: 'https://github.com/hasiboctane',
        liveLink: 'https://mollaji-agency.vercel.app/',
        image: agency,

    },
    {
        id: 3,
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
        id: 4,
        title: 'Portfolio website',
        description: 'Fully responsive portfolio with react js, Tailwind css',
        liveLink: 'https://hasibbt7274.vercel.app/',
        githubLink: 'https://github.com/hasiboctane/portfolio_one',
        image: portfolio_one
    },
    {
        id: 5,
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
            longDescription: 'REST API for e-commerce built with Node.js, Express.js, and MongoDB. Includes user authentication, product management, secure payment processing, and order tracking capabilities.'
        }
    },
    // {
    //     id: 6,
    //     title: 'Portfolio Website',
    //     description: 'Fully responsive portfolio with react js, tailwind css',
    //     image: project1
    // }
]
