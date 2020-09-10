module.exports = {
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
          productName: "nra-grapher",
          appId: "com.saikawa-studio.nra-grapher",
          mac: {
            icon: 'src/assets/logo.png',
          },
          win: {
            icon: 'src/assets/logo.png',
            target: [
              {
                target: 'portable', // 'zip', 'nsis', 'portable'
                arch: ['x64'] // 'x64', 'ia32'
              }
            ]
          },
        },
        nodeIntegration: true
      }
    },
    devServer: {
      compress: true,
      disableHostCheck: true,
    },
  }