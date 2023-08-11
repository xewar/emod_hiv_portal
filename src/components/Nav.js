import Link from "next/link";
import Africa from "./Africa";
import { useState } from "react";

const Nav = ({ current, setCurrent }) => {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const handleMenuMouseEnter = (event) => {
    const country = event.target.id;
    setHoveredCountry(country);
  };

  const handleMenuMouseLeave = () => {
    setHoveredCountry(null);
  };

  return (
    <div className=" flex flex-row md:flex-col justify-between gap-2  md:w-1/2 ">
      <Link
        className="siteTitle  pt-8 pl-6 text-3xl font-medium "
        href="/"
        onClick={() => setCurrent("about")}
      >
        EMOD HIV Model
      </Link>
      <div className="mapContainer hidden md:flex  mt-4 ">
        <Africa
          setCurrent={setCurrent}
          hoveredCountry={hoveredCountry}
          setHoveredCountry={setHoveredCountry}
        />
      </div>
      <div className="countryLinks p-6 flex flex-col w-36 gap-3 md:sticky bottom-0 top-16 md:-mt-48 ">
        <div
          className={` countryButton ${
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
          className={` countryButton ${
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
          className={` countryButton ${
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
          className={` countryButton ${
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
          className={` countryButton ${
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
          className={` countryButton ${
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
