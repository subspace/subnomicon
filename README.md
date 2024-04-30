<img src="./static/img/subspace-network.svg" align="center" />

The [Subnomicon](https://subnomicon.subspace.network) is a knowledge base about the Subspace Protocol. Subnomicon provides a comprehensive overview of the current state of protocol, covering the following:

1. [Architecture Overview](/docs/overview.md) - *The Subspace modular architecture.*
2. [Advancing Blockchain](/docs/advancements.md) - *How Subspace advances the state of blockchain technology.*
3. [Consensus Mechanism](/docs/consensus) - *How Subspace achieves consensus through its storage-based design.*
4. [Network Architecture](/docs/network) - *How Subspace is structured as a decentralized network.*
5. [Decoupled Execution](/docs/decex) - *How Subspace separates consensus and computation.*

The information in the Subnomicon is kept up-to-date with the live state of the Subspace Protocol which may not represent the final desired state. Subnomicon's purpose is to serve as living documentation that grows and evolves with the protocol.

If you have any additions or corrections, please submit a pull request.

### Contributing

If you would like to contribute, please check out the following materials and feel free to ask questions in our [Discord](https://discord.gg/subspace-network)

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Development Guide](DEVELOPMENT.md)


### Setting Up Your Local Environment for Contribution

To ensure that your contributions include your name in the `last_update` section of documentation files automatically, follow these steps to set up your local environment:

#### Creating a `.env` File

1. At the root of your local repository clone, create a file named `.env`.
2. Inside the `.env` file, add the following line, replacing `"Your Name"` with your actual name:

```sh
AUTHOR_NAME="Your Name"
```

3. Save and close the `.env` file. This file will be used by the pre-commit hook to automatically insert your name into the `last_update` section of Markdown files.

#### Installing the Pre-commit Package

The pre-commit package is used to run scripts before each commit automatically, allowing us to update the documentation's `last_update` section seamlessly.

1. Install pre-commit on your system. If you're using pip (Python's package manager), you can install it by running:

```bash
pip install pre-commit
```

2. Make sure the update_last_update.sh script is present in the scripts/ directory at the root of your repository and is executable. You may need to run `chmod +x scripts/update_last_update.sh` to make it executable.

3. Run following command to set up the hook.
```bash
pre-commit install
```

With these steps completed, your local environment is set up to automatically update the last_update section of Markdown files with your name and the current date whenever you make a commit. This process helps maintain accurate documentation and attribution for contributions.

