import React from 'react';
import PropTypes from 'prop-types';
import Rock from './Rock';
import { ParallaxProvider } from 'react-scroll-parallax';

export default class Rocks extends React.Component {
  propTypes: {
    showRockPile: PropTypes.bool,
  }

  render() {
    return(
      <ParallaxProvider>
        <div className="Rocks" style={{
            height: 300,
            width: 300,
            position: 'relative',
            float: 'right'
          }}>
          { this.props.showRockPile && <Rock type="Rockpile" size={ 300 } /> }
          <Rock offsetYMax={ 400 } type="Ruby" size={ 75 } float position={ {left: 25, bottom: 310} } />
          <Rock offsetYMax={ 150 } type="Gold" size={ 75 } float position={ {left: 110, bottom: 220} } />
          <Rock offsetYMax={ 520 } type="Tourmaline" size={ 75 } float position={ {left: 190, bottom: 350} } />
        </div>
      </ParallaxProvider>
    );
  }
}
