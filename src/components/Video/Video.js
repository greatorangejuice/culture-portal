import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './Video.css';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function Video({ data: { youTubeVideoId, id }, width, height}) {
    const url = `https://www.youtube.com/embed/${youTubeVideoId}`;
    const [state, setState] = useState({ modalVisible: false, videoLoaded: false });
    const openModal = () => {
        setState({ modalVisible: true })
    };
    const closeModal = () => {
        setState({ modalVisible: false, videoLoaded: false });
    };
    const { modalVisible, videoLoaded } = state;

    return (
        <Fragment>
            <Button
            variant="contained"
                onClick={openModal}
            >
                Посмотреть видео
            </Button>
            <Modal
                open={modalVisible}
                onClose={closeModal}
                style={{
                    opacity: videoLoaded ? 1 : 0,
                }}
            >
                <iframe
                    onLoad={() => {
                        console.log('Video loaded');
                        setState({
                            modalVisible: true,
                            videoLoaded: true
                        });
                    }}
                    title={id}
                    className="video"
                    src={url}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    width={width}
                    height={height}
                />
            </Modal>
        </Fragment>
    );
}

Video.propTypes = {
    data: PropTypes.shape({
        youTubeVideoId: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

Video.defaultProps = {
    width: 560,
    height: 315,
};

export default Video;
