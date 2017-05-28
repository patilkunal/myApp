//script to start MOCK REST API server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('agents.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.rewriter({
    '/agents/:agentid/sendtemplates' : '/sendtemplates?agentId=:agentid',
    '/agents/:agentid/sendtemplates/:id' : '/sendtemplates/:id?agentId=:agentid',
}))
server.use(middlewares)
server.use('/rest', router);

server.listen(8080, () => {
    console.log("JSON Server is running")
})
