import type { NextPage } from 'next'
import Head from 'next/head'
import { Description } from '../components/description'
import { Footer } from '../components/footer'
import { Front } from '../components/front'
import { Invite } from '../components/invite'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>作業スペース</title>
        <meta
          name="description"
          content="作業通話のための Discord コミュニティサーバー - 作業スペース"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sagyo_space" />
        <meta name="twitter:title" content="作業スペース" />
        <meta
          name="twitter:description"
          content="作業通話のための Discord コミュニティサーバー - 作業スペース"
        />
        <meta name="twitter:image" content="/img/ogp.png" />
        <meta property="og:title" content="作業スペース" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sagyo.space" />
        <meta property="og:image" content="/img/ogp.png" />
        <meta
          property="og:description"
          content="作業通話のための Discord コミュニティサーバー - 作業スペース"
        />
        <meta property="og:site_name" content="作業スペース" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:creator" content="@sagyo_space" />
        <meta name="twitter:domain" content="sagyo.space" />
        <meta name="twitter:image:alt" content="作業スペース" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:src" content="/img/ogp.png" />
        <meta name="twitter:image:alt" content="作業スペース" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:image:type" content="image/png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
      </Head>
      <Front />
      <Description />
      <Invite />
      <Footer />
    </>
  )
}

export default Home
