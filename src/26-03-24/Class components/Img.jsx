import { Component } from "react";
import tiger from './download.jpeg';






class Img extends Component {
    render() {

        return (

            <div className="App">
                <h1 className='head'>Class based Components</h1>
                <img src={tiger} alt="error" />
            </div>

        )
    }

}

export default Img