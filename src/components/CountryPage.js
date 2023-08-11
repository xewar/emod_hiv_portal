import CountryData from "./../lib/CountryData";
import dynamic from "next/dynamic";
const CountryPage = ({ currentCountry }) => {
  console.l;
  const country = CountryData.countries.find(
    (country) => country.countryName === currentCountry
  );

  const CountrySVG = dynamic(
    () => import(`./countryMaps/${currentCountry.replace(/\s+/g, "")}.js`),
    {
      ssr: false,
    }
  );
  return (
    <div className="countryContent flex flex-col w-[40vw] gap-10 bg-white p-12">
      <div className="text-3xl font-medium">{country.countryName}</div>
      <div className="aboutAndSVG flex gap-6">
        <div className="svgContainer w-1/2 h-fit ">
          <CountrySVG
            strokeClassName="stroke-slate-500 stroke-6"
            fillClassName="fill-blue-50"
            strokeWidth="6"
          />
        </div>
        <div className="w-1/2">{country.about}</div>
      </div>
      <img src={`${country.fileExt}.jpg`} alt={country.countryName} />
      <div className="section display flex flex-col gap-4">
        <div className="sectionTitle uppercase font-semibold text-lg">
          Model Metadata
        </div>

        <table className="w-3/5  text-left bg-slate-50 ">
          <tbody className="p-12">
            {Object.entries(country.metadata).map(([key, value]) => (
              <tr key={key}>
                <td className="pl-6 py-1">{key}</td>
                <td className="pl-6 py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="section display flex flex-col gap-4">
          <div className="sectionTitle uppercase font-semibold text-lg">
            Dropbox Links to Model Files
          </div>
          <div className="flex gap-6">
            {country.links.map((link) => (
              <button
                className="p-6 bg-slate-100"
                key={link.linkName}
                href={link.url}
              >
                {link.linkName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
