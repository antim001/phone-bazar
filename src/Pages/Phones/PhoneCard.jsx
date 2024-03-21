import React from 'react';
import {Link} from 'react-router-dom'
const PhoneCard = ({phone}) => {
    const{id,image,brand_name,price,phone_name}=phone;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand_name}</h2>
    <p>{phone_name}</p>
    <p className='font-medium'>Price:{price}$</p>
    <div className="card-actions justify-end">
     <Link to={`/phones/${id}`}>
     <button className="btn btn-primary">Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default PhoneCard;