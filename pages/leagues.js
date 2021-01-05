import React,{Component} from 'react'
import TableList from './components/leagueTableList'; 
import axios from 'axios';
class Leagues extends Component {

    constructor(props) {
        super(props) 
        this.leaguesList = { 
            rows: []
        }
    }
   
    async componentDidMount() { 
        var data = { "apiversion": "string", "appversion": "string", "timezone": "string", "deviceid": "string", "devicetype": "string" };
        await axios.post(`http://localhost:3008/fetch_league.json`, { headers : { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6ImpheSIsImVtYWlsIjoicHJhaGxhZEBqZXRicm8uaW4iLCJpZCI6IjVmM2ZjYzU4MWRhNmRkMDFkMTdjNGM1OCIsImF1dGhvcml6YXRpb25jb2RlIjoib2Nzamx3djUiLCJpYXQiOjE2MDc2OTQ5MDR9.aRPt4gl2puOl0-IB-phbn7tLybbQDD_HlpHMrYdBo-c'}},data)
          .then(res => {
            const returnData = res.data;
            if(returnData.statuscode == 0)
            {
                //console.log(returnData.data);
                for (const _type of returnData.data.type) {
                    //console.log(_type);
                    for (const category of _type.category) {
                        //console.log(category) 
                        for (const league of category.league) {
                            //console.log(league);
                            league.title = _type.title;
                            league.category_title = category.title; 
                            this.leaguesList.rows.push(league);
                        }  
                    }
                }
                this.setState({leaguesList : this.leaguesList})
            }  
          })
    }
    render(){ 
        return( 
            <div>   
                <TableList rows={this.leaguesList.rows} />
            </div>
        )
    }
  }
  
  export default Leagues