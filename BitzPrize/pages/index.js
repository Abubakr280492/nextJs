
//1st
//export default()=> (<div>Hello NEXT.JS</div>)



//2nd

// const Index = () => (
//     <div>
//         <h1>Hello NEXT.JS</h1>
//         </div>
// );
// export default Index;


// //npm run dev

//3 rd
// import Link from 'next/link';
// const Index = () => (
//     <div>
//         <ul>
//             <li><Link href='/'><a>Home</a></Link></li>
//             <li><Link href='/about'><a>About</a></Link></li>
            

//         </ul>
//         <h1>Hello welcome to Homepage NEXT.JS</h1>
//         </div>
// );
// export default Index;



//4th
import Fetch from 'isomorphic-unfetch';
import Layout from '../component/layouts';
import Prices from '../component/Prices';


const Index = (props) => (
<Layout>        
    <div>
        <h1>Welcome to BitzPrice</h1>
        {/* {props.bpi.time.updated} */}
        <p>Check current bitcoin rate </p>
        <Prices bpi={props.bpi}/>
    </div>
</Layout>

);

Index.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return{
        bpi: data
    };


}

export default Index;

//npm install isomorphic-unfetch