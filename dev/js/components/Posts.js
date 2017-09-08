import React from 'react';
import request from 'superagent';

const styles = {
  table:{
    backgroundColor: '#a5bde5',
    border: '1px solid #000'
  },
  rowStyle:{
    padding: '2px',
    border: '1px solid #EEE',
    backgroundColor: '#FFF'
  },
  title:{
    textTransform: 'uppercase'
  }
}
function filterData(){
  const filter = this;
  let inputStr = getElementById('inputStr').value;
  const FilterList = this.state.posts.filter((data)=>{
    if(data.userId===inputStr){
      return(
      <tr >
        <td style={styles.rowStyle}>{data.userId}</td>
        <td>{data.id}</td>
        <td style={styles.title}>{data.title}</td>
        <td>{data.body}</td>
      </tr>);
      filter.setState({"filtered":true});
      filter.setState({"fullData":false});
    }
  });
}
export default class Posts extends React.Component{
  constructor(){
    super();

    this.state = {
      posts: [],
      filtered: false,
      fullData: true
    };
  }
  componentDidMount(){
    const vm = this;
    request
   .get('http://jsonplaceholder.typicode.com/posts')
   .end(function(err, res){
     console.log(res.body);
     vm.setState({"posts": res.body});
   });
  }

  render(){
    const myPostList= this.state.posts.map((data, key=i) => {
      return (
        <tr >
          <td style={styles.rowStyle}>{data.userId}</td>
          <td>{data.id}</td>
          <td style={styles.title}>{data.title}</td>
          <td>{data.body}</td>
        </tr>
      );
    });
    return(
      <div>
        <p><input type="text" placeholder="Search" id="inputStr" /></p>
          {/* onChange={filterData()} */}
        {/* <button value = 'Filter' onClick={filterData()}/> */}
      {/* {this.state.fullData?  */}
      <div>
        <table style={styles.table}>
          {myPostList}
        </table>
      </div>
      {/* // :
      <div>
        <table style={styles.table}>
          {FilterList}
        </table>
     </div> */}
    
  </div>
    );
  }
}
