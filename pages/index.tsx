import { Data } from "../types/data";
import { Description, Layout, List } from "../components";
import { getAbsoluteUrl } from "../utils";
import { Heading, SlideFade } from "@chakra-ui/react";
import { Lookup } from "react-rainbow-components";
import { NextPage } from "next";
import { Transition } from "react-transition-group";
import fetch from "isomorphic-fetch";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { TransitionStatus } from "react-transition-group/Transition";

type Props = {
  data: Data[];
};

const Spacer = styled.div`
  margin-top: ${({ state }: { state: TransitionStatus }) =>
    state === "entering" || state === "entered" ? 50 : 150}px;
  transition: all 1000ms ease;
`;

const filter = (query: string, os: Data[]) => {
  if (query) {
    return os.filter((item) => item.label.toString().includes(query));
  }
  return [];
};

const Home: NextPage<Props> = ({ data }) => {
  const [value, setValue] = useState<Data | undefined>();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Data[] | null>(null);

  const onSearch = (newInputValue: string) => {
    if (!!options && newInputValue?.length > inputValue?.length) {
      setInputValue(newInputValue);
      setOptions(filter(newInputValue, options));
    } else if (newInputValue) {
      setInputValue(newInputValue);
      setOptions(filter(newInputValue, data));
    } else {
      setInputValue(inputValue);
      setOptions(null);
    }
  };

  const onChange = useCallback((value: Data) => {
    setValue(value);
  }, []);

  const onClear = () => {
    setValue(undefined);
    setOptions(null);
  };

  return (
    <Layout>
      <Transition in={!!value} timeout={500}>
        {(state) => (
          <>
            <Spacer state={state} />
            <Heading
              size="lg"
              style={{
                marginBottom: "29px",
                textAlign: "center",
              }}
            >
              JavaScript/TypeScript 演算子検索
            </Heading>
            <Lookup
              id="lookup"
              options={options}
              value={value}
              onChange={onChange}
              onSearch={onSearch}
              onClick={onClear}
            />
          </>
        )}
      </Transition>
      <SlideFade in={!!value} offsetY={20}>
        <Description value={value} />
      </SlideFade>
      <List options={data} value={value} onClick={onChange} />
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
