import { toNano } from '@ton/core';
import { KapkacCommunityContract } from '../wrappers/KapkacCommunityContract';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const kapkacCommunityContract = provider.open(KapkacCommunityContract.createFromConfig({}, await compile('KapkacCommunityContract')));

    await kapkacCommunityContract.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(kapkacCommunityContract.address);

    // run methods on `kapkacCommunityContract`
}
