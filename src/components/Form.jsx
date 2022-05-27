import React, { Component } from 'react'
import zip1 from '../downloadableFiles/._zip_2MB.zip';
import zip2 from '../downloadableFiles/._zip_5MB.zip';
import zip3 from '../downloadableFiles/._zip_9MB.zip';

const BASE_URL="https://boilerplate-generator123.herokuapp.com/api";
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontEnd: '',
            backEnd:'',
            result:zip3
        }
    }
//     fetch() {
//         return new Promise(resolve => setTimeout(() => resolve(42), 1000));
//       }
    fetchAPI=(frontEnd,backEnd)=>{
        debugger
        // param is a highlighted word from the user before it clicked the button
        return fetch("http://localhost:8081/api?frontend=" + this.state.frontEnd+"&backend="+this.state.backEnd);
      }
    downloadFile = (e) => {
        debugger
        console.log(this.state.frontEnd +" " + this.state.backEnd);
        fetch("http://localhost:8081/api?frontend=demo&backend=spring-boot");
    };
    onButtonClick = (e) => {
        const { value } = e.target;
        switch (value) {
            case 1:
                this.setState({
                    selectedFile: zip1,
                });
                break;
            case 2:
                this.setState({
                    selectedFile: zip2,
                });
                break;
            case 3:
                this.setState({
                    selectedFile: zip3,
                });
                break;

            default:
                alert('File Not Found');
                break;
        }
        this.setState({
            selectedFile: e.target.value,
        });
    }
    
    onFrontEnd=(e)=>{
        debugger
        this.setState({
            frontEnd: e.target.value,
        });
    }
    onBackEnd=(e)=>{
        debugger
        this.setState({
            backEnd: e.target.value,
        });
    }
  render() {
      const { frontEnd,backEnd } = this.state;
      const api = BASE_URL+"?frontend=" + frontEnd + "&backend=" + backEnd;
    return (
      <div>
          <div className="card" > 
            <div className="card-body">
        <div className="row">
        <div className="col-sm-6">
            <div className="card">
            <div class="card-header">FrontEnd</div>
            <div className="card-body">
            <input
                        type="radio"
                        name="frontend"
                        value={'react'}
                        onChange={this.onFrontEnd}
                    /> React<br />
                <input
                        type="radio"
                        name="frontend"
                        value={'angular'}
                        onChange={this.onFrontEnd}
                    /> Angular<br />
                <input
                        type="radio"
                        name="frontend"
                        value={'stencil'}
                        onChange={this.onFrontEnd}
                    /> StencilJs<br />
            </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
            <div class="card-header">BackEnd</div>
            <div className="card-body">
            <input
                        type="radio"
                        name="backend"
                        value={'spring-boot'}
                        
                        onChange={this.onBackEnd}
                    /> Spring Boot<br />
                <input
                        type="radio"
                        name="backend"
                        value={'flask'}
                        
                        onChange={this.onBackEnd}
                    /> Flask<br />
                <input
                        type="radio"
                        name="backend"
                        value={'node'}
                        
                        onChange={this.onBackEnd}
                    /> Nodejs<br />
            </div>
            </div>
        </div>
        </div>   
        <br />
        <br /> 
        <a href={api} className="btn btn-danger float-right" download >Download File </a>
                <br />
                
                <h1>{this.state.frontEnd}</h1>
                <br />
                <h1>{this.state.backEnd}</h1>
        </div>

        </div>
   </div>
    )
  }
}
