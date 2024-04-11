import hospital from "../../Assests/hospital.png";
import orchid from "../../Assests/hospitals/orchid.png";
import cisro from "../../Assests/hospitals/cisro.jpg";
import harrison from "../../Assests/hospitals/harrison-hospital.jpg";
import mediversal from "../../Assests/hospitals/mediversal.jpg";
import shriSai from "../../Assests/hospitals/shri-sai-hospital.jpg";

import { FaLocationDot } from "react-icons/fa6";

const OurHospitals = () => {

  const hospitalsDetails = [
    {
      id: 1,
      hospitalName: "The Orchid Hospital",
      img: orchid,
      details: "The Orchid Hospital is the first multi super specialty hospital in Patna, Bihar, India, which has taken an initiative to amalgamate and integrate the best in healthcare be it manpower or technology. this hospital has been set up with the vision of providing quality healthcare at affordable cost and within the reach of every individual."
    },
    {
      id: 2,
      hospitalName: "CISRO",
      img: cisro,
      details: "Located in the heart of Patna, CISRO is a super-specialty hospital, dedicated to Ortho, Spine, Neuro, and Rehabilitation. The hospital is equipped with state-of-the-art technologies and several latest equipment which make it a powerhouse of healthcare in Bihar."
    },
    {
      id: 3,
      hospitalName: "Mediversal Group",
      img: mediversal,
      details: "Mediversal Group is led by a team of Healthcare Experts, Management Professionals, Technologists, highly experienced Doctors and Nurses. We are aiming to build a chain of Hospitals and Health Centres in selected Tier 1, Tier 2 and Tier 3 cities and Towns of India where healthcare service is still largely unfulfilled."
    },
    {
      id: 4,
      hospitalName: "Cardiology",
      img: orchid,
      details: "Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvar heart disease and electrophysiology."
    },
    {
      id: 5,
      hospitalName: "Shri Sai Multi Speciality Hospital",
      img: shriSai,
      details: "Shri Sai Multi Speciality Hospital is one of the stand-alone private sector hospitals in Patna and the range of services offered at SSH makes Hospital a force to reckon with in the field of Super Speciality Tertiary Healthcare."
    },
    {
      id: 6,
      hospitalName: "Harrison Multispecialty Hospital",
      img: harrison,
      details: "Harrison Multispecialty Hospital in the city of Patna with 24 hours ICU, Trauma, Dialysis, X - Ray and pathology facilities. DELUXE and VIP rooms available. Advanced Laparoscopic surgeries done here. BEST Facilities of NEUROSURGERY, MEDICINE, UROLOGY, GENERAL SURGERY, ONCOLOGY, CRITICAL CARE, NEPHROLOGY and many more."
    },
    {
      id: 7,
      hospitalName: "Dr Prabhat memorial hiramati hospital",
      img: "prabhat_hospital_image_url",
      details: "Lead by the vision of Late. Dr. Prabhat Kumar of establishing state of the art treatment facility in Bihar. Dr Prabhat memorial hiramati hospital initiated by Alumni of AIIMS, New Delhi is a boon for patients seeking medical help. The hospital is committed to provide the highest possible standard of care and treatment in a professional and compassionate manner to every person."
    },
    {
      id: 8,
      hospitalName: "HDNA Aarogyam Hospital",
      img: "hdna_hospital_image_url",
      details: "This hospital is a Centre of excellence for Heart, Kidney & Neuro Diseases. Bihar's first AI enabled Cath Lab for Angiography, Angioplasty, Pace Maker Implant as well as Cardiac & Bypass surgeries in our Cardio Thoracic & Vascular Surgery Department. A state of art Department of Renal Sciences caters to Chronic Kidney diseases. Kidney transplant, kidney biopsy & 24 hours Dialysis. Our Centre of excellence for Neuro diseases is led by renowned Neurologists & Neuro surgeons for all spinal, brain & neuro diseases. Our other major departments include General & Orthopedic surgery, Internal Medicine, Pediatrics, Pediatric Cardiology & Nephrology, Endocrinology, ENT & other specialties."
    },
    {
      id: 9,
      hospitalName: "Sahyog Hospital",
      img: "sahyog_hospital_image_url",
      details: "Sahyog Hospital is one of the oldest 100 bedded multi-speciality hospital of Patna. It provides comprehensive medical care to the patients from Bihar, Assam, Jharkhand, West Bengal and Uttar Pradesh. The hospital is designed to deliver high quality inpatient and outpatient medical, surgical, post-surgical care and dental care in more than 30 medical, surgical and dental specialties including all emergencies. The hospital is supported by well equipped in house radiology, laboratory departments and dialysis unit. We have assembled a team of highly trained and experienced consultants across the discipline of medicine and surgery."
    },
    {
      id: 10,
      hospitalName: "Niramayah Hospital",
      img: "niramayah_hospital_image_url",
      details: "Niramayah Hospital: a modern institution with state of the art medical equipment and facilities, having experienced and qualified Doctors with properly trained staff, well equipped for diagnosing numerous ailments; having facilities for managing both medical and surgical diseases; taking care of the sick and injured patients; well furnished and equipped rooms for in-patients. Niramayah Hospital offers facilities for multiple investigations."
    },
    {
      id: 11,
      hospitalName: "Saroj Multi speciality Centre",
      img: "saroj_hospital_image_url",
      details: "Saroj Multi speciality Centre is one of the top multispeciality hospitals in Patna Bihar. We have the most qualified team of doctors, Urologist, Gynecologists, neurologists, and surgeons, well-esteemed in Patna for being excellent at their medical practices and providing various healthcare professional services. Today, we are one of the best private hospitals in Patna with remarkable healthcare facilities, along with the use of the absolute best and latest technology, medical equipment for ideal treatment at our hospital. There is a fully equipped diagnostic center OPD and IPD, Ambulance, Critical Care- ICU, and a pharmacy."
    },
    {
      id: 12,
      hospitalName: "Drishtipunj Eye Hospital Pvt Ltd.",
      img: "drishtipunj_hospital_image_url",
      details: "Drishtipunj Eye Hospital Pvt Ltd. was founded in year 2020 by Dr Satya Prakash Tiwary and Dr Bandana Tiwary. This hospital is equipped with world class, imported instruments for the treatment of simple and complex disorders of eye. It has a world class operation theater complex and centrally air conditioned OPD, Investigation and waiting area. It has a panel of highly qualified group of doctors from best institutes of India , to treat the most complex disorders of the eye. This hospital aims to treat all eye disorders with highest quality at very affordable price."
    },
    {
      id: 13,
      hospitalName: "Women's Hospital & Fertility Research Centre(WHFRC)",
      img: "whfrc_hospital_image_url",
      details: "Women’s Hospital & Fertility Research Centre(WHFRC) is a promising tertiary level centre for women’s health care in the city, WHFRC is an excellent place to begin the journey to safe and secure Parenthood. We promote and practice high quality and evidence based medicine. We are committed to enhancing the quality of life of our patients by providing high eminence, cost efficient, multi-disciplinary medical services, delivered with a personal touch."
    },
    {
      id: 14,
      hospitalName: "World Class IVF and Gynae Aesthetics centre By Dr. Khushboo.",
      img: "dr_khushboo_hospital_image_url",
      details: "World Class IVF and Gynae Aesthetics centre By Dr. Khushboo. - MBBS(Gold Medalist), MS(Obgyn) Kolkata(Gold Medalist), Ex SR-AIIMS, Diploma in ART(Germany) Services Provided - Fertility Treatment, Cyst Laparoscopy, IVF-ICSI, Blastocyst, Hysteroscopy, PRP Therapy, Vaginal Rejuvenation, Laser Therapy, Donor Egg, Donor sperm Services, Hysteroscopic Septa Removal, Surrogacy Services."
    },
    {
      id: 15,
      hospitalName: "Bihar Burn Hospital",
      img: "bihar_burn_hospital_image_url",
      details: "Bihar Burn Hospital is dedicated to the treatment of burn injuries."
    }
  ];
  
  return (
    <div className="py-7 w-full flex flex-col items-center">
      <div className="w-[95%] md:w-[90%]">
        {/* Headline */}
        <h1 className="text-gray-700 text-4xl font-semibold text-center mb-10">
          Our Hospital Partners
        </h1>

        {/* Hospital cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">

          {
            hospitalsDetails.map(detail => 
              <div key={detail.id} className="shadow-lg rounded-lg flex flex-col">
              <div className="relative">
                <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                  {/* Logo */}
                  <img className="w-32" src={detail.img} alt="" />
                </div>
                {/* Main img */}
                <img className="w-full rounded-t-lg" src={hospital} alt="" />
              </div>
  
              <div className="px-4 h-full flex flex-col items-start py-2 gap-1 justify-between">
                <h1 className="text-gray-600 text-xl font-bold font-lato w-full">
                  {detail.hospitalName}
                  
                </h1>
  
                <p className="text-gray-500 text-justify flex gap-2 font-lato">
                  
                  {detail.details.length > 170 ? (
                    <>
                    <FaLocationDot className="text-3xl" />
                      {detail.details.slice(0,170)}{" "}...
                    </>
                  ) : (
                    <>
                    <FaLocationDot className="text-sm" />
                     {detail.details}
                    </>
                  )}
                </p>
  
                <button
                  onClick={() =>
                    document.getElementById(detail.id).showModal()
                  }
                  className="bg-gray-200 rounded-lg p-3 font-semibold text-purple-800 mt-2"
                >
                  View Hospital
                </button>
  
                <dialog id={detail.id} className="modal">
                  <div className="modal-box p-0 max-w-3xl bg-white">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10">
                        ✕
                      </button>
                    </form>
                    <div className="relative">
                      <div className="bg-white absolute top-0 left-0 px-4 py-1 rounded-r-lg">
                        <img className="w-32" src={detail.img} alt="" />
                      </div>
                      <img
                        className="w-full h-96 mb-3 rounded-t-lg"
                        src={hospital}
                        alt=""
                      />
                    </div>
                    <div className="px-3">
                      <h1 className="text-gray-600 text-xl font-bold mb-1 font-lato">
                      {detail.hospitalName}
                      </h1>
                      <p className="text-gray-600 mb-3 text-justify font-lato">
                      {detail.details}
                      </p>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default OurHospitals;
