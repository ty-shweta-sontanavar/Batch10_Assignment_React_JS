// import React, { Component } from 'react';

// class Increment extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             clicks:0,
//             show:true
//         };
//     }

//     IncrementItem=()=>{
//         this.setState({clicks:this.state.clicks+1});
//     }
//     DecrementItem=()=>{
//         this.setState({clicks:this.state.clicks-1});
//     }
//     ToggleClick=()=>{
//         this.setState({show:!this.state.show});
//     }


// render(){
//     return(
        
//         <div >
//                  <button onClick={this.IncrementItem}>Increment</button>
//                   <button onClick={this.DecrementItem}>Decrement</button>

            
//         </div>
        

//     );
//     }
// }
// export default Increment;
import React, { useState } from 'react';
import './Increment.css';

const Increment = () =>{
  const [num, setNum] = useState(0)

  const incNum = () =>{
    setNum(num+1);
  };
  const setZero = () =>{
    setNum(0);
  };
  const decNum = () =>{
    if(num>0){
    setNum(num-1);
  }else{
    setNum(0)
  }
};
    return(
        <div className='main_div'>
        <div className='center-div'>
            <h1>{num}</h1>
            <div className='btn_div'>
                <button onClick={incNum}><h1>+</h1></button>
                <button onClick={setZero}><h4>SetToZero</h4></button>
                <button onClick={decNum}><h1>-</h1></button>
            </div>
        </div>
        </div>
    )
}
export default Increment;