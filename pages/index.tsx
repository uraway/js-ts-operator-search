import { Data } from '../types/data'
import { Description, Layout, List } from '../components'
import { getAbsoluteUrl } from '../utils'
import { Heading, SlideFade } from '@chakra-ui/react'
import { Lookup } from 'react-rainbow-components'
import { NextPage } from 'next'
import fetch from 'isomorphic-fetch'
import React, { useCallback, useState } from 'react'
import { LookupValue } from 'react-rainbow-components/components/types'

type Props = {
  data: Data[]
}

const filter = (query: string, os: Data[]) => {
  if (query) {
    return os.filter((item) => item?.label?.toString().includes(query))
  }
  return []
}

const Home: NextPage<Props> = ({ data }) => {
  const [value, setValue] = useState<Data | undefined>()
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<Data[] | undefined>()

  const onSearch = (newInputValue: string) => {
    if (!!options && newInputValue?.length > inputValue?.length) {
      setInputValue(newInputValue)
      setOptions(filter(newInputValue, options))
    } else if (newInputValue) {
      setInputValue(newInputValue)
      setOptions(filter(newInputValue, data))
    } else {
      setInputValue(inputValue)
      setOptions(undefined)
    }
  }

  const onChange = useCallback(
    (value: LookupValue | null) => {
      if (value) {
        const selectedOption = data?.find((o) => o.label === value.label)
        setValue(selectedOption)
      } else {
        setValue(undefined)
      }
    },
    [data]
  )

  const onClear = () => {
    setValue(undefined)
    setOptions(undefined)
  }

  return (
    <Layout>
      <Heading
        size="lg"
        style={{
          marginBottom: '29px',
          textAlign: 'center',
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
      <SlideFade in={!value} unmountOnExit offsetY="100px">
        <List options={data} onClick={onChange} />
      </SlideFade>
      <SlideFade in={!!value} unmountOnExit offsetY="100px">
        <Description value={value} />
      </SlideFade>
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {
  const { origin } = getAbsoluteUrl('localhost:3000', req)
  const res = await fetch(`${origin}/api/hello`)
  const { data } = await res.json()
  return { data }
}

export default Home
