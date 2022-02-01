import { Data } from '../types/data'
import { Description, Layout, List } from '../components'
import { getAbsoluteUrl } from '../utils'
import {
  Heading,
  SlideFade,
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import fetch from 'isomorphic-fetch'
import React, { ChangeEventHandler, useCallback, useState } from 'react'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons'

type Props = {
  data: Data[]
}

const filter = (query: string, os: Data[]) => {
  if (query) {
    return os.filter((item) => item.label.includes(query))
  }
  return []
}

const Home: NextPage<Props> = ({ data }) => {
  const [value, setValue] = useState<Data | undefined>()
  const [inputValue, setInputValue] = useState('')
  const [options, setOptions] = useState<Data[] | undefined>(data)

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
    if (e.target.value.length > 0) {
      setOptions(filter(e.target.value, data))
    } else {
      setValue(undefined)
      setOptions(data)
    }
  }

  const onChange = useCallback((value: Data) => {
    setValue(value)
    setInputValue(value.label)
  }, [])

  const onClear = () => {
    setInputValue('')
    setValue(undefined)
    setOptions(data)
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
      <InputGroup>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input id="lookup" value={inputValue} onChange={onInputChange} />
        <InputRightElement>
          <IconButton
            variant="ghost"
            size="sm"
            onClick={onClear}
            aria-label="Clear input value"
            icon={<CloseIcon />}
          />
        </InputRightElement>
      </InputGroup>
      <SlideFade in={!value} unmountOnExit offsetY="100px">
        <List options={options} onClick={onChange} />
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
