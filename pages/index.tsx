import React from "react";
import { Lookup } from "react-rainbow-components";
import { NextPage } from "next";
import fetch from "isomorphic-fetch";
import { Description, Layout } from "../components";
import { Data } from "../types/data";
import { getAbsoluteUrl } from "../utils";

type Props = {
  data: Data[];
};

const Home: NextPage<Props> = ({ data }) => {
  const [value, setValue] = React.useState<Data | undefined>();
  const [options, setOptions] = React.useState<Data[]>(data);

  const filter = (query: string, options: Data[]) => {
    if (query) {
      return options.filter((item) => {
        const regex = new RegExp(query, "i");
        return regex.test(item.label);
      });
    }
    return [];
  };

  const onSearch = (inputValue: string) => {
    if (inputValue) {
      setOptions(filter(inputValue, options));
    } else {
      setOptions(data);
    }
  };

  const onChange = (value: Data) => {
    setValue(value);
  };

  const onClear = () => {
    setValue(undefined);
  };

  return (
    <Layout>
      <Lookup
        id="lookup"
        label="JavaScript/TypeScript 演算子検索"
        options={options}
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        onClick={onClear}
      />
      <Description value={value} />
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  const { origin } = getAbsoluteUrl(req, "localhost:3000");
  const res = await fetch(`${origin}/api/hello`);
  const { data } = await res.json();
  return { data };
};

export default Home;
