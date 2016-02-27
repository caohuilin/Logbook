//日历组件
const Calender = React.createClass({
    propTypes: {
        setDateNow: React.PropTypes.func.isRequired
    },
    componentDidMount () {
        var cal = this.cal = $("<div class=\"date\"/>");
        cal.datepicker({
            format: 'yyyy-mm-dd',
            todayHighlight: true
        });
        cal.on("changeDate", ()=> {
            var date = cal.datepicker('getFormattedDate');
            this.props.setDateNow(date);
        });
        var node = ReactDOM.findDOMNode(this);
        $(node).append(cal);
    },
    render () {
        return ( <div/>)
    }
});
