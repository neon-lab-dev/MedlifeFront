import React from 'react';
import Officeaddress from '../Officeaddress';
import Footer from '../Footer';

const AmbulanceBookingForm = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-5 md:px-10 py-12">
      <div className="bg-gradient-to-r from-teal-50 to-teal-50 p-3 rounded-md">
        <div className="border-b pb-2 border-gray-700 mb-5">
          <h2 className="text-2xl font-semibold text-center mb-4">
          Why Us
          </h2>
        </div>

        <ul class="list-inside list-disc">
  <li className='text-[#000] mb-4'>हमारी एम्बुलेंसें आपातकालीन कॉल्स के लिए त्वरित प्रतिक्रिया के लिए रणनीतिक रूप से स्थित हैं।</li>
  <li className='text-[#000] mb-4'>हमारे आपातकालीन चिकित्सा कर्मी उच्च प्रशिक्षित और प्रमाणित पेशेवरों से मिलकर बने हुए हैं।</li>
  <li className='text-[#000] mb-4'>उन्नत जीवन समर्थन से सुसज्जित, जिससे अस्पताल की ओर जाते समय समग्र देखभाल प्रदान की जा सके।</li>
  <li>हमारी टीम सुनिश्चित करती है कि आपातकालीन प्रतिक्रिया के दौरान स्पष्ट संवाद और सहानुभूतिपूर्ण देखभाल हो।</li>
  <li>हम आपको हर समय स्पष्ट संवाद और आपकी आपातकालीन सेवा की लागत का स्पष्ट अनुमान प्रदान करते हैं।</li>
  <li>हम सकारात्मक समुदाय संबोधन और सार्वजनिक जागरूकता कार्यक्रमों में भाग लेते हैं।</li>
</ul>
      </div>

      {/* Right side review form */}
      <div className="md:col-span-2 shadow-xl px-5 md:px-10 py-5">
      <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-3 text-center">
          Book Ambulence Now
          </h2>
          <div className='mb-5'>
            <p className='mb-2 text-[#17324A] text-xl'>Patient Name</p>
            <input className='border border-gray-300 rounded-lg p-3 outline-none w-full bg-white' placeholder='Patient Name / रोगी का नाम' type="text" name="" id="" />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center mb-5'>
          <div className=''>
            <p className='mb-2 text-[#17324A] text-xl'>Age</p>
            <input className='border border-gray-300 rounded-lg p-3 outline-none w-full bg-white' placeholder='Patient age / रोगी की आयु' type="text" name="" id="" />
          </div>

          <div>
            <p className='mb-2 text-[#17324A] text-xl'>Gender</p>
            <select
          name="priority"
          className='border border-gray-300 rounded-lg p-3 outline-none w-full bg-white'
        >
          <option disabled selected>
            Select
          </option>
          <option value="low">Male</option>
          <option value="moderate">Female</option>
        </select>
          </div>
          </div>

          <div className='mb-5'>
            <p className='mb-2 text-[#17324A] text-xl'>Pickup Location</p>
            <input className='border border-gray-300 rounded-lg p-3 outline-none w-full bg-white' placeholder='Write address or choose on map' type="text" name="" id="" />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center mb-5'>
          <div className=''>
            <p className='mb-2 text-[#17324A] text-xl'>Date</p>
            <input className='border border-gray-300 rounded-lg p-3 outline-none w-full bg-white' placeholder='तिथि चुनें/20/2/2024' type="date" name="" id="" />
          </div>

          <div className=''>
            <p className='mb-2 text-[#17324A] text-xl'>Time</p>
            <input className='border border-gray-300 rounded-lg p-3 outline-none w-full bg-white' placeholder='12:00' type="time" name="" id="" />
          </div>
          </div>

          <div className=''>
            <p className='mb-2 text-[#17324A] text-xl'>Any specific medical conditions/allergies</p>
            <textarea className='border border-gray-300 rounded-lg p-3 outline-none w-full bg-white' placeholder='किसी विशिष्ट चिकित्सा स्थिति/एलर्जी' name="" id="" cols="30" rows="5"></textarea>
          </div>


        </div>


          <div className="flex flex-col justify-center items-center gap-5">
            <button className="w-80 bg-[#00A0AA] p-4 rounded-md text-white mb-20">
            Submit
          </button>
          </div>
      </div>
      </div>
      <Officeaddress></Officeaddress>
      <Footer></Footer>
        </div>
    );
};

export default AmbulanceBookingForm;