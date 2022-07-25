import { LocalAirport, Memory } from '@mui/icons-material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>私は駆け出しエンジニアです。前職は薬剤師をしていました。</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2><Memory/>旅好きエンジニアのブログ<LocalAirport/></h2>
      <div className={styles.grid}>
        <article>
          <Link href='/'>
            <Image
              src='/images/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
              alt=''
              width={300}
              height={200}
              className={styles.thumbnailImage}  
            />
          </Link>
          <br/>
          <Link href='/'>
            <a className={utilStyles.boldText }>Yosemite国立公園に行ってみた話</a>
          </Link>
          <br/>
          <small className={utilStyles.lightText}>February 23, 2020</small>
        </article>
        <article>
          <Link href='/'>
            <Image
              src='/images/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
              alt=''
              width={300}
              height={200}
              className={styles.thumbnailImage}  
            />
          </Link>
          <br/>
          <Link href='/'>
            <a className={utilStyles.boldText }>Yosemite国立公園に行ってみた話</a>
          </Link>
          <br/>
          <small className={utilStyles.lightText}>February 23, 2020</small>
        </article>
        <article>
          <Link href='/'>
            <Image
              src='/images/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
              alt=''
              width={300}
              height={200}
              className={styles.thumbnailImage}  
            />
          </Link>
          <br/>
          <Link href='/'>
            <a className={utilStyles.boldText }>Yosemite国立公園に行ってみた話</a>
          </Link>
          <br/>
          <small className={utilStyles.lightText}>February 23, 2020</small>
        </article>
        <article>
          <Link href='/'>
            <Image
              src='/images/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
              alt=''
              width={300}
              height={200}
              className={styles.thumbnailImage}  
            />
          </Link>
          <br/>
          <Link href='/'> 
            <a className={utilStyles.boldText }>Yosemite国立公園に行ってみた話</a>
          </Link>
          <br/>
          <small className={utilStyles.lightText}>February 23, 2020</small>
        </article>
        </div>
      </section>
    </Layout>
  )
}
