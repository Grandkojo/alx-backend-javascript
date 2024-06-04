const proc = require('process');

const app = ((proc) => {
	proc.stdin.setEncoding('utf-8');
	proc.stdout.write('Welcome to Holberton School, what is your name?\n');
	proc.stdin.on('readable', () => {
		const chunk = proc.stdin.read();
		if (chunk) { proc.stdout.write(`Your name is: ${chunk}`); }
	});
	proc.stdin.on('end', () => {
		proc.stdout.write('This important software is now closing\n');
	});
})(proc);

module.exports = app;
