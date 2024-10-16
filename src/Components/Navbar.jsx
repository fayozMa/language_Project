import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { user, setUser } = useContext(UserContext);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setUser({ ...user, theme: storedTheme });
    }
  }, []);

  const handleTheme = () => {
    const newTheme = user.theme === "light" ? "dark" : "light";
    setUser({ ...user, theme: newTheme });
    localStorage.setItem("theme", newTheme);
    toast.success(t('Theme changed'));
  };

  const handleChangeLanguage = (e) => {
    setLang(e.target.value);
    toast.success('Language changed')
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div
      className={`w-full shadow-[0px_1px_20px_0px_#0000001A] ${
        user.theme === "light"
          ? "bg-white text-black"
          : "bg-[#0D0D0D] text-white"
      }`}
    >
      <div className="mx-auto max-w-[1200px] py-8 flex items-center gap-20 px-4">
        <a href="/" className="font-bold text-3xl leading-9 tracking-wide">
          {t("YOUR LOGO")}
        </a>
        <div className="flex gap-7">
          <select
            className={`rounded ${
              user.theme === "light"
                ? "bg-white text-black"
                : "bg-[#0D0D0D] text-white"
            }`}
          >
            <option disabled selected className="font-medium text-xl">
              {t('Assets')}
            </option>
            <option className="font-medium text-xl">option 1</option>
            <option className="font-medium text-xl">option 2</option>
            <option className="font-medium text-xl">option 3</option>
          </select>
          <a className="font-medium text-xl" href="">
            {t('Creators')}
          </a>
          <a className="font-medium text-xl" href="">
            {t('Careers')}
          </a>
          <a className="font-medium text-xl" href="">
            {t('Go Pro')}
          </a>
        </div>
        <div className="flex gap-5">
          <select
            onChange={handleChangeLanguage}
            value={lang}
            className={`rounded ${
              user.theme === "light"
                ? "bg-white text-black"
                : "bg-[#0D0D0D] text-white"
            }`}
          >
            <option className="font-medium text-xl" disabled selected>
              Language
            </option>
            <option value="uz" className="font-medium text-xl">
              O'zb
            </option>
            <option value="ru" className="font-medium text-xl">
              Рус
            </option>
            <option value="en" className="font-medium text-xl">
              Eng
            </option>
          </select>
          <button onClick={handleTheme}>{t('Mode')}</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
