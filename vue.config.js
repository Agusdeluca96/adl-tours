module.exports = {
  outputDir: "dist",
  assetsDir: "assets",

  // PWA options
  pwa: {
    name: 'ADL Tours',
    themeColor: '#69d457',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'assets/images/icons/favicon-32x32.png',
      favicon16: 'assets/images/icons/favicon-16x16.png',
      appleTouchIcon: 'assets/images/icons/apple-touch-icon.png'
    }
  }
};
