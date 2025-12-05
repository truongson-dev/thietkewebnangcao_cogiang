import React from "react";
class Khoa_lop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            khoa: "Công nghệ thông tin",
            lop: "24CNTT1A"
        };
    }

    
    newKHoa = () => {
        this.setState({
            khoa: "Truyền thông đa phương tiện",
            lop: "24TMDT1A"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.khoa}</h2>
                <h2>{this.state.lop}</h2>
                {}
                <button type="button"  onClick={this.newKHoa}>Đổi khoa</button>
            </div>
        );
    }
}


export default Khoa_lop;