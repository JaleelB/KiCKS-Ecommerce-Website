import Head from 'next/head';
import { useQuery } from 'urql';
import { PRODUCT_QUERY, ASSETS_QUERY } from '../lib/query';
import {Hero, Important, BestSellers, ProductCategories, SummerCollection} from '../containers'
import {Layout} from '../layout';
import { useEffect, useState } from 'react';
import { Newsletter } from '../features';

export default function Home() {
  //fetching data from strapi backend
  const [productResults] = useQuery({query: PRODUCT_QUERY});
  const {data, fetching, error} = productResults;
 
  //checking if data has been fetched from backend and if error message was generated from request
  if(fetching) return <p>Loading....</p>
  if(error) return <p>{error.message}</p>
  
  const products = data?.products?.data;

  console.log(products)

  return  (
      <Layout color="white">
        <Hero heroAsset={products[2]}/>
        <Important/>
        <BestSellers products={products} color="white"/>
        <ProductCategories/>
        <SummerCollection/>
        <Newsletter/>
      </Layout>
  )
}
