import yargs from 'yargs'

const args = yargs
  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })
  .option('noimg', {
    boolean: true,
    default: false,
    describe: 'noimg'
  })
  .argv

export default args
