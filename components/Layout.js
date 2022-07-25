import Head from "next/head";
import Image from "next/image";

export const siteTitle = "Next.js blog";
const name = 'yuuutabee';

function Layout({children}) {

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                {/* <img src="/images/profile.png" /> */}
                 <Image
                    src="/images/profile.jpg"
                    alt="profileimg"
                    width={50}
                    height={50}
                />
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;