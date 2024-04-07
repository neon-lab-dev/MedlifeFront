import React, { useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";
import ReactGA from 'react-ga';

const PrivacyPolicy = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  return (
    <div>
      <Helmet>
        <title>Medlife Easy | Privacy Policy</title>
      </Helmet>
        <Navbar></Navbar>
      <div className="flex items-center flex-col mt-2 mb-10">
        {/* Breadcrumbs menu */}
        <div className="text-sm breadcrumbs w-[89.5%]">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="w-[95%] lg:w-4/5">
          <div className="">
            <h1 className="text-4xl font-semibold font-lato text-gray-700 text-center mb-4">
              Privacy Policy
            </h1>
            <div className="bg-[#E3E3E3] w-full h-0.5 mb-8"></div>

            <p className="text-gray-700 font-lato mb-5">
            This privacy policy governs your use of the website, Web Application & MEDLIFEEASY App("Application") for web & mobile devices.
            </p>
          </div>

          <div className="">
            {/* What information does the Application obtain and how is it used? User Provided Information Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                1. What information does the Application obtain and how is it used? User Provided Information
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              The Application obtains the information you provide when you download and register the Application. Registration with us is optional. However, please keep in mind that you may not be able to use some of the features offered by the Application unless you register with us. <br />

When you register with us and use the Application, you generally provide (a) your name, email address, age, user name, password and other registration information; (b) transaction-related information, such as when you make purchases, respond to any offers, or download or use applications from us; (c) information you provide us when you contact us for help; (d) credit card information for purchase and use of the Application, and; (e) information you enter into our system when using the Application, such as contact information and project management information. <br />

We may also use the information you provided us to contact your from time to time to provide you with important information, required notices and marketing promotions.
              </p>import ReactGA from 'react-ga';

            </div>

            {/* Automatically Collected Information Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                2. Automatically Collected Information
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.
              </p>
            </div>

            {/* Does the Application collect precise real time location information of the device? Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                3. Does the Application collect precise real time location information of the device?
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              This Application does not collect precise information about the location of your mobile device.
              </p>
            </div>

            {/* Do third parties see and/or have access to information obtained by the Application? Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                4. Do third parties see and/or have access to information obtained by the Application?
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.
              </p>
            </div>

            {/* We may disclose User Provided and Automatically Collected Information: Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                We may disclose User Provided and Automatically Collected Information:
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              Only aggregated, anonymized data is periodically transmitted to external services to help us improve the Application and our service. We will share your information with third parties only in the ways that are described in this privacy statement.
              </p>
              <ul className="text-gray-700 text-justify list-disc pl-5">
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
</li>
                <li>with our trusted services providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                <li>If MedLife Ealsy Pvt. Ltd is involved in a merger, acquisition, or sale of all or a portion of its assets, you will be notified via email and/or a prominent notice on our Web site of any change in ownership or uses of this information, as well as any choices you may have regarding this information.</li>
              </ul>
            </div>

            {/* What are my opt-out rights? Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                5. What are my opt-out rights?
              </h2>
              <p className="text-gray-700">You can stop all collection of information by the Application easily by uninstalling the Application. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network. You can also request to opt-out via email, at info@medlifeeasy.com.</p>
            </div>

            {/* Data Retention Policy, Managing Your Information Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                6. Data Retention Policy, Managing Your Information
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              We will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. We will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at info@medlifeeasy.com and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly.
              </p>
            </div>

            {/* Children Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                7. Children
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              We do not use the Application to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at info@medlifeeasy.com. We will delete such information from our files within a reasonable time.
              </p>
            </div>

            {/* Security Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                8. Security
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop or improve our Application. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.
              </p>
            </div>

            {/* Changes Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                9. Changes
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy here and informing you via email or text message. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes. You can check the history of this policy by clicking here.
              </p>
            </div>

            {/* Your Consent Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                10. Your Consent
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. "Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, all of which activities will take place in the United States. If you reside outside the United States your information will be transferred, processed and stored there under United States privacy standards.
              </p>
            </div>

            {/* Contact us Section */}
            <div className="mb-9">
              <h2 className="text-2xl font-medium text-gray-700 mb-2">
                11. Contact us
              </h2>
              <p className=" font-lato text-gray-600 text-justify">
              If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at info@medlifeeasy.com
              </p>
            </div>


          </div>
        </div>

      </div>
        <Footer></Footer>
    </div>
  );
};

export default PrivacyPolicy;
