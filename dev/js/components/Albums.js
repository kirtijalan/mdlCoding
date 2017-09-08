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

export default class albums extends React.Component{
  constructor(){
    super();
    this.state = {
      albums: []
    };
  }
  componentDidMount(){
    const vm = this;
    request
   .get('http://jsonplaceholder.typicode.com/albums')
   .end(function(err, res){
     vm.setState({"albums": res.body});
   });
  }
  render(){
    const myAlbumList= this.state.albums.map((data) => {
      console.log(data);
      return (
        <tr >
          <td style={styles.rowStyle}>{data.userId}</td>
          <td>{data.id}</td>
          <td style={styles.title}>{data.title}</td>
        </tr>
      );
    });
    return(
      <div>
        <table style={styles.table}>
          {myAlbumList}
        </table>
      </div>
    );
  }
}
