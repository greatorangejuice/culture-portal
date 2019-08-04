import React from 'react';
import './Gallery.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Dialog } from '@material-ui/core';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Gallery extends React.Component {
  state = {
    open: false,
    currentImg: '',
  };

  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { imgData } = this.props.data;
    const content = (
      <GridList spacing={20} className="gallery-container">
        {imgData.map((tile) => (
          <GridListTile key={tile.img} cols={1} rows={1} className="grid-list">
            <img src={tile.img} alt={tile.title} onClick={() => this.handleOpen(tile.img)} onTouchStart={() => this.handleOpen(tile.img)} />
            <GridListTileBar title={tile.title} titlePosition="bottom" className="titleBar" />
          </GridListTile>
        ))}
      </GridList>
    );

    return (
      <div className="gallery-container">
        {content}
        <Dialog modal={false} open={this.state.open} onClose={this.handleClose}>
          <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
        </Dialog>
      </div>
    );
  }
}
export default Gallery;
