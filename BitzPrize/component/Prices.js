

// class Prices extends React.Component{
//     state= {
//         currency: 'USD'
//     }

//     render(){
//         return (
//             <div>
//                 <ul className='list-group'>
//                     <li className="list-group-item" >
//                         Bitcoin rate for {this.props.bpi.USD.description}: <span
//                         class='badge badge-primary'>{this.props.bpi.USD.code}</span>
//                         <strong>{this.props.bpi.USD.rate}</strong> 
//                     </li>

//                 </ul>
//             </div>
//         );
//      }
// }

// export default Prices;





class Prices extends React.Component{
    state= {
        currency: 'USD'
    }

    render(){
        let list='';


        if(this.state.currency === 'USD'){
            list = <li className="list-group-item" >
            Bitcoin rate for {this.props.bpi.USD.description}: <span
            class='badge badge-primary'>{this.props.bpi.USD.code}</span>
            <strong>{this.props.bpi.USD.rate}</strong></li>

        }
        else if (this.state.currency === 'GBP'){
            list = <li className="list-group-item" >
            Bitcoin rate for {this.props.bpi.GBPdescription}: <span
            class='badge badge-primary'>{this.props.bpi.GBPcode}</span>
            <strong>{this.props.bpi.GBPrate}</strong></li>
        }
        else if (this.state.currency === 'EUR'){
            list = <li className="list-group-item" >
            Bitcoin rate for {this.props.bpi.EURdescription}: <span
            class='badge badge-primary'>{this.props.bpi.EURcode}</span>
            <strong>{this.props.bpi.EURrate}</strong></li>
        }
        return (
            <div>
                <ul className='list-group'>
                    {list}

                </ul>
                <br/>
                <select onChange={e => this.setState({currency: e.target.value})}  className='form-control'>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>    
                    <option value="EUR">EUR</option>    

                </select> 
            </div>
        );
     }
}

export default Prices;