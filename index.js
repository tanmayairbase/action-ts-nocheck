const core = require('@actions/core');
const glob = require('@actions/glob');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const patterns = ['**/tar.gz', '**/tar.bz']
    const globber = await glob.create(patterns.join('\n'))
    const files = await globber.glob()
    console.log(files);

    // const ms = core.getInput('milliseconds');
    // core.info(`Waiting ${ms} milliseconds ...`);

    // core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    // await wait(parseInt(ms));
    // core.info((new Date()).toTimeString());

    // core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
