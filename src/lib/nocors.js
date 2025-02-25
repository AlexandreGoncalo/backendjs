export function allowCors(handler) {
    return async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'https://secondjs-mxvgm0rns-alexandregoncalos-projects.vercel.app'); // Origem permitida
        res.setHeader('Access-Control-Allow-Credentials', 'true'); // Corrigido
        res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        if (req.method === "OPTIONS") {
            return res.status(200).end(); // Responder imediatamente a requisições OPTIONS
        }

        return handler(req, res);
    };
}
