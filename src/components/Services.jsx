import React from 'react';
import SectionTitle from "./SectionTitle.jsx";
import services from "../data/services.jsx";
import ServiceItem from "./ServiceItem.jsx";
const Services = () => {
    return (

        <div className="py-12">
            <SectionTitle>
                My Services
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service=>(
                        <ServiceItem
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))
                }
            </div>
        </div>

    );
}

export default Services;