import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				// HTML entry points
				index: path.resolve(__dirname, 'index.html'),
				about: path.resolve(__dirname, 'pages/about.html'),
				contact: path.resolve(__dirname, 'pages/contact.html'),
				login: path.resolve(__dirname, 'pages/login.html'),
				signup: path.resolve(__dirname, 'pages/signup.html'),
				// Course Pages
				c: path.resolve(__dirname, 'pages/course/c.html'),
				web_development: path.resolve(__dirname, 'pages/course/web_development/web_develoment.html'),
				html: path.resolve(__dirname, 'pages/course/web_development/html.html'),
				css: path.resolve(__dirname, 'pages/course/web_development/css.html'),
				javascript: path.resolve(__dirname, 'pages/course/web_development/javascript.html'),
			}
		}
	}
});