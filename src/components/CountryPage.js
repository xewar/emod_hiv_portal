import CountryData from "./../lib/CountryData";
const CountryPage = ({ currentCountry }) => {
  const country = CountryData.countries.find(
    (country) => country.countryName === currentCountry
  );

  return (
    <div className="countryContent flex flex-col  gap-10 bg-white py-9 px-16 pr-24 ">
      <div className="text-6xl text-blue-300 font-semibold uppercase">
        {country.countryName}
      </div>
      <div className="aboutAndSVG flex md:flex-col lg:flex-row gap-16 justify-start items-start  pt-8 p-4">
        <div className="imageAndCaption md:w-full lg:w-1/2 self-stretch">
          <img src={`${country.fileExt}.jpg`} alt={country.countryName} />
          <div className="caption px-8 text-sm">{country.imgcaption}</div>
        </div>
        <div className="about ml-12 md:w-full lg:w-1/2 flex flex-col gap-4">
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
        <div className="metadata display flex flex-col gap-4 w-1/2  mr-4">
          <div className="sectionTitle  py-2 px-4 bg-blue-300 uppercase font-semibold text-lg">
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
                className="p-3 bg-slate-100 hover:bg-blue-300"
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
