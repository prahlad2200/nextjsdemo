import React,{Component} from 'react' 
import style from './TableList.module.css';   
class TableList extends Component { 
    render() {   
        return <div>
            <table className={style.listtable}>
                <tbody>
                    <tr>
                        <th >Title</th>
                        <th>Category Title</th>
                        <th>League Title</th>
                        <th>League Duration</th>
                        <th>Pool Price</th>
                        <th>Entry Fee</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Available Spots</th>
                    </tr>
                    {
                        (this.props.rows.length == 0) ? <tr><td> Loading...</td></tr> : 
                        this.props.rows.map(item => { 
                                return <tr>
                                <td>{item.title}</td>
                                <td>{item.category_title}</td>
                                <td>{item.card_title}</td>
                                <td>{item.league_duration}</td>
                                <td>{item.pool_price}</td>
                                <td>{item.entry_fee}</td>
                                <td>{item.start_time}</td>
                                <td>{item.end_time}</td>
                                <td>{item.available_spots}</td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}
export default TableList