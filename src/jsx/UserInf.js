//具体的个人信息组件
const UserInf = React.createClass({
    propTypes: {
        InfShow: React.PropTypes.bool.isRequired,
    },
    getInitialState () {
        return {
            department: "loading",
            real_name: "loadding"
        }
    },
    componentWillMount () {
        //获取本人信息
        $.get(API_HOST + "/user/overview", (user)=> {
            this.setState({
                department: user.data.department,
                real_name: user.data.real_name
            });
        });
    },
    render () {
        return (
            <ul id="user" style={css_display(this.props.InfShow)}>
                <li>{this.state.department}</li>
                <li>{this.state.real_name}</li>
                <li id="change_dep">修改部门</li>
                <li>登出</li>
            </ul>
        )
    }
});
