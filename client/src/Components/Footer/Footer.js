import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <footer className="footerWrapper">
            <div className="footerContainer">
                <div className="disclaimer">
                    handa made this and how much do you like it.<br/>
                    Cuckoo is fully Open Source and does not store any data on its servers.
                </div>
                <div className="self">
                    Made with <span role='img' aria-label='heart-emoji'>❤️</span> in America by <a href="Handa" target="_blank" rel="noopener noreferrer">Handa Feleke</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer
