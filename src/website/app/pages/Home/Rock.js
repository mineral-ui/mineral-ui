import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';


export default class Rock extends Component {
  contextTypes:{
    parallaxController: PropTypes.object,
  }

  render(){
    const imgSrc = `/public/images/rocks/SVG/${ this.props.type }.svg`;

    if( this.props.float ) {
      return(
        <div className="Rock"
          style={{
            position: 'absolute',
            bottom: this.props.float ? this.props.position.bottom : 0,
            left: this.props.position ? this.props.position.left : 0,
          }}
          >
          <Parallax
            offsetYMax={ this.props.offsetYMax }
            offsetYMin={ 0 }
            offsetXMax={ 0 }
            offsetXMin={ 0 }
            disabed={ !this.props.float }
            >
              <img src={ imgSrc } style={ {
                width: this.props.size,
                height: 'auto'
              }} />
          </Parallax>
        </div>

      );
    } else {
      return(
        <img src={ imgSrc } style={ {
          width: this.props.size,
          height: 'auto',
          position: 'absolute',
          bottom: this.props.float ? this.props.position.bottom : 0,
          left: this.props.position ? this.props.position.left : 0,
        }
      } />
      );
    }

  }
}

Rock.propTypes = {
  type: PropTypes.oneOf( [ 'Ruby', 'Tourmaline', 'Gold', 'Rockpile' ] ),
  size: PropTypes.number,
  float: PropTypes.bool,
}

Rock.defaultProps = {
  type: 'Gold',
  size: 25,
  float: false,
}
