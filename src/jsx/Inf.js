//个人信息Inf按钮组件
const Inf = React.createClass({
    getInitialState () {
        return {
            InfShow: false
        };
    },
    showInf () {
        this.setState({InfShow: !this.state.InfShow});
    },
    render () {
        return (
            <span>
                <button id="inf" type="button" name="button" onClick={this.showInf}>个人信息</button>
                <UserInf InfShow={this.state.InfShow}/>
            </span>
        );
    }
});
