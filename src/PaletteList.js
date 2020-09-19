import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette'

class PaletteList extends Component{
  constructor(props){
    super(props);
    this.state = { }; 
  }

  render(){
    const { palettes } = this.props;
    return (
        <div className='PaletteList'>
          <MiniPalette />
          <h1>Palette LIst</h1>
          {palettes.map(palette => (
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          ))}
        </div>
    )
  }
}

export default PaletteList;