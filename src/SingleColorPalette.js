import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from './PaletteFooter';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteStyles'


class SingleColorPalette extends Component {
  constructor(props){
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {format: 'hex'}
  }

  gatherShades = (palette, colorToFilterBy) =>{
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1)
  }

  changeFormat= (value) =>{
    this.setState({ format: value })
  }

  render(){
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette
    const { classes } = this.props;
    const colorBoxes = this._shades.map(color => (
      <ColorBox 
          key={color.name} 
          name={color.name} 
          background={color[format]}
          showLink={false}
          />
    ))
    return(
      <div className={classes.Palette}>
        <Navbar 
          handleChange={this.changeFormat}
          showingAllColors={false}
        />
        <div className={classes.colors}>
        {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`} className={classes.goBack}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter 
            paletteName={paletteName}
            emoji={emoji}
          />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette);