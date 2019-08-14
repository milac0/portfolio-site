import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
        <Head title="404"></Head>
        <h1> Page not found. </h1>
        <p>Return <Link to="/">Home</Link></p>
        </Layout>
    )
}

export default NotFound