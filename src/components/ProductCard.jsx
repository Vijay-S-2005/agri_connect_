'use client'
;import React from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Assets } from '../../public/assets/Assets';

function ProductCard({
    productName = "Organic Apples",
    imageUrl = Assets.Apple,
    price = "100",
    weight = "1kg",
}) {
  const onAddProducts = () => {
    toast.success("Added product successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  };

  return (
    <div className="w-[calc(20%-1.5rem)] h-[340px] border-[#ac7d87] rounded-xl">
      <div>
        <Image
          src={imageUrl}
          alt={productName}
          className="rounded-sm rounded-t-xl"
          width={300}
          height={170}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between p-2 font-roboto">
        <div className="flex flex-col">
          <h3 className="font-extrabold text-lg">{productName}</h3>
          <div className="flex items-center">
            <p className="text-lg font-light">₹ {price} {weight}</p>
          </div>
          <button
            className="flex border-2 rounded-[12px] bg-[#20E58F] hover:bg-[#229764] border-transparent focus:border-transparent focus:ring-0 text-white items-center p-2"
            onClick={onAddProducts}
          >
            <Image
              src={Assets.Cart}
              width={20}
              height={20}
              alt="shopping cart"
            />
            <p className="ml-3 font-normal">Add to cart</p>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductCard;
