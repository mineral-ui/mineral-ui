import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-scroll-parallax';


export default class Rock extends Component {
  contextTypes:{
    parallaxController: PropTypes.object,
  }


  constructor( props ) {
    super( props );

    this.state = {
      scale: 0.02,
      left: 25,
      top: -25,
      opacity: 0,
      transition: 'all 500ms ease-in',
    }
  }


  componentDidMount = () => {

    const min = 5000;
    const max = 9000;
    const delay = Math.floor( Math.random() * ( max - min ) ) + min;

    setInterval( () => {
      this.setState({
        scale: 1,
        left: -25,
        top: 0,
        opacity: 0.5,
        transition: 'all 500ms ease-out',

      });
    }, delay );

    setInterval( () => {
      this.setState({
        scale: 0.2,
        left: -50,
        top: 50,
        opacity: 0,
        transition: 'all 200ms ease-in',
      });
    }, delay + 300 );

    setInterval( () => {
      setTimeout( () => {
        this.setState({
          scale: 0.2,
          left: -50,
          top: 50,
          opacity: 0,
          transition: 'all 200ms ease-in',
        });
      }, delay )
    }, delay + 20000 );

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
              <div className="shine" ref="shine" style={{
                borderRadius: '100%',
                opacity: this.state.opacity,
                position: 'absolute',
                width: this.props.size,
                height: this.props.size,
                top: this.state.top,
                left: this.state.left,
                transform: `scale( ${ this.state.scale } )`,
                transition: this.state.transition,
                background: 'radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
                }}></div>
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
};

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
