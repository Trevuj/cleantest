import React from 'react';

const LocationMap = () => {
  return (
    <div className='bg-white py-24'>
        <div className="container mx-auto h-96 md:h-[500px] lg:h-[600px] mb-8">
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Our Location
      </h3>
      <div className="relative w-full h-full">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246977.39965517062!2d-71.58736677916025!3d46.84879748521638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2z4KaV4KeN4Kav4KeB4Kas4KeH4KaVIOCmuOCmv-Cmn-Cmvywg4KaV4KeB4KaH4Kas4KeH4KaVLCDgppXgpr7gpqjgpr7gpqHgpr4!5e0!3m2!1sbn!2sbd!4v1733662629295!5m2!1sbn!2sbd"
          className="w-full h-full rounded-lg shadow-lg"
          style={{ border: '0' }}
          
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
    </div>
  );
};

export default LocationMap;
