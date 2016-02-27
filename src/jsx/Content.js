//Content组件
const Content = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    propTypes: {
        params: (props, propName, componentName)=> {
            if (props.params.day && props.params.depId) {
                return;
            } else if (props.params.userNoteId) {
                return;
            } else {
                return new Error(' content 中 props.params 数据错误！');
            }
        }
    },
    getInitialState () {
        return {
            department: [],
            users: []
        };
    },
    componentWillMount () {
        $.when($.get(API_HOST + "/departments"), $.get(API_HOST + "/users")).done((department, users)=> {
            this.setState({
                department: department[0].data.reverse(),
                users: users[0].data
            });
        });
    },
    setDateNow (dateNow) {
        this.context.router.push("/day/" + dateNow + "/dep/" + this.props.params.depId);
    },

    render () {
        var params = this.props.params;
        var rightArea = null;
        if (params.day) {
            rightArea = <RightArea department={this.state.department} users={this.state.users}
                                   userNoteId={""} date={params.day} depId={params.depId}/>
        } else if (params.userNoteId) {
            rightArea = <RightArea department={this.state.department} users={this.state.users}
                                   userNoteId={params.userNoteId}/>
        }
        return (
            <div className="content">
                <LeftArea department={this.state.department} users={this.state.users}
                          setDateNow={this.setDateNow}/>
                {rightArea}
            </div>
        )
    }
});

