'use strict';

const e = React.createElement;

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tested: false };
  }

  render() {
    if (this.state.tested) {
      return 'You tested this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ tested: true }) },
      'test'
    );
  }
}

const domContainer = document.querySelector('#test_button_container');
ReactDOM.render(e(TestButton), domContainer);