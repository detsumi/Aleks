import React from 'react';
import galleryFetcher from '../../utils/galleryFetcher';
import './style.css';

export default class GalleryComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            photos: [],
            total: null,
            nextPage: null,
            prevPage: null
        }
        this.inputHTML = React.createRef();
    }
    browse = e => {
        e.preventDefault();
        const {value} = this.inputHTML.current;

        if(value) {
            galleryFetcher.getPhotos(value)
            .then(this.updateGallery);
        }   
    }

    browseNextPage =() => {
        galleryFetcher.configureRequest(this.state.nextPage)
        .then(this.updateGallery);
    }

    browsePrevPage =() => {
        galleryFetcher.configureRequestForPrev(this.state.prevPage)
        .then(this.updateGallery);
    }

    updateGallery = data => {
        this.setState({
            photos: data.photos,
            total: data.total_results,
            nextPage: data.next_page,
            prevPage: data.prev_page
        })
    }

    renderImage = photo => {
        return(
            <li key={photo.url}>
                <img style={{width:'200px'}} src={photo.src.medium} alt=""/>
            </li>
        )
    }

    render() {
        return(
            <div>
                <form onSubmit={this.browse}>
                    <div>
                        <label>
                            <input placeholder=' Image name' ref={this.inputHTML} type="search"/>
                        </label>
                    </div>
                    {this.state.prevPage && <button type='button' onClick={this.browsePrevPage}> Previous </button>}
                    <button type='submit'>Browse</button>
                    {this.state.nextPage && <button type='button' onClick={this.browseNextPage}> Next </button>}
                </form>
                {this.state.total && <div>
                    Total: {this.state.total}
                    </div>}
                <ul>
                    {this.state.photos.map(this.renderImage)}
                </ul>
            </div>
        );
    }
}