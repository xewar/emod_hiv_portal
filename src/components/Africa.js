import { useState } from "react";

function Africa({ setCurrent, hoveredCountry, setHoveredCountry }) {
  const handleCountryMouseEnter = (event) => {
    const countryName = event.target.getAttribute("data-name");
    console.log(hoveredCountry, countryName);

    setHoveredCountry(countryName);
  };
  const handleCountryMouseLeave = () => {
    setHoveredCountry(null);
  };
  const handleClick = (event) => {
    const countryName = event.target.getAttribute("data-name");
    setCurrent(countryName);
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1001" id="bigMap">
      <style>
        {`
    #bigMap path {
      fill-rule: evenodd;
      stroke-width: 2;
      stroke: var(--stroke-color); 
      fill: #fff;
    }
    #bigMap .partnerCountry {
      fill: var(--partner-country);
    }
    #bigMap .partnerCountry.hovered {
      fill: var(--highlight-color);

    }
  `}
      </style>
      <path
        className="nonPartner"
        id="AO"
        data-name="Angola"
        data-id="AO"
        d="m 495.3,598.6 -36,-0.2 -4.3,1.7 -3.5,-0.3 -5.1,1.9 -1.1,2.7 6,8.7 2.4,9.3 3.6,13.4 -3.8,5.5 -0.6,2.8 2.9,8.3 3.1,8.4 3.6,5 0.6,7.8 -1.4,10.3 -4,6.1 -7.1,9.1 -2.9,5.6 -4.1,12.5 -0.8,5.9 -4.3,12.7 -1.9,12.2 1,8.7 5.9,-2.7 7.2,-2.3 7.8,0.4 7.1,6.3 1.9,-1 48.8,-0.6 8.2,6.6 29.1,2 22.4,-5.7 -7.6,-8.6 -7.8,-11.3 1.6,-44 25.3,0.1 -1,-4.7 2,-5.2 -2,-6.5 1.5,-6.7 -1.2,-4.3 -5.5,-0.8 -7.6,2 -5.3,-0.3 -3,1.3 0.9,-16.5 -3.9,-5.1 -0.8,-8.5 1.9,-8.4 -2.4,-5.3 -0.1,-8.7 -14.8,0.1 1.1,-5 -6.2,0.1 -0.7,2.4 -7.6,0.5 -3.1,8.1 -1.9,3.4 -6.7,-1.9 -4,1.9 -8.1,1.1 -4.6,-7.2 -2.7,-4.5 -3.5,-8.3 -2.9,-10.3 z m -47.4,-2.7 0.4,-6 2,-3.5 4.5,-2.9 -4.6,-4.8 -3.7,2.3 -5,6 3.3,10.4 3.1,-1.5 z"
      />
      <path
        className="nonPartner"
        id="BI"
        data-name="Burundi"
        data-id="BI"
        d="m 669,556.1 -0.6,-5.4 0,0 -6.5,-0.9 -3.8,7.9 -7.4,-1.1 3,6.3 0.1,2.4 4.3,13.2 0,0.6 1.2,-0.2 4.5,-5 4.9,-7.2 3,-2.9 -0.1,-4.5 -2.6,-3.2 z"
      />
      <path
        className="nonPartner"
        id="BJ"
        data-name="Benin"
        data-id="BJ"
        d="m 340,356 -9.3,-8 -4.3,0.1 -4.1,4 -2.6,4.2 -6,1.2 -2.5,6.1 -4.1,1.6 -1.6,7.2 3.7,4.1 4.3,4.9 0.4,6.8 2.5,2.8 -0.5,31.8 3,9.5 10.1,-1.6 0.6,-22.3 -0.3,-8.8 2.3,-8.7 3.7,-4.3 5.9,-8.5 -1.3,-3.7 2.4,-5.6 -2.8,-8.2 0.5,-4.6 z"
      />
      <path
        className="nonPartner"
        id="BF"
        data-name="Burkina Faso"
        data-id="BF"
        d="m 300.7,310.8 -7.8,0 -3,-2.6 -6.7,1.9 -11.3,5.8 -2.3,4.3 -9.4,6.2 -1.7,3.6 -5.1,2.8 -5.8,-1.9 -3.4,3.4 -1.8,9.5 -9.7,11.4 0.3,4.7 -3.4,5.9 0.8,8 5.5,3 2.1,4.6 5.4,2.9 4.3,-3.4 5.7,-0.6 8.3,3.6 -1.6,-10.4 0.3,-7.9 21.1,-0.6 5.4,1 3.9,-2.2 5.6,1.1 10.7,0.3 4.1,-1.6 2.5,-6.1 6,-1.2 2.6,-4.2 0.3,-9.5 -14,-3.1 -0.4,-6.7 -6.9,-9 -1.6,-6.3 1,-6.7 z"
      />
      <path
        className="nonPartner"
        id="BW"
        data-name="Botswana"
        data-id="BW"
        d="m 600.6,762.7 -2.2,-1 -6.9,3.1 -3.6,0 -7.9,5.4 -4.4,-5.7 -18.7,4.9 -9,0.4 -1.9,49.3 -11.8,0.5 -1.4,40.4 3.2,2 6.5,13.2 -1.5,8.4 2.5,4.9 8.5,-1.4 6.2,-6.2 5.8,-4.2 3.2,-6.6 6,-3.2 4.9,1.7 5.5,3.9 9.6,0.6 7.8,-3.2 1.4,-4.3 2.4,-6.6 6.5,-1.1 3.9,-5.2 4.4,-9.3 11.2,-10.3 17.3,-10.2 -7.3,-6.2 -9.2,-2.1 -3.1,-8.8 0.2,-4.9 -5.1,-1.5 -13,-15.2 -3.5,-8 -2.3,-2.4 -4.2,-11.1 z"
      />
      <path
        className="nonPartner"
        id="CF"
        data-name="Central African Rep."
        data-id="CF"
        d="m 587,398.1 -1,-0.7 -4.2,-4 -0.9,-4.3 1.9,-5.7 -0.1,-5.7 -7.2,-8.6 -1.5,-5.9 -7.7,2.3 -6,5.6 -8.6,15.1 -11.3,6.4 -11.8,-0.8 -3.4,1.2 1.2,4.9 -6.3,4.8 -5.1,5.4 -15.3,5.3 -3,-3.1 -2.1,-0.3 -2.2,3.6 -10,1 -6.1,14 -2.9,2.6 -0.8,10.7 1.2,5.8 -0.9,4.1 5.8,7.3 1,4.9 4.6,7.2 5.6,4.4 0.6,6.3 1.3,4 6.3,-12.8 7.3,-7.4 8.2,2.4 7.9,0.7 1,-9.6 4.7,-7.1 6.5,-4.4 10.1,4.7 7.8,5.1 9,1.4 9.1,2.7 3.6,-8.4 1.6,-1.1 5.6,1.4 13.5,-6.9 4.9,3 3.9,-0.5 1.8,-3.3 4.5,-1.2 9.2,1.4 7.9,0.4 4,-1.5 -2,-4.4 -9.2,-5.5 -3.2,-8.3 -5.2,-6 -8.3,-7.2 -0.1,-4.5 -6.8,-5.5 -8.4,-5.4 z"
      />
      <path
        className="nonPartner"
        id="CI"
        data-name="Côte d'Ivoire"
        data-id="CI"
        d="m 230.4,373.8 -5,2.1 -2.9,1.7 -1.8,-5.9 -3.5,1.6 -2.1,-0.3 -2.3,4 -9.4,-0.1 -3.3,-2.1 -1.6,1.3 -2.5,1.1 -1,4.7 2.8,5.7 3,11.1 -4.6,1.6 -1.1,1.9 0.9,2.7 -0.8,6.1 -1.9,0 -0.6,4 1.2,6.7 -2.7,6.1 3.6,3.8 3.8,0.9 5.2,5.8 0.3,5.5 -1.1,1.7 -1,11.4 2.3,0.4 12.1,-5.1 8.5,-4 14.5,-2.4 7.8,-0.2 8.5,2.7 5.6,-0.1 0.5,-5.5 -5.2,-11.9 3.2,-15.6 5.1,-11.6 -3.2,-19.7 -8.3,-3.6 -5.7,0.6 -4.3,3.4 -5.4,-2.9 -2.1,-4.6 -5.5,-3 z"
      />
      <path
        className="nonPartner"
        id="CM"
        data-name="Cameroon"
        data-id="CM"
        d="m 477.5,366.6 0.4,-9.2 -1,-9.1 -4.9,-8.9 -3.4,0.8 -0.4,4.4 4.9,5.5 -1.3,2.5 -0.5,4.6 -10.2,10.7 -3.1,8.8 -1.6,7.2 -2.6,3.1 -2.4,9.7 -6.4,5.7 -1.9,7 -2.7,5.6 -1.1,5.7 -8.3,4.7 -6.9,-5.7 -4.6,0.2 -7.2,8.1 -3.6,0.1 -5.7,13.4 -3.1,9.8 -0.1,3.8 3.1,2 2.5,6.2 5.6,2.3 4.8,9.2 -1.8,10.9 19.9,0.3 5.8,-0.9 7.4,1.9 7.3,-1.8 1.5,0.7 15.4,0.6 9.9,3.6 9.7,3.3 0.9,-7.5 -1.3,-4 -0.6,-6.3 -5.6,-4.4 -4.6,-7.2 -1,-4.9 -5.8,-7.3 0.9,-4.1 -1.2,-5.8 0.8,-10.7 2.9,-2.6 6.1,-14 1.8,-3.7 -3.9,-9.6 -1.8,-5.7 -5.3,-2.3 -7.2,-8.1 2.5,-6.5 5.6,1.3 3.4,-0.9 6.8,0.1 -6.8,-12.6 z"
      />
      <path
        className="nonPartner"
        id="CD"
        data-name="Dem. Rep. Congo"
        data-id="CD"
        d="m 618.3,446 -9.2,-1.4 -4.5,1.2 -1.8,3.3 -3.9,0.5 -4.9,-3 -13.5,6.9 -5.6,-1.4 -1.6,1.1 -3.6,8.4 -9.1,-2.7 -9,-1.4 -7.8,-5.1 -10.1,-4.7 -6.5,4.4 -4.7,7.1 -1,9.6 -0.7,8.4 -3.6,7.4 -2.4,8.6 -1.5,12.3 0.7,7.8 -2,4.8 -0.3,5.1 -1.4,4.4 -8.1,6.7 -5.6,7.1 -5.3,13.4 0.3,11.4 -3.1,4.4 -7.2,6.8 -7.2,8.7 -4.5,-2.5 -0.8,-3.9 -6.6,-0.1 -4.2,5.3 -3.2,-1.4 -4.5,2.9 -2,3.5 -0.4,6 -3.1,1.5 1.6,4.3 5.1,-1.9 3.5,0.3 4.3,-1.7 36,0.2 2.9,10.3 3.5,8.3 2.7,4.5 4.6,7.2 8.1,-1.1 4,-1.9 6.7,1.9 1.9,-3.4 3.1,-8.1 7.6,-0.5 0.7,-2.4 6.2,-0.1 -1.1,5 14.8,-0.1 0.1,8.7 2.4,5.3 -1.9,8.4 0.8,8.5 3.9,5.1 -0.9,16.5 3,-1.3 5.3,0.3 7.6,-2 5.5,0.8 4.2,0.3 0.6,4.3 5.7,-0.3 7.7,1.3 3.9,6.2 9.7,2 7.5,-4.4 2.6,7.3 9.2,1.9 4.3,5.9 4.8,7.6 9.3,0.1 -0.6,-14.9 -3.4,2.5 -8.4,-5.4 -3.2,-2.4 1.9,-13.9 2.5,-16.4 -2.6,-6.1 3.6,-8.8 3.3,-1.7 16.4,-2.3 2.1,0.6 0.6,-2.3 -3.4,-3.7 -1.5,-7.6 -7.3,-7.6 -4.1,-9.9 2.3,-5.8 -3.2,-7.8 2.4,-22.1 0.1,0.2 -0.1,-2.4 -3,-6.3 1.2,-7.6 1.7,-1 0.5,-8.3 3.5,-3.8 0.1,-10.5 2.9,-5.3 0.6,-11.1 2.6,-6.4 4.6,-7.2 4.7,-3.7 3.9,-4.9 -4.9,-1.9 0.6,-16.1 0,0 -10.9,-9.2 -2.9,-5.9 -6.8,2.9 -5.7,-0.9 -3.2,2.3 -5.5,-1.7 -7.5,-11.4 -4,1.5 -7.9,-0.4 z"
      />
      <path
        className="nonPartner"
        id="CG"
        data-name="Congo"
        data-id="CG"
        d="m 521.5,468.8 -7.9,-0.7 -8.2,-2.4 -7.3,7.4 -6.3,12.8 -0.9,7.5 -9.7,-3.3 -9.9,-3.6 -15.4,-0.6 -0.9,6.1 3.4,7.1 9.1,-1.1 3.1,2.7 -5.3,16.1 5.8,8.2 1.3,10.8 -1.6,9.2 -3.7,6.5 -10.8,-0.6 -6.5,-6.6 -1,6.1 -8.3,1.7 -4.2,3.5 4.6,9.1 -9.3,7.7 9.9,14.6 5,-6 3.7,-2.3 4.6,4.8 3.2,1.4 4.2,-5.3 6.6,0.1 0.8,3.9 4.5,2.5 7.2,-8.7 7.2,-6.8 3.1,-4.4 -0.3,-11.4 5.3,-13.4 5.6,-7.1 8.1,-6.7 1.4,-4.4 0.3,-5.1 2,-4.8 -0.7,-7.8 1.5,-12.3 2.4,-8.6 3.6,-7.4 0.7,-8.4 z"
      />
      <path
        className="nonPartner"
        id="DJ"
        data-name="Djibouti"
        data-id="DJ"
        d="m 820.3,358.7 -5.3,-3.8 6.8,-3.3 0.1,-5.7 -3,-4.3 -3.6,3.4 -5.2,-1.2 -4,6.1 -3.9,6.5 1.1,3.8 0.3,4.2 6.8,0.2 2.9,-0.9 2.8,2.4 4.2,-7.4 z"
      />
      <path
        className="nonPartner"
        id="DZ"
        data-name="Algeria"
        data-id="DZ"
        d="M 392.4,5.7 384.6,6.5 379.8,3.3 367.6,3.4 357,8.9 351.2,6.8 332.3,8 l -19.4,2.5 -11,4.3 -7.2,5.8 -12.4,2.4 -11.1,7.7 4.2,9 0.7,8.4 3.9,14.7 3.1,2.9 -2.2,5.4 -15.2,2.3 -5.4,5.1 -6.7,1.2 -0.6,10.2 -13.8,5.4 -4.6,7 -9.6,3.7 -11.8,2.1 -19.2,10.2 -0.2,16.3 0,1 -0.3,2.7 44.1,33.5 40,30.2 40.4,30.2 2.9,6.4 7.5,4 5.5,2.2 0.2,8.8 13.3,-1.3 16.9,-6.2 34.5,-27.1 40.5,-26.4 -5.4,-8.7 -9.6,-6.4 -5.5,2.5 -4.3,-7.7 -0.6,-5.9 -7.2,-10.1 4.6,-5.8 -1.3,-8.7 1.4,-7.6 -1,-6.3 1.8,-11.3 -0.8,-6.4 -4.1,-12.2 -5.7,-24.7 -7.3,-5.6 -0.2,-3.3 -9.7,-8.3 -1.3,-10.4 7,-7.8 2.4,-11.6 -2.3,-13.4 2.2,-7.2 z"
      />
      <path
        className="nonPartner"
        id="EG"
        data-name="Egypt"
        data-id="EG"
        d="m 628.8,88.1 -11.9,-4 -11.5,-3.7 -15.6,0.2 -3.7,6.6 2.2,5.9 -2.4,8.5 4.2,11.2 2.9,49.2 2.2,50.9 48.1,0 46.4,0 47.4,0 -2.2,-2.8 -14.7,-12.4 -0.9,-9 2.2,-2.4 -11.6,-15.3 -4.4,-7.9 -4.9,-7.5 -10.5,-21.6 -8.4,-13.9 -6.1,-14.5 1.1,-1.3 10.1,19.8 5.8,6.2 4.3,4.4 2.5,-2.4 2.7,-7.2 1.6,-10.4 2.8,-5.6 -1.5,-3.5 -8.5,-20.1 0,0 -5.4,3.4 -9.2,-0.8 -9.6,-3.2 -2.3,4.5 -3.8,-6.8 -8.5,-1.8 -10.2,1.2 -4.5,3.9 -8.6,4.4 -5.6,-2.2 z"
      />
      <path
        className="nonPartner"
        id="ER"
        data-name="Eritrea"
        data-id="ER"
        d="m 777.6,303.8 -7,-6.8 -4,-12.7 -7.8,-16 -5.7,7.9 -8.8,2.3 -3.6,4.2 -0.7,9.2 -4.3,20.3 1.5,5.6 14.3,2.9 3.3,-10.4 7.6,6.3 7,-3.2 3,2.9 8.3,0.1 10.8,5.6 3.4,4.8 5.5,4.4 5.4,8.1 4.3,4.5 5.2,1.2 3.6,-3.4 -6.2,-4.2 -4,-4.7 -6.9,-8 -7.1,-7.9 -17.1,-13 z"
      />
      <path
        className="nonPartner"
        id="ET"
        data-name="Ethiopia"
        data-id="ET"
        d="m 754.8,310.3 -3.3,10.4 -14.3,-2.9 -1.4,11.9 -4.5,13.6 -7.1,6.8 -4.8,10.6 -1.1,5.7 -5.6,3.8 -3.3,14.5 0.1,1.7 0.4,10.8 -1.8,4.2 -6.4,0.3 -4,7.9 7.5,1 6.3,6.7 2.2,5.6 5.7,3.2 7.4,15 6.4,2.4 0.1,7.7 4.2,4.6 8.5,0 15.7,11.7 3.8,0.2 2.9,-0.4 2.7,1.6 8.2,1.1 3.5,-5.8 11.1,-5.8 4.9,4.7 8.4,0 3.3,-4.4 7.8,-0.2 10.7,-9.8 15.9,-0.6 33.5,-41.5 -10.3,0.1 -40.3,-16.4 -4.8,-5 -4.6,-6.6 -4.8,-7.7 2.5,-4.9 -2.8,-2.4 -2.9,0.9 -6.8,-0.2 -0.3,-4.2 -1.1,-3.8 3.9,-6.5 4,-6.1 -4.3,-4.5 -5.4,-8.1 -5.5,-4.4 -3.4,-4.8 -10.8,-5.6 -8.3,-0.1 -3,-2.9 -7,3.2 -7.6,-6.3 z"
      />
      <path
        className="nonPartner"
        id="GA"
        data-name="Gabon"
        data-id="GA"
        d="m 455.9,485.9 -1.5,-0.7 -7.3,1.8 -7.4,-1.9 -5.8,0.9 0.1,16.7 -17.7,-0.2 -4.2,0.8 -2.4,10.3 -3,10.1 -2.7,4.4 -0.3,4.6 7.3,14.3 8.1,11.4 12.5,14 9.3,-7.7 -4.6,-9.1 4.2,-3.5 8.3,-1.7 1,-6.1 6.5,6.6 10.8,0.6 3.7,-6.5 1.6,-9.2 -1.3,-10.8 -5.8,-8.2 5.3,-16.1 -3.1,-2.7 -9.1,1.1 -3.4,-7.1 0.9,-6.1 z"
      />
      <path
        className="nonPartner"
        id="GH"
        data-name="Ghana"
        data-id="GH"
        d="m 296.4,364.9 -5.6,-1.1 -3.9,2.2 -5.4,-1 -21.1,0.6 -0.3,7.9 1.6,10.4 3.2,19.7 -5.1,11.6 -3.2,15.6 5.2,11.9 -0.5,5.5 10.9,3.9 11,-4 6.7,-4.7 19.2,-8.1 -2.8,-4.9 -3.2,-8.8 -1,-6.8 2.7,-12.5 -3,-5 -1.2,-10.9 0,-10.1 -5.1,-7.1 0.9,-4.3 z"
      />
      <path
        className="nonPartner"
        id="GN"
        data-name="Guinea"
        data-id="GN"
        d="m 156.4,345.2 -1.8,0.7 -6.6,-1.1 -0.9,1.6 -2.7,0.3 -8.7,-3.4 -5.8,-0.1 -0.3,4.7 -1.3,1.4 0.9,4.6 -1.9,1.8 -2.7,0.1 -3.2,2.3 -3.7,-0.3 -5.5,6.8 3.6,2.2 1.7,3.1 1.3,6.1 3,2.7 3.1,1.8 4.7,5.4 5.3,8.2 6.5,-6.1 1.5,-3.8 2.1,-3 3.3,-0.3 2.9,-2.6 9.7,0 3.3,5 2.6,5.8 -0.4,4 1.9,3.6 -0.1,5.1 3.3,-0.8 2.6,-0.3 3.2,-1.6 5.1,8.5 -0.9,5.6 2.4,2.9 3.4,0.1 2.6,-5.6 3.4,0.4 1.9,0 0.8,-6.1 -0.9,-2.7 1.1,-1.9 4.6,-1.6 -3,-11.1 -2.8,-5.7 1,-4.7 2.5,-1.1 -3.7,-4 0.7,-4.1 -1.6,-1.6 -2.6,1.3 0.6,-4.5 2.5,-3.5 -5,-5.8 -1.4,-3.8 -2.7,-3.1 -2.4,-0.3 -2.9,1.9 -4,1.8 -3.3,3 -5.2,-1.1 -3.3,-3.5 -2,-0.4 -3.2,1.8 -2,0 -0.6,-5 z"
      />
      <path
        className="nonPartner"
        id="GM"
        data-name="Gambia"
        data-id="GM"
        d="m 91.9,335.4 11,0.2 3,-1.9 2.2,-0.1 4.5,-3.2 5.2,2.9 5.2,0.3 5.3,-3.1 -2.4,-4 -4,2.3 -3.8,-0.1 -4.7,-3.4 -3.8,0.2 -2.8,3.3 -13.2,0.4 -1.7,6.2 z"
      />
      <path
        className="nonPartner"
        id="GW"
        data-name="Guinea-Bissau"
        data-id="GW"
        d="m 129.9,343.2 -22.4,-0.6 -3.3,1.6 -4,-0.5 -6.5,2.3 0.7,2.9 3.7,3 -0.1,2.1 2.7,3.9 5.1,0.9 6.4,5.8 5.5,-6.8 3.7,0.3 3.2,-2.3 2.7,-0.1 1.9,-1.8 -0.9,-4.6 1.3,-1.4 0.3,-4.7 z"
      />
      <path
        className="nonPartner"
        id="GQ"
        data-name="Eq. Guinea"
        data-id="GQ"
        d="m 433.9,486 -19.9,-0.3 -4.1,15.5 2.2,2.1 4.2,-0.8 17.7,0.2 -0.1,-16.7 z"
      />
      <path
        className={`partnerCountry ${
          hoveredCountry === "Kenya" ? "hovered" : ""
        }`}
        id="KE"
        data-name="Kenya"
        data-id="KE"
        d="m 807.2,463.1 -8.4,0 -4.9,-4.7 -11.1,5.8 -3.5,5.8 -8.2,-1.1 -2.7,-1.6 -2.9,0.4 -3.8,-0.2 -15.7,-11.7 -8.5,0 -4.2,-4.6 -0.1,-7.7 -6.4,-2.4 -8.1,9.1 -7.4,8.3 5.9,9.6 1.5,7 5.5,15.8 -4.4,10.1 -5.9,9.2 -3.5,5.6 0,0.7 2.9,5.2 -0.8,10.3 44.1,28.2 0.7,8 17.3,13.8 5,-4.6 2.5,-9.2 4,-5.5 1.9,-9.8 4.6,-1 3.1,-5.8 8.6,-5.5 -7.2,-11.4 -0.4,-50.4 10.5,-15.7 z"
        onMouseEnter={handleCountryMouseEnter}
        onMouseLeave={handleCountryMouseLeave}
        onClick={handleClick}
      />
      <path
        className="nonPartner"
        id="LR"
        data-name="Liberia"
        data-id="LR"
        d="m 193.3,411 -3.4,-0.4 -2.6,5.6 -3.4,-0.1 -2.4,-2.9 0.9,-5.6 -5.1,-8.5 -3.2,1.6 -2.6,0.3 -5.7,6.5 -5.5,7.5 -0.7,4 -2.9,4.4 8.1,8.9 10.4,7.6 11,10.5 12.6,6.6 3.2,-0.1 1,-11.4 1.1,-1.7 -0.3,-5.5 -5.2,-5.8 -3.8,-0.9 -3.6,-3.8 2.7,-6.1 -1.2,-6.7 0.6,-4 z"
      />
      <path
        className="nonPartner"
        id="LY"
        data-name="Libya"
        data-id="LY"
        d="m 589.8,80.6 -3.1,-4.5 -11.7,-1.6 -3.9,-2.4 -4.4,0 -4.4,-6.2 -15.9,-2.8 -7.9,1.8 -7.9,6.5 -3.3,6.7 3.4,10.6 -5.3,6.3 -5.5,3.6 L 507,91.7 490.3,86 479.7,83.3 473.6,71 l -15.7,-6.1 -9.8,-2.3 -4.8,1.2 -13.8,-4.8 -0.3,10.6 -5.6,4 -3.4,4.4 -7.9,5.3 1.5,5.7 -0.9,5.8 -5.6,3.2 4.1,12.2 0.8,6.4 -1.8,11.3 1,6.3 -1.4,7.6 1.3,8.7 -4.6,5.8 7.2,10.1 0.6,5.9 4.3,7.7 5.5,-2.5 9.6,6.4 5.4,8.7 19,6 6.9,7.5 8.3,-5.1 11.9,-7.6 48.4,26.5 48.7,26.5 -0.1,-5.8 13.8,0 -1,-27.7 -2.2,-50.9 -2.9,-49.2 -4.2,-11.2 2.4,-8.5 -2.2,-5.9 3.7,-6.6 z"
      />
      <path
        className="nonPartner"
        id="LS"
        data-name="Lesotho"
        data-id="LS"
        d="m 625.3,939.9 2.5,-4.4 6.7,-2.2 2.4,-4.5 4.1,-6.7 -3.8,-4.2 -4.8,-4.2 -5.7,2.8 -6.8,5.4 -6.9,8.7 8,10.6 4.3,-1.3 z"
      />
      <path
        className="nonPartner"
        id="MA"
        data-name="Morocco"
        data-id="MA"
        d="m 271.2,30.7 -5,-0.1 -11.9,-3.1 -11,0.9 -6.8,-5.9 -8.5,-0.1 -3.8,8.6 -8,14.5 -8.7,5.7 -11.8,6.4 -7.7,9.3 -1.8,7.3 -4.8,11.8 2.5,17.2 -10.1,11.5 -6,3.7 -9.6,9.4 -11,1.6 -6.1,5.3 -0.2,0.2 -7.9,14.1 -8.1,5.1 -4.5,8.5 -0.5,7.4 -3.4,8.1 -4,2.2 -6.9,8.8 -4.4,9.8 0.7,4.6 -4.1,7.3 -4.7,3.7 -0.8,6.4 0.2,0.1 27,-1.1 1.6,-5 5,-6.2 4.4,-19.1 16.9,-15 6,-17.4 3.7,-1.1 4.2,-10.8 10,-1.4 4.2,1.8 5.4,0 3.9,-3.2 7.3,-0.4 -0.1,-7.5 0,0 1.8,0 0.2,-16.3 19.2,-10.2 11.8,-2.1 9.6,-3.7 4.6,-7 13.8,-5.4 0.6,-10.2 6.7,-1.2 5.4,-5.1 15.2,-2.3 2.2,-5.4 -3.1,-2.9 -3.9,-14.7 -0.7,-8.4 -4.2,-9 z"
      />
      <path
        className="nonPartner"
        id="MG"
        data-name="Madagascar"
        data-id="MG"
        d="m 902.9,704.8 -2.5,-9.1 -3,-5.9 -3.9,-5.9 -4.3,6.2 -0.7,8.3 -7.1,9.6 -5.1,-1.7 1.3,6 -4,6.9 -10.4,8.5 -7.3,7.9 -5.4,0.2 -4.6,2.5 -6.9,2.8 -6,0.6 -2.2,8.7 -4.7,7.8 0.2,12.7 1.7,8.7 2.4,6.6 -1.7,8.8 -6.4,10.5 -0.3,4.6 -5.7,2.4 -2.8,10 0.4,9.9 3.4,11 -0.1,12.3 2.6,7.3 9.1,5 6.5,3.5 10.9,-5.8 9.9,-3.3 6.8,-16.1 6.1,-19.2 9.3,-26.2 7.3,-19.1 5.9,-16.1 1.6,-11.7 3.5,-3.2 1.5,-5.9 -1.7,-10.2 2.6,-4.1 3.5,8.1 2.4,-4.1 1.7,-6.6 -2.8,-6.5 -1,-16.7 z"
      />
      <path
        className="nonPartner"
        id="ML"
        data-name="Mali"
        data-id="ML"
        d="m 347.4,252.3 -13.3,1.3 -0.2,-8.8 -5.5,-2.2 -7.5,-4 -2.9,-6.4 -40.4,-30.2 -40,-30.2 -18.2,0.2 5.1,59.7 5.4,59.7 2,1.8 -2.7,9.6 -48.5,0.2 -1.9,3.1 -4.6,-0.9 -6.9,2.7 -8.4,-3.8 -3.8,0.3 -2.2,8.2 -4.1,2.5 0.4,8.6 2.3,7.9 4.5,3.9 1,5.3 -0.6,4.4 0.6,5 2,0 3.2,-1.8 2,0.4 3.3,3.5 5.2,1.1 3.3,-3 4,-1.8 2.9,-1.9 2.4,0.3 2.7,3.1 1.4,3.8 5,5.8 -2.5,3.5 -0.6,4.5 2.6,-1.3 1.6,1.6 -0.7,4.1 3.7,4 1.6,-1.3 3.3,2.1 9.4,0.1 2.3,-4 2.1,0.3 3.5,-1.6 1.8,5.9 2.9,-1.7 5,-2.1 -0.8,-8 3.4,-5.9 -0.3,-4.7 9.7,-11.4 1.8,-9.5 3.4,-3.4 5.8,1.9 5.1,-2.8 1.7,-3.6 9.4,-6.2 2.3,-4.3 11.3,-5.8 6.7,-1.9 3,2.6 7.8,0 7.7,-0.6 4.5,-4.9 16.5,-1.2 10.7,-2.2 1,-8.5 6.6,-9.2 -0.3,-31.9 z"
      />
      <path
        className="nonPartner"
        id="MZ"
        data-name="Mozambique"
        data-id="MZ"
        d="m 788.2,666.2 -1.7,-6.2 0,0 0,0 -10,8.1 -13.4,5.3 -7.3,-0.2 -4.5,4.2 -8.4,0.3 -3.3,1.8 -14.4,-3.9 -4.7,0.5 -3.3,13.1 1.4,15.8 0.7,0 4.2,4.4 4.6,10 0.3,17.8 -5.4,3 -4.1,9.6 -7.5,-8.6 -0.5,-9.7 2.9,-6.5 -0.5,-5.5 -4.7,-3.5 -3.3,1.2 -6.8,-6.6 -37.1,11.4 0.8,9.9 0.6,5.1 10,-0.3 5.5,3 2.5,3.4 5.7,1 6.1,4.4 -0.8,17.5 -2.8,9.6 -1,10.4 1.7,4.1 -1.7,8.1 -1.9,1.3 -3.6,9.9 -13.4,15.7 4.7,19.5 2.5,9.9 -3,15.4 0.7,5 1.3,6.2 0.6,6.1 9,0.1 1.5,-7.3 -2.9,-0.9 -0.6,-5.8 5.5,-5.2 14.8,-7.5 10.1,-4.6 5.3,-5 2.1,-5.7 -2.7,-2.4 2.4,-6.4 1.1,-13.6 -2.2,0.7 0.1,-4.1 -1.9,-8.1 -5.2,-10.5 1.6,-9.9 5.1,-3.2 8.9,-9.8 4.7,-2.5 14.4,-14.9 14,-6.7 11.3,-5.3 8.1,-8.5 5.2,-9.6 4.1,-9.9 -1.8,-6.8 0.4,-21.6 -1,-12.2 0.9,-13.8 z"
      />
      <path
        className="nonPartner"
        id="MR"
        data-name="Mauritania"
        data-id="MR"
        d="m 237.6,171.8 -44.1,-33.5 -0.5,20.9 -38.9,-0.7 -0.4,35.4 -11.2,1.3 -3.1,7.1 1.9,20 -46.9,-0.1 -2.7,4.6 6.1,6 3,6.5 -1.4,6.9 1.3,6.9 1,13.7 -1.8,13 -3.5,6.8 0.9,7.5 4.2,-4.5 6,1.2 5.9,-3 6.8,-0.1 5.7,4 7.9,3.7 7.2,10.2 7.8,9.5 4.1,-2.5 2.2,-8.2 3.8,-0.3 8.4,3.8 6.9,-2.7 4.6,0.9 1.9,-3.1 48.5,-0.2 2.7,-9.6 -2,-1.8 -5.4,-59.7 -5.1,-59.7 18.2,-0.2 z"
      />
      <path
        className={`partnerCountry ${
          hoveredCountry === "Malawi" ? "hovered" : ""
        }`}
        id="MW"
        data-name="Malawi"
        data-id="MW"
        d="m 714.6,711.7 0.3,-5.2 -2.7,-4.1 0.4,-6 -3.3,-10.2 3.7,-7.7 -0.2,-16.7 -4.1,-8.9 0.4,-1.5 0,0 -2.3,-3.8 -11.9,-2.6 5.6,6.2 2.8,11.7 -2.2,3.8 -2.7,11.2 2,11.5 -4,4.8 -4.1,12.8 6.2,3.6 6.8,6.6 3.3,-1.2 4.7,3.5 0.5,5.5 -2.9,6.5 0.5,9.7 7.5,8.6 4.1,-9.6 5.4,-3 -0.3,-17.8 -4.6,-10 -4.2,-4.4 -0.7,0 0.1,1.9 2.3,0.5 2.2,7.4 -0.4,1.7 -4.1,-5.3 -2.2,3.4 -1.9,-2.9 z"
        onMouseEnter={handleCountryMouseEnter}
        onMouseLeave={handleCountryMouseLeave}
        onClick={handleClick}
      />
      <path
        className="nonPartner"
        id="NA"
        data-name="Namibia"
        data-id="NA"
        d="m 576,759.7 -22.4,5.7 -29.1,-2 -8.2,-6.6 -48.8,0.6 -1.9,1 -7.1,-6.3 -7.8,-0.4 -7.2,2.3 -5.9,2.7 0.6,10.6 9.5,13.5 2.5,8.7 6,16.6 5.9,11.4 4.6,5.7 1.3,7.6 -0.1,16.5 3.4,21.3 2.6,10.1 2.2,13.4 4.3,10.1 8.3,10.5 6,-6.8 4.5,3.7 1.7,6 5.2,1 7.3,2.6 6.4,-1 10.8,-7.1 2.2,-51.1 1.4,-40.4 11.8,-0.5 1.9,-49.3 9,-0.4 18.7,-4.9 4.4,5.7 7.9,-5.4 3.6,0 6.9,-3.1 0,-1.2 -4.7,-3.1 -7.8,-0.8 -9.9,3.1 z"
      />
      <path
        className="nonPartner"
        id="NE"
        data-name="Niger"
        data-id="NE"
        d="m 458.3,198.6 -19,-6 -40.5,26.4 -34.5,27.1 -16.9,6.2 0.3,31.9 -6.6,9.2 -1,8.5 -10.7,2.2 -16.5,1.2 -4.5,4.9 -7.7,0.6 -1,6.7 1.6,6.3 6.9,9 0.4,6.7 14,3.1 -0.3,9.5 4.1,-4 4.3,-0.1 9.3,8 0.8,-12.4 3.5,-5.5 1.6,-8 3.2,-3 13,-1.6 12.2,5.1 4.6,5.3 6.1,0.2 5.8,-3.4 14.7,7.1 6.2,-0.3 7.1,-5.9 7.1,0.4 3.5,-1.9 6.5,0.8 9.4,4 9.4,-7.7 2.9,0.6 8.4,15.1 2.2,-0.3 0.4,-4.4 3.4,-0.8 1.1,-6.5 -7.8,-0.3 -0.1,-8.9 -5.1,-5.2 4.9,-18.2 15.2,-13 0.2,-18 4,-28.1 2.5,-6 -5.1,-4.7 -0.3,-4.4 -4.6,-3.6 -3.4,-21.5 -8.3,5.1 -6.9,-7.5 z"
      />
      <path
        className="nonPartner"
        id="NG"
        data-name="Nigeria"
        data-id="NG"
        d="m 468.2,344.6 -2.2,0.3 -8.4,-15.1 -2.9,-0.6 -9.4,7.7 -9.4,-4 -6.5,-0.8 -3.5,1.9 -7.1,-0.4 -7.1,5.9 -6.2,0.3 -14.7,-7.1 -5.8,3.4 -6.1,-0.2 -4.6,-5.3 -12.2,-5.1 -13,1.6 -3.2,3 -1.6,8 -3.5,5.5 -0.8,12.4 -0.5,4.6 2.8,8.2 -2.4,5.6 1.3,3.7 -5.9,8.5 -3.7,4.3 -2.3,8.7 0.3,8.8 -0.6,22.3 10.7,0 9.2,-0.1 8.6,9.1 4.1,10 6.5,8.6 9.8,0.3 4.7,-3.1 4.6,0.8 12.7,-5 3.1,-9.8 5.7,-13.4 3.6,-0.1 7.2,-8.1 4.6,-0.2 6.9,5.7 8.3,-4.7 1.1,-5.7 2.7,-5.6 1.9,-7 6.4,-5.7 2.4,-9.7 2.6,-3.1 1.6,-7.2 3.1,-8.8 10.2,-10.7 0.5,-4.6 1.3,-2.5 -4.9,-5.5 z"
      />
      <path
        className="nonPartner"
        id="RW"
        data-name="Rwanda"
        data-id="RW"
        d="m 667.9,533 -7.4,4.3 -2.9,-1.4 -3.5,3.8 -0.5,8.3 -1.7,1 -1.2,7.6 7.4,1.1 3.8,-7.9 6.5,0.9 0,0 3.5,-1.8 0.8,-8.1 -4.8,-7.8 z"
      />
      <path
        className="nonPartner"
        id="EH"
        data-name="W. Sahara"
        data-id="EH"
        d="m 193.8,134.6 -1.8,0 0,0 0.1,7.5 -7.3,0.4 -3.9,3.2 -5.4,0 -4.2,-1.8 -10,1.4 -4.2,10.8 -3.7,1.1 -6,17.4 -16.9,15 -4.4,19.1 -5,6.2 -1.6,5 -27,1.1 -0.2,-0.1 -0.6,5.9 2.7,-4.6 46.9,0.1 -1.9,-20 3.1,-7.1 11.2,-1.3 0.4,-35.4 38.9,0.7 0.5,-20.9 0.3,-2.7 0,-1 z"
      />
      <path
        className="nonPartner"
        id="SD"
        data-name="Sudan"
        data-id="SD"
        d="m 740,291.9 0.7,-9.2 3.6,-4.2 8.8,-2.3 5.7,-7.9 -6.9,-5.1 -4.8,-3.4 -5.3,-16.5 -2.5,-14.3 2.5,-2.5 -4.7,-13.6 -47.4,0 -46.4,0 -48.1,0 1,27.7 -13.8,0 0.1,5.8 2.4,54.9 -10.5,-0.9 -5.2,10.2 -3,8.5 2.6,3.2 -3.8,4.3 1.5,5.7 -3,5.8 -1.2,5 4.3,-0.8 2.6,5.4 0.3,8 4.6,4.1 -0.1,3.4 1.5,5.9 7.2,8.6 0.1,5.7 -1.9,5.7 0.9,4.3 4.2,4 1,0.7 3.8,-1.6 4.1,-2.6 2.9,-12.3 3.2,-6.4 8.8,-1.9 2.1,3.8 6.5,8 3.3,1.2 4.4,-2.3 8.7,0.4 1.8,2.9 12.1,0 0.3,-2.9 6.3,-2.6 1.1,-4 4.6,-2.9 10.4,8.1 6.2,-1.4 5.8,-10 6.5,-7.6 -1.3,-8.3 -3,-4 7.3,-0.8 0.7,-3 5.7,0.9 -1.2,10.2 1.7,10 6.5,5.5 1.5,4.7 0,6.9 1.7,0.3 -0.1,-1.7 3.3,-14.5 5.6,-3.8 1.1,-5.7 4.8,-10.6 7.1,-6.8 4.5,-13.6 1.4,-11.9 -1.5,-5.6 4.3,-20.3 z"
      />
      <path
        className="nonPartner"
        id="SS"
        data-name="S. Sudan"
        data-id="SS"
        d="m 707.8,379.2 -1.5,-4.7 -6.5,-5.5 -1.7,-10 1.2,-10.2 -5.7,-0.9 -0.7,3 -7.3,0.8 3,4 1.3,8.3 -6.5,7.6 -5.8,10 -6.2,1.4 -10.4,-8.1 -4.6,2.9 -1.1,4 -6.3,2.6 -0.3,2.9 -12.1,0 -1.8,-2.9 -8.7,-0.4 -4.4,2.3 -3.3,-1.2 -6.5,-8 -2.1,-3.8 -8.8,1.9 -3.2,6.4 -2.9,12.3 -4.1,2.6 -3.8,1.6 8.4,5.4 6.8,5.5 0.1,4.5 8.3,7.2 5.2,6 3.2,8.3 9.2,5.5 2,4.4 7.5,11.4 5.5,1.7 3.2,-2.3 5.7,0.9 6.8,-2.9 2.9,5.9 10.9,9.2 0,0 5,-3.8 7.8,3.1 9.8,-3.3 8.6,0.1 7.4,-6.4 7.4,-8.3 8.1,-9.1 -7.4,-15 -5.7,-3.2 -2.2,-5.6 -6.3,-6.7 -7.5,-1 4,-7.9 6.4,-0.3 1.8,-4.2 -0.4,-10.8 -1.7,-0.3 0,-6.9 z"
      />
      <path
        className="nonPartner"
        id="SN"
        data-name="Senegal"
        data-id="SN"
        d="m 148.8,315.1 -7.8,-9.5 -7.2,-10.2 -7.9,-3.7 -5.7,-4 -6.8,0.1 -5.9,3 -6,-1.2 -4.2,4.5 -3,7.1 -6.1,9.7 -5.4,2.6 6,4.9 4.8,10.8 13.2,-0.4 2.8,-3.3 3.8,-0.2 4.7,3.4 3.8,0.1 4,-2.3 2.4,4 -5.3,3.1 -5.2,-0.3 -5.2,-2.9 -4.5,3.2 -2.2,0.1 -3,1.9 -11,-0.2 1.8,10.6 6.5,-2.3 4,0.5 3.3,-1.6 22.4,0.6 5.8,0.1 8.7,3.4 2.7,-0.3 0.9,-1.6 6.6,1.1 1.8,-0.7 0.6,-4.4 -1,-5.3 -4.5,-3.9 -2.3,-7.9 -0.4,-8.6 z"
      />
      <path
        className="nonPartner"
        id="SL"
        data-name="Sierra Leone"
        data-id="SL"
        d="m 171.5,401 -3.3,0.8 0.1,-5.1 -1.9,-3.6 0.4,-4 -2.6,-5.8 -3.3,-5 -9.7,0 -2.9,2.6 -3.3,0.3 -2.1,3 -1.5,3.8 -6.5,6.1 1.4,10.3 2.1,5 6.3,7.4 8.7,5.6 3.3,1 2.9,-4.4 0.7,-4 5.5,-7.5 5.7,-6.5 z"
      />
      <path
        className={`partnerCountry ${
          hoveredCountry === "eSwatini" ? "hovered" : ""
        }`}
        id="SZ"
        data-name="eSwatini"
        data-id="SZ"
        d="m 674,874.9 -5.8,-2.6 -3.5,1 -1.4,4 -3.6,5.2 -0.2,4.8 6.6,7.5 7,-1.5 2.8,-6.1 -0.6,-6.1 -1.3,-6.2 z"
        onMouseEnter={handleCountryMouseEnter}
        onMouseLeave={handleCountryMouseLeave}
        onClick={handleClick}
      />
      <path
        className="nonPartner"
        id="TD"
        data-name="Chad"
        data-id="TD"
        d="m 582.5,246.4 -48.7,-26.5 -48.4,-26.5 -11.9,7.6 3.4,21.5 4.6,3.6 0.3,4.4 5.1,4.7 -2.5,6 -4,28.1 -0.2,18 -15.2,13 -4.9,18.2 5.1,5.2 0.1,8.9 7.8,0.3 -1.1,6.5 4.9,8.9 1,9.1 -0.4,9.2 6.8,12.6 -6.8,-0.1 -3.4,0.9 -5.6,-1.3 -2.5,6.5 7.2,8.1 5.3,2.3 1.8,5.7 3.9,9.6 -1.8,3.7 10,-1 2.2,-3.6 2.1,0.3 3,3.1 15.3,-5.3 5.1,-5.4 6.3,-4.8 -1.2,-4.9 3.4,-1.2 11.8,0.8 11.3,-6.4 8.6,-15.1 6,-5.6 7.7,-2.3 0.1,-3.4 -4.6,-4.1 -0.3,-8 -2.6,-5.4 -4.3,0.8 1.2,-5 3,-5.8 -1.5,-5.7 3.8,-4.3 -2.6,-3.2 3,-8.5 5.2,-10.2 10.5,0.9 -2.4,-54.9 z"
      />
      <path
        className="nonPartner"
        id="TG"
        data-name="Togo"
        data-id="TG"
        d="m 307.1,365.2 -10.7,-0.3 -0.9,4.3 5.1,7.1 0,10.1 1.2,10.9 3,5 -2.7,12.5 1,6.8 3.2,8.8 2.8,4.9 9.8,-3 -3,-9.5 0.5,-31.8 -2.5,-2.8 -0.4,-6.8 -4.3,-4.9 -3.7,-4.1 1.6,-7.2 z"
      />
      <path
        className="nonPartner"
        id="TN"
        data-name="Tunisia"
        data-id="TN"
        d="m 429.5,59 -4.5,-2.2 -3.2,-6.6 -6,-0.2 -2.4,-7.6 7.3,-7 1.1,-12.1 -4.1,-3.5 -0.2,-6.5 5.5,-7 -0.9,-2.7 -9.5,5.2 0.1,-7.1 -8.1,-1.7 -12.2,5.7 -2.2,7.2 2.3,13.4 -2.4,11.6 -7,7.8 1.3,10.4 9.7,8.3 0.2,3.3 7.3,5.6 5.7,24.7 5.6,-3.2 0.9,-5.8 -1.5,-5.7 7.9,-5.3 3.4,-4.4 5.6,-4 0.3,-10.6 z"
      />
      <path
        className="nonPartner"
        id="TZ"
        data-name="Tanzania"
        data-id="TZ"
        d="m 672.2,531.3 -4.3,1.7 4.8,7.8 -0.8,8.1 -3.5,1.8 0,0 0.6,5.4 2.6,3.2 0.1,4.5 -3,2.9 -4.9,7.2 -4.5,5 -1.2,0.2 -0.7,5.9 2.3,2 -0.5,5.9 2.3,5.5 -2.9,5.3 9.7,9.4 0.8,8.5 5.9,14.2 0,0 0.6,0.4 4.8,2.3 7.7,2.4 6.8,4.1 11.9,2.6 2.3,3.8 0,0 0.8,-2.7 6.2,7.4 0.6,14.5 3.9,5.3 -0.1,0.2 4.7,-0.5 14.4,3.9 3.3,-1.8 8.4,-0.3 4.5,-4.2 7.3,0.2 13.4,-5.3 10,-8.1 0,0 -4.4,-3 -4.7,-13.6 -4,-8.7 1,-6.6 -0.6,-4.2 3.5,-8.4 -0.3,-3.6 -7.7,-5 -0.6,-7.8 5.9,-17.1 -17.3,-13.8 -0.7,-8 -44.1,-28.2 0,0 -6,6.1 -4.1,6.3 4.8,4.7 -7,3.4 -1.5,-1.6 -7.1,0.9 -5.5,3.1 -3.3,-5.4 2.3,-9.7 0.5,-8.3 0,0 0,0 -13.4,-0.2 z"
      />
      <path
        className="nonPartner"
        id="UG"
        data-name="Uganda"
        data-id="UG"
        d="m 711.3,458.5 -7.4,6.4 -8.6,-0.1 -9.8,3.3 -7.8,-3.1 -5,3.8 0,0 -0.6,16.1 4.9,1.9 -3.9,4.9 -4.7,3.7 -4.6,7.2 -2.6,6.4 -0.6,11.1 -2.9,5.3 -0.1,10.5 2.9,1.4 7.4,-4.3 4.3,-1.7 13.4,0.2 0,0 -0.7,-5.3 5.7,-8.1 7.7,-2 5.2,-3.3 6.3,2.7 0.6,1 0,-0.7 3.5,-5.6 5.9,-9.2 4.4,-10.1 -5.5,-15.8 -1.5,-7 -5.9,-9.6 z"
      />
      <path
        className={`partnerCountry ${
          hoveredCountry === "SouthAfrica" ? "hovered" : ""
        }`}
        id="ZA"
        data-name="SouthAfrica"
        data-id="ZA"
        d="m 522.3,999 5.3,-0.3 7.5,-5.3 10,-2.2 12.3,-5.5 4.7,0.7 7.2,-1.7 12.3,2.7 5.9,-2.6 6.9,2 1.8,-3.8 6,-0.8 12.6,-5.3 9.3,-6.3 8.9,-8.3 14.4,-14.2 7.5,-9.9 3.9,-7.1 5.5,-7 2.5,-2 8.6,-7 3.5,-6.2 2.3,-11.5 3.7,-10.1 -9,-0.1 -2.8,6.1 -7,1.5 -6.6,-7.5 0.2,-4.8 3.6,-5.2 1.4,-4 3.5,-1 5.8,2.6 -0.7,-5 3,-15.4 -2.5,-9.9 -4.7,-19.5 -6.3,-1.3 -4.1,1.6 -5.7,-2.3 -4.9,-0.2 -17.3,10.2 -11.2,10.3 -4.4,9.3 -3.9,5.2 -6.5,1.1 -2.4,6.6 -1.4,4.3 -7.8,3.2 -9.6,-0.6 -5.5,-3.9 -4.9,-1.7 -6,3.2 -3.2,6.6 -5.8,4.2 -6.2,6.2 -8.5,1.4 -2.5,-4.9 1.5,-8.4 -6.5,-13.2 -3.2,-2 -2.2,51.1 -10.8,7.1 -6.4,1 -7.3,-2.6 -5.2,-1 -1.7,-6 -4.5,-3.7 -6,6.8 7.7,17.9 0,0.1 5.4,11.7 6.9,12.8 -0.2,10.6 -3.9,2.5 3.2,9.3 -0.5,8.1 1.3,3.8 0.7,-1.9 4.6,6.2 3.8,0.2 4.6,5 z m 103,-59.1 -4.3,1.3 -8,-10.6 6.9,-8.7 6.8,-5.4 5.7,-2.8 4.8,4.2 3.8,4.2 -4.1,6.7 -2.4,4.5 -6.7,2.2 -2.5,4.4 z"
        onMouseEnter={handleCountryMouseEnter}
        onMouseLeave={handleCountryMouseLeave}
        onClick={handleClick}
      />
      <path
        className={`partnerCountry ${
          hoveredCountry === "Zambia" ? "hovered" : ""
        }`}
        id="ZM"
        data-name="Zambia"
        data-id="ZM"
        d="m 671.3,636 -4.1,-1.1 0.7,-3 -2.1,-0.6 -16.4,2.3 -3.3,1.7 -3.6,8.8 2.6,6.1 -2.5,16.4 -1.9,13.9 3.2,2.4 8.4,5.4 3.4,-2.5 0.6,14.9 -9.3,-0.1 -4.8,-7.6 -4.3,-5.9 -9.2,-1.9 -2.6,-7.3 -7.5,4.4 -9.7,-2 -3.9,-6.2 -7.7,-1.3 -5.7,0.3 -0.6,-4.3 -4.2,-0.3 1.2,4.3 -1.5,6.7 2,6.5 -2,5.2 1,4.7 -25.3,-0.1 -1.6,44 7.8,11.3 7.6,8.6 9.9,-3.1 7.8,0.8 4.7,3.1 0,1.2 2.2,1 13.4,1.5 3.8,1.6 4.1,-0.3 7,-9 10.9,-11.4 4.4,-1 1.7,-4.8 7,-5.5 9.3,-1.9 -0.8,-9.9 37.1,-11.4 -6.2,-3.6 4.1,-12.8 4,-4.8 -2,-11.5 2.7,-11.2 2.2,-3.8 -2.8,-11.7 -5.6,-6.2 -6.8,-4.1 -7.7,-2.4 -4.8,-2.3 -0.6,-0.4 0,0 0.9,2.3 -2,0.8 -2.6,-2.9 z"
        onMouseEnter={handleCountryMouseEnter}
        onMouseLeave={handleCountryMouseLeave}
        onClick={handleClick}
      />
      <path
        className={`partnerCountry ${
          hoveredCountry === "Zimbabwe" ? "hovered" : ""
        }`}
        id="ZW"
        data-name="Zimbabwe"
        data-id="ZW"
        d="m 669.1,825.1 13.4,-15.7 3.6,-9.9 1.9,-1.3 1.7,-8.1 -1.7,-4.1 1,-10.4 2.8,-9.6 0.8,-17.5 -6.1,-4.4 -5.7,-1 -2.5,-3.4 -5.5,-3 -10,0.3 -0.6,-5.1 -9.3,1.9 -7,5.5 -1.7,4.8 -4.4,1 -10.9,11.4 -7,9 -4.1,0.3 -3.8,-1.6 -13.4,-1.5 4.2,11.1 2.3,2.4 3.5,8 13,15.2 5.1,1.5 -0.2,4.9 3.1,8.8 9.2,2.1 7.3,6.2 4.9,0.2 5.7,2.3 4.1,-1.6 6.3,1.3 z"
        onMouseEnter={handleCountryMouseEnter}
        onMouseLeave={handleCountryMouseLeave}
        onClick={handleClick}
      />
      <path
        className="nonPartner"
        id="SO"
        data-name="Somalia"
        data-id="SO"
        d="m 832.6,372.8 -5.7,-5.8 -2.5,-5.7 -4.1,-2.6 -4.2,7.4 -2.5,4.9 4.8,7.7 4.6,6.6 4.8,5 40.3,16.4 10.3,-0.1 -33.5,41.5 -15.9,0.6 -10.7,9.8 -7.8,0.2 -3.3,4.4 -10.5,15.7 0.4,50.4 7.2,11.4 2.7,-3.3 2.9,-7.3 13.4,-16.7 11.4,-10.6 18.1,-13.7 12.1,-11.2 14.1,-18.9 10.1,-15.5 10,-20.2 7,-17.7 5.4,-15.5 2.9,-14.9 2.4,-5 -0.4,-7.3 0.8,-8 -0.5,-3.9 -4.6,0.1 -5.5,4.7 -6.4,1.4 -5.5,2.1 -3.9,0.2 0,0 -6.9,0.5 -4.2,2.6 -6,0.9 -10.5,4.3 -13.2,1.6 -11.3,3.5 -6.1,0 z"
      />
    </svg>
  );
}

export default Africa;
