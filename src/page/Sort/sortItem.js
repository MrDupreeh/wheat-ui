import React, { Component } from "react";

class SortItem extends Component {
  constructor(props){
    super(props)
    this.state={
      data:this.props.data
    }
  }
  renderName = result => {
    return (
      <div style={{ display: "flex",flexWrap:'wrap' }}>
        {result.map(li => {
          return (
            <div style={{ display: "flex" ,width:'33%',margin:'0 0px 12px'}} key={li.name}>
              <div style={{width:77}}>
                <b>{li.name}</b>
              </div>
              <div>
                <ul style={{display:'flex',flexWrap:'wrap',textAlign:'center'}}>
                  <li style={{width:'25%'}}>{li.list[0]}</li>
                  <li style={{width:'25%'}}>{li.list[1]}</li>
                  <li style={{width:'25%'}}>{li.list[2]}</li>
                  <li style={{width:'25%'}}>{li.list[3]}</li>
                  <li style={{width:'25%'}}>{li.list[4]}</li>
                  <li style={{width:'25%'}}>{li.list[5]}</li>
                  <li style={{width:'25%'}}>{li.list[6]}</li>
                  <li style={{width:'25%'}}>{li.list[7]}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    const {data} = this.state
    return (
      <div>
        {data.map(item => {
          return (
            <div key={item.key} style={{ marginBottom: 24 }}>
              <div style={{ marginBottom: 24 }}>
                <h2 id={item.key}>{item.title}</h2>
                <div
                  style={{
                    backgroundColor: `${item.color}`,
                    height: 2,
                    width: "100%"
                  }}
                />
              </div>
              
                <div style={{display:'flex'}}>{this.renderName(item.result)}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SortItem;
