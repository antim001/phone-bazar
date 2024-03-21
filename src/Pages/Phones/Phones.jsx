import React from 'react';
import PhoneCard from './PhoneCard'
const Phones = ({phones}) => {
    return (
        <div>
            <h1 className='text-center text-2xl font-medium mt-4'>All categories</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    phones?.map(phone=><PhoneCard
                    key={phone.id}
                    phone={phone}
                    >

                    </PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Phones;