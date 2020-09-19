import React, {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = { level : 500, format: 'hex' }
  }

  changeFormat= (value) =>{
    this.setState({ format: value })
  }

  changeLevel = (newLevel) =>{
    this.setState({level: newLevel})
  }

  render(){
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name}/>
    ))
    return (
      <div className='Palette'>
        <Navbar level={level} 
                changeLevel={this.changeLevel} 
                handleChange={this.changeFormat}
                />
        <div className='palette-Colors'>
          {colorBoxes}
        </div>
        <div>
          {/* Footer */}
        </div>
      </div>
    )
  }
}

export default Palette;
