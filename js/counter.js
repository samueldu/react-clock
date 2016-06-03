'use strict';

var TimerExample = React.createClass({
    displayName: 'TimerExample',

    getInitialState: function getInitialState() {
        return { elapsed: 0 };
    },

    componentDidMount: function componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    },

    stopCount: function stopCount()
    {
    	clearInterval(this.timer);

		return React.createElement(
        'p',
        null,
        'Contagem finalizada.');

    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.timer);
    },

    tick: function tick() {
        this.setState({ elapsed: this.state.elapsed + 1  });
    },

    restart: function restart() {
			this.setState(this.getInitialState());
    },

    render: function render() {

        var elapsed = (this.state.elapsed);
        var seconds = (elapsed);

        if(seconds >= 100)
        {
        	return this.stopCount();

        }
        else
        {

	        return React.createElement(
	            'p',
	            null,
	            'Já se passaram ',
	            React.createElement(
	                'b',
	                null,
	                seconds
	            ),
	            ' segundos.',

						React.createElement(
						"a",
						{
						onClick: this.restart
						},
						"Iniciar contagem"
						)
					
	        );
    	}

    }
});

ReactDOM.render(React.createElement(TimerExample), document.getElementById('timer'));