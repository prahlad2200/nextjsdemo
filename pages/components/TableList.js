import React,{Component} from 'react' 
import style from './TableList.module.css';   
class UserTableList extends Component { 
    render() {   
        {console.log(this.props.tableHeader); console.log(this.props.tableRows)}
        return <div>
            <table className={style.listtable}>
                <tbody> 
                        <tr>
                        {   
                            
                            (this.props.tableHeader.length == 0) ? <th> Loading...</th>: 
                            this.props.tableHeader.map(item => { 
                                return <th>{item}</th>;
                            }) 
                        }
                        </tr> 
                        { 
                            (this.props.tableRows.length == 0) ? <tr><td> Loading...</td></tr>:  
                                (this.props.tableRows).map(function(item) {  
                                    var tds = (Object.keys(item)).map(function(key) { 
                                            return   <td>{item[key]}</td> 
                                        }) 
                                    return <tr> {tds} </tr>
                                }) 
                        } 
                </tbody>
            </table>
        </div>
    }
}
export default UserTableList