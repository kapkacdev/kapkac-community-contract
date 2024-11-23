import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { KapkacCommunityContract } from '../wrappers/KapkacCommunityContract';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('KapkacCommunityContract', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('KapkacCommunityContract');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let kapkacCommunityContract: SandboxContract<KapkacCommunityContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        kapkacCommunityContract = blockchain.openContract(KapkacCommunityContract.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await kapkacCommunityContract.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: kapkacCommunityContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and kapkacCommunityContract are ready to use
    });
});
