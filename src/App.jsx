import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogsDetails from "./Components/Blogs/BlogsDetails";
import BlogsPage from "./Components/Blogs/BlogsPage";
import HerniaPage from "./Components/DiseasePages/AllDiseasePages/HerniaPage";
import DoctorsDetails from "./Components/DoctorsPage/DoctorsDetails/DoctorsDetails";
import DoctorsPage from "./Components/DoctorsPage/DoctorsPage";
import AboutUs from "./Components/FooterPages/AboutUs";
import ContactUs from "./Components/FooterPages/ContactUs";
import Partner from "./Components/FooterPages/Partner";
import Payments from "./Components/FooterPages/Payments";
import PrivacyPolicy from "./Components/FooterPages/PrivacyPolicy";
import RefundPolicy from "./Components/FooterPages/RefundPolicy";
import TermsConditions from "./Components/FooterPages/TermsConditions";
import HospitalDetails from "./Components/Hospitals/HospitalDetails";
import HospitalsPage from "./Components/Hospitals/HospitalsPage";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";
import ReviewPage from "./Components/Review/ReviewPage";
import WriteReview from "./Components/Review/WriteReview/WriteReview";
import BookAmbulance from "./Components/Services/BookAmbulance";
import EmergencyService from "./Components/Services/EmergencyService/EmergencyService";
import DiseasePage from "./Pages/DiseasePage";
import Landingpage from "./Pages/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ServiceUnavailable from "./Components/ServiceUnavailable/ServiceUnavailable";
import { HelmetProvider } from "react-helmet-async";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Caurosel from "./Components/Caurosel";
import Caurosel2 from "./Components/Caurosel2";
import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import FormProvider from "./Components/Provider/FormProvider";
import ReactGA from "react-ga";
ReactGA.initialize("G-ZH1TFBC5PG");

const queryClient = new QueryClient();
function App() {
  return (
    <Router>
      <HelmetProvider>
        <FormProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/">
                <Route path="" element={<Landingpage />} />
                <Route path=":disease" element={<DiseasePage />} />
                <Route path="treatment/:subDisease" element={<HerniaPage />} />
                <Route path="modal" element={<Modal />} />
                <Route path="review" element={<ReviewPage />} />
                <Route path="writeReview" element={<WriteReview />} />
                <Route path="bookAmbulance" element={<BookAmbulance />} />
                <Route path="emergencyService" element={<EmergencyService />} />
                <Route path="doctors" element={<DoctorsPage />} />
                <Route path="doctorsDetails/:id" element={<DoctorsDetails />} />
                <Route path="blogs" element={<BlogsPage />} />
                <Route path="blogsDetails/:id" element={<BlogsDetails />} />
                <Route path="hospitals" element={<HospitalsPage />} />
                <Route path="hospitalDetails" element={<HospitalDetails />} />

                {/* Footer pages */}
                <Route path="aboutUs" element={<AboutUs />} />
                <Route path="refundPolicy" element={<RefundPolicy />} />
                <Route path="privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="termsConditions" element={<TermsConditions />} />
                <Route path="contactUs" element={<ContactUs />} />
                <Route path="partner" element={<Partner />} />
                <Route path="payments" element={<Payments />} />

                {/* Service unavailable page */}
                <Route
                  path="serviceUnavailable"
                  element={<ServiceUnavailable />}
                />
                <Route path="caurosel" element={<Caurosel />} />
                <Route path="caurosel2" element={<Caurosel2 />} />

                {/* Error page */}
                <Route path="error" element={<ErrorPage />} />
                {/* Error page */}
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </FormProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
