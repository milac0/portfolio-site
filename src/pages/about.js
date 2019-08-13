import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
             <h2>My name is Mile Balenovic</h2>
             <p>Need a dev?<Link to="contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage