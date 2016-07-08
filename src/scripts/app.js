import React from 'react'
import ReactDOM from 'react-dom'

function app() {

    var AppView = React.createClass({

        _subtractYear: function () {
            if (this.state.ticking === false) {
                var past = function () {
                    this.setState({
                        ticking: true,
                        currentYear: this.state.currentYear - 1,
                        pastButton: "YOU'VE GONE TO FAR!",
                    })
                }
                var boundPast = past.bind(this)
                this.intervalId = setInterval(boundPast, 500)
            }
            else {
                clearInterval(this.intervalId)
                this.setState({
                    ticking: false,
                    pastButton: "Go Back!"
                })
            }
        },
        _addYear: function () {
            if (this.state.ticking === false) {
                var future = function () {
                    this.setState({
                        ticking: true,
                        currentYear: this.state.currentYear + 1,
                        futureButton: "YOU'VE GONE TO FAR!",
                    })
                }
                var boundFuture = future.bind(this)
                this.intervalId = setInterval(boundFuture, 500)
            }
            else {
                clearInterval(this.intervalId)
                this.setState({
                    ticking: false,
                    futureButton: "Go Forward!",
                    pastButton: "Go Back!"
                })
            }
        },
        getInitialState: function() {
            var yr = parseInt(new Date().getFullYear())
             return {
                ticking: false,
                currentYear: yr,
                futureButton: "Go Forward!",
                pastButton: "Go Back!"

            }
        },
        render: function() {
            console.log(this)
            return (
                    <div className="mainContainer">
                        <p>{this.state.currentYear} </p>
                        <button onClick={this._subtractYear}>{this.state.pastButton}</button>
                        <button onClick={this._addYear}>{this.state.futureButton}</button>
                    </div>
                )
        }
    })


    ReactDOM.render(<AppView />, document.querySelector('.container'))
}

app()