//LeftArea组件
const LeftArea = React.createClass({
    render() {
        return (
            <div className="leftArea">
                <Calender {...this.props} />
                <Caption {...this.props} />
            </div>
        );
    }
});
