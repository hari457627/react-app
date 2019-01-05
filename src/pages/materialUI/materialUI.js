import React,{ Component } from 'react';
import MaterialUITable from './materialUITable';
class MaterialTable extends Component {
  constructor(props){
    super(props);
    this.state = { 
    }
  }

  render() {
    const tableData = [
      {
        'name':'hari',
        'age':24,
        'email':'hari1@test.com',
        'phone_no':9492298412,
        'id':1
      },
      {
        'name':'shankar',
        'age':24,
        'email':'hari2@test.com',
        'phone_no':9492298413,
        'id':2
      },
      {
        'name':'hareram',
        'age':24,
        'email':'hari3@test.com',
        'phone_no':9492298412,
        'id':3
      },
      {
        'name':'hari',
        'age':24,
        'email':'hari4@test.com',
        'phone_no':9492298412,
        'id':4
      },
      {
        'name':'hari',
        'age':24,
        'email':'hari4@test.com',
        'phone_no':9492298412,
        'id':4
      },
      {
        'name':'hareram',
        'age':24,
        'email':'hari3@test.com',
        'phone_no':9492298412,
        'id':3
      },
      {
        'name':'hareram',
        'age':24,
        'email':'hari3@test.com',
        'phone_no':9492298412,
        'id':3
      },
      {
        'name':'hareram',
        'age':24,
        'email':'hari3@test.com',
        'phone_no':9492298412,
        'id':3
      },
      {
        'name':'hareram',
        'age':24,
        'email':'hari3@test.com',
        'phone_no':9492298412,
        'id':3
      }
    ]
    return (
      <MaterialUITable data={tableData}></MaterialUITable>
    )
  }
}

export default MaterialTable;