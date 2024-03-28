import React from 'react'

function Table() {
    return (
        <div className='main'>
            <h2 className='middle'>Table</h2>
            <table>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>company</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Veeresh</td>
                    <td>Google</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Harini</td>
                    <td>Microsoft</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Sandeep</td>
                    <td>Amazon</td>
                </tr>

            </table>
        </div>
    )
}

export default Table