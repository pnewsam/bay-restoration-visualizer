import React from "react";
import data from "data.json";
// import { useFetchJson } from "hooks";
import BayRestorationTable from "../BayRestorationTable";
import BayRestorationBarChart from "../BayRestorationBarChart";

export const text = {
  title: "Bay Restoration in the S.F. Bay Area",
};

export const BayRestorationSection = () => {
  // const data = useFetchJson({
  //   url: "https://data.bayareametro.gov/resource/mba6-sgwr.json",
  //   dependencies: [],
  // });

  return (
    <section className="section">
      <div className="container">
        <h1 className="title is-1">{text.title}</h1>
        <div className="content">
          <p>
            This visualizes a dataset representing the change in San Francisco
            Bay surface area since 1969. This data is provided by the San
            Francisco Bay Conservation and Development Commission and made
            available by the Metropolitan Transportation Commission's&nbsp;
            <a href="https://www.vitalsigns.mtc.ca.gov/">Vital Signs project</a>
            .
          </p>
          <p>
            <a href="https://data.bayareametro.gov/dataset/Vital-Signs-Bay-Restoration-Bay-Area/mba6-sgwr">
              View the Original Data
            </a>
          </p>
        </div>
        <div className="block">
          {data && (
            <BayRestorationBarChart data={data}></BayRestorationBarChart>
          )}
        </div>
        <div className="columns">
          <div className="column is-half">
            <div className="content">
              <h4 className="is-four">Description</h4>
              <p>
                Bay restoration refers to the acreage of San Francisco Bay. This
                measure reflects either the Bay’s expansion from restoration
                projects (such as wetland restorations) or contraction from
                projects that fill the Bay to create new land for development.
                This measure is a key indicator of Bay conservation efforts, as
                well as nearby development activities. The dataset includes
                acreage of Bay restoration or fill on a regional level.
              </p>
              <h4 className="is-four">Methodology</h4>
              <p>
                BCDC defines the change in Bay acreage as “any area of the Bay
                created or restored, including salt ponds converted into tidal
                action, less the area of the Bay authorized to be filled
                pursuant to major permits and major consistency determinations
                through 1987”. This definition includes any administrative
                amendments to the data.
              </p>
            </div>
          </div>
          <div className="column is-half">
            {data && <BayRestorationTable data={data}></BayRestorationTable>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BayRestorationSection;
