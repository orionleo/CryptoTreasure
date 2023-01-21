import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Col, Row, Card, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from "./Loader.jsx"

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified?10:100;
  console.log(simplified,count);
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // console.log(data);
  const [cryptos, setCryptos] = useState();
  const [searchTerm,setSearchTerm] = useState('');
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);

  }, [cryptosList,searchTerm]);

  console.log(cryptos);

  if (isFetching) return <Loader />


  return (
    <>
      {!simplified && (
        <div className="search-crypto">
        <Input placeholder='Search CryptoCurrency' onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())} />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies