// react
import React, { createContext, useState } from "react";
//pages
import Navbar from "./Components/Navbar";
// context
export const UserContext = createContext();
//i18n
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState({ theme: "light", lang: "eng" });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <div className={`hero flex gap-[127px] rounded-[52px] max-w-[1388px] ${user.theme == 'light'?"bg-[#EDF4FF]" : "bg-[#161616]"} mx-auto mt-6 py-[100px] px-[130px]`}>
          <div className="left max-w-[547px]">
            <h4 className="font-bold text-lg leading-6 text-[#676767] mb-5">
              {t("A SECURITY SOLUTION")}
            </h4>
            <h1 className={`font-black text-5xl leading-[62px] ${user.theme == 'light' ? "text-[#00085E]":"text-[#A1A9FF]"} mb-6`}>
              {t("Keep track of your loved ones in real time!")}
            </h1>
            <div className=" border-t-2 border-[#D6D6D6] pt-4 flex gap-7 mb-16">
              <img src="./assets/pin.svg" alt="pin" />
              <p className={`font-medium text-xl leading-7 ${user.theme == 'light' ? "text-[#00085E]":"text-[#878787]"}`}>
                {t(
                  "We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities."
                )}
              </p>
            </div>
            <h3 className={`font-extrabold text-4xl leading-[56px] mb-3 ${user.theme == 'light' ? "text-black":"text-[#FFFFFF]"}`}>
              {t("Join Our Waitlist!")}
            </h3>
            <p className={`font-medium text-xl leading-7 mb-8 ${user.theme == 'light' ? "text-[#00085E]":"text-[#878787]"}`}>
              {t("Be the first to get notified when the product is ready!")}
            </p>
            <div className={`flex bg-white rounded-full shadow-md overflow-hidden max-w-[527px] ${user.theme == 'light' ? "bg-white":"bg-[#0d0d0d]"}`}>
              <input
                type="email"
                placeholder={t("Your email address")}
                className={`px-4 py-1 bg-white w-full rounded-full ${user.theme == 'light' ? "text-white":"bg-[#0d0d0d]"} outline-none`}
              />
              <button className="bg-[#0B56E8] text-white px-6 py-1 rounded-full font-bold">
                {t("JOIN LIST!")}
              </button>
            </div>
          </div>
          <div className="right relative">
            <img className=" ml-96" src="./assets/Path.svg" alt="path" />
            <img src="./assets/phone.png" alt="phones" />
            <img src="./assets/Path.svg" alt="path" />
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
