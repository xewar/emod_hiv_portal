import CountryData from "./../lib/CountryData";
const CountryPage = ({ currentCountry }) => {
  const country = CountryData.countries.find(
    (country) => country.countryName === currentCountry
  );

  return (
    <div className="countryContent flex flex-col  gap-10 bg-white py-12 px-16 pr-24 ">
      <div className="text-6xl text-blue-300 font-semibold uppercase">
        {country.countryName}
      </div>
      <div className="aboutAndSVG flex gap-16 justify-start items-start">
        {/* <div className="bg-slate-400 w-1/2 h-auto"></div> */}
        <div className="imageAndCaption w-1/2">
          <img src={`${country.fileExt}.jpg`} alt={country.countryName} />
          <div className="caption px-8 text-sm">{country.imgcaption}</div>
        </div>
        <div className="about w-1/2 pt-4 flex flex-col gap-4">
          <div>
            <div className="sectionTitle">
              About {country.countryName}'s model
            </div>
            <div>{country.about}</div>
          </div>
          <div>
            <div className="sectionTitle">Collaborators</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
      <div className="countryBottom flex gap-10">
        <div className="metadata display flex flex-col gap-4 w-1/2">
          <div className="sectionTitle   py-2 px-4 bg-blue-300 uppercase font-semibold text-lg">
            Model Metadata
          </div>
          <table className=" text-left bg-slate-50 ">
            <tbody className="p-12">
              {Object.entries(country.metadata).map(([key, value]) => (
                <tr key={key}>
                  <td className="pl-6 py-1">{key}</td>
                  <td className="pl-6 py-1">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="dropboxLinks display flex flex-col gap-4">
          <div className="sectionTitle  py-2 px-4 bg-blue-300 uppercase font-semibold text-lg  ">
            Dropbox Links to Model Files
          </div>
          <div className="flex gap-3 flex-col">
            {country.links.map((link) => (
              <button
                className="p-3 bg-slate-100"
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
