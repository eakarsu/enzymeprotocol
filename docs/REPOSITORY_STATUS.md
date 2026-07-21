# Repository status and maintenance policy

## Decision

This repository is retained as a **historical reference fork**. It is not an independently supported application, package release source, or smart-contract deployment source. No end-user product boundary is defined here.

The supported activity is limited to source inspection, local compilation, and historical test reproduction. Package publishing, public-network deployment, and production use are deliberately blocked. If an application is wanted, extract only reviewed interfaces or contracts into a separately owned repository with its own entry point, configuration contract, threat model, tests, and release process.

The machine-readable record is [`repository-policy.json`](../repository-policy.json), enforced by `yarn policy:check` and `yarn policy:test`.

## Provenance and version

- Upstream project: Enzyme Protocol, <https://github.com/enzymefinance/protocol>
- Fork repository: <https://github.com/eakarsu/enzymeprotocol>
- Upstream-derived base: commit `fec37a7e` (the last upstream-authored commit before this fork's 20 local commits)
- Retained local baseline: commit `2402153a69c8a9c24284f9011df79fdf5e5fbcfb`
- Historical branch: `v4`
- Package snapshots: `@enzymefinance/protocol@4.0.0-next.4` and `@enzymefinance/testutils@4.0.0-next.3`
- Solidity toolchain: 0.7.6 and 0.6.12; the lockfile records Hardhat 2.6.8 and the original Node 16-era dependency set

This is a modified downstream fork, not an official current Enzyme release. Generated artifacts committed after the source changes are historical outputs, not independently attested release binaries.

## License and audit material

The repository contains the GNU General Public License version 3 in [`LICENSE`](../LICENSE). The protocol package also declares `GPL-3.0`. Anyone extracting or distributing covered code is responsible for complying with that license and preserving notices and corresponding source obligations.

The PDFs in [`audits/`](../audits) are retained upstream audit material. Their SHA-256 hashes are recorded and checked in `repository-policy.json`. Those reports predate some or all local changes and do not certify this fork.

## Ownership and security responsibility

The repository owner (`eakarsu`) owns classification, access control, local-fork changes, dependency review, and security-patch decisions for this retained copy. The upstream Enzyme security team remains responsible only for the upstream project under its own current reporting policy.

There is no standing promise of runtime, dependency, or security support for this snapshot. Before any code is reused, the extracting product owner must:

1. compare the code with the current supported upstream release;
2. review all 20 local commits after `fec37a7e`;
3. review current upstream security advisories and dependency vulnerabilities;
4. rerun compilation, tests, static analysis, and an independent contract-security review; and
5. accept maintenance and incident-response ownership in the destination repository.

## Update strategy

No automatic merge or dependency-update strategy is appropriate for a frozen reference. The repository owner should review its classification and access controls annually, and immediately when a critical upstream vulnerability may affect code being considered for reuse. Upstream changes are evaluated manually; they are not merged into this fork. If the snapshot is no longer needed, archive it read-only.

## Configuration and operational boundaries

- `.env.example` contains names only; secrets and private RPC URLs must never be committed.
- The Hardhat network retains the standard public test mnemonic only for ephemeral local execution.
- Kovan is retired and unsupported.
- `mainnet` and `kovan` are rejected by the Hardhat configuration even when invoked directly.
- Root deploy, export, verify, and release scripts fail closed with a reference-only explanation.
- Localhost use is for reproducibility only and must use accounts supplied by the local node.

These controls prevent accidental operation; they are not a claim that the contract code is secure.
