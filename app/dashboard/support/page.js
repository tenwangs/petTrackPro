import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Page = () => {
  return (
    <main className="relative flex justify-center items-center min-h-screen">
      <div className="w-full max-w-screen-lg p-4 ml-96 mb-44">
        <h1 className="text-center p-4 text-4xl mb-5 font-extrabold text-[#5A92B1]">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <div className="collapse collapse-arrow border bord ">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title bg-[#5A92B1]/80 text-l text-[#3C3C3C] text-l font-bold ">
                Will it work if I am far away from my Pets?
              </div>
              <div className="collapse-content ">
                <p className="text-sm text-[#3C3C3C]">
                  yes, Yourpet track provides unlimited coverage
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow border bord mt-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-l  text-[#282835] text-l font-bold">
                How much does it weigh?
              </div>
              <div className="collapse-content ">
                <p className="text-sm text-gray-600">It weighs 300g</p>
              </div>
            </div>

            <div className="collapse collapse-arrow border bord mt-4 mb-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-l  text-[#282835] text-l font-bold">
                Do I need subscription?
              </div>
              <div className="collapse-content ">
                <p className="text-sm text-gray-600">
                  You can avail the subscription service for better performance
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow border bord mt-4 mb-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-l text-[#282835] text-l font-bold">
                What is the battery life?
              </div>
              <div className="collapse-content ">
                <p className="text-sm text-gray-600">
                  Battery can last up to 2 days{" "}
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow border bord mt-4 mb-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-l text-[#282835] text-l font-bold">
                Is there a discount for multiple purchases?
              </div>
              <div className="collapse-content">
                <p className="text-sm text-gray-600">
                  Yeah, you can get upto 70% off for more than two products{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly  items-center bottom-0 left-0 w-full bg-[#5A92B1]/80 p-8 rounded-3xl">
          <div className="max-w-screen-lg mx-auto gap-x-3">
            <h2 className="text-[#fff] text-2xl font-semibold mb-4 text-center">
              Contact Us
            </h2>
            <div className="flex items-center space-x-4 gap-3">
            <div className="flex flex-col justify-center items-center gap-3 bg-white p-5 rounded-xl shadow-md h-[180px] min-w-[200px] group hover:bg-[#5a92b1] transition-all ease-in-out delay-150">

                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-12 h-12 group-hover:text-white"
                  color="#5A92B1"
                />
                <div className="flex flex-col">
                  <span className="text-[#1579B1] group-hover:text-white">Address</span>
                  <span className="text-[#1579B1] group-hover:text-white">CST</span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 bg-white p-5 rounded-xl shadow-md h-[180px] min-w-[200px]  group hover:bg-[#5a92b1] transition-all ease-in-out delay-150">



                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-12 h-12 group-hover:text-white"
                  color="#5A92B1"
                />
                <div className="flex flex-col">
                  <span className="text-[#1579B1] group-hover:text-white">Email</span>
                  <span className="text-[#1579B1] group-hover:text-white">Pettrack@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-3 bg-white p-5 rounded-xl shadow-md h-[180px] min-w-[200px] group hover:bg-[#5a92b1] transition-all ease-in-out delay-150">


                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-12 h-12 group-hover:text-white"
                  color="#5A92B1"
                />
                <div className="flex flex-col ">
                  <span className="text-[#1579B1] group-hover:text-white">Phone</span>
                  <span className="text-[#1579B1] group-hover:text-white">+975 17355266</span>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
