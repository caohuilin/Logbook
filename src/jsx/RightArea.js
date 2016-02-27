//RightArea组件
const RightArea = React.createClass({
    propTypes: {
        userNoteId: React.PropTypes.string.isRequired
    },
    render () {
        if (this.props.userNoteId === "") {
            return (
                <div className="rightArea">
                    <Dates {...this.props}/>
                    <Departments {...this.props}/>
                </div>
            );
        } else {
            return (
                <User {...this.props}/>
            );
        }
    }
});
