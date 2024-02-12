
const ServiceItem = ({title, description, icon}) => {
    return (
        <div className="p-5 bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-gray-600 hover:-translate-y-2 transform transition rounded-md ">
            <div className="w-6 h-6 mb-3 text-gray-800 dark:text-gray-300">{icon}</div>
            <h1 className="text-gray-700 text-lg font-semibold mb-1  dark:text-gray-300">{title}</h1>
            <p className="text-gray-600 text-md dark:text-gray-300">{description}</p>
        </div>
    );
}

export  default  ServiceItem;