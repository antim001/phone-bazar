import { useParams, useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PhonesCard from './PhonesCard';


const Phone = () => {
    const [phone, setPhone] = useState();
    const { id } = useParams();
    const phones = useLoaderData();

    useEffect(() => {
        const findPhone = phones.find(phone => phone.id === id)
        setPhone(findPhone)
    }, [id, phones]);

    return (
        <div>
            {phone && ( // Check if phone is not null or undefined
                <PhonesCard key={phone.id}
                phone={phone}
                ></PhonesCard> 
            )}
        </div>
    );
};

export default Phone;
