// import Navbar from './Navbar';

// const Layout = (props) => (
//     <div>
//         <Navbar/>

//         {props.children}
//     </div>
// );

// export default Layout;


/////////////////////////////////////


import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>BitzPrice</title>
            <link rel="stylesheet"href='https://bootswatch.com/4/cerulean/bootstrap.min.css'/>
        
        </Head>

        <Navbar/>
        <div className="container">
        {props.children}

        </div>

    </div>
);

export default Layout;
//bootts