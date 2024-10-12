import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const OurChef = () => {
    const [chefs, setChef] = useState([])

    useEffect( () => {
        fetch('chef.json')
        .then(res => res.json())
        .then(data => setChef(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 my-10 p-4">
            {
                chefs.map(chef => <>
                <ChefCard key={chef._id} chef={chef}></ChefCard>
                </>)
            }
            
        </div>
    );
};

export default OurChef;