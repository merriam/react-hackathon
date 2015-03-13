// GLOBAL STYLE ALL THE THINGS
require('./styles.less');

var React = require('react'),
    { tick } = require('./gameloop'),
    GameBoard = require('./components/gameboard.jsx'),

    Application = React.createClass({
        displayName: 'Application',
        render: function() {
            return (
                <div className="application">
                    <GameBoard width={448} height={416}/>
                </div>
            );
        }
});


// This is a pretty terrible to do here but for the sake of time this is how I'm rolling.
function update() {
    tick();
    //setTimeout(()=>{tick();}, 10);
};

update();

React.render(<Application />, document.getElementById('content'));
