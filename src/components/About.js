import Link from "next/link";
const About = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="about  textBox flex flex-col gap-6 p-8 bg-white">
        <div className="section flex flex-col gap-2">
          <div className="sectionTitle uppercase font-semibold text-lg">
            About this site
          </div>
          <div>
            Use this site to find and access country-specific files for the EMOD
            HIV model. To get started, click on a country.
          </div>
        </div>
        <div className="section flex flex-col gap-2">
          <div className="sectionTitle uppercase font-semibold text-lg ">
            The full documentation
          </div>
          <div className="">
            This site is a data portal for EMOD's HIV models. You can find the
            full documentation for EMOD
            <Link href="https://docs.idmod.org/projects/emod-generic">
              {" "}
              here
            </Link>
            , including an overview of the model and in-depth tutorials on how
            to understand, install, and run it.
          </div>
        </div>
        <div className="section flex flex-col gap-2 ">
          <div className="sectionTitle uppercase font-semibold text-lg">
            About EMOD
          </div>
          <div className="flex flex-col gap-4">
            <div>
              EMOD, is an agent-based model (ABM) that simulates the
              simultaneous interactions of agents in an effort to recreate
              complex phenomena.
            </div>
            <div>
              In it, each agent (such as a human or vector) can be assigned a
              variety of “properties” (for example, age, gender, etc.), and
              their behavior and interactions with one another are determined by
              using decision rules. Agent-based models have strong predictive
              power and are able to leverage spatial and temporal dynamics.
            </div>
          </div>
        </div>
      </div>

      <div className="credits  textBox p-8 rounded bg-white">
        EMOD was developed and is maintained by{" "}
        <Link href="https://www.idmod.org/">
          the Institute for Disease Modeling (IDM)
        </Link>{" "}
        at the Gates Foundation and by the research laboratory of{" "}
        <Link href="https://med.nyu.edu/faculty/anna-bershteyn">
          Dr. Anna Bershteyn
        </Link>{" "}
        of the Department of Population Health at New York University.
      </div>
    </div>
  );
};

export default About;
