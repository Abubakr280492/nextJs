
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
import Link from 'next/link';
const Index = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/about'><a>About</a></Link></li>
            

        </ul>
        <h1>Hello welcome to Homepage NEXT.JS</h1>
        </div>
);
export default Index;