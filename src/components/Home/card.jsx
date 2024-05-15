import React from 'react';
import Bowl from "../../assets/bowl.png";

const Cardx = (props) => {
  return (
    <div className='bg-[#191919] w-[275px] h-[320px] cursor-pointer flex flex-col gap-3 justify-center items-center rounded-2xl text-gray-400'>
      <img src={Bowl} alt="" className='w-40 mb-4'/>
      <div className="text-center max-w-[170px]"> {/* Added max-width container */}
        <h2 className='text-xl font-bold break-words'>{props.title}</h2> {/* Added break-words class */}
      </div>
      <p className='font-bold'>{props.price}</p>
      <p className='mb-20'>{props.left}</p>
    </div>
  );
}

export default Cardx;
