
const hideMobile = {
    '@media only screen and (max-width: 600px)' : {
        display: 'none'
    }
}
const hideDesktop = {
    '@media only screen and (min-width: 601px)' : {
        display: 'none'
    }
}

const hideFromTablet = {
    '@media only screen and (max-width: 1024px)' : {
        display: 'none'
    }
}

export {hideDesktop, hideMobile, hideFromTablet}
