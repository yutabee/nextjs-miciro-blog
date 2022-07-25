import Head from "next/head";
import Image from "next/image";
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const siteTitle = "Next.js blog";
const name = 'yuuutabee';

function Layout({children}) {

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {/* <img src="/images/profile.jpg" className={utilStyles.borderCircle}/> */}
                 <Image
                    src="/images/profile.jpg"
                    alt="profileimg"
                    width={50}
                    height={50}
                    className={utilStyles.borderCircle}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;