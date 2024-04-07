import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga';

const RefundPolicy = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
    return (
        <div>
          <Helmet>
        <title>Medlife Easy | Refund Policy</title>
      </Helmet>
            <Navbar></Navbar>
      {/* Breadcrumbs menu */}
<div className='flex items-center flex-col mt-2 mb-10'>
<div className="text-sm breadcrumbs w-[89.5%]">
        <ul>
          <li>
          <Link to={"/"}>Home</Link>
          </li>
          <li>
          Refund Policy 
          </li>
        </ul>
      </div>


            <div className='w-[95%] lg:w-4/5'>
            <div className="">
        <h1 className="text-4xl font-semibold font-lato text-gray-700 text-center mb-4">
        Refund Policy
        </h1>
        <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>
        </div>

        <div className=''>
         {/* Refund & Cancellation Policy Section */}
         <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
              Refund & Cancellation Policy
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              In the event that, the Practitioner with whom User has booked a paid appointment via the Website, has not been able to meet the User, User will need to write to us at info@medlifeeasy.com within 5 days from the occurrence of such event; in which case, the entire consultation amount will be refunded to the User within the next 7 business days in the original mode of payment done by the User while booking. In case where the User, does not show up for the appointment booked with a Practitioner, without cancelling the appointment beforehand, the amount will not be refunded. However, where cancellation charges have been levied (as charged by the Practitioner/Practice), you would not be entitled to complete refund even if you have cancelled beforehand. <br />
Users will not be entitled for any refunds in cases where, the Practitioner is unable to meet the User at the exact time of the scheduled appointment time and the User is required to wait, irrespective of the fact whether the User is required to wait or choose to not obtain the medical services from the said Practitioner.
              </p>
          </div>


         {/* License Disclaimer */}
         <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
              License Disclaimer
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              All information on www.medlifeeasy.com has been compiled from the respective websites available in the public domain. While every possible care has been taken while creating and compiling the contents and materials, MEDLIFEEASY does not take any responsibility for the genuineness and authenticity of the contents and materials that provided. Users are advised to check the original (source) websites in case of any doubts. We (MEDLIFEEASY) keep updating the contents/material on its website on regular intervals to ensure high quality. <br />

Nothing on any MEDLIFEEASY's website shall be construed as conferring any license under any of MEDLIFEEASY's or any third party's intellectual property rights, whether by estoppels, implication, or otherwise. <br />

Content/Materials and Liability MEDLIFEEASY shall not be responsible for any errors or an omission contained on MEDLIFEEASY's website and reserves the right to make changes anytime without notice. Mention of MEDLIFEEASY products or services is provided for informational purposes only and constitutes neither an endorsement nor a recommendation by us. All our and third-party information is available on TCG's is provided on an “as is” basis. Views expressed by the Users are made of their free volition; We do not endorse the same. No claim as to the accuracy and correctness of the information on the site is made although every attempt is made to ensure that the content is not misleading. In case any inaccuracy is, or otherwise improper content is sighted on the website, please report it to report abuse or write us to info@medlifeeasy.com.
              </p>
          </div>


         {/* Disclaimer of warranty */}
         <div className="">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
              Disclaimer of warranty
              </h2>
              <p className=" font-lato text-gray-600 text-justify mb-2">
              MEDLIFEEASY expressly disclaims warranties of any kind for any use of or any access to www.medlifeeasy.com, to any material, information, links, or content presented on the website www.medlifeeasy.com to any external website linked thereto, and to any external material, information, links, or content linked thereto including but not limited to opinion, expert opinions placed by any users/guests that does not reflect MEDLIFEEASY point of view. Neither MEDLIFEEASY or its affiliates, nor any third-party content providers or licensors make any warranty whatsoever, including without limitation, that the operation of the website will be uninterrupted or error-free; including the server that makes it available, is free from viruses or other harmful components; as to the results that may be obtained from the use of the content or other materials on the website; or as to the accuracy, completeness, reliability, availability, suitability, quality, non-infringement or operation of any content, product or service provided on or accessible from the site. <br />

Content/Materials and Liability MEDLIFEEASY shall not be responsible for any errors or an omission contained on MEDLIFEEASY's website and reserves the right to make changes anytime without notice. Mention of MEDLIFEEASY products or services is provided for informational purposes only and constitutes neither an endorsement nor a recommendation by us. All our and third-party information is available on MEDLIFEEASY's is provided on an “as is” basis. Views expressed by the Users are made of their free volition; We do not endorse the same. No claim as to the accuracy and correctness of the information on the site is made although every attempt is made to ensure that the content is not misleading. In case any inaccuracy is, or otherwise improper content is sighted on the website, please report it to report abuse or write us to info@medlifeeasy.com. <br />

MEDLIFEEASY reserves the right without prior notice to access, read preserve and/or disclose the personal information of the User including the contents, materials if the same is required:
              </p>
              <li className=" font-lato text-gray-600 text-justify list-disc">In order to comply with any court judgment/decree/order/directive</li>
<li className=" font-lato text-gray-600 text-justify list-disc">By any legal/government authority</li>
<li className=" font-lato text-gray-600 text-justify list-disc">By applicable law</li>
<li className=" font-lato text-gray-600 text-justify list-disc">By professional/legal advisers, directors, employees/agents/representatives of MEDLIFEEASY in connection with these terms or otherwise</li>
<li className=" font-lato text-gray-600 text-justify list-disc">For investigating potential violations of the terms herein or applicable national & international laws</li>
<li className=" font-lato text-gray-600 text-justify list-disc">For investigating deliberate damage to the services or its legitimate operation</li>
<li className=" font-lato text-gray-600 text-justify list-disc">For responding to service support requests, or</li>
<li className=" font-lato text-gray-600 text-justify list-disc">For protecting the rights, property, or safety of MEDLIFEEASY and/or its Directors, employees, and the public at large.</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Use of Website, The User represents warrants and covenants that his/her use of the website shall not:</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Violate any applicable local, provincial, state, national or international law, statute, ordinance, rule, or regulation</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Interfere with or disrupt computer networks connected to the website</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Impersonate any other person or entity or make any misrepresentation as to his/her association with any other person or entity</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Upload, post, transmit, publish, or distribute any material or information for which he/she does not have all necessary rights and licenses</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Upload, post, transmit, publish, or distribute any material which infringes, violates, breaches or otherwise contravenes the rights of any third party, including any copyright, trademark, patent, rights of privacy or publicity or any other proprietary right.</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Interfere with or disrupt the use of the website by any other user, nor “stalk”, threaten, or in any manner harass another user</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Upload, post, transmit, publish, or distribute any material or information which contains a computer virus, or other code, files or programs intending in any manner to disrupt or interfere with the functioning of the Website, or that of other computer systems.</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Use the website in such a manner as to gain unauthorized entry or access to the computer systems of others.</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Upload, post, transmit, publish, or distribute any material or information which constitutes or encourages conduct that would constitute a criminal offence, give rise to other liability, or otherwise violate applicable law.</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Upload, post, transmit, publish, or distribute any material or information that is unlawful, or which may potentially be perceived as being harmful, threatening, abusive, harassing, defamatory, libelous, vulgar, obscene, or racially, ethnically, or otherwise objectionable.</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Reproduce, copy, modify, sell, store, distribute or otherwise exploit for any commercial purposes the website, or any component thereof (including, but not limited to any materials or information accessible through the website)</li>
<li className=" font-lato text-gray-600 text-justify list-disc">Use any device, software, or routine to interfere or attempt to interfere with the proper working of the website; or</li>
<li className=" font-lato text-gray-600 text-justify list-disc mb-2">Take any action that imposes an unreasonable or disproportionately large load on the website infrastructure</li>

<p className=" font-lato text-gray-600 text-justify">
THIS WEBSITE AND ALL CONTENT, PRODUCTS AND SERVICES INCLUDED IN OR ACCESSIBLE FROM THIS WEBSITE ARE PROVIDED “AS IS” AND WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND (EXPRESS, IMPLIED AND STATUTORY, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF TITLE AND NON-INFRINGEMENT AND THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE), ALL OF WHICH FEVL DISCLAIMS TO THE FULLEST EXTENT PERMITTED BY LAW. YOUR USE OF THE SITE IS AT YOUR OWN RISK.
              </p>

          </div>
            </div>
            </div>
</div>

            <Footer></Footer>
        </div>
    );
};

export default RefundPolicy;