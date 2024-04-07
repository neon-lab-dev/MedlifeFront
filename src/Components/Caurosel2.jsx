import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiSolidUserPin } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { IoBagAdd } from "react-icons/io5";


const Caurosel2 = () => {
    return (
        <div>
            <Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
                <div className="bg-red-600 w-56 h-40">
                    hello
                </div>
                <div className="bg-red-600 w-56 h-40">
                    hello
                </div>
                <div className="bg-red-600 w-56 h-40">
                    hello
                </div>
                <div className="bg-red-600 w-56 h-40">
                    hello
                </div>
                <div className="bg-red-600 w-56 h-40">
                    hello
                </div>
                <div className="bg-red-600 w-56 h-40">
                    hello
                </div>
               
                {/* <div className="dd-card">
                <div className="dd-top">
                  <div className="dd-top-left mr-2">
                    <img src="../Assests/404.png" alt="ddrc" />
                  </div>
                  <div className="dd-top-right">
                    <div className="dd-top-head">Rahul</div>
                    <div className="dd-top-text">
                      {" "}
                      MBBS, MS-{" "}
                      <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                        Hernia
                      </b>
                    </div>
                    <div className="dd-top-sub-head"> Specialization</div>
                    <div className="dd-top-sp-cont">
                      <div className="dd-top-sp text-base">
                        Hello
                      </div>
                      <div className="dd-top-sp">Hello</div>
                      <div className="dd-top-sp">Hello</div>
                    </div>
                    <div className="dd-top-stats-cont">
                      <div className="dd-top-stats">
                      <IoBagAdd></IoBagAdd>
                        45
                      </div>
                      <div className="dd-top-stats">
                      <BiSolidUserPin></BiSolidUserPin>
                        2k
                      </div>
                      <div className="dd-top-stats">
                      <HiLocationMarker></HiLocationMarker>         Hello
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dd-btm">
                  <div className="dd-call">Call now +98 765 432 10</div>
                  <div className="dd-book">Book Appointment</div>
                </div>
              </div> */}
</Carousel>
        </div>
    );
};

export default Caurosel2;