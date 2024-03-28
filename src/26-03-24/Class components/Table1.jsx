import { Component } from "react";

class Table1 extends Component {

    render() {


        return (

            <div className='main'>
                <h2 className='middle'>Table</h2>
                <table>
                    <tr>
                        <th>S.no</th>
                        <th>e name</th>
                        <th>age</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>rakesh</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>raju</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>surya</td>
                        <td>50</td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default Table1