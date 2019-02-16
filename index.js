const { PATH, CODE_LOCATION } = process.env

const BIN = 'node_modules/pdftk-gcf/bin'

process.env.PATH = `${PATH}:${CODE_LOCATION}/${BIN}`
process.env.LD_LIBRARY_PATH = `${CODE_LOCATION}/${BIN}`
process.env.PKG_CONFIG_PATH = `${CODE_LOCATION}/${BIN}`

module.exports.version = () => {
  return new Promise((resolve, reject) => {
    require('child_process').exec(
      'pdftk --version',
      (error, stdout, stderr) => {
        if (error) reject(error)
        else resolve(stdout)
      }
    )
  })
}
