# POS Printer Project

This project provides a simple interface for printing text to a POS printer using the `node-thermal-printer` library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pos-printer-project.git
   ```

2. Navigate to the project directory:
   ```
   cd pos-printer-project
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

This is a command line application to print to a POS printer. Right now, only network printers are supported i.e. using 'tcp://' as the printerIdentifier. You can send a title (required) and optional message and money value. This is meant to be used in conjuction with a streaming software like Mixitup. 

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.