import React from "react";
import { Link } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import BaseLayout from "../components/BaseLayout";

const IndexPage = () => {
  return (
    <BaseLayout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to Virtuoso!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <h1>
        <Link to="/app/">Go To App</Link>
      </h1>
    </BaseLayout>
  );
};

export default IndexPage;