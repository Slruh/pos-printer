import { ThermalPrinter, PrinterTypes, CharacterSet } from 'node-thermal-printer';
import * as path from 'path';

const print = async (
    printer: ThermalPrinter,
    title: string,
    message?: string,
    money?: string
) => {
    printer.alignCenter();
    printer.setTextDoubleHeight();
    printer.setTextDoubleWidth();
    printer.bold(true)
    printer.println(title);
    printer.newLine();

    printer.setTextNormal();
    printer.drawLine();
    printer.newLine();

    if (money) {
        printer.bold(true);
        printer.println(`${money}`);
        printer.newLine();
    }

    if (message) {
        printer.bold(false);
        printer.println(message);
        printer.newLine();
    }
    printer.newLine();

    printer.drawLine();
    const imagePath = path.join(__dirname, 'assets/hello.png');
    await printer.printImage(imagePath);
    printer.newLine();

    printer.cut();
    return printer.execute();
}


(async function () {
    const args = process.argv.slice(2);
    const printerInterface = args[0] || 'printer:auto';
    const title = args[1] || 'Incoming Message';
    const message: string | undefined = args[2];
    const money: string | undefined = args[3];

    if (args.includes('-h')) {
        console.log(`
    Usage: node src/index.js [printerInterface] [title] [message] [money]
    Options:
      -h          Show this help message
        `);
        process.exit(0);
    }

    console.log('Printer Interface:', printerInterface);
    console.log('Title:', title);
    console.log('Message:', message);
    console.log('Money:', money);

    if (!printerInterface || !title) {
        console.error('Error: Printer interface and title are required.');
        process.exit(1);
    }

    let starPrinter = new ThermalPrinter({
        type: PrinterTypes.STAR,
        interface: printerInterface,
        characterSet: CharacterSet.PC852_LATIN2,
        driver: {},
    });

    await print(
        starPrinter,
        title,
        message,
        money,
    )
})();



