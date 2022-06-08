import Image from "next/image";
import React from "react";

const Contents = () => {
  return (
    <>
      <div className="flex justify-center items-center -mt-6">
        <div className="-mt-20 sm:-mt-20">
          <Image
            width="149px"
            height="149px"
            src="/asset/eye.gif"
            alt="roundeye"
            className="rounded-full "
          />
        </div>
      </div>
      <h1 className="text-center mt-9 text-5xl xs:text-2xl font-bold">
        <span className="block text-white font-family-Manrope">
          Lorem ipsum
        </span>
      </h1>

      <p className="text-center mt-4 text-base">
        <span className="block text-white">
          Created by : <span className="text-red-400">Lorem ipsum</span>{" "}
        </span>
        <span className="block text-white mt-3">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </span>
      </p>
    </>
  );
};

export default Contents;
