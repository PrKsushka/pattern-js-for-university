class Server{
	constructor(ip,port){
		this.ip=ip;
		this.port=port;
	}
	get url(){
		return `https://${this.ip}:${this.port}`
	}
}
function decoratorGoogleCloudPlatform(server){
	server.isServer=true;
	server.googleCloudPerformInfo=function(){
		return server.url;
	}
	return server
}
function azureServer(server){
	server.isServer=true;
	server.port+=500;
	return server
}
let firstServer=decoratorGoogleCloudPlatform(new Server('12.34.67.89',8080));
console.log(firstServer);
console.log(firstServer.url);

let secondServer=azureServer(new Server('23.57.97.54',8080));
console.log(secondServer.url);