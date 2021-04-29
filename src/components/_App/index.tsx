import React from "react";
import BayRestorationTable from "components/BayRestorationTable";
import Layout from "components/Layout";

const App = () => (
  <div className="App">
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h4>Description</h4>
            <p>
              Bay restoration refers to the acreage of San Francisco Bay. This
              measure reflects either the Bay’s expansion from restoration
              projects (such as wetland restorations) or contraction from
              projects that fill the Bay to create new land for development.
              This measure is a key indicator of Bay conservation efforts, as
              well as nearby development activities. The dataset includes
              acreage of Bay restoration or fill on a regional level.
            </p>
            <h4>Methodology</h4>
            <p>
              BCDC defines the change in Bay acreage as “any area of the Bay
              created or restored, including salt ponds converted into tidal
              action, less the area of the Bay authorized to be filled pursuant
              to major permits and major consistency determinations through
              1987”. This definition includes any administrative amendments to
              the data.
            </p>
          </div>
          <BayRestorationTable></BayRestorationTable>
        </div>
      </section>
    </Layout>
  </div>
);

export default App;
