import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
const PhonesCard = ({phone}) => {
    const{id,image,brand_name,price,phone_name}=phone;
    return (
       <div>
        <div className='min-h-[40vh] bg-blue-200 mb-4'>
                <h1 className='text-center mx-auto'>Phone Details</h1>
        </div>
        <Card className="w-full max-w-[48rem] flex-col md:flex-row">
  <CardHeader
    shadow={false}
    floated={false}
    className="m-0 w-full md:w-2/5 md:shrink-0 rounded-t md:rounded-r-none md:rounded-l"
  >
    <img
      src={image}
      alt="card-image"
      className="h-full w-full object-cover"
    />
  </CardHeader>
  <CardBody className='w-full md:ml-5 p-4'>
    <Typography variant="h6" color="gray" className="mb-4 uppercase">
      {brand_name}
    </Typography>
    <Typography variant="h4" color="blue-gray" className="mb-2">
     {phone_name}
    </Typography>
    <Typography color="gray" className="mb-8 font-normal">
      Price: {price}$
    </Typography>
    <a href="#" className="inline-block">
      <Button variant="text" className="flex items-center gap-2">
        Add to favorite
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </a>
  </CardBody>
</Card>

       </div>
    );
};

export default PhonesCard;