import Link from "next/link";
import Africa from "./Africa";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Nav = ({ current, setCurrent }) => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const handleMenuMouseEnter = (event) => {
    const country = event.target.id;
    setHoveredCountry(country);
  };

  const handleMenuMouseLeave = () => {
    setHoveredCountry(null);
  };
  //this is a way to grow and shrink the nav bar as you move from the country page to the about page
  useEffect(() => {
    current === "about" ? setCollapsed(false) : setCollapsed(true);
  }, [current]);

  const CountrySVG = dynamic(
    () => import(`./countryMaps/${current.replace(/\s+/g, "")}.js`),
    {
      ssr: false,
    }
  );
  return (
    <div
      className={`flex  flex-row md:flex-col  gap-2 self-stretch ${
        collapsed
          ? " md:w-56  justify-between"
          : "md:w-[45vw] justify-start md:ml-4 mt-2"
      }`}
    >
      <div className={`titleAndCountryMap ${collapsed ? "" : ""}`}>
        <Link
          className={`siteTitle p-6 flex flex-col  font-semibold   ${
            collapsed ? "hover:bg-slate-100 text-3xl" : "text-5xl"
          }`}
          href="/"
          onClick={() => setCurrent("about")}
        >
          EMOD-HIV: Data Portal
        </Link>
        {collapsed && (
          <div className="svgContainer p-6 pt-12">
            <CountrySVG
              strokeClassName="stroke-slate-500 stroke-6"
              fillClassName="fill-blue-50"
              strokeWidth="6"
            />
          </div>
        )}
      </div>
      <div
        className={`mapContainer hidden flex-1  flex-col mt-4 ${
          collapsed ? `md:hidden ` : "md:flex "
        }`}
      >
        <Africa
          setCurrent={setCurrent}
          hoveredCountry={hoveredCountry}
          setHoveredCountry={setHoveredCountry}
        />
      </div>

      <div
        className={`countryLinks p-6 flex flex-col md:sticky bottom-0 top-16 md:-mt-48 gap-3 ${
          collapsed ? "items-center justify-center" : "w-44 "
        }
        `}
      >
        <div
          className={` countryButton  ${collapsed ? "w-full" : "w-40"} ${
            hoveredCountry === "eSwatini" ? `countryHighlight ` : ""
          }`}
          onClick={() => setCurrent("eSwatini")}
          id="eSwatini"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          eSwatini
        </div>
        <div
          className={` countryButton ${collapsed ? "w-full" : "w-40"} ${
            hoveredCountry === "Kenya" ? `countryHighlight` : ""
          }`}
          onClick={() => setCurrent("Kenya")}
          id="Kenya"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          Kenya
        </div>
        <div
          className={` countryButton ${collapsed ? "w-full" : "w-40"} ${
            hoveredCountry === "Malawi" ? `countryHighlight` : ""
          }`}
          onClick={() => setCurrent("Malawi")}
          id="Malawi"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          Malawi
        </div>
        <div
          className={` countryButton ${collapsed ? "w-full" : "w-40"} ${
            hoveredCountry === "SouthAfrica" ? `countryHighlight` : ""
          }`}
          onClick={() => setCurrent("South Africa")}
          id="SouthAfrica"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          South Africa
        </div>
        <div
          className={` countryButton ${collapsed ? "w-full" : "w-40"} ${
            hoveredCountry === "Zambia" ? `countryHighlight` : ""
          }`}
          onClick={() => setCurrent("Zambia")}
          id="Zambia"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          Zambia
        </div>
        <div
          className={` countryButton ${collapsed ? "w-full" : "w-40"} ${
            hoveredCountry === "Zimbabwe" ? `countryHighlight` : ""
          }`}
          onClick={() => setCurrent("Zimbabwe")}
          id="Zimbabwe"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          Zimbabwe
        </div>
      </div>
    </div>
  );
};

export default Nav;
