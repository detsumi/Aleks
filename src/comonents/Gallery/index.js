import React from 'react';
import GalleryComponent from './GalleryComponent';
import './style.css';

export default function Gallery() {
    return (
        <>
            <header>
                    <h1>Gallery</h1>
            </header>
            <main>
                    <GalleryComponent />
            </main>
            <footer>
                    <i>Simple gallery on ReactJS</i>
            </footer>
        </>
    );
}
