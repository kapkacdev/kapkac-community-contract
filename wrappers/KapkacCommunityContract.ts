import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core';

export type KapkacCommunityContractConfig = {};

export function kapkacCommunityContractConfigToCell(config: KapkacCommunityContractConfig): Cell {
    return beginCell().endCell();
}

export class KapkacCommunityContract implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new KapkacCommunityContract(address);
    }

    static createFromConfig(config: KapkacCommunityContractConfig, code: Cell, workchain = 0) {
        const data = kapkacCommunityContractConfigToCell(config);
        const init = { code, data };
        return new KapkacCommunityContract(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
