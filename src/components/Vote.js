import React, { Component } from 'react';
import './Vote.css';

class Vote extends Component{
constructor(props){
    super(props)
    this.state={
        subjects:[
            {name:"Java",vote:0},
            {name:"SQL",vote:0},
            {name:"HTML",vote:0},
            {name:"J2EE",vote:0},
        ]
    }
}

vote(i){
    let newSubjectVote=this.state.subjects;

    console.log("click on" + newSubjectVote[i]);
    newSubjectVote[i].vote++;
    this.setState({
 subjects:newSubjectVote
    });
    //console.log("click :"+i);
}
render(){
    return(
        <div>
        <h3>Vote your subjects</h3>
        <div className="subjects">
            {
                this.state.subjects.map((subject,i)=>
                <div  key={i} className='subject'>

                 <div className='votecount'>
                {subject.vote}
                 </div>

                 <div className='subjectName'>
                {subject.name}
                 </div>
                <button onClick={this.vote.bind(this,i)}>click here</button>
                </div>
                )

            }

        </div>
        </div>
    )
}

}
export default Vote;