import { LocalAirport, Memory } from '@mui/icons-material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import { getPostsData } from '../lib/post';

//SSGの場合(getStaticPropsはNexjsのfunction>一度だけ外部から静的ファイルを読み込む)
export async function getStaticProps() {
  const allPostsData = getPostsData();  //id,title,data,thumbnail
  // console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// //SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントに渡すためのprops

//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私は駆け出しエンジニアです。前職は薬剤師をしていました。</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2><Memory/>旅好きエンジニアのブログ<LocalAirport/></h2>
        <div className={styles.grid}>
          {allPostsData.map(({id,title,date,thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <Image
                  src={`${thumbnail}`}
                  alt=''
                  width={300}
                  height={200}
                  className={styles.thumbnailImage}  
                />
              </Link>
              <br/>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br/>
              <small className={utilStyles.lightText}>{date}</small>
        </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
