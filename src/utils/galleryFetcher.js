const auth = '563492ad6f917000010000014a07430d431d46f2bf9395680266d154';

class GalleryFetcher {
    static url = 'https://api.pexels.com/v1';
    constructor(auth_key){
        this.auth_key = auth_key;
    }
    
    configureRequest (url) {
        const headers = new Headers({
            Authorization: this.auth_key
        });

        return fetch(url, {headers})
            .then(response => response.json())
    }
    configureRequestForPrev (url) {
        const headers2 = new Headers({
            Authorization: this.auth_key
        });

        return fetch(url, {headers2})
            .then(response => response.json())
    }

    getPhotos(query){
        const url = `${GalleryFetcher.url}/search?query=${encodeURIComponent(query)}&per_page=10&page=1`;

        return this.configureRequest(url);
    }
}

export default new GalleryFetcher(auth);