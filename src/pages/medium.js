import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link} from 'gatsby'
import mediumStyles from './medium.module.css'
import Head from '../components/head'

const Medium = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate
                    order: DESC
                }
            ) {
                edges {
                    node{
                        slug
                        title
                        publishedDate(formatString: "DD.MM.YYYY.")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
        <Head title="Medium"/>
             <p>Ovdje dolaze medium postovi...</p>   
             <ol className={mediumStyles.posts}>
             {data.allContentfulBlogPost.edges.map((edge, i) => {
                 return (
                     <li className={mediumStyles.post} key={i}>
                         <Link to={`/medium/${edge.node.slug}`}>
                             <h2>{edge.node.title}</h2>
                             <p>{edge.node.publishedDate}</p>
                         </Link>
                     </li>
                )
             })}
             </ol>   
        </Layout>
    )
}

export default Medium